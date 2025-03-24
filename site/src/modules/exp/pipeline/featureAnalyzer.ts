import { ChatOpenAI, ChatOpenAICallOptions } from '@langchain/openai';
import { FeatureValue, SpaceBreakdown, ReasoningStructure } from './types';
import { StructuredOutputParser } from "langchain/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from '@langchain/core/runnables';
import { z } from "zod";
import { VisInsightType } from 'gist-wsv';
import { gistKB } from '../visKB';

export const analyzeReasoning = async (
  model: ChatOpenAI<ChatOpenAICallOptions>,
  text: string
): Promise<ReasoningStructure[]> => {
  const candidateTypesDefinition = ['comparison', 'trend', 'rank', 'proportion', 'extreme', 'value']
    .map((type) => {
      return gistKB[type as VisInsightType].definition;
    })
    .join('\n');
  const spaceParser = StructuredOutputParser.fromZodSchema(
    z.array(
      z.object({
        reasoning: z.string().describe("reason why you select the type"),
        type: z.enum(['comparison', 'trend', 'rank', 'proportion', 'extreme', 'value']).describe("type of insight"),
        datafactRestatement: z.string().describe("restatement of the data fact (given type) in a clear, concise, SHORTEST way. Less words is better. Keep only the entities the data fact is about."),
        entityCategory: z.string().describe("category of entities that the data fact is about"),
        entities: z.array(z.string()).describe("list of entities in the category"),
        dataCategory: z.string().describe("what kind/topic/index_name of data the data fact is about; the relationship between entities and itself: entity(item of entities)'s dataCategory(itself)"),
      }).describe("analysis: single data fact about dataCategory of entities(type of entityCategory)")
    ).describe("list of data fact analysis of the text"),
  );

  const spaceChain = RunnableSequence.from([
    PromptTemplate.fromTemplate(`
      1. entityCategory is the category of entities that the data fact is about, and entities are the specific breakdowns within this space.
      2. entities are the specific entities in the entityCategory like instantiations of the entityCategory.
      3. entities are comparable and can be used as the x-axis of a single chart. they are similar in concept.
      4. For example, if the text discusses sales across different car manufacturers, the space would be "car manufacture" and the breakdowns would be the different manufacturers like "Toyota", "Honda", etc.
      5. A counterexample would be some entities that are not comparable, like "US" and "year 2020", which cannot be used as the x-axis of a single chart.

      Data fact can be 6 types: comparison, trend, rank, proportion, extreme, value.
      ${candidateTypesDefinition}

      ===
      When to select each type:
      - Comparison: when the text describes a numerical comparison between two or more entities.
      - Trend: when the text implies a change in a numerical value over time, or if you find that there exists a change happening to some entities.
      - Rank: when the text implies an order of entities based on a numerical value and there are more than 3 entities.
      - Proportion: when the text describes a proportion of a numerical value, or if you find that something is a proportion of another thing.
      - Extreme: when the text describes an extreme value among entities.
      - Value: when the text describes a numerical value of an entity without any other insights.
      ===

      Given the following text, identify the data facts and its corresponding space and entities:
      Text: {text}

      1. Is there any comparison, trend, rank, proportion, extreme, or value insight in the text? Think with reasoning. Using 'more likely' to express your confidence level and consider over the 6 types of insights.
      2. Restate the data fact in a clear, concise way after identifying the type of insight.
      3. Identify the space and entities that the data fact is about.

      {format_instructions}
    `),
    model,
    spaceParser
  ]);

  const result = await spaceChain.invoke({
    text,
    format_instructions: spaceParser.getFormatInstructions()
  });

  // Transform the result to match ReasoningStructure
  return result.map(item => ({
    reasoning: item.reasoning,
    type: item.type,
    datafactRestatement: item.datafactRestatement,
    feature: item.dataCategory,
    entity: {
      space: item.entityCategory,
      breakdowns: item.entities
    }
  })) as ReasoningStructure[];
};

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
      item.feature &&  // 检查feature不为空
      Array.isArray(item.values) &&  // 检查values是数组
      item.values.length > 0 &&  // 检查values不为空数组
      item.values.every((v: { entity: string; value: any }) =>
        v.entity && v.value !== undefined && v.value !== ''  // 检查每个value有效
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