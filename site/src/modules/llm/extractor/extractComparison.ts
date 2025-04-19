import { StructuredOutputParser, RegexParser, CombiningOutputParser } from 'langchain/output_parsers';
import { PromptTemplate } from '@langchain/core/prompts';
import { RunnableSequence } from '@langchain/core/runnables';
import { ChatOpenAI, ChatOpenAICallOptions } from '@langchain/openai';
import { ExtractorType, GistFactTypeAnnotation } from '../types';
import { ExtractorSystemInstruction, SystemInstruction } from '../visKB';
import { getZodFormatting } from './utils';

const extrComp = async (model: ChatOpenAI<ChatOpenAICallOptions>, textContent: GistFactTypeAnnotation) => {
  const specParser = StructuredOutputParser.fromZodSchema(getZodFormatting(textContent.type));
  const typeParser = new RegexParser(/insightType: (comparison)/, ['insightType'], 'noType');
  const parser = new CombiningOutputParser(specParser, typeParser);

  const extrcompchain = RunnableSequence.from([
    PromptTemplate.fromTemplate(`
        ${SystemInstruction}
        ${ExtractorSystemInstruction}
        
        This sentence contains comparison. Comparison refers to the act of comparing two or more data attributes or comparing the target object with previous values, especially along a time series. 
        First, you should extract the objects of comparison, usually entities. Then, determine how to populate the data values based on the information provided in the sentence, following these prioritized steps:
        1.  Direct Numerical Values: If specific numerical values are present for the comparison objects, extract these exact values. Ensure the value extracted is the object's actual value, not a difference.
        2.  Difference Only: If the context only provides the difference between the objects (e.g., 'a difference of 30', 'A is 30 higher than B'), assign the base entity a value of 0 and the comparison entity the value representing the difference (e.g., 30), based on the information.
        3.  Missing or Incomplete Numerical Data: If specific numerical values are absent or insufficient for direct comparison (e.g., 'A performed better than B' without numbers), analyze the sentence's semantics to understand the relative relationship. In this scenario, instead of numerical values, populate the relevant fields in the output structure by indicating which entity is relatively 'higher' and which is 'lower', strictly following the specified format instructions.
        Specifically, for 'category_key', identify the subject of comparison with its context, e.g., "the category of GDP growth" instead of just "entity". But the 'value_key' of all data items should keep the same.
        For 'value_key', specify the exact context of the value being compared, e.g., "the GDP growth rate" instead of just "value". But the 'category_key' of all data items should keep the same.
        The user intends to use a bar chart to represent the comparison. Please find the most suitable location for placing the bar chart and output the previous word in the recommended location.
        \n{formatInstructions}\n{insightType}\n{paragraph}
        `),
    model as ChatOpenAI<ChatOpenAICallOptions>,
    parser,
  ]);
  // Categorize all data entities and data values  Extract dynamic key-value pairs representing objectives and their corresponding values with detailed content from the text blocks as required.

  const response = await extrcompchain.invoke({
    formatInstructions: parser.getFormatInstructions(),
    insightType: 'insightType:' + textContent.type,
    paragraph: 'User:' + textContent.text,
  });
  // console.log(response);
  return response as ExtractorType;

  // // const newResponse = TransformData(response);
  // console.log(newResponse);
  // return newResponse;
};

export default extrComp;
