import {
  StructuredOutputParser,
  RegexParser,
  CombiningOutputParser
} from "langchain/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
// import TransformData from "../transSpec";
import { ChatOpenAI, ChatOpenAICallOptions } from "@langchain/openai";
import { z } from "zod";
import { GistFactTypeAnnotation, ExtractorType } from "../types";
import { ExtractorSystemInstruction, SystemInstruction } from "../visKB";
import { getZodFormatting } from "./utils";

const extrVal = async (
  model: ChatOpenAI<ChatOpenAICallOptions>,
  textContent: GistFactTypeAnnotation
) => {
    const specParser = StructuredOutputParser.fromZodSchema(
      getZodFormatting(textContent.type)
    );
  // const specParser = StructuredOutputParser.fromZodSchema(z.object({
  //   id: z.string().describe("unique id of text block"),
  //   context: z.string().describe("original text provided by the user"),
  //   spec: z.object({
  //     value1: z.string().describe("the value(already converted into numbers). If it does not exist, return NAN"),
  //     pos: z.string().describe("the numeric word(value)"),
  //   }),
  // }));
  const typeParser = new RegexParser(
    /insightType: (value)/,
    ["insightType"],
    "noType"
  );
  const parser = new CombiningOutputParser(specParser, typeParser);

  const extrvalchain = RunnableSequence.from([
    PromptTemplate.fromTemplate(`
        ${SystemInstruction}
        ${ExtractorSystemInstruction}

        This sentence contains value. Values are usually a numerical value with special meaning that have a significant impact on entities. 
        First, you should extract the value. Then you should convert it into numbers.
        The user intends to highlight the value. Please output the positions of the value. The highlighted positions should be the phrase that contains the value. The positions should be in the format of original text.
        Specifically, for 'category_key', identify the subject of comparison with its context, e.g., "the category of GDP growth" instead of just "entity". But the 'value_key' of all data items should keep the same.
        For 'value_key', specify the exact context of the value being compared, e.g., "the GDP growth rate" instead of just "value". But the 'category_key' of all data items should keep the same.
        \n{format_instructions}\n{insightType}\n{paragraph}
        `),
    model as any,
    parser,
  ]);

  const response = await extrvalchain.invoke({
    format_instructions: parser.getFormatInstructions(),
    insightType: "insightType:" + textContent.type,
    paragraph: "User:" + textContent.text,
  });

  console.dir(response)

  return response as ExtractorType;
  // console.dir(response);
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

  // console.dir(newResponse);
  // return newResponse;
};

export default extrVal;