import { ChatOpenAI } from '@langchain/openai';
import { SpaceBreakdown } from './types';

export const analyzeSpaceBreakdown = async (
  model: ChatOpenAI,
  text: string
): Promise<SpaceBreakdown[]> => {
  try {
    const promptText = `Analyze the entities mentioned in the following text and group them by category:
    
    ${text}
    
    Please return in JSON format with space (category) and breakdowns (list of entities in that category).
    Example: [{"space": "countries", "breakdowns": ["China", "US"]}, {"space": "tech fields", "breakdowns": ["AI", "5G"]}]`;

    const response = await model.invoke(promptText);
    const responseText = response.content.toString();
    
    // Parse the response and validate format
    try {
      const result = JSON.parse(responseText);
      if (Array.isArray(result)) {
        return result.filter(item => 
          item.space && 
          Array.isArray(item.breakdowns) && 
          item.breakdowns.length > 0
        );
      }
    } catch (e) {
      console.error('Failed to parse LLM response:', e);
    }
    
    return [];
  } catch (error) {
    console.error('Error in analyzeSpaceBreakdown:', error);
    return [];
  }
};