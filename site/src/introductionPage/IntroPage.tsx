import { useEffect, useRef, useState } from 'react';
import {
  Image,
  Button,
  Layout,
  Typography,
  Flex,
  Steps,
  ConfigProvider,
  Carousel,
  Row,
  Col,
  Space,
  Pagination,
  Divider,
} from 'antd';
import { GithubOutlined, FilePdfOutlined, LeftOutlined, RightOutlined, YoutubeOutlined } from '@ant-design/icons';
import {
  GistVis,
  overviewVideo,
  divHead,
  divContent,
  visContainer,
  bibtexContainer,
  titleContent,
  authors,
} from './IntroPageCSS.tsx';
import teaserImage from '../../static/teaser.png';
import GistVisVideo from '../../static/GistVis - Video Figure.mp4';
import pipelineImage from '../../static/GistVis-Pipeline.jpg';
import PipelinePage from './component/pipelinePage.tsx';
import { articles } from '../userstudy/articles/articledata.ts';
import { ArtcleProcess } from 'gist-wsv';
import BibtexCard from './component/bibtex.tsx';
import { Link } from 'react-router-dom';
import THEME from '../style/theme.tsx';
import { Footer } from 'antd/es/layout/layout';
const { Header, Content } = Layout;
const { Paragraph, Title, Text } = Typography;

