import { StructuredOutputParser, RegexParser, CombiningOutputParser } from 'langchain/output_parsers';
import { PromptTemplate } from '@langchain/core/prompts';
import { RunnableSequence } from '@langchain/core/runnables';
// import TransformData from "../transSpec";
import { ChatOpenAI, ChatOpenAICallOptions } from '@langchain/openai';
import { ExtractorType, GistFactTypeAnnotation } from '../types';
import { ExtractorSystemInstruction, SystemInstruction } from '../visKB';
import { getZodFormatting } from './utils';

const invariableKeywords = [
  'unchanged',
  'stable',
  'constant',
  'virtually unchanged',
  'remain',
  'maintained'
];

const extrTrend = async (model: ChatOpenAI<ChatOpenAICallOptions>, textContent: GistFactTypeAnnotation) => {
  const specParser = StructuredOutputParser.fromZodSchema(getZodFormatting(textContent.type));
  const typeParser = new RegexParser(
    /insightType: (trend), attribute: (positive|negative|invariable)/,
    ['insightType', 'attribute'],
    'noType'
  );
  const parser = new CombiningOutputParser(specParser, typeParser);

  const extrtrendchain = RunnableSequence.from([
    PromptTemplate.fromTemplate(`
        ${SystemInstruction}
        ${ExtractorSystemInstruction}
        This sentence contains trend. Trend presents a general tendency over a time segment. 
        First, you should extract the subject of trend, usually an entity. Then, you should also extract data points of this trend. 
        If none, mark as NAN. The value you extract should be the value of the trend object instead of the difference.
        For trend detection:
          If the values show significant increase, mark as "positive".
          If the values show significant decrease, mark as "negative".
          If the values remain relatively stable (variation within ±10%), mark as "invariable".
        If the context only contains information about the trend:
          For increasing/decreasing trends: e.g. the amount will decrease, fit base entity with value 100 and the trend entity the difference value 0 based on the information.
          For invariable trends: e.g. the U.S average science score was virtually unchanged, use the same value for all data points.
        Specifically, for 'category_key', identify the subject with its context, e.g., "the category of GDP" instead of just "entity". But the 'value_key' of all data items should keep the same.
        For 'value_key', specify the exact context of the value being compared, e.g., "the GDP growth rate" instead of just "value". But the 'category_key' of all data items should keep the same.
        The user intends to use a line chart to represent the trend. Please find the most suitable location for placing the line chart and output the previous word in the recommended location.
        \n{formatInstructions}\n{insightType}\n{paragraph}
        `),
    model as ChatOpenAI<ChatOpenAICallOptions>,
    parser,
  ]);

  const response = await extrtrendchain.invoke({
    formatInstructions: parser.getFormatInstructions(),
    insightType: 'insightType:' + textContent.type,
    paragraph: 'User:' + textContent.text,
  });
  
  // console.dir(response);
  return response as ExtractorType;
  // const newResponse = TransformData(response);
  // {
  //   ...response,
  //   dataspec: response.dataspec.map(
  //     ({ category_key, category_value, value_key, value_value }) => {
  //       return {
  //         [category_key]: category_value,
  //         [value_key]: value_value,
  //       };
  //     }
  //   ),
  // };
  // console.log(newResponse);
  // return newResponse;
};

export default extrTrend;
