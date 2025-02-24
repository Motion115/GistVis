import React from 'react';
import { Typography, Card, ConfigProvider, Space } from 'antd';
import THEME from '../../style/theme';
import PipelineExplorer from './PipelineExplorer';

const { Title, Paragraph } = Typography;

const DemoPipeline: React.FC = () => {
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
    </ConfigProvider>
  );
};

export default DemoPipeline;