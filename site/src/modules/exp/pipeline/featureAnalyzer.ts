import { ChatOpenAI } from '@langchain/openai';
import { FeatureValue } from './types';

export const analyzeFeatures = async (
  model: ChatOpenAI,
  text: string,
  entities: string[]
): Promise<string[]> => {
  try {
    const entitiesStr = entities.join('、');
    const promptText = `Analyze the data features about ${entitiesStr} in the following text:

    ${text}
    
    1. What data features are mentioned about these entities? (e.g., quantity, growth rate, ranking, etc.)
    2. Are there any implied ranking relationships between entities?
    3. Are there any other implicit data relationships?
    
    Please list all mentioned data feature types.`;

    const response = await model.invoke(promptText);
    const featuresText = response.content.toString();
    
    // 将响应文本按行分割，并过滤掉空行和标点符号
    const features = featuresText
      .split(/[\n,，。；;]/)
      .map(f => f.trim())
      .filter(f => f.length > 0);
    
    return Array.from(new Set(features)); // 去重
  } catch (error) {
    console.error('Error in analyzeFeatures:', error);
    return [];
  }
};

export const analyzeValues = async (
  model: ChatOpenAI,
  text: string,
  features: string[],
  entities: string[]
): Promise<FeatureValue[]> => {
  try {
    const promptText = `Analyze the following text and organize data features about entities in a table format:

    Text: ${text}
    
    Entities: ${entities.join(', ')}
    Features: ${features.join(', ')}
    
    Please return in JSON format as follows:
    [
      {
        "feature": "feature name",
        "values": [
          {"entity": "entity1", "value": "corresponding value"},
          {"entity": "entity2", "value": "corresponding value"}
        ]
      }
    ]`;

    const response = await model.invoke(promptText);
    const valuesText = response.content.toString();
    
    try {
      const result = JSON.parse(valuesText);
      if (Array.isArray(result)) {
        return result.filter(item =>
          item.feature &&
          Array.isArray(item.values) &&
          item.values.every((v: { entity: string; value: any }) =>
            v.entity && v.value !== undefined
          )
        );
      }
    } catch (e) {
      console.error('Failed to parse values response:', e);
    }
    
    return [];
  } catch (error) {
    console.error('Error in analyzeValues:', error);
    return [];
  }
};