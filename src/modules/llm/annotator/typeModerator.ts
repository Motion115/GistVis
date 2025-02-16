import {
  StructuredOutputParser,
  RegexParser,
  CombiningOutputParser,
  CustomListOutputParser,
} from "langchain/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { ChatOpenAI, ChatOpenAICallOptions } from "@langchain/openai";
import { GistFactTypeAnnotation } from "../types";
import { SystemInstruction, gistKB } from "../visKB";
import { InsightType, VisInsightType } from "../../visualizer/types";

const runMatch = async (
  model: ChatOpenAI<ChatOpenAICallOptions>,
  textContent: string,
  candidateTypes: string[]
) => {
  const candidateTypesRegex = candidateTypes.join("|");
  const optionNums = candidateTypes.length;
  const candidateTypesDefinition = candidateTypes
    .map((type) => {
      return gistKB[type as VisInsightType].definition;
    })
    .join("\n");

  const typeParser = new RegexParser(
    `/Type: (${candidateTypesRegex})/`,
    ["type"],
    "noType"
  );
  const parser = new CombiningOutputParser(typeParser);

  const matchain = RunnableSequence.from([
    PromptTemplate.fromTemplate(`
        ${SystemInstruction}

        You are given a text chunk with ${optionNums} possible types, and you need to choose only one most suitable type based on the following definitions and return it as the type.

        ${candidateTypesDefinition}

        \n{format_instructions}\n{paragraph}
        `),
    model as any,
    parser,
  ]);

  const response = await matchain.invoke({
    format_instructions: parser.getFormatInstructions(),
    paragraph: "User:" + textContent,
  });

  return response as GistFactTypeAnnotation;
};

export default runMatch;
