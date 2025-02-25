import React, { useState, useReducer, useRef, useEffect } from 'react';
import { Card, Input, Button, List, Flex, Space, ConfigProvider, Row, Divider, Typography, Layout } from 'antd';
import { ChatOpenAI } from '@langchain/openai';
import THEME from '../../style/theme';
import SpecProcessEditor from './SpecProcessEditor';
import splitInsight from '../../modules/llm/discoverer/discoverer';
import { GistvisSpec, paragraphSpec } from '../../modules/visualizer/types';
import ArtcleProcess from '../../modules/visualizer/renderer/renderer';

const { TextArea } = Input;
const { Text } = Typography;

const EXAMPLE_INPUT =
  'The number of Americans ages 100 and older is projected to more than quadruple over the next three decades, from an estimated 101,000 in 2024 to about 422,000 in 2054, according to projections from the U.S. Census Bureau. Centenarians currently make up just 0.03% of the overall U.S. population, and they are expected to reach 0.1% in 2054.';
const EXAMPLE_SPECS: GistvisSpec[] = [
  {
    id: 'p0s0',
    unitSegmentSpec: {
      insightType: 'trend',
      segmentIdx: 0,
      context:
        'The number of Americans ages 100 and older is projected to more than quadruple over the next three decades, from an estimated 101,000 in 2024 to about 422,000 in 2054, according to projections from the U.S. Census Bureau.',
      inSituPosition: [],
      attribute: 'positive',
    },
    dataSpec: [
      {
        categoryKey: 'time segment',
        categoryValue: '2024',
        valueKey: 'number of Americans ages 100 and older',
        valueValue: 101000,
      },
      {
        categoryKey: 'time segment',
        categoryValue: '2054',
        valueKey: 'number of Americans ages 100 and older',
        valueValue: 422000,
      },
    ],
  },
  {
    id: 'p0s1',
    unitSegmentSpec: {
      insightType: 'trend',
      segmentIdx: 1,
      context:
        'Centenarians currently make up just 0.03% of the overall U.S. population, and they are expected to reach 0.1% in 2054.',
      inSituPosition: [],
      attribute: 'positive',
    },
    dataSpec: [
      {
        categoryKey: 'category of population',
        categoryValue: 'Centenarians',
        valueKey: 'percentage of overall U.S. population',
        valueValue: 0.03,
      },
      {
        categoryKey: 'category of population',
        categoryValue: 'Centenarians',
        valueKey: 'projected percentage of overall U.S. population in 2054',
        valueValue: 0.1,
      },
    ],
  },
];

interface PipelineExplorerProps {
  style?: React.CSSProperties;
  onStageChange?: (stage: number) => void;
}

