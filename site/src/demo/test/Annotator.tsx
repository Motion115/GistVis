import React, { useState, useEffect, useRef, useReducer } from 'react';
import {
  Layout,
  Flex,
  Button,
  Typography,
  ConfigProvider,
  Card,
  Table,
  Pagination,
  Input,
  Space,
  Tag,
  Select,
  message,
  Progress,
} from 'antd';
import THEME from '../../style/theme';
import MenuBar from '../commonElement/menuBar';
import { SearchOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { ChatOpenAI, ChatOpenAICallOptions } from '@langchain/openai';
import { ExtractorSystemInstruction, SystemInstruction } from '../../modules/llm/visKB';
import { Attribute, InsightType } from '../../modules/visualizer/types';
import { ExtractorType, GistFactTypeAnnotation } from '../../modules/llm/types';

import { processParagraphs } from '../../modules/llm/annotator/annotator';

// 定义接口类型
interface AnnotatorData {
  id?: string;
  content: string;
  candidateTypes: string[];
  expectedRes: string;
  testRes?: string;
  check?: boolean | '';
}

const AnnotatorTest: React.FC = (testData) => {
  const [_, forceUpdate] = useReducer((x) => x + 1, 0); // 添加 forceUpdate 函数
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [processedData, setProcessedData] = useState<AnnotatorData[]>([]);
  const [loading, setLoading] = useState(false);
  const progress = useRef(0);
  const setProgress = (value: number) => {
    progress.current = value;
    // force update
    forceUpdate();
  };
  const finishCount = useRef(0);
  const setFinishCount = (value: number) => {
    finishCount.current = value;
    // force update
    forceUpdate();
  };
  const stoppingRef = useRef(false);
  const pageSize = 10;
  const getAccuracy = () => {
    if (processedData.length === 0 || finishCount.current === 0) return 0;

    const testedData = processedData.slice(0, finishCount.current);
    const correctCount = testedData.filter((item) => item.check === true).length;
    return Math.round((correctCount / testedData.length) * 100);
  };

  // 处理原始数据，转换为所需格式
  useEffect(() => {
    // 假设testData是原始数据，需要转换为AnnotatorData格式
    const transformed = testData.map((item: any, index) => {
      // 这里根据实际数据结构进行适当转换
      // 如果原始数据已经符合AnnotatorData接口，可能不需要转换
      const expectedRes = item.expectedRes || item.candidateTypes[0] || '';
      const testRes = item.testRes || '';
      return {
        id: item.id || `item-${index}`,
        content: item.content || '',
        candidateTypes: item.candidateTypes || [],
        expectedRes: expectedRes,
        testRes: testRes,
        check: testRes && expectedRes && JSON.stringify(testRes) === JSON.stringify(expectedRes),
      } as AnnotatorData;
    });
    setProcessedData(transformed);
  }, []);

  // 更新期望结果
  const updateExpectedRes = (id: string, newValue: string) => {
    const updatedData = processedData.map((item) => {
      if (item.id === id) {
        const updated = {
          ...item,
          expectedRes: newValue,
        };
        // 重新计算检查结果
        updated.check =
          updated.testRes &&
          updated.expectedRes &&
          JSON.stringify(updated.testRes) === JSON.stringify(updated.expectedRes);
        return updated;
      }
      return item;
    });
    setProcessedData(updatedData);
  };

  // 更新测试结果
  const updateTestRes = (id: string, newValue: string) => {
    const updatedData = processedData.map((item) => {
      if (item.id === id) {
        const updated = {
          ...item,
          testRes: newValue,
        };
        // 重新计算检查结果
        updated.check =
          updated.testRes &&
          updated.expectedRes &&
          JSON.stringify(updated.testRes) === JSON.stringify(updated.expectedRes);
        return updated;
      }
      return item;
    });
    setProcessedData(updatedData);
  };

  const model = new ChatOpenAI({
    temperature: 0.7,
    topP: 1,
    n: 1,
    streaming: false,
    openAIApiKey:
      JSON.parse(localStorage.getItem('envVariables') || '{}')?.VITE_LLM_API_KEY ||
      import.meta.env.VITE_LLM_API_KEY ||
      '',
    modelName:
      JSON.parse(localStorage.getItem('envVariables') || '{}')?.VITE_LLM_MODEL_NAME ||
      import.meta.env.VITE_LLM_MODEL_NAME ||
      '',
    configuration: {
      apiKey:
        JSON.parse(localStorage.getItem('envVariables') || '{}')?.VITE_LLM_API_KEY ||
        import.meta.env.VITE_LLM_API_KEY ||
        '',
      baseURL:
        JSON.parse(localStorage.getItem('envVariables') || '{}')?.VITE_LLM_URL_BASE ||
        import.meta.env.VITE_LLM_URL_BASE ||
        '',
    },
    verbose: false,
  });
  const runSingleTest = async (data: AnnotatorData) => {
    const res = await processParagraphs(
      [
        {
          paragraphIdx: 0,
          paragraphContent: [
            {
              id: '0',
              unitSegmentSpec: {
                segmentIdx: 0,
                context: data.content,
                insightType: 'noType',
              },
            },
          ],
        },
      ],
      model
    );
    const type = res[0].paragraphContent[0].unitSegmentSpec.insightType;
    return { ...data, testRes: type, check: type === data.expectedRes };
  };

  // 运行所有测试
  const runAllTests = async (start: number = 0) => {
    setLoading(true);
    if (start == 0) {
      setProgress(0); // 重置进度
      setFinishCount(0); // 重置完成数
    }

    // 创建一个新数组存储更新后的数据
    const newData = [...processedData];
    const totalItems = newData.length;

    const max = 100;
    // 依次处理每个测试项
    for (let i = start; i < totalItems && i < max; i++) {
      if (stoppingRef.current) {
        break;
      }
      const item = newData[i];

      // 使用 Promise 模拟阻塞式运行单个测试
      await new Promise<void>((resolve) => {
        setTimeout(async () => {
          const test = false;
          if (test) {
            // 模拟单个测试的结果
            const randomIndex = Math.floor(Math.random() * item.candidateTypes.length);
            const testRes = item.candidateTypes[randomIndex];

            // 更新当前项
            newData[i] = {
              ...item,
              testRes: testRes,
              check: testRes && item.expectedRes && JSON.stringify(testRes) === JSON.stringify(item.expectedRes),
            };
          } else {
            const res = await runSingleTest(item);
            newData[i] = res;
          }

          // 实时更新界面
          setProcessedData([...newData]);

          // 更新进度 - 计算百分比
          const currentProgress = Math.floor(((i + 1) / totalItems) * 100);
          setProgress(currentProgress);
          setFinishCount(i + 1);

          // 测试完成后解决 Promise
          resolve();
        }, 500);
      });
    }

    setLoading(false);
    if (stoppingRef.current) {
      message.warning('测试已中止');
      stoppingRef.current = false;
      return;
    } else {
      message.success('所有测试已完成');
    }
    // setTimeout(() => setProgress(0), 3000);
  };

  // 列定义
  const columns = [
    {
      title: '索引',
      dataIndex: 'index',
      key: 'index',
      width: 80,
      render: (_: any, __: any, index: number) => (currentPage - 1) * pageSize + index + 1,
    },
    {
      title: '内容',
      dataIndex: 'content',
      key: 'content',
      ellipsis: true,
      width: 300,
      render: (text: string) => (text.length > 100 ? `${text.substring(0, 100)}...` : text),
    },
    {
      title: '候选类型',
      dataIndex: 'candidateTypes',
      key: 'candidateTypes',
      width: 200,
      render: (types: string[]) => (
        <span>
          {types.map((type, i) => (
            <Tag key={i} color="blue">
              {type}
            </Tag>
          ))}
        </span>
      ),
    },
    {
      title: '期望结果',
      dataIndex: 'expectedRes',
      key: 'expectedRes',
      width: 200,
      render: (type: string, record: AnnotatorData) => (
        <Select style={{ width: '100%' }} value={type} onChange={(value) => updateExpectedRes(record.id!, value)}>
          {record.candidateTypes.map((option) => (
            <Select.Option key={option} value={option}>
              {option}
            </Select.Option>
          ))}
        </Select>
      ),
    },
    {
      title: '测试结果',
      dataIndex: 'testRes',
      key: 'testRes',
      width: 200,
      render: (type: string, record: AnnotatorData) => (
        <span>
          <Tag color="orange">{type || '无结果'}</Tag>
        </span>
      ),
    },
    {
      title: '检查',
      dataIndex: 'check',
      key: 'check',
      width: 80,
      render: (check: boolean) =>
        check ? (
          <CheckCircleOutlined style={{ color: 'green', fontSize: '18px' }} />
        ) : (
          <CloseCircleOutlined style={{ color: 'red', fontSize: '18px' }} />
        ),
    },
  ];

  // 处理数据，过滤搜索结果
  const filteredData = searchText
    ? processedData.filter((item: AnnotatorData) =>
        JSON.stringify(item).toLowerCase().includes(searchText.toLowerCase())
      )
    : processedData;

  // 分页数据
  const paginatedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  // 行展开渲染函数
  const expandedRowRender = (record: AnnotatorData) => {
    return (
      <pre style={{ whiteSpace: 'pre-wrap', maxHeight: '300px', overflow: 'auto' }}>
        {JSON.stringify(record, null, 2)}
      </pre>
    );
  };

  return (
    <ConfigProvider theme={THEME}>
      <MenuBar />
      <br />
      <Layout style={{ padding: '0 20px' }}>
        <Card title="控制面板">
          <Space direction="vertical" style={{ width: '100%' }}>
            <Space>
              <Input
                placeholder="搜索数据"
                prefix={<SearchOutlined />}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  setCurrentPage(1); // 搜索时重置页码
                }}
                style={{ width: 300 }}
              />
              <Button
                type="default"
                onClick={() => {
                  stoppingRef.current = true;
                }}
                danger
                disabled={!loading}
              >
                {stoppingRef.current ? '中止中...' : '中止'}
              </Button>
              <Button
                type="default"
                onClick={() => {
                  runAllTests(finishCount.current);
                }}
                disabled={loading || finishCount.current == 0}
              >
                继续
              </Button>
              <Button
                type="default"
                onClick={() => {
                  setFinishCount(0);
                  setProgress(0);
                }}
                disabled={loading || finishCount.current == 0}
              >
                重置
              </Button>
              <Button
                type="default"
                onClick={() => {
                  runAllTests(0);
                }}
                loading={loading}
                disabled={loading}
              >
                运行所有测试
              </Button>
              {/* 添加正确率显示 */}
              {finishCount.current > 0 && (
                <Tag color={getAccuracy() >= 70 ? 'green' : 'red'} style={{ fontSize: '14px' }}>
                  正确率: {getAccuracy()}%
                </Tag>
              )}
            </Space>
            {/* 添加进度条 */}(
            <div style={{ marginTop: 10 }}>
              <Progress
                percent={progress.current}
                status="active"
                format={(percent) => `${percent}% (${finishCount.current}/${filteredData.length})`}
              />
            </div>
            )
          </Space>
        </Card>
        <Card
          title={`数据列表 (共 ${filteredData.length} 条)`}
          style={{ marginTop: '16px' }}
          extra={
            finishCount.current > 0 ? (
              <Space>
                <Typography.Text>
                  已测试: <Tag color="blue">{finishCount.current}</Tag>
                </Typography.Text>
                <Typography.Text>
                  正确:{' '}
                  <Tag color="green">
                    {processedData.slice(0, finishCount.current).filter((item) => item.check === true).length}
                  </Tag>
                </Typography.Text>
                <Typography.Text>
                  错误:{' '}
                  <Tag color="red">
                    {processedData.slice(0, finishCount.current).filter((item) => item.check === false).length}
                  </Tag>
                </Typography.Text>
                <Typography.Text>
                  正确率: <Tag color={getAccuracy() >= 70 ? 'green' : 'red'}>{getAccuracy()}%</Tag>
                </Typography.Text>
              </Space>
            ) : null
          }
        >
          <Table
            dataSource={paginatedData}
            columns={columns}
            expandable={{
              expandedRowRender,
              expandRowByClick: true,
            }}
            rowKey={(record) => record.id || '0'}
            pagination={false}
            scroll={{ x: 1100 }}
            // loading={loading}
          />
          <div style={{ marginTop: '16px', textAlign: 'right' }}>
            <Pagination
              current={currentPage}
              total={filteredData.length}
              pageSize={pageSize}
              onChange={(page) => setCurrentPage(page)}
              showSizeChanger={false}
              showTotal={(total) => `共 ${total} 条`}
            />
          </div>
        </Card>
      </Layout>
    </ConfigProvider>
  );
};

export default AnnotatorTest;
