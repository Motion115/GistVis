import React, { useState, useEffect, useRef } from 'react';
import { SpecEditor } from './SpecEditor';
import THEME from '../../style/theme';
import { ChatOpenAI } from '@langchain/openai';
import {processParagraphs} from '../../modules/llm/annotator/annotator';
import {extractDataForParagraphs} from '../../modules/llm/extractor/extractor';
import {
  Card,
  Button,
  Space,
  Typography,
  ConfigProvider,
  Row,
  Col,
  Tooltip,
  Collapse
} from 'antd';
import {
  ComparisonTextRenderer,
  ExtremeTextRenderer,
  PlainTextRenderer,
  ProportionTextRenderer,
  RankTextRenderer,
  ValueTextRenderer,
  TrendTextRenderer,
} from '../../modules/visualizer/renderer/rendererList';
import {
  GistvisSpec,
} from '../../modules/visualizer/types';

const { Text } = Typography;

interface SpecProcessEditorProps {
  spec: GistvisSpec;
  onSave: (updatedSpec: GistvisSpec) => void;
  example?: boolean;
  style?: React.CSSProperties;
}

const exampleAnswer: GistvisSpec = {
  "id": "p0s0",
  "unitSegmentSpec": {
    "insightType": "trend",
    "segmentIdx": 0,
    "context": "I will be 18 years old in 2025 and I was 16 years old in 2023.",
    "inSituPosition": [],
    "attribute": "positive"
  },
  "dataSpec": [
    {
      "categoryKey": "time segment",
      "categoryValue": "2023",
      "valueKey": "I",
      "valueValue": 16
    },
    {
      "categoryKey": "time segment",
      "categoryValue": "2025",
      "valueKey": "I",
      "valueValue": 18
    }
  ]
}

const processes = ['Discoverer','Annotator','Extractor','Visualizer']

