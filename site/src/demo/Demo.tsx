import { ConfigProvider, Layout, Typography, Row, Col, Divider, Flex, Button, Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import THEME from '../style/theme';
import ArtcleProcess from '../modules/visualizer/renderer/renderer';
// import Editor from "./editor";
import { DemoPage } from './demoPage';
import DemoPipeline from './pipeline/DemoPipeline';
import React, { useState } from 'react';
import { articles } from '../userstudy/articles/articledata';
import MenuBar from './commonElement/menuBar';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

const PublicityPage = () => {
  const [currentArticleIndex, setCurrentArticleIndex] = useState(1);

  const renderArticleContent = (index: number) => {
    const article = articles[index - 1];
    if (!article) return null;

    if (article.processed) {
      return (
        <div style={{ padding: '20px', minHeight: '200px' }}>
          <div>
            <p className="pre-wrap">
              <ArtcleProcess llmarticle={article.content} />
            </p>
          </div>
        </div>
      );
    }
    return (
      <div style={{ padding: '20px', minHeight: '200px' }}>
        <div>
          <p className="pre-wrap">{article.content}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <ConfigProvider theme={THEME}>
        <MenuBar />
        <Content style={{ padding: '2%', margin: '0 auto' }}>
          <Layout dir="vertical">
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <DemoPage />
              </Col>
            </Row>
            <Layout dir="vertical">
              <Text style={{ fontSize: '20px', fontWeight: 'bold' }}>Sample Articles</Text>
              <Text style={{ fontSize: '16px', fontStyle: 'italic' }}>
                Automatically generated through GistVis, used in user study
              </Text>
              <Divider style={{ margin: '0 0 0 0' }} />
              <ConfigProvider
                theme={{
                  token: {
                    colorBgContainer: ' rgba(76, 144, 226, 0.8)',
                  },
                }}
              >
                <Carousel
                  autoplay
                  arrows
                  infinite={true}
                  dotPosition="top"
                  style={{ padding: '10px 0', background: '#ffffff' }}
                  prevArrow={<LeftOutlined />}
                  nextArrow={<RightOutlined />}
                  effect="fade"
                  autoplaySpeed={5000}
                >
                  <div>
                    <Row gutter={[16, 16]} className="content-wrapper1">
                      <Col span={12}>{renderArticleContent(currentArticleIndex)}</Col>
                      <Col span={12}>{renderArticleContent(currentArticleIndex + 6)}</Col>
                    </Row>
                  </div>
                  <div>
                    <Row gutter={[16, 16]} className="content-wrapper1">
                      <Col span={12}>{renderArticleContent(currentArticleIndex + 1)}</Col>
                      <Col span={12}>{renderArticleContent(currentArticleIndex + 7)}</Col>
                    </Row>
                  </div>
                  <div>
                    <Row gutter={[16, 16]} className="content-wrapper1">
                      <Col span={12}>{renderArticleContent(currentArticleIndex + 2)}</Col>
                      <Col span={12}>{renderArticleContent(currentArticleIndex + 8)}</Col>
                    </Row>
                  </div>
                  <div>
                    <Row gutter={[16, 16]} className="content-wrapper1">
                      <Col span={12}>{renderArticleContent(currentArticleIndex + 3)}</Col>
                      <Col span={12}>{renderArticleContent(currentArticleIndex + 9)}</Col>
                    </Row>
                  </div>
                  <div>
                    <Row gutter={[16, 16]} className="content-wrapper1">
                      <Col span={12}>{renderArticleContent(currentArticleIndex + 4)}</Col>
                      <Col span={12}>{renderArticleContent(currentArticleIndex + 10)}</Col>
                    </Row>
                  </div>
                  <div>
                    <Row gutter={[16, 16]} className="content-wrapper1">
                      <Col span={12}>{renderArticleContent(currentArticleIndex + 5)}</Col>
                      <Col span={12}>{renderArticleContent(currentArticleIndex + 11)}</Col>
                    </Row>
                  </div>
                </Carousel>
              </ConfigProvider>
            </Layout>
            {/* <Row gutter={[16, 16]}>
              <Col span={24}>
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <Button onClick={prevArticle} style={{ marginRight: "10px" }}>
                    Previous
                  </Button>
                  <Button onClick={nextArticle}>Next</Button>
                </div>
              </Col>
            </Row> */}
          </Layout>

          {/* <Divider />
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <DemoPipeline />
            </Col>
          </Row> */}

          {/* <Layout dir="vertical">
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Text style={{ fontSize: '20px', fontWeight: 'bold' }}>Input Article</Text>
                <Divider style={{ margin: '0 0 2% 0' }} />
                <Editor
                  // changeArticle={changeArticle}
                  changeLlmArticle={setLlmArticle}
                />
              </Col>
              <Col span={12}>
                <Text style={{ fontSize: '20px', fontWeight: 'bold' }}>Rendered Result</Text>
                <Divider style={{ margin: '0 0 2% 0' }} />
                <Flex gap="middle" justify="space-around" wrap="nowrap">
                  <Text style={{ whiteSpace: 'nowrap' }}>Progress: </Text>
                  <Progress percent={processStage * 25} />
                </Flex>
                <ArtcleProcess llmarticle={llmarticle} />
              </Col>
            </Row>
          </Layout> */}
        </Content>
      </ConfigProvider>
    </div>
  );
};

export default PublicityPage;