const PipelineExplorer: React.FC<PipelineExplorerProps> = ({ style, onStageChange }) => {
  const [inputText, setInputText] = useState('');
  const [specs, setSpecs] = useState<GistvisSpec[]>([]);
  const [isDiscoverProcessing, setIsDiscoverProcessing] = useState(false);
  const [stage, setStage] = useState(0);
  const [processingEditors, setProcessingEditors] = useState<{ [key: number]: boolean }>({});
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const taskIdRef = useRef<number>(0);
  const inputtingExampleRef = useRef(false);

  const updateStage = () => {
    let newStage = 0;
    if (specs.length === 0) {
      if (isDiscoverProcessing) {
        newStage = 1; // discoverer
      } else {
        newStage = 0; // empty
      }
    } else {
      // if any editor is processing
      const hasProcessingEditor = Object.values(processingEditors).some((isProcessing) => isProcessing);
      if (hasProcessingEditor) {
        newStage = 2; // annotator or extractor
      } else {
        newStage = 3; // completed
      }
    }
    setStage(newStage);
    onStageChange?.(newStage);
  };

  const handleCancel = () => {
    taskIdRef.current += 1;
    setIsDiscoverProcessing(false);
  };

  const handleClear = () => {
    setSpecs([]);
    setProcessingEditors({});
  };

  useEffect(() => {
    updateStage();
  }, [specs, isDiscoverProcessing, processingEditors]);

  const showEditor = () => {
    return isDiscoverProcessing || specs.length > 0;
  };

  const showVisualization = () => {
    return isDiscoverProcessing || specs.length > 0;
  };

  const handleTextSubmit = async () => {
    inputtingExampleRef.current = false;
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

      const results: paragraphSpec[] = (await Promise.race([
        splitInsight(model, [inputText]),
        timeoutPromise,
      ])) as paragraphSpec[];

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

  const handleProcessingChange = (index: number, isProcessing: boolean) => {
    setProcessingEditors((prev) => ({
      ...prev,
      [index]: isProcessing,
    }));
  };

  return (
    <ConfigProvider theme={THEME}>
      <Layout style={{ marginTop: '16px', textAlign: 'center', justifyItems: 'center' }}>
        <Divider>
          <Text italic>Visualization Result</Text>
        </Divider>
        <div style={{ width: '68%', margin: '0 auto' }}>
          {isDiscoverProcessing ? (
            <Button type="text" loading style={{ margin: '30px' }} />
          ) : specs.length > 0 ? (
            <ArtcleProcess llmarticle={[{ paragraphIdx: 0, paragraphContent: specs }]} />
          ) : null}
        </div>
        <Divider>
          <Text italic type="secondary">
            {stage === 0 && 'No visualization generated yet, press Launch to try our pipeline'}
            {stage === 1 && 'Discovering insights, please wait...'}
            {stage === 2 && 'Annotating or extracting data, please wait...'}
            {stage === 3 && 'Visualization completed!'}
          </Text>
        </Divider>
      </Layout>
      <Space direction="vertical" style={{ width: '100%', ...style }}>
        <Card
          title={
            <Row justify="space-between">
              <Text strong>Text Input</Text>
            </Row>
          }
          style={{ marginTop: '16px' }}
        >
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
                  <Button
                    type="default"
                    onClick={handleTextSubmit}
                    loading={isDiscoverProcessing}
                    disabled={!inputText.trim()}
                  >
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
          <Card
            title={
              <Row justify="space-between">
                <Text strong>Specification Editor</Text>
                <Button loading={isDiscoverProcessing} type="text" />
              </Row>
            }
            style={{ marginTop: '16px' }}
            loading={isDiscoverProcessing}
          >
            <Space direction="vertical" style={{ width: '100%' }}>
              <Text type="secondary">Edit and refine the generated specifications</Text>
              {isDiscoverProcessing ? (
                <div style={{ textAlign: 'center', padding: '40px' }}>
                  <Space direction="vertical">
                    <Text type="secondary">Processing specifications...</Text>
                  </Space>
                </div>
              ) : (
                <List
                  dataSource={specs}
                  renderItem={(spec, index) => {
                    const autoPlay = !inputtingExampleRef.current;
                    return (
                      <List.Item>
                        <SpecProcessEditor
                          spec={spec}
                          onSave={(updatedSpec) => handleSpecUpdate(index, updatedSpec)}
                          onProcessingChange={(isProcessing) => handleProcessingChange(index, isProcessing)}
                          style={{ width: '100%' }}
                          example={false}
                          autoPlay={autoPlay}
                        />
                      </List.Item>
                    );
                  }}
                />
              )}
            </Space>
          </Card>
        ) : null}
        <Card
          title={
            <Row justify="space-between">
              <Text strong>Example</Text>
            </Row>
          }
          style={{ marginTop: '16px' }}
        >
          <Space direction="vertical" style={{ width: '100%' }}>
            <TextArea rows={4} value={EXAMPLE_INPUT} readOnly />
            <Row justify="space-between">
              <Button
                type="default"
                onClick={() => {
                  setInputText(EXAMPLE_INPUT);
                }}
              >
                Copy to Input
              </Button>
              <Button
                type="default"
                onClick={() => {
                  inputtingExampleRef.current = true;
                  setInputText(EXAMPLE_INPUT);
                  setSpecs(EXAMPLE_SPECS);
                }}
              >
                Show Example Visualization
              </Button>
            </Row>
          </Space>
        </Card>
      </Space>
    </ConfigProvider>
  );
};

export default PipelineExplorer;
