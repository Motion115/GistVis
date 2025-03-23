import { ChatOpenAI, ChatOpenAICallOptions } from '@langchain/openai';
import { FeatureValue } from './types';
import { StructuredOutputParser } from "langchain/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from '@langchain/core/runnables';
import { z } from "zod";

export const analyzeFeatures = async (
  model: ChatOpenAI<ChatOpenAICallOptions>,
  text: string,
  entities: string[]
): Promise<string[]> => {
  const entitiesStr = entities.join('、');
  
  const parser = StructuredOutputParser.fromZodSchema(
    z.array(z.string()).describe("list of data features")
  );
  
  const featureAnalysisChain = RunnableSequence.from([
    PromptTemplate.fromTemplate(`
      Specifically, space is a facet of analysis with a given text description. For example, if a sentence describes the marketshare of different car manufacturers, the analysis space would be “car manufacture”. Meanwhile, breakdowns a set of temporal or categorical data fields in which data are further divided under the space. For example, the brand name, like “Brand A”, would be the breakdown for “car manufacture”. Feature is the measurement of breakdown. For example, we could measure the sales percentage for each manufacturer, a feature derived from annual sales of car manufacturers. Lastly, value is a numerical data field that could be retrieved from a combination of breakdown and feature. For example, the “sales percentage” of “Brand A” is 0.5. All data attributes arerequired for each data specification entry, with the only exception being the “not a number” (NaN) value attributes.Cases exist when the unit segment describes a semantic data insight (e.g., increasing or decreasing for the trend type), and we make “not a number cases” a special condition for GistVis to process.

      1. Don't use calculated values as features/values. Use the direct information from the text.
      2. Features are the measurements of breakdowns. They are suitable to be the y-label of a chart like Sales, Market Share, Growth Rate.
      3. Values are the numerical data fields that could be retrieved from a combination of breakdowns and features. They are suitable to exist in y-axis of a chart like 100, 0.5, 0.3.

      Entity is equivalent to breakdown in the context of this analysis.

      Analyze the data features about {entities} in the following text:

      {text}
      
      1. What data features are mentioned about these entities? (e.g., quantity, growth rate, ranking, etc.)
      2. Are there any implied ranking relationships between entities?
      3. Are there any other implicit data relationships?
      
      {format_instructions}
      
      Please list all mentioned data feature types as an array of strings.
    `),
    model as ChatOpenAI<ChatOpenAICallOptions>,
    parser,
  ]);

  const features = await featureAnalysisChain.invoke({
    text: text,
    entities: entitiesStr,
    format_instructions: parser.getFormatInstructions(),
  });
  
  return Array.from(new Set(features));
};

export const analyzeValues = async (
  model: ChatOpenAI<ChatOpenAICallOptions>,
  text: string,
  features: string[],
  entities: string[],
  space: string
): Promise<FeatureValue[]> => {
  const parser = StructuredOutputParser.fromZodSchema(
    z.array(
      z.object({
        feature: z.string().describe("feature name"),
        values: z.array(
          z.object({
            entity: z.string().describe("entity name"),
            value: z.string().describe("corresponding value for the entity as a number or number-like string")
          })
        ).describe("list of entity-value pairs")
      })
    ).describe("feature values extraction result")
  );
  
  const valuesAnalysisChain = RunnableSequence.from([
    PromptTemplate.fromTemplate(`
      Specifically, space is a facet of analysis with a given text description. For example, if a sentence describes the marketshare of different car manufacturers, the analysis space would be “car manufacture”. Meanwhile, breakdowns a set of temporal or categorical data fields in which data are further divided under the space. For example, the brand name, like “Brand A”, would be the breakdown for “car manufacture”. Feature is the measurement of breakdown. For example, we could measure the sales percentage for each manufacturer, a feature derived from annual sales of car manufacturers. Lastly, value is a numerical data field that could be retrieved from a combination of breakdown and feature. For example, the “sales percentage” of “Brand A” is 0.5. All data attributes arerequired for each data specification entry, with the only exception being the “not a number” (NaN) value attributes.Cases exist when the unit segment describes a semantic data insight (e.g., increasing or decreasing for the trend type), and we make “not a number cases” a special condition for GistVis to process.

      1. Don't use calculated values as features/values. Use the direct information from the text.
      2. Features are the measurements of breakdowns. They are suitable to be the y-label of a chart like Sales, Market Share, Growth Rate.
      3. Values are the numerical data fields that could be retrieved from a combination of breakdowns and features. They are suitable to exist in y-axis of a chart like 100, 0.5, 0.3.

      Entity is equivalent to breakdown in the context of this analysis.

      Analyze the following text and organize data features about entities:

      Text: {text}
      
      Entities: {entities}
      Features: {features}
      
      For all values, extract them as numerical data whenever possible.
      If a value is not explicitly stated but can be inferred as a number, please provide your best estimation.
      
      {format_instructions}

      Example output: {exampleOutput}
    `),
    model as ChatOpenAI<ChatOpenAICallOptions>,
    parser,
  ]);

  const result = await valuesAnalysisChain.invoke({
    text: text,
    entities: entities.join(', '),
    features: features.join(', '),
    format_instructions: parser.getFormatInstructions(),
    exampleOutput: `
      [
        {
          "feature": "Sales Percentage",
          "values": [
            { "entity": "Brand A", "value": "0.5" },
            { "entity": "Brand B", "value": "0.3" }
          ]
        }
      ]
    `
  });
  
  return result
    .filter(item =>
      item.feature &&
      Array.isArray(item.values) &&
      item.values.every((v: { entity: string; value: any }) =>
        v.entity && v.value !== undefined
      )
    )
    .map(item => ({
      space: space,
      feature: item.feature,
      values: item.values.map(v => ({
        entity: v.entity,
        value: parseFloat(v.value) || 0
      }))
    }));
};