import React, { useState, useReducer, useRef } from 'react';
import { Card, Input, Button, List, Flex, Space, ConfigProvider, Row, Tooltip, Divider, Typography, Layout } from 'antd';
import { ChatOpenAI } from '@langchain/openai';
import THEME from '../../style/theme';
import SpecProcessEditor from './SpecProcessEditor';
import splitInsight from '../../modules/llm/discoverer/discoverer';
import { GistvisSpec, paragraphSpec } from '../../modules/visualizer/types';
import ArtcleProcess from '../../modules/visualizer/renderer/renderer';

const { TextArea } = Input;
const { Text } = Typography;

const EXAMPLE_INPUT = 'The number of Americans ages 100 and older is projected to more than quadruple over the next three decades, from an estimated 101,000 in 2024 to about 422,000 in 2054, according to projections from the U.S. Census Bureau. Centenarians currently make up just 0.03% of the overall U.S. population, and they are expected to reach 0.1% in 2054.';

interface PipelineExplorerProps {
  style?: React.CSSProperties;
}

const PipelineExplorer: React.FC<PipelineExplorerProps> = ({ style }) => {
  const [inputText, setInputText] = useState('');
  const [specs, setSpecs] = useState<GistvisSpec[]>([]);
  const [isDiscoverProcessing, setIsDiscoverProcessing] = useState(false);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const taskIdRef = useRef<number>(0);

  const handleCancel = () => {
    taskIdRef.current += 1;
    setIsDiscoverProcessing(false);
  };

  const handleClear = () => {
    setSpecs([]);
  };

  const showEditor = () => {
    return isDiscoverProcessing || specs.length > 0;
  };

  const showVisualization = () => {
    return isDiscoverProcessing || specs.length > 0;
  };

  const handleTextSubmit = async () => {
    if (!inputText.trim()) return;
    const taskId = taskIdRef.current;
    setIsDiscoverProcessing(true);

    // Timeout Promise
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Request timeout')), 2 * 60 * 1000);
    });

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

      const results: paragraphSpec[] = await Promise.race([
        splitInsight(model, [inputText]),
        timeoutPromise
      ]) as paragraphSpec[];

      if (taskId === taskIdRef.current) {
        if (results.length > 0) {
          setSpecs(results[0].paragraphContent);
        }
        setIsDiscoverProcessing(false);
      }
    } catch (error) {
      if (taskId === taskIdRef.current) {
        console.error('Error processing text:', error);
        setIsDiscoverProcessing(false);
      }
    }
  };

  const handleSpecUpdate = (index: number, updatedSpec: GistvisSpec) => {
    setSpecs((prevSpecs) => {
      const newSpecs = [...prevSpecs];
      newSpecs[index] = updatedSpec;
      return newSpecs;
    });
    forceUpdate();
  };

  return (
    <ConfigProvider theme={THEME}>
      <Layout style={{ marginTop: '16px', textAlign: 'center', justifyItems: 'center' }}>
        <Divider>
          <Text italic>Visualization Result</Text>
        </Divider>
        <div style={{ width: '68%', margin: '0 auto' }}>
          {isDiscoverProcessing ? (
            <Button type="text" loading style={{margin:'30px'}}/>
          ) : (
              specs.length>0 ? (
                <ArtcleProcess llmarticle={[{ paragraphIdx: 0, paragraphContent: specs }]} />
              ) : null
          )}
        </div>
        <Divider>
          <Text italic type='secondary'>
            {'No visualization generated yet, press Launch to try our pipeline'}
          </Text>
        </Divider>
      </Layout>
      <Space direction="vertical" style={{ width: '100%', ...style }}>
        <Card title="Text Input">
          <Flex style={{ width: '100%', gap: '10px' }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <TextArea
                rows={4}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter text to analyze..."
              />
              <Row style={{ gap: '10px' }} justify="space-between">
                <Flex style={{ gap: '10px' }}>
                  <Button type="default" onClick={handleTextSubmit} loading={isDiscoverProcessing} disabled={!inputText.trim()}>
                    Launch Pipeline
                  </Button>
                  <Button
                    type="default"
                    onClick={isDiscoverProcessing ? handleCancel : handleClear}
                    disabled={isDiscoverProcessing ? false : specs.length == 0}
                  >
                    {isDiscoverProcessing ? 'Cancel' : 'Clear'}
                  </Button>
                </Flex>
              </Row>
            </Space>
          </Flex>
        </Card>
        {showEditor() ? (
          <div>
            <div
              style={{
                padding: '16px 24px',
                background: '#f5f5f5',
                borderRadius: '8px',
                marginBottom: '8px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Text strong>Specification Editor</Text>
              <Text type="secondary">Edit and refine the generated specifications</Text>
            </div>
            <div style={{
              background: '#fff',
              padding: '24px',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              {isDiscoverProcessing ? (
                <div style={{ textAlign: 'center', padding: '40px' }}>
                  <Space direction="vertical">
                    <Text type="secondary">Processing specifications...</Text>
                  </Space>
                </div>
              ) : (
                <List
                  dataSource={specs}
                  renderItem={(spec, index) => (
                    <List.Item>
                      <SpecProcessEditor
                        spec={spec}
                        onSave={(updatedSpec) => handleSpecUpdate(index, updatedSpec)}
                        style={{ width: '100%' }}
                        example={true}
                      />
                    </List.Item>
                  )}
                />
              )}
            </div>
          </div>
        ) : null}
        <Card title="Example Input" style={{ marginTop: '16px' }}>
          <Space direction="vertical" style={{ width: '100%' }}>
            <TextArea rows={4} value={EXAMPLE_INPUT} readOnly />
            <Button
              type="default"
              onClick={() => {
                setInputText(EXAMPLE_INPUT);
              }}
            >
              Copy to Input
            </Button>
          </Space>
        </Card>
      </Space>
    </ConfigProvider>
  );
};

export default PipelineExplorer;
