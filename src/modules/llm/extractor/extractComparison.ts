import {
  StructuredOutputParser,
  RegexParser,
  CombiningOutputParser,
} from "langchain/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { ChatOpenAI, ChatOpenAICallOptions } from "@langchain/openai";
import { ExtractorType, GistFactTypeAnnotation } from "../types";
import { ExtractorSystemInstruction, SystemInstruction } from "../visKB";
import { getZodFormatting } from "./utils";

const extrComp = async (
  model: ChatOpenAI<ChatOpenAICallOptions>,
  textContent: GistFactTypeAnnotation
) => {
  const specParser = StructuredOutputParser.fromZodSchema(
    getZodFormatting(textContent.type)
  );
  const typeParser = new RegexParser(
    /insightType: (comparison)/,
    ["insightType"],
    "noType"
  );
  const parser = new CombiningOutputParser(specParser, typeParser);

  const extrcompchain = RunnableSequence.from([
    PromptTemplate.fromTemplate(`
        ${SystemInstruction}
        ${ExtractorSystemInstruction}
        
        This sentence contains comparison. Comparison refers to the act of comparing two or more data attributes or comparing the target object with previous values, especially along a time series. 
        First, you should extract the object of comparison, usually an entity. Then convert the data into numbers. The value you extract should be the value of the comparison object and not the difference, if the context only contains information about the difference, e.g. a difference of 30, then please fill the base entity with value 0 and the comparison entity the difference value (in this case 30) based on the information.
        Specifically, for 'category_key', identify the subject of comparison with its context, e.g., "the category of GDP growth" instead of just "entity". But the 'value_key' of all data items should keep the same.
        For 'value_key', specify the exact context of the value being compared, e.g., "the GDP growth rate" instead of just "value". But the 'category_key' of all data items should keep the same.
        The user intends to use a bar chart to represent the comparison. Please find the most suitable location for placing the bar chart and output the previous word in the recommended location.
        \n{format_instructions}\n{insightType}\n{paragraph}
        `),
    model as any,
    parser,
  ]);
  // Categorize all data entities and data values  Extract dynamic key-value pairs representing objectives and their corresponding values with detailed content from the text blocks as required.

  const response = await extrcompchain.invoke({
    format_instructions: parser.getFormatInstructions(),
    insightType: "insightType:" + textContent.type,
    paragraph: "User:" + textContent.text,
  });
  // console.log(response);

  return response as ExtractorType;

  // // const newResponse = TransformData(response);
  // console.log(newResponse);
  // return newResponse;
};

export default extrComp;
