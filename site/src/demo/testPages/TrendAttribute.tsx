import React, { useState, useRef} from "react";
import { getZodFormatting } from "../../modules/llm/extractor/utils";
import { PromptTemplate } from '@langchain/core/prompts';
import { RunnableSequence } from '@langchain/core/runnables';
import { StructuredOutputParser, RegexParser, CombiningOutputParser } from 'langchain/output_parsers';
import { Button, Card, Col, ConfigProvider, Input, Row, Typography, Layout } from "antd";
import { ChatOpenAI, ChatOpenAICallOptions } from '@langchain/openai';
import { ExtractorSystemInstruction, SystemInstruction } from '../../modules/llm/visKB';
import THEME from "../../style/theme";
import GistVisHeader from "../GistVisHeader";
import { Attribute, InsightType } from "../../modules/visualizer/types";
import { ExtractorType, GistFactTypeAnnotation } from '../../modules/llm/types';

import attributeTestData from '../../../static/test/pipeline/trend_attribute.json';

const {TextArea} = Input;
const {Text} = Typography;

type TrendAttribute = {
  attribute: string;
  entity: string;
}

const TestPage: React.FC = () => { 
  const [result, setResult] = useState<string>("");
  const [success, setSuccess] = useState<number>(0);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const stop = useRef<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [progressing, setProgressing] = useState<boolean>(false);

  const [useNewMethod, setUseNewMethod] = useState<boolean>(true);

  const invertMap = {
    positive: 'negative',
    negative: 'positive',
    stable: 'stable'
  }
  let data = attributeTestData.filter((item) => (item.attribute !== ""))
  data = data.map((item) => ({...item, content: item.content+' which is a '+ invertMap[item.attribute as 'positive'|'negative'|'stable']+ ' news'}));

  const [testData, setTestData] = useState<{content: string, attribute: string, result?: string}[]>(data);

  const setTestDataResult = (index: number, result: string) => {
    setTestData((prev) => {
      const newTestData = [...prev];
      newTestData[index].result = result;
      return newTestData;
    });
  }


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

  const newMethod = async (text: string) => {
    const typeParser = new RegexParser(
      /data entity: (.*?), data entity is (increasing|decreasing|stable) numerically/,
      ['entity','attribute'],
      'noType'
    );
    const parser = new CombiningOutputParser(typeParser);

    const extrtrendchain = RunnableSequence.from([
      PromptTemplate.fromTemplate(`
          ${SystemInstruction}
          You are given a sentence that contains data facts and other information. Other information may mislead you, so you should focus on the data facts only.
          The data fact is about a trend. You need to extract its numerical/statistical attribute.
          
          \n{formatInstructions}\n{paragraph}
          `),
      model as ChatOpenAI<ChatOpenAICallOptions>,
      parser,
    ]);
    
    const response = await extrtrendchain.invoke({
      formatInstructions: parser.getFormatInstructions(),
      paragraph: 'Sentence: ' + text,
    }) as TrendAttribute;
    const attrMap = {
      increasing: 'positive',
      decreasing: 'negative',
      stable: 'stable'
    }
    response.attribute = attrMap[response.attribute as 'increasing' | 'decreasing' | 'stable'];
    return response
  }

  const oldMethod = async (text: string) => {
    const specParser = StructuredOutputParser.fromZodSchema(getZodFormatting('trend'));
    const typeParser = new RegexParser(
      /insightType: (trend), attribute: (positive|negative)/,
      ['insightType', 'attribute'],
      'noType'
    );
    const parser = new CombiningOutputParser(specParser, typeParser);
    const extrtrendchain = RunnableSequence.from([
      PromptTemplate.fromTemplate(`
          ${SystemInstruction}
          ${ExtractorSystemInstruction}
          This sentence contains trend. Trend presents a general tendency over a time segment. 
          First, you should extract the subject of trend, usually an entity. Then, you should also extract data points of this trend. If none, mark as NAN. The value you extract should be the value of the trend object instead of the difference, if the context only contains information about the trend, e.g. the amount will decrease, then please fit the base entity with value 100 and the trend entity the difference value 0 based on the information. Finally, indicate whether its attribute(sentiment polarity) is positive or negative or neutral.
          Specifically, for 'category_key', identify the subject of comparison with its context, e.g., "the category of GDP growth" instead of just "entity". But the 'value_key' of all data items should keep the same.
          For 'value_key', specify the exact context of the value being compared, e.g., "the GDP growth rate" instead of just "value". But the 'category_key' of all data items should keep the same.
          The user intends to use a line chart to represent the trend. Please find the most suitable location for placing the line chart and output the previous word in the recommended location.
          \n{formatInstructions}\n{insightType}\n{paragraph}
          `),
      model as ChatOpenAI<ChatOpenAICallOptions>,
      parser,
    ]);
    const response = await extrtrendchain.invoke({
      formatInstructions: parser.getFormatInstructions(),
      insightType: 'insightType: ' + 'trend',
      paragraph: 'User:' + text,
    });
    const res = response as TrendAttribute;
    return res;
  }

  const getRes = async (text: string) => { 
    if (useNewMethod) {
      return await newMethod(text) as TrendAttribute;
    }
    return await oldMethod(text) as TrendAttribute;
  }

  const test = ()=>{
    setLoading(true);
    getRes(input).then((res) => {
      const { attribute } = res;
      console.log(res);
      setResult(`attribute: ${attribute}`);
    })
    .catch(error => {
      console.error("处理失败:", error);
      setResult("处理失败: " + error.message);
    })
    .finally(() => {
      setLoading(false);
    });
  }
  return(
    <ConfigProvider theme={THEME}>
      <GistVisHeader></GistVisHeader>
      <br />
      <Row>
        <Col span={24}>
          <Card>
            <Typography.Title level={2}>Test Page</Typography.Title>
            <Typography.Paragraph>
              This is a test page.
            </Typography.Paragraph>
          </Card>
        </Col>
      </Row>
      <TextArea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text here"
      />
      <Button
        onClick={test}
      >
        Run
      </Button>
      <Card loading={loading} title="Result">
        <Typography.Paragraph>
          {result}
        </Typography.Paragraph>
      </Card>

      <Card title="Test">
        <Layout>
          <Button
            onClick={() => {
              setUseNewMethod(!useNewMethod);
            }}
          >
            {'Method: ' + (useNewMethod ? 'new' : 'old')}
          </Button>
          <Button
            onClick={async () => {
              setSuccess(0);
              setProgress(0);
              setProgressing(true);
              for (const [index, item] of testData.entries()) {
                try {
                  const res = await getRes(item.content);
                  const { attribute } = res;
                  setTestDataResult(index, attribute);
                  setProgress((index + 1));
                  if (attribute === item.attribute) {
                    setSuccess((prev) => prev + 1);
                  }
                } catch (error) {
                  break;
                }
                if (stop.current) {
                  stop.current = false;
                  setProgress(0);
                  setSuccess(0);
                  break;
                }
              }
              setProgressing(false);
            }}
          >
            Run All
          </Button>
          <Button 
            onClick={() => {
              if (progressing) {
                stop.current = true;
              }
            }}
          >
            {`stop${stop.current?': stopping...':''}`}
          </Button>
          <Text>{`Progress: ${progress}/${testData.length} ${progressing?'progressing...':''}`}</Text>
          <Text>{`Success: ${success}/${progress}`}</Text>

          {
            testData.map((item, index) => {
              return (
                <Card key={index} title={`Test ${index}`}>
                  <Typography.Paragraph>
                    {item.content}
                  </Typography.Paragraph>
                  <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
                    <Button
                      onClick={() => {
                        getRes(item.content).then((res) => {
                          const { attribute, entity } = res;
                          setTestDataResult(index, attribute);
                          console.log('entity: ',entity);
                          
                        })
                        .catch(error => { 
                          setTestDataResult(index, error.message);
                        })
                      }}
                    >
                      Run
                    </Button>
                    <Text>{`expectToBe: ${item.attribute}`}</Text>
                    {item.result && item.result !== item.attribute && <Text type="danger">{`result: ${item.result}`}</Text>}
                    {item.result && item.result == item.attribute && <Text type="success">{`result: ${item.result}`}</Text>}
                  </div>
                </Card>
              )
            })
          }
        </Layout>
      </Card>
    </ConfigProvider>
  )
}

export default TestPage;