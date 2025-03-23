import React, { useState } from 'react';
import { Button, Input, Space, Card, Typography } from 'antd';
import { ChatOpenAI } from '@langchain/openai';
import { runNewPipeline } from '../pipeline';
import { DataSpec } from 'gist-wsv';

const { TextArea } = Input;
const { Title, Text } = Typography;

export const ExpTester: React.FC = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DataSpec[]>([]);
  const [error, setError] = useState('');

  const handleRunPipeline = async () => {
    if (!text) {
      setError('请输入文本');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
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
      
      const specs = await runNewPipeline(model, text);
      setResult(specs);
    } catch (err) {
      setError(err instanceof Error ? err.message : '处理过程出错');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Space direction="vertical" style={{ width: '100%', padding: 24 }}>
      <Title level={2}>Exp 模块测试</Title>
      
      <Card title="输入">
        <TextArea
          rows={6}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="请输入要分析的文本..."
        />
        <Button 
          type="primary"
          onClick={handleRunPipeline}
          loading={loading}
          style={{ marginTop: 16 }}
        >
          运行 Pipeline
        </Button>
      </Card>

      {error && (
        <Card title="错误" bordered={false}>
          <Text type="danger">{error}</Text>
        </Card>
      )}

      {result.length > 0 && (
        <Card title="分析结果" bordered={false}>
          <pre style={{ 
            background: '#f5f5f5',
            padding: 16,
            borderRadius: 4,
            overflow: 'auto'
          }}>
            {JSON.stringify(result, null, 2)}
          </pre>
        </Card>
      )}
    </Space>
  );
};