const AuthorLinkComponent = ({ authorName, authorLink }: { authorName: string; authorLink?: string }) => {
  return authorLink ? (
    <Link
      style={{
        color: '#000000',
        textDecoration: 'underline',
      }}
      to={authorLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      {authorName}
    </Link>
  ) : (
    <Link
      style={{
        color: '#000000',
      }}
      to={`/`}
    >
      {authorName}
    </Link>
  );
};

const IntroPage = () => {
  const [stepsCurrent, setStepsCurrent] = useState(0);

  const [currentArticleIndex, setCurrentArticleIndex] = useState(1);
  // Refs for Previous and Next buttons
  const buttonPreviousRef = useRef<HTMLButtonElement>(null);
  const buttonNextRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setBrowserWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      video.currentTime = 1;
    };

    const handleSeeked = () => {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        video.poster = canvas.toDataURL();
      }
      video.removeEventListener('seeked', handleSeeked);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('seeked', handleSeeked);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('seeked', handleSeeked);
    };
  }, []);

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

  const items = [
    { title: 'Input', description: 'Plain document' },
    { title: 'Discoverer', description: 'Find unit segments' },
    { title: 'Annotator', description: 'Label unit segments' },
    { title: 'Extractor', description: 'Extract unit segment spec' },
    { title: 'Visualizer', description: 'Map spec to visualizations' },
    { title: 'Output', description: 'Augmented document' },
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

  const handlePageChange = (page: number) => {
    setCurrentArticleIndex(page);
  };

  return (
    <ConfigProvider theme={THEME}>
      <Layout style={{ alignContent: 'center', margin: 'auto' }}>
        <Header style={{ backgroundColor: '#ffffff', width: '70%', margin: 'auto', height: 'auto' }}>
          <Title style={GistVis}>GistVis</Title>
          <Title level={2} style={titleContent}>
            Automatic Generation of Word-scale Visualizations from Data-rich Documents
          </Title>
          <Paragraph style={authors}>
            <AuthorLinkComponent authorName="Ruishi Zou*" authorLink="https://motion115.github.io/" />,{' '}
            <AuthorLinkComponent authorName="Yinqi Tang*" />, <AuthorLinkComponent authorName="Jingzhu Chen" />,{' '}
            <AuthorLinkComponent authorName="Siyu Lu" />, <AuthorLinkComponent authorName="Yan Lu" />,{' '}
            <AuthorLinkComponent authorName="Yingfan Yang" />,{' '}
            <AuthorLinkComponent authorName="Chen Ye" authorLink="https://faculty.tongji.edu.cn/yechen/en/index.htm" />
          </Paragraph>
          <Paragraph style={authors}>* Equal contribution</Paragraph>
          <Space align="center" wrap style={{ justifyContent: 'center', display: 'flex' }}>
            <Link to="https://doi.org/10.48550/arXiv.2502.03784" target="_blank">
              <Button variant="filled" icon={<FilePdfOutlined />}>
                Paper
              </Button>
            </Link>
            <Link to="/home">
              <Button variant="outlined">Open GistVis</Button>
            </Link>
            <Link to="https://github.com/Motion115/GistVis" target="_blank">
              <Button variant="outlined" icon={<GithubOutlined />}>
                GitHub
              </Button>
            </Link>
          </Space>
        </Header>
        <Content style={{ backgroundColor: '#ffffff', width: '70%', margin: 'auto' }}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            {/* Introduction */}
            <Flex vertical align="center" style={{ marginTop: '2rem', padding: '1%' }}>
              <Image
                src={teaserImage}
                alt="teaser image"
                preview={false}
                style={{ width: '80%', maxWidth: '90rem', margin: '0 auto', padding: 'auto', display: 'flex' }}
              />
              <Paragraph style={{ marginTop: '2rem', textAlign: 'justify', lineHeight: '1.4' }}>
                GistVis is an innovative system that automatically generates word-scale visualizations to augment
                data-rich documents, thereby enhancing document-centric analysis. By leveraging large language models
                and design-driven techniques, GistVis decomposes the visualization process into four modular
                stages—Discoverer, Annotator, Extractor, and Visualizer—to accurately extract, annotate, and render key
                data insights directly from textual descriptions. This approach supports multiple data fact types such
                as comparison, proportion, trend, rank, extreme, and value, and seamlessly integrates interactive visual
                elements into the document to improve user comprehension and reduce cognitive load.
              </Paragraph>
            </Flex>
            {/* Overview */}
            <div>
              <Flex vertical gap={10}>
                <div style={{ width: '100%', alignSelf: 'flex-start' }}>
                  <h1 style={divHead}>Video Teaser</h1>
                  <Divider style={{ margin: '0 0 1% 0' }} />
                  <Flex gap={5}>
                    <Paragraph>
                      Check more detailed discussion about GistVis in our{' '}
                      <Link to="https://www.youtube.com/watch?v=OIjAvoWdVCo" target="_blank">
                        <YoutubeOutlined /> talk video.
                      </Link>
                    </Paragraph>
                  </Flex>
                </div>
                <video ref={videoRef} style={overviewVideo} controls muted>
                  <source src={GistVisVideo} type="video/mp4" />
                </video>
              </Flex>
            </div>
            {/* Overview */}
            {/* <Divider style={{ borderColor: 'rgba(217, 217, 217, 1)' }} /> */}
            {/* Pipeline */}
            <div>
              <h1 style={divHead}>Computation Pipeline</h1>
              <Divider style={{ margin: '0 0 1% 0' }} />
              <Flex vertical align="center" style={{ marginTop: '2rem', padding: '1%' }}>
                <Image
                  src={pipelineImage}
                  alt="pipelineImage"
                  style={{ width: '80%', maxWidth: '90rem', margin: 'auto', padding: 'auto', display: 'flex' }}
                  preview={false}
                />
              </Flex>
              {browserWidth > 650 ? (
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Steps current={stepsCurrent} onChange={pipelineChange} items={items}></Steps>
                  <Flex justify="center" gap={10}>
                    <Button ref={buttonPreviousRef} onClick={handlePrevious} disabled={stepsCurrent === 0}>
                      <LeftOutlined />
                      Previous
                    </Button>
                    <Button ref={buttonNextRef} onClick={handleNext} disabled={stepsCurrent === 5}>
                      Next
                      <RightOutlined />
                    </Button>
                  </Flex>
                  <p style={divContent}>
                    Click on the interactive components to dive deeper into the computation process.
                  </p>
                  <div style={{ width: '100%' }}>
                    <PipelinePage stage={stepsCurrent} />
                  </div>
                </Space>
              ) : (
                <div />
              )}
            </div>
            {/* Pipeline */}
            {/* <Divider style={{ borderColor: 'rgba(217, 217, 217, 1)' }} /> */}
            {/* Article Visualization */}
            <div>
              <h1 style={divHead}>Gallery</h1>
              <Divider style={{ margin: '0 0 1% 0' }} />
              <Paragraph>Generated documents used in user study.</Paragraph>
              <Paragraph>
                <blockquote>Article source: Pew Research</blockquote>
              </Paragraph>
              <Space direction="vertical" align="center">
                <div style={{ width: '90%', margin: 'auto', padding: 'auto' }}>
                  <Flex style={{ maxHeight: '30rem', overflow: 'scroll' }}>
                    {renderArticleContent(currentArticleIndex)}
                    {renderArticleContent(currentArticleIndex + 6)}
                  </Flex>
                  <Pagination
                    defaultCurrent={1}
                    current={currentArticleIndex}
                    total={6}
                    pageSize={1}
                    onChange={(page: number, pageSize: number) => handlePageChange(page)}
                    style={{ margin: 'auto', padding: 'auto', justifyContent: 'center' }}
                  />
                </div>
              </Space>
            </div>
            {/* Bibtex */}
            <div>
              <h1 style={divHead}>BibTex</h1>
              <Divider style={{ margin: 0 }} />
              <p style={divContent}>GistVis is currently conditionally accepted to ACM CHI 2025.</p>
              <BibtexCard />
            </div>
          </Space>
        </Content>
        <Footer style={{ backgroundColor: '#ffffff', width: '70%', margin: 'auto', height: '10rem' }}>
          © Copyright GistVis Development Team
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default IntroPage;
