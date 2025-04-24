import React, { useState, useCallback, useRef } from 'react';
import { Table, Form, InputNumber, Button, Card, Progress, ConfigProvider } from 'antd';
import type { TableColumnsType } from 'antd';
import { RestatementPipeline } from './RestatementPipeline';
import MenuBar from '../commonElement/menuBar';
import THEME from '@src/style/theme';

// Pipeline接口定义
export interface TestPipeline {
  test: (content: string) => Promise<string[]>;
}

// 默认的Pipeline实现
const DefaultPipeline: TestPipeline = new RestatementPipeline();

// 测试数据接口
interface TestItem {
  content: string;
  candidateTypes: string[];
}

// 测试结果接口
interface TestResult {
  content: string;
  index: number;
  expectedAnswer: string[];
  testAnswer: string[];
  isCorrect: boolean;
}

// 测试配置接口
interface TestConfig {
  concurrency: number;
  interval: number;
  startIndex: number;
  endIndex: number;
}

const AnnotatorTest: React.FC = () => {
  // 重测状态管理
  const [retestingItems, setRetestingItems] = useState<Set<string>>(new Set());
  // 状态管理
  const [testData, setTestData] = useState<TestItem[]>([]);
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isTesting, setIsTesting] = useState(false);
  const pausedRef = useRef(false);
  const isTestingRef = useRef(false);
  const currentIndexRef = useRef(0);
  const [pipeline, setPipeline] = useState<TestPipeline>(DefaultPipeline);
  const [config, setConfig] = useState<TestConfig>({
    concurrency: 20,
    interval: 1000*12,
    startIndex: 0,
    endIndex: 39
  });

  // 当测试数据加载完成后更新endIndex
  React.useEffect(() => {
    if (testData.length > 0) {
      setConfig(prev => ({
        ...prev,
        endIndex: Math.min(prev.endIndex, testData.length - 1)
      }));
    }
  }, [testData]);

  // 加载测试数据
  React.useEffect(() => {
    const loadTestData = async () => {
      try {
        console.log('正在加载测试数据喵...');
        const response = await fetch(import.meta.env.BASE_URL + 'static/test/annotator.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // console.log('加载到的测试数据:', data);
        // 只加载cadidateTypes不为["noType"]的测试数据
        const filteredData = data.filter((item: TestItem) => !item.candidateTypes.includes('noType'));
        setTestData(filteredData);
      } catch (error) {
        console.error('加载测试数据失败:', error);
        if (error instanceof Error) {
          alert(`加载数据失败喵！原因: ${error.message}`);
        } else {
          alert('加载数据时发生未知错误喵！');
        }
      }
    };
    
    loadTestData();
  }, []);

  // 计算统计信息
  const calculateStats = useCallback(() => {
    if (testResults.length === 0) return { totalAccuracy: 0, pageAccuracy: {} };
    
    const correctCount = testResults.filter(r => r.isCorrect).length;
    const totalAccuracy = (correctCount / testResults.length) * 100;
    
    // 计算每页正确率 (假设每页10条)
    const pageAccuracy: Record<number, number> = {};
    const pageSize = 10;
    for (let i = 0; i < testResults.length; i += pageSize) {
      const pageResults = testResults.slice(i, i + pageSize);
      const pageCorrect = pageResults.filter(r => r.isCorrect).length;
      pageAccuracy[Math.floor(i / pageSize) + 1] = (pageCorrect / pageResults.length) * 100;
    }

    return { totalAccuracy, pageAccuracy };
  }, [testResults]);

  // 使用 RestatementPipeline 的测试方法
  const testItem = async (item: TestItem, index: number): Promise<TestResult> => {
    const pipeline = new RestatementPipeline();
    const testResult = await pipeline.testWithValidation(item.content, item.candidateTypes);
    
    return {
      content: item.content,
      index: index,
      expectedAnswer: item.candidateTypes,
      testAnswer: testResult.types,
      isCorrect: testResult.isCorrect
    };
  };

  // 表格列定义
  const columns: TableColumnsType<TestItem> = [
    {
      title: '序号',
      key: 'index',
      width: '10%',
      render: (_: any, _record: TestItem, index: number) => {
        return testData.indexOf(_record) + 1;
      },
    },
    {
      title: '内容',
      dataIndex: 'content',
      key: 'content',
      width: '15%',
      ellipsis: true,
    },
    {
      title: '正确答案',
      dataIndex: 'candidateTypes',
      key: 'candidateTypes',
      width: '30%',
      render: (types: string[]) => types.join(', '),
    },
    {
      title: '测试答案',
      key: 'testAnswer',
      width: '30%',
      render: (_: any, record: TestItem) => {
        const result = testResults.find(r => r.content === record.content);
        return result ? result.testAnswer.join(', ') : '-';
      },
    },
    {
      title: '是否正确',
      key: 'isCorrect',
      width: '15%',
      render: (_: any, record: TestItem) => {
        const result = testResults.find(r => r.content === record.content);
        if (!result) return <span style={{ color: '#1890ff' }}>待测试</span>;
        return result.isCorrect ? <span style={{ color: '#52c41a' }}>✅ 正确</span> : <span style={{ color: '#f5222d' }}>❌ 错误</span>;
      },
    },
    {
      title: '操作',
      key: 'actions',
      width: '100px',
      render: (_: any, record: TestItem) => {
        const isRetesting = retestingItems.has(record.content);
        return (
          <Button
            size="small"
            onClick={async () => {
              if (isRetesting) return;
              setRetestingItems(prev => new Set(prev).add(record.content));
              try {
                const result = await testItem(record, testData.indexOf(record));
                setTestResults(prev => [
                  ...prev.filter(r => r.content !== record.content),
                  result
                ]);
              } finally {
                setRetestingItems(prev => {
                  const newSet = new Set(prev);
                  newSet.delete(record.content);
                  return newSet;
                });
              }
            }}
            loading={isRetesting}
          >
            {isRetesting ? '测试中' : '重测'}
          </Button>
        );
      },
    }
  ];

  // 批量测试方法
  const runTest = async (startFromIndex?: number) => {
    if (testData.length === 0) {
      alert('还没有加载到测试数据喵！请稍等~');
      return;
    }

    isTestingRef.current = true;

    if (!startFromIndex) {
      setIsTesting(true);
      isTestingRef.current = true;
      setPaused(false);
      pausedRef.current = false;
      setProgress(0);
      currentIndexRef.current = config.startIndex;
    }
    
    setLoading(true);
    
    if (startFromIndex !== undefined) {
      currentIndexRef.current = startFromIndex;
      const currentProgress = (startFromIndex - config.startIndex) / (config.endIndex - config.startIndex + 1) * 100;
      setProgress(Math.min(100, Math.round(currentProgress)));
    } else {
      currentIndexRef.current = config.startIndex;
      setProgress(0);
    }

    try {
      const targetData = testData.slice(config.startIndex, config.endIndex + 1);
      let currentResults = [...testResults];

      for (
        let i = currentIndexRef.current - config.startIndex;
        i < targetData.length && isTestingRef.current;
        i += config.concurrency
      ) {
        if (pausedRef.current) {
          setLoading(true);
          break;
        }
        if (!isTestingRef.current) {
          console.log('测试已终止');
          break;
        }

        const batch = targetData.slice(i, i + config.concurrency);
        const batchPromises = batch.map(async (item, batchIndex) => {
          return testItem(item, config.startIndex + i + batchIndex);
        });

        const batchResults = await Promise.all(batchPromises);
        
        currentResults = [
          ...currentResults.filter(r => !batchResults.some(br => br.content === r.content)),
          ...batchResults
        ];
        setTestResults(currentResults);

        currentIndexRef.current = config.startIndex + i + config.concurrency;
        setProgress(Math.min(100, Math.round((i + config.concurrency) / targetData.length * 100)));

        if (i + config.concurrency < targetData.length && isTesting && !pausedRef.current) {
          await new Promise(resolve => setTimeout(resolve, config.interval));
        }
      }

      if (isTestingRef.current && !pausedRef.current) {
        setProgress(100);
        setLoading(false);
        setIsTesting(false);
        isTestingRef.current = false;
      }
    } catch (error) {
      console.error('测试执行失败:', error);
      if (error instanceof Error) {
        alert(`测试执行失败喵！原因: ${error.message}`);
      } else {
        alert('测试时发生未知错误喵！');
      }
      setPaused(false);
      pausedRef.current = false;
      setIsTesting(false);
      isTestingRef.current = false;
      currentIndexRef.current = config.startIndex;
      setProgress(0);
      setLoading(false);
    }
  };

  // 统计信息
  const stats = calculateStats();

  return (
    <>
      <ConfigProvider theme={THEME}>
        <MenuBar />
      </ConfigProvider>
      <div style={{ padding: 32 }}>
        <Card title="测试配置" style={{ marginBottom: 32 }}>
          <Form layout="inline">
            <Form.Item label="并发数">
              <InputNumber
                min={1}
                max={20}
                value={config.concurrency}
                onChange={val => setConfig({ ...config, concurrency: val || 1 })}
              />
            </Form.Item>
            <Form.Item label="间隔(ms)">
              <InputNumber
                min={0}
                value={config.interval}
                onChange={val => setConfig({ ...config, interval: val || 0 })}
              />
            </Form.Item>
            <Form.Item label="起始索引">
              <InputNumber
                min={0}
                value={config.startIndex}
                onChange={val => setConfig({ ...config, startIndex: val || 0 })}
              />
            </Form.Item>
            <Form.Item label="结束索引">
              <InputNumber
                min={0}
                value={config.endIndex}
                onChange={val => setConfig({ ...config, endIndex: val || 0 })}
              />
            </Form.Item>
            <Form.Item>
              {loading ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <Button
                      type="primary"
                      danger
                      onClick={() => {
                        setPaused(true);
                        pausedRef.current = true;
                      }}
                      disabled={paused}
                    >
                      暂停测试
                    </Button>
                    <Button
                      type="primary"
                      onClick={() => {
                        setPaused(false);
                        pausedRef.current = false;
                        runTest(currentIndexRef.current);
                      }}
                      disabled={!paused}
                    >
                      继续测试
                    </Button>
                    <Button
                      onClick={() => {
                        setPaused(false);
                        pausedRef.current = false;
                        setLoading(false);
                        setIsTesting(false);
                        isTestingRef.current = false;
                        currentIndexRef.current = config.startIndex;
                        setProgress(0);
                      }}
                      danger
                    >
                      终止测试
                    </Button>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Progress
                      percent={progress}
                      size="small"
                      status={paused ? "exception" : "active"}
                      style={{ width: 150 }}
                    />
                    <span style={{ fontSize: '12px', color: '#666' }}>
                      {progress}%
                    </span>
                  </div>
                </div>
              ) : (
                <Button type="primary" onClick={() => {
                  setIsTesting(true);
                  isTestingRef.current = true;
                  setPaused(false);
                  pausedRef.current = false;
                  runTest();
                }}>
                  开始测试
                </Button>
              )}
            </Form.Item>
          </Form>
        </Card>

        <Card title="统计信息" style={{ marginBottom: 32 }}>
          <div style={{ marginBottom: 24 }}>
            <h4>总体正确率</h4>
            <Progress percent={Math.round(stats.totalAccuracy)} />
          </div>
          <div>
            <h4>每页正确率</h4>
            <div style={{
              display: 'flex',
              gap: 4,
              height: 120,
              alignItems: 'flex-end',
              padding: '16px 0',
              borderBottom: '1px solid #f0f0f0'
            }}>
              {Object.entries(stats.pageAccuracy).map(([page, accuracy]) => {
                const pageResults = testResults.filter(r =>
                  Math.floor(r.index / 10) + 1 === Number(page)
                );
                const correctCount = pageResults.filter(r => r.isCorrect).length;
                const totalCount = pageResults.length;
                
                return (
                  <div
                    key={page}
                    style={{
                      width: 24,
                      height: `${accuracy}%`,
                      background: '#52c41a',
                      borderRadius: '3px 3px 0 0',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      position: 'relative'
                    }}
                    title={`第 ${page} 页：${correctCount}/${totalCount} (${Math.round(accuracy)}%)`}
                    onMouseEnter={(e) => {
                      const target = e.currentTarget;
                      target.style.opacity = '0.85';
                      target.style.transform = 'scaleY(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.currentTarget;
                      target.style.opacity = '1';
                      target.style.transform = 'scaleY(1)';
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: -20,
                      width: '100%',
                      textAlign: 'center',
                      fontSize: '12px',
                      color: '#666'
                    }}>
                      {page}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>

        <Table
          columns={columns as TableColumnsType<any>}
          dataSource={testData}
          rowKey={(record) => testData.indexOf(record)}
          pagination={{
            pageSize: 10,
            showTotal: (total, range) => `${range[0]}-${range[1]} 条，共 ${total} 条`
          }}
          scroll={{ y: 680 }}
          style={{ height: 720 }}
          bordered
        />
      </div>
    </>
  );
};

export default AnnotatorTest;