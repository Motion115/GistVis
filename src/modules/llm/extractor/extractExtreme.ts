import {
  StructuredOutputParser,
  RegexParser,
  CombiningOutputParser,
} from "langchain/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
// import TransformData from "../transSpec";
import { z } from "zod";
import { ChatOpenAI, ChatOpenAICallOptions } from "@langchain/openai";
import { ExtractorType, GistFactTypeAnnotation } from "../types";
import { ExtractorSystemInstruction, SystemInstruction } from "../visKB";
import { getZodFormatting } from "./utils";

const extrExtreme = async (
  model: ChatOpenAI<ChatOpenAICallOptions>,
  textContent: GistFactTypeAnnotation
) => {
  const specParser = StructuredOutputParser.fromZodSchema(
    getZodFormatting(textContent.type)
  );

  const typeParser = new RegexParser(
    /insightType: (extreme), attribute: (maximum|minimum)/,
    ["type", "attribute"],
    "noType"
  );
  const parser = new CombiningOutputParser(specParser, typeParser);

  const extrextrechain = RunnableSequence.from([
    PromptTemplate.fromTemplate(`
        ${SystemInstruction}
        You have to extract entities, numerical values, and other content from text blocks as required. 
        This sentence contains extreme. Extreme refers to the extreme data cases along with the data attributes or within a certain range, such as maximum and minimum. 
        First, you should extract the value of extreme. Then you should convert it into numbers. Finally, you need to indicate whether this extreme is the maximum or minimum value.
        Specifically, for 'categoryKey', identify the subject of comparison with its context, e.g., "the category of GDP growth" instead of just "entity". But the 'value_key' of all data items should keep the same.
        For 'value_key', specify the exact context of the value that is the extreme value, e.g., "the GDP growth rate" instead of just "value". But the 'category_key' of all data items should keep the same.
        The user intends to highlight the value of extreme. Please output the position of the extreme.
        \n{format_instructions}\n{insightType}\n{paragraph}
        `),
    model as any,
    parser,
  ]);

  const response = await extrextrechain.invoke({
    format_instructions: parser.getFormatInstructions(),
    insightType: "insightType:" + textContent.type,
    paragraph: "User:" + textContent.text,
  });

  // console.dir(response);
  return response as ExtractorType;
  // const newResponse = TransformData(response);

  // {
  //   ...response,
  //   dataspec: response.dataspec.map(({ category_key, category_value, value_key, value_value }) => {
  //     return {
  //       [category_key]: category_value,
  //       [value_key]: value_value
  //     };
  //   })
  // };
  // console.log(newResponse);
  // return newResponse;
};

export default extrExtreme;
