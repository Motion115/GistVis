import React, { useState, useEffect, ReactNode } from "react";
import { ChatOpenAI } from "@langchain/openai";
import { ConfigProvider, Layout, Typography, Button, Flex, Divider,Tooltip, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import THEME from "@src/style/theme";

import PipelineBlock from "@src/components/playground/pipelineBlock";
import {paragraphSpec} from "@src/modules/visualizer/types";

import splitInsight from "@src/modules/llm/discoverer/discoverer";
import { processParagraphs } from "@src/modules/llm/annotator/annotator";
import {extractDataForParagraphs} from "@src/modules/llm/extractor/extractor";
import ArtcleProcess from "@src/demo/renderer";
import { set } from "lodash";

const { Header, Content } = Layout;
const { Text } = Typography;

const PlaygroundPage = () => {
  
  // discoverer
  const [discovererInputText, setDiscovererInputText] = useState("");
  const [discovererOutputText, setDiscovererOutputText] = useState("");

  // annotator
  const [annotatorInputText, setAnnotatorInputText] = useState("");
  const [annotatorOutputText, setAnnotatorOutputText] = useState("");

  // extractor
  const [extractorInputText, setExtractorInputText] = useState("");
  const [extractorOutputText, setExtractorOutputText] = useState("");

  // visualizer
  const [visualizerInputText, setVisualizerInputText] = useState("");
  const [visualizerOutputText, setVisualizerOutputText] = useState("");
  const [visualizerOutput, setVisualizerOutput] = useState<ReactNode>();

  const envVariables = JSON.parse(localStorage.getItem("envVariables") as any);
  
  // return chat object from the dynamic envVariables
  const chat = ()=>{return envVariables.REACT_APP_LLM_API_KEY && envVariables.REACT_APP_LLM_MODEL_NAME ? new ChatOpenAI({
    temperature: 0.7,
    topP: 1,
    n: 1,
    streaming: false,
    verbose: false,
    modelName: envVariables.REACT_APP_LLM_MODEL_NAME,
    openAIApiKey: envVariables.REACT_APP_LLM_API_KEY,
    configuration: {
      apiKey: envVariables.REACT_APP_LLM_API_KEY,
      baseURL: envVariables.REACT_APP_LLM_URL_BASE
    },
  }) : null;}
  
  // start-html
  return (
    <ConfigProvider theme={THEME}>
      {/* start-header */}
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
      {/* start-content */}
      <Content style={{ padding: "2%", margin: "0 auto" }}>
        {/* start-subtitle */}
        <Layout dir="verticle">
          {/* line1-fixed */}
          <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
            Playground
          </Text>
          {/* board: display the infomation of processes */}
          <Text style={{ fontSize: "16px", fontStyle: "italic" }}>
            Test modules interactively
          </Text>
          <Divider style={{ margin: "0 0 0 0" }} />
        </Layout>
        {/* end-subtitle */}

        {/* start-pipelineBlock */}
        
        {/* Discoverer */}
        {PipelineBlock({
          blockTitle: "Discoverer",
          run: () => {
            return splitInsight(chat() as any, [discovererInputText]);
          },
          inputPlaceholder: "Type unspitted text here",
          inputText: discovererInputText,
          outputText: discovererOutputText,
          lastStageOutput: undefined,
          setInputText: setDiscovererInputText,
          setOutputText: setDiscovererOutputText,
          envInputText: process.env.REACT_APP_DINP_DISCOVERER||undefined,
        })}

        {/* Annotator */}
        {PipelineBlock({
          blockTitle: "Annotator",
          run: () => {
            return processParagraphs(JSON.parse(annotatorInputText),chat() as any);
          },
          inputPlaceholder: "Type noType paragraphSpec[] JSON string here",
          inputText: annotatorInputText,
          outputText: annotatorOutputText,
          lastStageOutput: discovererOutputText,
          setInputText: setAnnotatorInputText,
          setOutputText: setAnnotatorOutputText,
          envInputText: process.env.REACT_APP_DINP_ANNOTATOR||undefined,
        })}

        {/* Extractor */}
        {PipelineBlock({
          blockTitle: "Extractor",
          run: () => {
            return extractDataForParagraphs(JSON.parse(extractorInputText),chat() as any);
          },
          inputPlaceholder: "Type \"hasType\" paragraphSpec[] JSON string here",
          inputText: extractorInputText,
          outputText: extractorOutputText,
          lastStageOutput: annotatorOutputText,
          setInputText: setExtractorInputText,
          setOutputText: setExtractorOutputText,
          envInputText: process.env.REACT_APP_DINP_EXTRACTOR||undefined,
        })}

        {/* visualizer */}
        {PipelineBlock({
          blockTitle: "Visualizer",
          run: () => {
            setVisualizerOutput(ArtcleProcess({llmarticle: JSON.parse(visualizerInputText)}));
          },
          inputPlaceholder: "Type extracted paragraphSpec[] JSON string here",
          inputText: visualizerInputText,
          lastStageOutput: extractorOutputText,
          setInputText: setVisualizerInputText,
          envInputText: process.env.REACT_APP_DINP_VISUALIZER||undefined,
          resultRenderer: () => {
            return visualizerOutput
          }
        })}

        {/* end-pipelineBlock */}

      </Content>
    </ConfigProvider>
  );
  // end-html
};

export default PlaygroundPage;
