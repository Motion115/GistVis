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

const extrTrend = async (
  model: ChatOpenAI<ChatOpenAICallOptions>,
  textContent: GistFactTypeAnnotation
) => {
  const specParser = StructuredOutputParser.fromZodSchema(
    getZodFormatting(textContent.type)
  );
  const typeParser = new RegexParser(
    /insightType: (trend), attribute: (positive|negative)/,
    ["insightType", "attribute"],
    "noType"
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
        \n{format_instructions}\n{insightType}\n{paragraph}
        `),
    model as any,
    parser,
  ]);

  const response = await extrtrendchain.invoke({
    format_instructions: parser.getFormatInstructions(),
    insightType: "insightType:" + textContent.type,
    paragraph: "User:" + textContent.text,
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
