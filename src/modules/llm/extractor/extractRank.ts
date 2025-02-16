import {
  StructuredOutputParser,
  RegexParser,
  CombiningOutputParser,
} from "langchain/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
// import TransformData from "../transSpec";
import { ChatOpenAI, ChatOpenAICallOptions } from "@langchain/openai";
import { z } from "zod";
import { ExtractorType, GistFactTypeAnnotation } from "../types";
import { ExtractorSystemInstruction, SystemInstruction } from "../visKB";
import { getZodFormatting } from "./utils";

const extrRank = async (
  model: ChatOpenAI<ChatOpenAICallOptions>,
  textContent: GistFactTypeAnnotation
) => {
  const specParser = StructuredOutputParser.fromZodSchema(
    getZodFormatting(textContent.type)
  );
  const typeParser = new RegexParser(
    /insightType: (rank)/,
    ["insightType"],
    "noType"
  );
  const parser = new CombiningOutputParser(specParser, typeParser);
  // console.log(textContent);
  const extrrankchain = RunnableSequence.from([
    PromptTemplate.fromTemplate(`
        ${SystemInstruction}
        ${ExtractorSystemInstruction}
        This sentence contains rank. Rank refers to sort the data attributes based on their values and show the position of selected data attributes. 
        First, you should extract the subject of rank, usually an entity. Next, extract rankings of identified entities and convert them into numbers as (value: 1). If the ranking is non-numeric, such as "great", prioritize them based on their qualitative level and convert them into numbers. If the context only contains information about the rank, e.g. A ranks below average, then please fit the base entity A with a value 2 and the other entity average with a value 1 based on the information.
        For 'value_key', specify the exact context of the value being compared, e.g., "the GDP growth rate" instead of just "value". But the 'category_key' of all data items should keep the same.
        The user intends to use a bar chart to represent the rank. Please find the most suitable location for placing the bar chart and output the previous word in the recommended location.
        \n{format_instructions}\n{insightType}\n{paragraph}
        `),
    model as any,
    parser,
  ]);

  const response = await extrrankchain.invoke({
    format_instructions: parser.getFormatInstructions(),
    insightType: "insightType:" + textContent.type,
    paragraph: "User:" + textContent.text,
  });
  console.log(response);

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

export default extrRank;

// const answerParser = StructuredOutputParser.fromNamesAndDescriptions({
//   id: "unique id of text block",
//   text: "original text provided by the user",
//   entity1: "subject of rank, usually an entity",
//   value1:
//     "the ranking of the entity(already converted into numbers). If it does not exist, return NAN",
//   pos: "The previous word in the recommended location",
// });
// const specParser = StructuredOutputParser.fromZodSchema(z.object({
//   id: z.string().describe("unique id of text block"),
//   context: z.string().describe("original text provided by the user"),
//   spec: z.object({
//     value1: z.string().describe("the ranking of the entity(already converted into numbers). If it does not exist, return NAN"),
//     pos: z.string().describe("The previous word in the recommended location"),
//   }),
// }));
// const specParser = StructuredOutputParser.fromZodSchema(z.object({
//   id: z.string().describe("unique id of text block"),
//   context: z.string().describe("original text provided by the user"),
//   spec: z.object({
//     value1: z.string().describe("the ranking of the entity(already converted into numbers). If it does not exist, return NAN"),
//     pos: z.string().describe("The previous word in the recommended location"),
//   }),
// }));
