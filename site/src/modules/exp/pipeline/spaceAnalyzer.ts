import { ChatOpenAI, ChatOpenAICallOptions } from '@langchain/openai';
import { SpaceBreakdown } from './types';
import { StructuredOutputParser } from "langchain/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from '@langchain/core/runnables';
import { z } from "zod";

export const analyzeSpaceBreakdown = async (
  model: ChatOpenAI<ChatOpenAICallOptions>,
  text: string
): Promise<SpaceBreakdown[]> => {
  const parser = StructuredOutputParser.fromZodSchema(
    z.array(
      z.object({
        space: z.string().describe("entity category"),
        breakdowns: z.array(z.string()).describe("entity list in the space"),
      })
    ).describe("result of entity groups")
  );

  const spaceAnalysisChain = RunnableSequence.from([
    PromptTemplate.fromTemplate(`
      Analyze the entities mentioned in the following text and group them by category:
      
      {text}
      
      {format_instructions}
      
      Example output: [{"space": "countries", "breakdowns": ["China", "US"]}, {"space": "tech fields", "breakdowns": ["AI", "5G"]}]
    `),
    model as ChatOpenAI<ChatOpenAICallOptions>,
    parser,
  ]);

  const result = await spaceAnalysisChain.invoke({
    text: text,
    format_instructions: parser.getFormatInstructions(),
  });

  return result as SpaceBreakdown[];
};