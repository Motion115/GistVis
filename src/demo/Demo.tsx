import {
  ConfigProvider,
  Layout,
  Typography,
  Row,
  Col,
  Divider,
  Progress,
  Flex,
  Button,
  Carousel,
} from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import THEME from "../style/theme";
import ArtcleProcess from "./renderer";
// import Editor from "./editor";
import { DemoPage } from "./demoPage";
import React, { useRef, useState } from "react";
import { paragraphSpec } from "../modules/visualizer/types";
import { processStageAtom } from "../globalState";
import { useAtom } from "jotai";
import { articles } from "../userstudy/articles/articledata";
import { useEffect } from "react";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

const PublicityPage = () => {
  const [processStage, setProcessStage] = useAtom(processStageAtom);
  const [llmarticle, setLlmArticle] = useState<paragraphSpec[]>([]);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(1);
  const carouselRef = useRef<any>(null);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentArticleIndex((prevIndex) => {
  //       return prevIndex === 6 ? 1 : prevIndex + 1;
  //     });
  //   }, 5000);

  //   return () => clearInterval(intervalId);
  // }, []);

  // const nextArticle = () => {
  //   setCurrentArticleIndex((prevIndex) => {
  //     return prevIndex === 6 ? 1 : prevIndex + 1;
  //   });
  // };

  // const prevArticle = () => {
  //   setCurrentArticleIndex((prevIndex) => {
  //     return prevIndex === 1 ? 6 : prevIndex - 1;
  //   });
  // };

  const renderArticleContent = (index: number) => {
    const article = articles[index - 1];
    if (!article) return null;

    if (article.processed) {
      return (
        <div style={{ padding: "20px", minHeight: "200px" }}>
          <div>
            <p className="pre-wrap">
              <ArtcleProcess llmarticle={article.content} />
            </p>
          </div>
        </div>
      );
    }
    return (
      <div style={{ padding: "20px", minHeight: "200px" }}>
        <div className="content-wrapper1">
          <p className="pre-wrap">{article.content}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <ConfigProvider theme={THEME}>
        <Header>
          <Flex align="center" justify="space-between">
            <Text
              style={{ fontSize: "24px", padding: "2%", fontWeight: "bold" }}
            >
              GistVis
            </Text>
            <div
              style={{ fontSize: "24px", padding: "2%", fontWeight: "bold" }}
            >
              <Button href="/" type="link">Home</Button>
              <Button href="/interactive" type="link">User study interface</Button>
              <Button href="/llm_setting" type="link">Setting</Button>
              <Button href="/playground" type="link">Playground</Button>
            </div>
          </Flex>
        </Header>
        <Content style={{ padding: "2%", margin: "0 auto" }}>
          <Layout dir="vertical">
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <DemoPage />
              </Col>
            </Row>
            <Layout dir="vertical">
              <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
                Sample Articles
              </Text>
              <Text style={{ fontSize: "16px", fontStyle: "italic" }}>
                Automatically generated through GistVis, used in user study
              </Text>
              <Divider style={{ margin: "0 0 0 0" }} />
              <ConfigProvider
                theme={{
                  token: {
                    colorBgContainer: " rgba(76, 144, 226, 0.8)",
                  },
                }}
              >
                <Carousel
                  autoplay
                  arrows
                  infinite={true}
                  dotPosition="top"
                  style={{ padding: "10px 0", background: "#ffffff" }}
                  prevArrow={<LeftOutlined />}
                  nextArrow={<RightOutlined />}
                  effect="fade"
                  autoplaySpeed={5000}
                >
                  <div>
                    <Row gutter={[16, 16]} className="content-wrapper1">
                      <Col span={12}>
                        {renderArticleContent(currentArticleIndex)}
                      </Col>
                      <Col span={12}>
                        {renderArticleContent(currentArticleIndex + 6)}
                      </Col>
                    </Row>
                  </div>
                  <div>
                    <Row gutter={[16, 16]} className="content-wrapper1">
                      <Col span={12}>
                        {renderArticleContent(currentArticleIndex + 1)}
                      </Col>
                      <Col span={12}>
                        {renderArticleContent(currentArticleIndex + 7)}
                      </Col>
                    </Row>
                  </div>
                  <div>
                    <Row gutter={[16, 16]} className="content-wrapper1">
                      <Col span={12}>
                        {renderArticleContent(currentArticleIndex + 2)}
                      </Col>
                      <Col span={12}>
                        {renderArticleContent(currentArticleIndex + 8)}
                      </Col>
                    </Row>
                  </div>
                  <div>
                    <Row gutter={[16, 16]} className="content-wrapper1">
                      <Col span={12}>
                        {renderArticleContent(currentArticleIndex + 3)}
                      </Col>
                      <Col span={12}>
                        {renderArticleContent(currentArticleIndex + 9)}
                      </Col>
                    </Row>
                  </div>
                  <div>
                    <Row gutter={[16, 16]} className="content-wrapper1">
                      <Col span={12}>
                        {renderArticleContent(currentArticleIndex + 4)}
                      </Col>
                      <Col span={12}>
                        {renderArticleContent(currentArticleIndex + 10)}
                      </Col>
                    </Row>
                  </div>
                  <div>
                    <Row gutter={[16, 16]} className="content-wrapper1">
                      <Col span={12}>
                        {renderArticleContent(currentArticleIndex + 5)}
                      </Col>
                      <Col span={12}>
                        {renderArticleContent(currentArticleIndex + 11)}
                      </Col>
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
        </Content>
      </ConfigProvider>
    </div>
  );
};

export default PublicityPage;
