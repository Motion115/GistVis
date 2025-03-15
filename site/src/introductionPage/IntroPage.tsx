import React, { useRef, useState } from 'react';
import { Image, Button, Layout, Divider, Flex, Steps, ConfigProvider, Carousel, Row, Col } from 'antd';
import { GithubOutlined, FilePdfOutlined, LeftOutlined, RightOutlined, YoutubeOutlined } from '@ant-design/icons';
import {
  buttonGithub,
  buttonOpen,
  buttonPdf,
  GistVis,
  headerContent,
  headerStyle,
  buttonContainer,
  bottomButtonRow,
  introductionContent,
  overviewContainer,
  overviewVideo,
  pipelineContainer,
  divHead,
  divContent,
  stepsContainer,
  buttonPrevious,
  buttonNext,
  visContainer,
  sampleContainer,
  bibtexContainer,
  buttonYtb,
} from './IntroPageCSS.tsx';
import teaserImage from '../../static/teaser.png';
import GistVisVideo from '../../static/GistVis - Video Figure.mp4';
import pipelineImage from '../../static/GistVis-Pipeline.jpg';
import PipelinePage from './component/pipelinePage.tsx';
import { articles } from '../userstudy/articles/articledata.ts';
import { ArtcleProcess } from 'gist-wsv';
import BibtexCard from './component/bibtex.tsx';
import { Link } from 'react-router-dom';
const { Header, Content } = Layout;

