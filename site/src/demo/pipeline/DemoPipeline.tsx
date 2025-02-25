import React from 'react';
import { Typography, Steps, ConfigProvider, Space, Layout, Divider } from 'antd';
import THEME from '../../style/theme';
import PipelineExplorer from './PipelineExplorer';

const { Text } = Typography;

const pipelineSteps = [
  {
    title: 'Discoverer',
    description: 'Splits text into segments and generates initial specs',
  },
  {
    title: 'Annotator',
    description: 'Analyzes and labels insight types',
  },
  {
    title: 'Extractor',
    description: 'Extracts structured data from text',
  },
  {
    title: 'Visualizer',
    description: 'Displays the final visualization',
  },
];

const stageMap: { [key: number]: number } = {
  0: -1,
  1: 0,
  2: 2,
  3: 3,
};

const DemoPipeline: React.FC = () => {
  const [currentStage, setCurrentStage] = React.useState(stageMap[0]);

  const handleStageChange = (stage: number) => {
    setCurrentStage(stage);
  };

  return (
    <ConfigProvider theme={THEME}>
      <Layout dir="vertical">
        <Text style={{ fontSize: '20px', fontWeight: 'bold' }}>Pipeline Explorer</Text>
        <Text style={{ fontSize: '16px', fontStyle: 'italic' }}>
          Enter text to analyze and generate visualization specifications through the pipeline:
        </Text>
        <Divider style={{ margin: '0 0 0 0' }} />
      </Layout>
      <Space direction="vertical" style={{ width: '100%', padding: '24px' }}>
        <div style={{ background: '#fff', padding: '24px', borderRadius: '8px', marginBottom: '16px' }}>
          <Steps
            items={pipelineSteps}
            progressDot
            size="small"
            style={{ maxWidth: '800px', margin: '0 auto' }}
            current={stageMap[currentStage]}
          />
        </div>
        <PipelineExplorer onStageChange={handleStageChange} />
      </Space>
    </ConfigProvider>
  );
};

export default DemoPipeline;
