import React from 'react';
import { SimpleLine, SimpleBar, SimpleStackedBar, SimpleMaxMin } from 'gist-wsv';
import { Layout, Typography, Card, Space, theme } from 'antd';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;

export const GistTest: React.FC = () => {
  const { token } = theme.useToken();

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

  return (
    <Layout>
      <Content style={{ padding: '24px', maxWidth: 1200, margin: '0 auto' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Title level={2}>Gist WSV Test</Title>

          <Card
            title={
              <Title level={3} style={{ margin: 0 }}>
                1. SimpleLine
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
                2. SimpleBar
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
                3. SimpleStackedBar
              </Title>
            }
          >
            <SimpleStackedBar data={stackedData} colors={['#1890ff', '#13c2c2']} />
          </Card>

          <Card
            title={
              <Title level={3} style={{ margin: 0 }}>
                4. SimpleMaxMin
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
