import React, { useState } from 'react';
import { Card, Input, Button, List, Typography, Space, ConfigProvider } from 'antd';
import { ChatOpenAI } from '@langchain/openai';
import THEME from '../../style/theme';
import SpecProcessEditor from './SpecProcessEditor';
import splitInsight from '../../modules/llm/discoverer/discoverer';
import { GistvisSpec, paragraphSpec } from '../../modules/visualizer/types';

const { TextArea } = Input;
const { Text } = Typography;

interface PipelineExplorerProps {
  style?: React.CSSProperties;
}

const PipelineExplorer: React.FC<PipelineExplorerProps> = ({ style }) => {
  const [inputText, setInputText] = useState('');
  const [specs, setSpecs] = useState<GistvisSpec[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleTextSubmit = async () => {
    if (!inputText.trim()) return;
    
    setIsProcessing(true);
    try {
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

      const results: paragraphSpec[] = await splitInsight(model, [inputText]);
      if (results.length > 0) {
        setSpecs(results[0].paragraphContent);
      }
    } catch (error) {
      console.error('Error processing text:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSpecUpdate = (index: number, updatedSpec: GistvisSpec) => {
    setSpecs(prevSpecs => {
      const newSpecs = [...prevSpecs];
      newSpecs[index] = updatedSpec;
      return newSpecs;
    });
  };

  return (
    <ConfigProvider theme={THEME}>
      <Space direction="vertical" style={{ width: '100%', ...style }}>
        <Card title="Text Input">
          <Space direction="vertical" style={{ width: '100%' }}>
            <TextArea 
              rows={4} 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter text to analyze..."
            />
            <Button 
              type="primary" 
              onClick={handleTextSubmit}
              loading={isProcessing}
              disabled={!inputText.trim()}
            >
              Generate Specs
            </Button>
          </Space>
        </Card>

        <List
          dataSource={specs}
          renderItem={(spec, index) => (
            <List.Item>
              <SpecProcessEditor
                spec={spec}
                onSave={(updatedSpec) => handleSpecUpdate(index, updatedSpec)}
                style={{ width: '100%' }}
                example={false}
              />
            </List.Item>
          )}
        />
      </Space>
    </ConfigProvider>
  );
};

export default PipelineExplorer;