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
      Specifically, space is a facet of analysis with a given text description. For example, if a sentence describes the marketshare of different car manufacturers, the analysis space would be “car manufacture”. Meanwhile, breakdowns a set of temporal or categorical data fields in which data are further divided under the space. For example, the brand name, like “Brand A”, would be the breakdown for “car manufacture”.

      Feature is the measurement of breakdown. For example, we could measure the sales percentage for each manufacturer, a feature derived from annual sales of car manufacturers. Lastly, value is a numerical data field that could be retrieved from a combination of breakdown and feature. For example, the “sales percentage” of “Brand A” is 0.5. All data attributes arerequired for each data specification entry, with the only exception being the “not a number” (NaN) value attributes.Cases exist when the unit segment describes a semantic data insight (e.g., increasing or decreasing for the trend type), and we make “not a number cases” a special condition for GistVis to process.

      1. Don't think space is same to feature.
      2. Space is the category of the entities. Each of the space is suitable to be the x-label of a chart like Year, Name, Country, Manufacturer.
      3. Breakdowns are the entities in the space. They are suitable to exist in x-axis of a chart like (2024 and 2026), (Any and Bob), (China and US), (Toyota and Honda).
      4. Dont include the infomation gotton from calculation.

      Analyze the entities mentioned in the following text and group them by category:
      
      {text}
      
      {format_instructions}
      
      Example output: {exampleOutput}
    `),
    model as ChatOpenAI<ChatOpenAICallOptions>,
    parser,
  ]);

  const result = await spaceAnalysisChain.invoke({
    text: text,
    format_instructions: parser.getFormatInstructions(),
    exampleOutput: `
      [
        {
          "space": "Country",
          "breakdowns": ["China", "US"]
        },
        {
          "space": "Location",
          "breakdowns": ["New York", "San Francisco"]
        }
      ]`
  });

  // if breakdown fo two spaces are the same, only keep one
  const resultObj = result.reduce((acc, { space, breakdowns }) => {
    if (!acc[space]) {
      acc[space] = breakdowns;
    } else {
      acc[space] = Array.from(new Set([...acc[space], ...breakdowns]));
    }
    return acc;
  }, {} as Record<string, string[]>);
  return Object.entries(resultObj).map(([space, breakdowns]) => ({ space, breakdowns })) as SpaceBreakdown[];

};