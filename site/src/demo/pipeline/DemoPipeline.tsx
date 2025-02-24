import React, {useState} from 'react';
import { Typography, Card, ConfigProvider, Space } from 'antd';
import THEME from '../../style/theme';
import PipelineExplorer from './PipelineExplorer';
import SpecProcessEditor from './SpecProcessEditor';
import {
  GistvisSpec,
} from '../../modules/visualizer/types';

const { Title, Paragraph } = Typography;
const initialSpec: GistvisSpec = {
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
};
const DemoPipeline: React.FC = () => {
  
  const [spec, setSpec] = useState<GistvisSpec>({...initialSpec});
  return (
    <ConfigProvider theme={THEME}>
      <Space direction="vertical" style={{ width: '100%', padding: '24px' }}>
        <Card>
          <Title level={2}>Pipeline Explorer</Title>
          <Paragraph>
            Enter text to analyze and generate visualization specifications through the pipeline:
          </Paragraph>
          <Paragraph>
            <ul>
              <li><strong>Discoverer:</strong> Splits text into segments and generates initial specs</li>
              <li><strong>Annotator:</strong> Analyzes and labels insight types</li>
              <li><strong>Extractor:</strong> Extracts structured data from text</li>
              <li><strong>Visualizer:</strong> Displays the final visualization</li>
            </ul>
          </Paragraph>
        </Card>
        
        <PipelineExplorer />
      </Space>
      <SpecProcessEditor spec={spec} onSave={setSpec} example={false}/>
    </ConfigProvider>
  );
};

export default DemoPipeline;