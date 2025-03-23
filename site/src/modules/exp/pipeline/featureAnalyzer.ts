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
      Analyze the following text and organize data features about entities:

      Text: {text}
      
      Entities: {entities}
      Features: {features}
      
      For all values, extract them as numerical data whenever possible.
      If a value is not explicitly stated but can be inferred as a number, please provide your best estimation.
      
      {format_instructions}
    `),
    model as ChatOpenAI<ChatOpenAICallOptions>,
    parser,
  ]);

  const result = await valuesAnalysisChain.invoke({
    text: text,
    entities: entities.join(', '),
    features: features.join(', '),
    format_instructions: parser.getFormatInstructions(),
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
        value: parseFloat(v.value) || 0 // 将字符串转换为数字
      }))
    }));
};