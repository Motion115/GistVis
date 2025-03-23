import { ChatOpenAI } from '@langchain/openai';
import { DataSpec } from 'gist-wsv';
import { analyzeSpaceBreakdown } from './spaceAnalyzer';
import { analyzeFeatures, analyzeValues } from './featureAnalyzer';
import { processToDataSpecs } from './dataSpecProcessor';

export const runNewPipeline = async (
  model: ChatOpenAI,
  text: string
): Promise<DataSpec[]> => {
  // Step 1: Analyze space and breakdowns (recognize spaces and entities in each space)
  const spaceBreakdowns = await analyzeSpaceBreakdown(model, text);
  
  // Step 2: For each space-breakdown combination (entities in a space, get 'facts' about them)
  const allFeatureValues = [];
  for (const sb of spaceBreakdowns) {
    // Analyze features for the entities in this space (facts)
    const features = await analyzeFeatures(model, text, sb.breakdowns);
    
    // Analyze values for the features and entities (values in the facts)
    const featureValues = await analyzeValues(model, text, features, sb.breakdowns, sb.space);
    allFeatureValues.push(...featureValues); // flatten
  }

  // Step 3: Convert to final data specs
  return processToDataSpecs(allFeatureValues);
};

export * from './types';