const SpecProcessEditor: React.FC<SpecProcessEditorProps> = ({ spec, onSave, example=false, style }) => {
  const [process, setProcess] = useState(3);
  const [isProcessing, setIsProcessing] = useState(false);
  const [taskId, setTaskId] = useState(0);
  const taskIdRef = useRef(0);

  useEffect(() => {
    taskIdRef.current = taskId;
  }, [taskId]);

  const internalSave = (updatedSpec: GistvisSpec, currentTaskId: number) => {
    if (currentTaskId === taskIdRef.current) {
      onSave(updatedSpec);
    }
  };

  const handleSave = (updatedSpec: GistvisSpec) => {
    onSave(updatedSpec);
  };

  const model = new ChatOpenAI({
    temperature: 0.7,
    topP: 1,
    n: 1,
    streaming: false,
    openAIApiKey: JSON.parse(localStorage.getItem('envVariables') || '{}')?.VITE_LLM_API_KEY || import.meta.env.VITE_LLM_API_KEY || '',
    modelName: JSON.parse(localStorage.getItem('envVariables') || '{}')?.VITE_LLM_MODEL_NAME || import.meta.env.VITE_LLM_MODEL_NAME || '',
    configuration: {
      apiKey: JSON.parse(localStorage.getItem('envVariables') || '{}')?.VITE_LLM_API_KEY || import.meta.env.VITE_LLM_API_KEY || '',
      baseURL: JSON.parse(localStorage.getItem('envVariables') || '{}')?.VITE_LLM_URL_BASE || import.meta.env.VITE_LLM_URL_BASE || '',
    },
    verbose: false,
  });

  const handleStop = () => {
    setIsProcessing(false);
    const newTaskId = taskIdRef.current + 1;
    taskIdRef.current = newTaskId;
    setTaskId(newTaskId);
  };
 
  const handleRefresh = async (stage: number) => {
    setIsProcessing(true);
    
    const newTaskId = taskIdRef.current + 1;
    taskIdRef.current = newTaskId;
    setTaskId(newTaskId);
    
    handleBack(stage);

    try {
      for (let i = 1; i <= 3; i++) {
        if (i <= stage) {
          continue;
        }

        if (example) {
          await new Promise(resolve => setTimeout(resolve, 3000));
          if (i === 2 || i === 3) {
            internalSave({...exampleAnswer}, newTaskId);
            if (newTaskId === taskIdRef.current) {
              handleBack(i);
              setProcess(i);
            }
          }
          continue;
        }

        const mockParagraphSpec = {
          paragraphId: "1",
          paragraphIdx: 0,
          paragraphContent: [spec]
        };

        if (i === 2) {  // 1->2: call annotator
          const [processedParagraph] = await processParagraphs([mockParagraphSpec], model);
          if (processedParagraph.paragraphContent[0]) {
            internalSave(processedParagraph.paragraphContent[0], newTaskId);
            if (newTaskId === taskIdRef.current) {
              setProcess(i);
            }
          }
        } else if (i === 3) {  // 2->3: call extractor
          const [processedParagraph] = await extractDataForParagraphs([mockParagraphSpec], model);
          if (processedParagraph.paragraphContent[0]) {
            internalSave(processedParagraph.paragraphContent[0], newTaskId);
            if (newTaskId === taskIdRef.current) {
              setProcess(i);
            }
          }
        }
      }
    } catch (error) {
      console.error('error:', error);
    }

    if (newTaskId === taskIdRef.current) {
      setIsProcessing(false);
    }
  };

  const handleBack = (stage: number) => {
    if (stage >= process) {
      return;
    }
    switch (stage) {
      case 1:
        onSave({
          id: spec.id,
          unitSegmentSpec: {
            insightType: 'noType',
            segmentIdx: spec.unitSegmentSpec.segmentIdx,
            context: spec.unitSegmentSpec.context
          },
        });
        break;
      case 2:
        onSave({
          id: spec.id,
          unitSegmentSpec: {
            insightType: spec.unitSegmentSpec.insightType,
            segmentIdx: spec.unitSegmentSpec.segmentIdx,
            context: spec.unitSegmentSpec.context
          },
        });
        break;
      default:
        break;
    }
    setProcess(stage);
  }

  const renderVisualizer = (spec: GistvisSpec) => {
    const renderMap = {
      noType: (item: GistvisSpec) => <PlainTextRenderer gistvisSpec={item} />,
      trend: (item: GistvisSpec) => <TrendTextRenderer gistvisSpec={item} />,
      rank: (item: GistvisSpec) => <RankTextRenderer gistvisSpec={item} />,
      proportion: (item: GistvisSpec) => <ProportionTextRenderer gistvisSpec={item} />,
      comparison: (item: GistvisSpec) => <ComparisonTextRenderer gistvisSpec={item} />,
      extreme: (item: GistvisSpec) => <ExtremeTextRenderer gistvisSpec={item} />,
      value: (item: GistvisSpec) => <ValueTextRenderer gistvisSpec={item} />,
    };

    const renderType = spec.unitSegmentSpec.insightType;
    const renderFunction = renderMap[renderType as keyof typeof renderMap];
    return renderFunction ? renderFunction(spec) : null;
  };

  const insightType = spec.unitSegmentSpec.insightType === 'noType' ? 'Unspecified' : spec.unitSegmentSpec.insightType;

  return (
    <ConfigProvider theme={THEME}>
      <Collapse 
        defaultActiveKey={['1']}
        style={{ marginBottom: 16, ...style }}
        items={[
          {
            key: '1',
            label: (
              <Space align="center" wrap={false}>
                <div style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Text code style={{ padding: '2px 6px'}}>
                    {insightType}
                  </Text>
                  <Text
                    style={{ maxWidth: '500px' }}
                    ellipsis={{ tooltip: spec.unitSegmentSpec.context }}
                  >
                    {spec.unitSegmentSpec.context}
                  </Text>
                </div>
              </Space>
            ),
            children: (
              <div>
                <Row gutter={16}>
                  {[1,2,3].map((i) => (
                    process>=i ? (
                      <Col span={6} key={i} style={{textAlign:'center'}}>
                        <span style={{textAlign:'start'}}>
                          <SpecEditor
                            spec={spec}
                            onSave={handleSave}
                            stage={i}
                            width="100%"
                            height={200}
                            extra={[
                              <Tooltip key={`tooltip-${i}`} title={`Refresh ${processes[i]}`}>
                                <Button
                                  onClick={() => handleRefresh(i)}
                                  disabled={isProcessing}
                                  type="default"
                                  style={{ marginLeft: 8, marginRight: 8 }}
                                >
                                  {'▷'}
                                </Button>
                              </Tooltip>
                            ]}
                          />
                        </span>
                        <Text italic type='secondary'>{`${processes[i-1]} output`}</Text>
                      </Col>
                    ) : null
                  ))}
                  {process >= 3 && (
                    <Col span={6} style={{textAlign:'center'}}>
                      <Card
                        title="Preview"
                        style={{ width: '100%', textAlign:'start'}}
                        bodyStyle={{ height: 200, overflow: 'auto' }}
                      >
                        <div style={{ padding: '8px' }}>
                          {renderVisualizer(spec)}
                        </div>
                      </Card>
                      <Text italic type='secondary'>{`${processes[3]} output`}</Text>
                    </Col>
                  )}
                  {isProcessing && (
                    <Col span={(4-process)*6} style={{textAlign:'center', height: 248, display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
                      <Button
                        onClick={handleStop}
                        danger
                      >
                        stop
                      </Button>
                      <Text italic type='secondary'>{`${processes[process]} working...`}</Text>
                    </Col>
                  )}
                </Row>
              </div>
            )
          }
        ]}
      />
    </ConfigProvider>
  );
};

export default SpecProcessEditor;
