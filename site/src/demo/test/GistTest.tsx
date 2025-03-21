import React, { useState } from 'react';
import { SimpleLine, SimpleBar, SimpleStackedBar, SimpleMaxMin, paragraphSpec } from 'gist-wsv';
import { Layout, Typography, Card, Space, theme, Upload, message, Button, Tabs, Flex } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { UploadChangeParam, UploadFile } from 'antd/es/upload';
import { ChatOpenAI } from '@langchain/openai';
import splitInsight from '../../modules/llm/discoverer/discoverer';
import { useNavigate } from 'react-router-dom';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;
const { Dragger } = Upload;

export const GistTest: React.FC = () => {
  const { token } = theme.useToken();
  const [discovererTestFile, setDiscovererTestFile] = useState<null | File>(null);
  const [discovererTestFinish, setDiscovererTestFinish] = useState(false);
  const [discovererTestResult, setDiscovererTestResult] = useState<paragraphSpec[] | null>(null);

  const navigate = useNavigate();
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

  const lineData = [
    { x: 0, y: 0.5, label: 'Jan' },
    { x: 1, y: 0.8, label: 'Feb' },
    { x: 2, y: 0.2, label: 'Mar' },
  ];

  const barData = [
    { x: 0, y: 30, label: 'group A' },
    { x: 1, y: 50, label: 'group B' },
    { x: 2, y: 20, label: 'group C' },
  ];

  const stackedData = [
    { category: 'category 1', values: [30, 20] },
    { category: 'category 2', values: [50, 30] },
  ];

  const discovererUploadProps = {
    name: 'file',
    multiple: false,
    onchange(info: UploadChangeParam<UploadFile<File>>) {
      if (info.file.originFileObj) {
        setDiscovererTestFile(info.file.originFileObj);
      } else {
        setDiscovererTestFile(null);
      }
    },
    onDrop(e: React.DragEvent<HTMLDivElement>) {
      console.log('Drag-and-drop files:', e.dataTransfer.files);
    },
  };

  const handdleDiscovererTest = async () => {
    if (!discovererTestFile) {
      message.error('Please upload the file！');
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsText(discovererTestFile);

    fileReader.onload = async () => {
      try {
        const fileContent = fileReader.result as string;
        const data = JSON.parse(fileContent);
        const texts: string[] = data.map((item: { text: string }) => item.text);
        const result = await splitInsight(model, texts);
        setDiscovererTestResult(result);
        setDiscovererTestFinish(true);
        navigate('/annotator-test', { state: { testData: transformed } });
      } catch (error) {
        message.error('Processing error!');
        console.error(error);
      }
    };

    fileReader.onerror = () => {
      message.error('Error reading file!');
    };
  };

  const testModules = [
    <>
      <Card
        title={
          <Title level={3} style={{ margin: 0 }}>
            Discoverer
          </Title>
        }
      >
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Dragger {...discovererUploadProps}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
          </Dragger>
          <Flex gap={20} justify="space-between">
            <Button onClick={handdleDiscovererTest}>Start</Button>
            <Button disabled={!discovererTestFinish}>Result</Button>
          </Flex>
        </Space>
      </Card>

      <Card
        title={
          <Title level={3} style={{ margin: 0 }}>
            Annotator
          </Title>
        }
      >
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Dragger {...discovererUploadProps}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
          </Dragger>
          <Flex gap={20} justify="space-between">
            <Button onClick={handdleDiscovererTest}>Start</Button>
            <Button disabled={!discovererTestFinish}>Result</Button>
          </Flex>
        </Space>
      </Card>
      <Card
        title={
          <Title level={3} style={{ margin: 0 }}>
            Extractor
          </Title>
        }
      >
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Dragger {...discovererUploadProps}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
          </Dragger>
          <Flex gap={20} justify="space-between">
            <Button onClick={handdleDiscovererTest}>Start</Button>
            <Button disabled={!discovererTestFinish}>Result</Button>
          </Flex>
        </Space>
      </Card>
    </>,
  ];

  const tabConfig = [
    { label: 'Single', key: '1', index: 0 },
    { label: 'Discoverer+Annotator', key: '2', index: 1 },
    { label: 'Annotator+Extractor', key: '3', index: 2 },
    { label: 'All', key: '4', index: 3 },
  ];
  return (
    <Layout>
      <Content style={{ padding: '24px', maxWidth: 1200, margin: '0 auto' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Title level={2}>Gist WSV Test</Title>

          <Tabs
            defaultActiveKey="1"
            centered
            items={tabConfig.map(({ label, key, index }) => ({
              label,
              key,
              children: testModules[index],
            }))}
          />

          <Card
            title={
              <Title level={3} style={{ margin: 0 }}>
                SimpleLine
              </Title>
            }
          >
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <Layout>
                <Text>Trend-upward</Text>
                <SimpleLine data={lineData} type="trending" attribute="positive" color="#1890ff" />
              </Layout>

              <Layout>
                <Text>Trend-downward</Text>
                <SimpleLine data={lineData} type="trending" attribute="negative" color="#1890ff" />
              </Layout>

              <Layout>
                <Text>common</Text>
                <SimpleLine data={lineData} type="actual" color="#52c41a" />
              </Layout>
            </Space>
          </Card>

          <Card
            title={
              <Title level={3} style={{ margin: 0 }}>
                SimpleBar
              </Title>
            }
          >
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <Layout>
                <Text>comparison - monocolor</Text>
                <SimpleBar data={barData} type="comparison" color="#1890ff" />
              </Layout>

              <Layout>
                <Text>comparison - multicolors</Text>
                <SimpleBar data={barData} type="comparison" colors={['#1890ff', '#13c2c2', '#52c41a']} />
              </Layout>

              <Layout>
                <Text>rank - gradient</Text>
                <SimpleBar data={barData} type="rank" colors={['#722ed1', '#2f54eb', '#1890ff']} />
              </Layout>
            </Space>
          </Card>

          <Card
            title={
              <Title level={3} style={{ margin: 0 }}>
                SimpleStackedBar
              </Title>
            }
          >
            <SimpleStackedBar data={stackedData} colors={['#1890ff', '#13c2c2']} />
          </Card>

          <Card
            title={
              <Title level={3} style={{ margin: 0 }}>
                SimpleMaxMin
              </Title>
            }
          >
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <Layout>
                <Text>maximum</Text>
                <SimpleMaxMin min={0} max={100} current={80} />
              </Layout>

              <Layout>
                <Text>minimum</Text>
                <SimpleMaxMin min={0} max={100} current={20} />
              </Layout>
            </Space>
          </Card>

          <Card
            title={
              <Title level={3} style={{ margin: 0 }}>
                README
              </Title>
            }
          >
            <Paragraph>
              <pre
                style={{
                  background: token.colorFillTertiary,
                  padding: token.padding,
                  borderRadius: token.borderRadius,
                  margin: 0,
                }}
              >
                {`// 1. import
import { SimpleLine, SimpleBar, SimpleStackedBar, SimpleMaxMin } from 'gist-wsv';

// 2. prepare data
const data = [
  { x: 0, y: 0.5, label: 'Jan' },
  { x: 1, y: 0.8, label: 'Feb' },
  { x: 2, y: 0.2, label: 'Mar' },
];

// 3. using
<SimpleLine 
  data={data}
  type="trending"  // actual | nominal | trending | start-end
  attribute="positive"  // positive | negative | invariable
  color="#1890ff"
/>

<SimpleBar
  data={data}
  type="comparison"  // comparison | rank
  color="#1890ff"
  colors={['#1890ff', '#13c2c2', '#52c41a']}
/>`}
              </pre>
            </Paragraph>
          </Card>
        </Space>
      </Content>
    </Layout>
  );
};

export default GistTest;