const IntroPage = () => {
  const [hoverOpenButton, sethoverOpenButton] = useState(false);
  const [hoverPdfButton, sethoverPdfButton] = useState(false);
  const [hoverGithubButton, sethoverGithubButton] = useState(false);
  const [stepsCurrent, setStepsCurrent] = useState(0);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(1);
  // Refs for Previous and Next buttons
  const buttonPreviousRef = useRef<HTMLButtonElement>(null);
  const buttonNextRef = useRef<HTMLButtonElement>(null);

  // Handle Previous button click
  const handlePrevious = () => {
    if (stepsCurrent > 0) {
      setStepsCurrent(stepsCurrent - 1);
    }
  };

  // Handle Next button click
  const handleNext = () => {
    if (stepsCurrent < 5) {
      setStepsCurrent(stepsCurrent + 1);
    }
  };

  const openButtonStyle = {
    ...buttonOpen,
    backgroundColor: hoverOpenButton ? 'rgba(36, 140, 168, 1)' : 'rgba(48, 176, 199, 1)',
  };

  const pdfButtonStyle = {
    ...buttonPdf,
    backgroundColor: hoverPdfButton ? 'rgba(224, 67, 67, 1)' : 'rgba(255, 76, 76, 1)',
    transform: hoverPdfButton ? 'scale(1.05)' : 'scale(1)',
  };

  const githubButtonStyle = {
    ...buttonGithub,
    backgroundColor: hoverGithubButton ? 'rgba(74, 74, 74, 1)' : 'rgba(51, 51, 51, 1)',
    transform: hoverGithubButton ? 'scale(1.05)' : 'scale(1)',
  };

  const items = [
    { title: 'Input', description: 'origin article' },
    { title: 'Discoverer', description: 'Segmenting the article' },
    { title: 'Annotator', description: 'Labeling the segments' },
    { title: 'Extractor', description: 'Extracting data specifications' },
    { title: 'Visualizer', description: 'Mapping data to visualizations' },
    { title: 'Output', description: 'Final Article' },
  ];

  const pipelineChange = (current: number) => {
    setStepsCurrent(current);
    console.log(current);
  };

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
    <ConfigProvider
      theme={{
        token: {
          motionDurationSlow: '0.8s',
        },
      }}
    >
      <Layout style={{ alignContent: 'center', margin: 'auto' }}>
        <Header style={headerStyle}>
          <h1 style={GistVis}>GistVis</h1>
          <p style={headerContent}>Automatic Generation of Word-scale Visualizations from Data-rich Documents</p>
          <div style={buttonContainer}>
            <Link to="/home">
              <Button
                style={openButtonStyle}
                onMouseEnter={() => sethoverOpenButton(true)}
                onMouseLeave={() => sethoverOpenButton(false)}
              >
                open GistVis
              </Button>
            </Link>
            <div style={bottomButtonRow}>
              <Button
                style={pdfButtonStyle}
                target="_blank"
                href="https://doi.org/10.48550/arXiv.2502.03784"
                onMouseEnter={() => sethoverPdfButton(true)}
                onMouseLeave={() => sethoverPdfButton(false)}
              >
                <FilePdfOutlined style={{ fontSize: 20 }} />
                Paper
              </Button>
              <Button
                style={githubButtonStyle}
                target="_blank"
                href="https://github.com/Motion115/GistVis"
                onMouseEnter={() => sethoverGithubButton(true)}
                onMouseLeave={() => sethoverGithubButton(false)}
              >
                <GithubOutlined style={{ fontSize: 20 }} />
                GitHub
              </Button>
            </div>
          </div>
        </Header>
        <Content style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}>
          {/* Introduction */}
          <Flex vertical align="center" style={{ marginTop: '2rem' }}>
            <Image src={teaserImage} alt="teaser image" width={1156} height={348} preview={false} />
            <p style={introductionContent}>
              GistVis is an innovative system that automatically generates word-scale visualizations to augment
              data-rich documents, thereby enhancing document-centric analysis. By leveraging large language models and
              design-driven techniques, GistVis decomposes the visualization process into four modular
              stages—Discoverer, Annotator, Extractor, and Visualizer—to accurately extract, annotate, and render key
              data insights directly from textual descriptions. This approach supports multiple data fact types such as
              comparison, proportion, trend, rank, extreme, and value, and seamlessly integrates interactive visual
              elements into the document to improve user comprehension and reduce cognitive load.
            </p>
          </Flex>
          <Divider style={{ borderColor: 'rgba(217, 217, 217, 1)' }} />
          {/* Overview */}
          <Flex vertical style={overviewContainer} gap={10}>
            <div style={{ alignSelf: 'flex-start' }}>
              <h1 style={divHead}>Overview - Explore the Potential of GistVis</h1>
              <p style={divContent}>Click to watch the video and quickly discover the features of GistVis.</p>
              <Flex style={{ marginTop: '5px' }} gap={20}>
                <p style={{ ...divContent, lineHeight: '1.6', marginTop: '3px', marginBottom: '5px' }}>
                  For more details, click our Talk Video 👉
                </p>
                <Button
                  style={buttonYtb}
                  href="https://www.youtube.com/watch?v=OIjAvoWdVCo"
                  target="_blank"
                  size="small"
                >
                  <YoutubeOutlined />
                </Button>
              </Flex>
            </div>
            <video style={overviewVideo} controls autoPlay muted>
              <source src={GistVisVideo} type="video/mp4" />
            </video>
          </Flex>
          {/* Overview */}
          <Divider style={{ borderColor: 'rgba(217, 217, 217, 1)' }} />
          {/* Pipeline */}
          <Flex vertical style={pipelineContainer}>
            <div style={{ alignSelf: 'flex-start' }}>
              <h1 style={divHead}>Pipeline - From Discovery to Visualization</h1>
              <p style={divContent}>Click on the interactive components to dive deeper into the core processes.</p>
            </div>
            <div style={{ alignSelf: 'center' }}>
              <Image src={pipelineImage} alt="pipelineImage" width={1000} height={355} preview={false} />
            </div>
            <div style={stepsContainer}>
              <Steps current={stepsCurrent} onChange={pipelineChange} items={items}></Steps>
              <Flex vertical={stepsCurrent === 0 || stepsCurrent >= 4} style={{ width: '100%' }}>
                <PipelinePage stage={stepsCurrent} />
              </Flex>
              <Button
                ref={buttonPreviousRef}
                style={buttonPrevious}
                onClick={handlePrevious}
                disabled={stepsCurrent === 0}
              >
                Previous
              </Button>
              <Button ref={buttonNextRef} style={buttonNext} onClick={handleNext} disabled={stepsCurrent === 5}>
                Next
              </Button>
            </div>
          </Flex>
          {/* Pipeline */}
          <Divider style={{ borderColor: 'rgba(217, 217, 217, 1)' }} />
          {/* Article Visualization */}
          <Flex vertical style={visContainer} gap={20}>
            <div style={{ alignSelf: 'flex-start' }}>
              <h1 style={divHead}>Article Visualization with GistVis: Bringing Insights to Life</h1>
              <p style={divContent}>
                Experience how GistVis transforms complex articles into intuitive visual representations, revealing
                deeper insights at a glance.
              </p>
            </div>
            <div style={{ margin: '0 auto' }}>
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
                  style={sampleContainer}
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
            </div>
          </Flex>
          {/* Article Visualization */}
          <Divider style={{ borderColor: 'rgba(217, 217, 217, 1)' }} />
          {/* Bibtex */}
          <Flex vertical style={bibtexContainer} gap={20}>
            <div style={{ alignSelf: 'flex-start' }}>
              <h1 style={divHead}>BibTex</h1>
              <p style={divContent}>GistVis is currently conditionally accepted to ACM CHI 2025.</p>
            </div>
            <BibtexCard />
          </Flex>
          {/* Bibtex */}
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default IntroPage;
