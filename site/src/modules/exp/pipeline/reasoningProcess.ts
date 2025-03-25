import { ChatOpenAI, ChatOpenAICallOptions } from '@langchain/openai';
import { FeatureValue, SpaceBreakdown, ReasoningStructure } from './types';
import { StructuredOutputParser } from "langchain/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from '@langchain/core/runnables';
import { z } from "zod";
import { VisInsightType } from 'gist-wsv';
import { gistKB } from '../visKB';

export const reasoningStructureToPrompt = (reasoningStructure: ReasoningStructure): string => {
  const { reasoning, type, entity, feature, datafactRestatement } = reasoningStructure;
  return `
Data fact: ${datafactRestatement}
Insight Type of the Datafact: ${type}
Reasoning for annotating '${type}': ${reasoning}

Entities(${entity.space}) referred: ${entity.breakdowns.join(", ")}
You need to extract the values of the entity in the '${feature}' demension from the datafact.
`;
}

export const getValuesFromReasoningStructure = async (
  model: ChatOpenAI<ChatOpenAICallOptions>,
  reasoningStructure: ReasoningStructure
): Promise<FeatureValue[]> => {
  // using LLM
  const featureValues: FeatureValue[] = [];
  const parser = StructuredOutputParser.fromZodSchema(
    z.array(
      z.object({
        entity: z.string().describe("entity name given by the data structure"),
        value: z.number().describe("value of the given feature of the entity based on the datafact"),
      })
    ).describe("value of feature of entiteis which would be used in a chart")
  )
  const chain = RunnableSequence.from([
    PromptTemplate.fromTemplate(`
      {reasoningStructurePrompt}
      
      {format_instructions}
    `),
    model,
    parser
  ])
  const result = await chain.invoke({
    reasoningStructurePrompt: reasoningStructureToPrompt(reasoningStructure),
    format_instructions: parser.getFormatInstructions()
  })
  featureValues.push({
    space: reasoningStructure.entity.space,
    feature: reasoningStructure.feature,
    values: result.map((r: any) => ({ entity: r.entity, value: r.value }))
  })
  return featureValues;
}


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