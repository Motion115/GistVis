import React, { useState } from 'react';
import { Button, Input, Space, Card, Typography } from 'antd';
import { ChatOpenAI } from '@langchain/openai';
import { runNewPipeline, runDirectPipeline, analyzeReasoning } from '../pipeline';
import { DataSpec } from 'gist-wsv';
import { ReasoningStructure, SpaceBreakdown } from '../pipeline/types';

const { TextArea } = Input;
const { Title, Text } = Typography;

export const ExpTester: React.FC = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DataSpec[]>([]);
  const [reasoningResult, setReasoningResult] = useState<ReasoningStructure[] | null>(null);
  const [error, setError] = useState('');

  const createModel = () => new ChatOpenAI({
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

  const handleTestReasoning = async () => {
    if (!text) {
      setError('enter text to analyze');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const model = createModel();
      const reasoning = await analyzeReasoning(model, text);
      setReasoningResult(reasoning);
      setResult([]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'error in processing');
    } finally {
      setLoading(false);
    }
  };

  const handleRunDirectPipeline = async () => {
    if (!text) {
      setError('enter text to analyze');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const model = createModel();
      const specs = await runDirectPipeline(model, text);
      setResult(specs);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'error in processing');
    } finally {
      setLoading(false);
    }
  };

  const handleRunPipeline = async () => {
    if (!text) {
      setError('enter text to analyze');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const model = createModel();
      
      const specs = await runNewPipeline(model, text);
      setResult(specs);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'error in processing');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Space direction="vertical" style={{ width: '100%', padding: 24 }}>
      <Title level={2}>Exp Pipeline</Title>
      
      <Card title="input">
        <TextArea
          rows={6}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="enter text to analyze..."
        />
        <Space style={{ marginTop: 16 }}>
          <Button
            type="primary"
            onClick={handleRunPipeline}
            loading={loading}
          >
            spaceAnalysis+featureAnalysis
          </Button>
          <Button
            onClick={handleRunDirectPipeline}
            loading={loading}
          >
            csvAnalysis
          </Button>
          <Button
            type="dashed"
            onClick={handleTestReasoning}
            loading={loading}
          >
            Reasoning
          </Button>
        </Space>
      </Card>

      {error && (
        <Card title="error" bordered={false}>
          <Text type="danger">{error}</Text>
        </Card>
      )}

      {result.length > 0 && (
        <Card title="result" bordered={false}>
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

      {reasoningResult && (
        <Card title="Reasoning result" bordered={false}>
          <pre style={{
            background: '#f5f5f5',
            padding: 16,
            borderRadius: 4,
            overflow: 'auto'
          }}>
            {JSON.stringify(reasoningResult, null, 2)}
          </pre>
        </Card>
      )}
    </Space>
  );
};