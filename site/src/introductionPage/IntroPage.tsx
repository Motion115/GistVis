import React, { useEffect, useRef, useState } from 'react';
import { Image, Button, Layout, Divider, Flex, Steps, ConfigProvider, Descriptions } from 'antd';
import { GithubOutlined, FilePdfOutlined } from '@ant-design/icons';
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
} from './IntroPageCSS.tsx';
import teaserImage from '../../static/teaser.png';
import GistVisVideo from '../../static/GistVis - Video Figure.mp4';
import pipelineImage from '../../static/GistVis-Pipeline.jpg';
import PipelinePage from './pipelinePage.tsx';
const { Header, Content } = Layout;

const IntroPage = () => {
  const [hoverOpenButton, sethoverOpenButton] = useState(false);
  const [hoverPdfButton, sethoverPdfButton] = useState(false);
  const [hoverGithubButton, sethoverGithubButton] = useState(false);
  const [stepsCurrent, setStepsCurrent] = useState(0);
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
  // Effect to scroll to the button when stepsCurrent changes
  useEffect(() => {
    // Check if the Next button exists and scroll it into view if needed
    if (buttonNextRef.current) {
      buttonNextRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [stepsCurrent]);
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

  return (
    <ConfigProvider
      theme={{
        token: {
          motionDurationSlow: '0.8s',
        },
      }}
    >
      <Layout>
        <Header style={headerStyle}>
          <h1 style={GistVis}>GistVis</h1>
          <p style={headerContent}>Automatic Generation of Word-scale Visualizations from Data-rich Documents</p>
          <div style={buttonContainer}>
            <Button
              style={openButtonStyle}
              href="\GistVis"
              onMouseEnter={() => sethoverOpenButton(true)}
              onMouseLeave={() => sethoverOpenButton(false)}
            >
              open GistVis
            </Button>
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
            <Image src={teaserImage} alt="teaser image" width={1156} height={348} />
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
          <Flex vertical style={overviewContainer} gap={20}>
            <div style={{ alignSelf: 'flex-start' }}>
              <h1 style={divHead}>Overview - Explore the Potential of GistVis</h1>
              <p style={divContent}>Click to watch the video and quickly discover the features of GistVis.</p>
            </div>
            <video style={overviewVideo} controls>
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
              <Image src={pipelineImage} alt="pipelineImage" width={1000} height={355} />
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
          <Flex vertical style={VisContainer} gap={20}>
            <div style={{ alignSelf: 'flex-start' }}>
              <h1 style={divHead}>Article Visualization with GistVis: Bringing Insights to Life</h1>
              <p style={divContent}>
                Experience how GistVis transforms complex articles into intuitive visual representations, revealing
                deeper insights at a glance.
              </p>
            </div>
          </Flex>
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default IntroPage;
