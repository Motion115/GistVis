import React, { useState, useCallback } from 'react';
import { Table, Form, InputNumber, Button, Card, Progress } from 'antd';
import type { TableColumnsType } from 'antd';

// Pipeline接口定义
export interface TestPipeline {
  test: (content: string) => Promise<string[]>;
}

// 默认的Pipeline实现 - 直接返回正确答案作为测试结果
const DefaultPipeline: TestPipeline = {
  test: async (content: string) => {
    return ['trend']; // 仅作为示例返回
  }
};

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
  // 状态管理
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [pipeline, setPipeline] = useState<TestPipeline>(DefaultPipeline);
  const [config, setConfig] = useState<TestConfig>({
    concurrency: 1,
    interval: 1000,
    startIndex: 0,
    endIndex: 10
  });

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

  // 表格列定义
  const columns: TableColumnsType<TestResult> = [
    {
      title: '序号',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: '内容',
      dataIndex: 'content',
      key: 'content',
      width: '40%',
    },
    {
      title: '正确答案',
      dataIndex: 'expectedAnswer',
      key: 'expectedAnswer',
      render: (types: string[]) => types.join(', '),
    },
    {
      title: '测试答案',
      dataIndex: 'testAnswer',
      key: 'testAnswer',
      render: (types: string[]) => types.join(', '),
    },
    {
      title: '是否正确',
      dataIndex: 'isCorrect',
      key: 'isCorrect',
      render: (correct: boolean) => correct ? '✅' : '❌',
    },
  ];

  // 批量测试方法
  const runTest = async () => {
    setLoading(true);
    try {
      const response = await fetch('/static/test/annotator.json');
      const testData: TestItem[] = await response.json();
      
      // 根据配置筛选测试集
      const targetData = testData.slice(config.startIndex, config.endIndex + 1);
      const results: TestResult[] = [];

      // 使用并发控制测试
      for (let i = 0; i < targetData.length; i += config.concurrency) {
        const batch = targetData.slice(i, i + config.concurrency);
        const batchPromises = batch.map(async (item, batchIndex) => {
          const testAnswer = await pipeline.test(item.content);
          return {
            content: item.content,
            index: config.startIndex + i + batchIndex,
            expectedAnswer: item.candidateTypes,
            testAnswer,
            isCorrect: JSON.stringify(item.candidateTypes.sort()) === JSON.stringify(testAnswer.sort())
          };
        });

        const batchResults = await Promise.all(batchPromises);
        results.push(...batchResults);

        // 添加间隔
        if (i + config.concurrency < targetData.length) {
          await new Promise(resolve => setTimeout(resolve, config.interval));
        }
      }

      setTestResults(results);
    } catch (error) {
      console.error('测试执行失败:', error);
    } finally {
      setLoading(false);
    }
  };

  // 统计信息
  const stats = calculateStats();

  return (
    <div style={{ padding: 24 }}>
      <Card title="测试配置" style={{ marginBottom: 24 }}>
        <Form layout="inline">
          <Form.Item label="并发数">
            <InputNumber
              min={1}
              max={10}
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
            <Button type="primary" onClick={runTest} loading={loading}>
              开始测试
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Card title="统计信息" style={{ marginBottom: 24 }}>
        <div style={{ marginBottom: 16 }}>
          <h4>总体正确率</h4>
          <Progress percent={Math.round(stats.totalAccuracy)} />
        </div>
        <div>
          <h4>每页正确率</h4>
          {Object.entries(stats.pageAccuracy).map(([page, accuracy]) => (
            <div key={page}>
              <span>第 {page} 页: </span>
              <Progress percent={Math.round(accuracy)} size="small" />
            </div>
          ))}
        </div>
      </Card>

      <Table
        columns={columns}
        dataSource={testResults}
        rowKey="index"
        pagination={{ pageSize: 10 }}
        scroll={{ y: 400 }}
      />
    </div>
  );
};

export default AnnotatorTest;