import { ChatOpenAI } from '@langchain/openai';
import { DataSpec } from 'gist-wsv';
import { analyzeSpaceBreakdown } from './spaceAnalyzer';
import { analyzeFeatures, analyzeValues } from './featureAnalyzer';
import { analyzeReasoning, getValuesFromReasoningStructure } from './reasoningProcess';
import { processToDataSpecs } from './dataSpecProcessor';
import { generateDirectDataSpecs } from './directDataFactGenerator';

export const runDirectPipeline = async (
  model: ChatOpenAI,
  text: string
): Promise<DataSpec[]> => {
  console.log('Starting direct pipeline execution...');
  
  // Generate CSV data facts directly
  console.log('Generating data facts in CSV format...');
  const startTime = performance.now();
  const dataSpecs = await generateDirectDataSpecs(model, text);

  const endTime = performance.now();
  
  console.log(`Pipeline completed in ${(endTime - startTime).toFixed(2)}ms`);
  console.log(`Generated ${dataSpecs.length} data specifications`);
  
  return dataSpecs;
};

export const runNewPipeline = async (
  model: ChatOpenAI,
  text: string
): Promise<DataSpec[]> => {
  console.log('Starting pipeline execution...');
  console.log(`Input text length: ${text.length} characters`);
  
  // Step 1: Analyze space and breakdowns (recognize spaces and entities in each space)
  console.log('Step 1: Analyzing spaces and breakdowns...');
  const startTime1 = performance.now();
  const spaceBreakdowns = await analyzeSpaceBreakdown(model, text);
  const endTime1 = performance.now();
  console.log(`Step 1 completed in ${(endTime1 - startTime1).toFixed(2)}ms`);
  console.log(`Identified ${spaceBreakdowns.length} space breakdowns \n${spaceBreakdowns.map(sb => sb.space).join('\n')}`);
  
  // Step 2: Generate reasoning structure and analyze features and values
  console.log('Step 2: Analyzing features, values and reasoning...');
  const startTime2 = performance.now();
  const allFeatureValues = [];

  // Generate reasoning[] structure
  console.log(`>> Analyzing reasoning structure...`);
  const reasonings = await analyzeReasoning(model, text);
  reasonings.forEach(reasoning => {
    console.log(`- Generated reasoning of type: ${reasoning.type}`);
    console.log(`- Space: ${reasoning.entity.space}`);
    console.log(`- Entities: ${reasoning.entity.breakdowns.join(', ')}`);
    // Add the analyzed space-breakdown to spaceBreakdowns
    spaceBreakdowns.push(reasoning.entity);
  });

  for (let i = 0; i < spaceBreakdowns.length; i++) {
    const sb = spaceBreakdowns[i];
    console.log(`=====\nProcessing space ${i+1}/${spaceBreakdowns.length}\n Space name: ${sb.space}`);
    console.log(`- Contains ${sb.breakdowns.length} entities (${sb.breakdowns.join(', ')})`);
    
    // Analyze features for the entities in this space (facts)
    console.log(`>> Analyzing features...`);
    const features = await analyzeFeatures(model, text, sb.breakdowns);
    console.log(`- Identified ${features.length} features`);
    console.log(`-- Features: ${features.join(', ')}`);
    
    // Analyze values for the features and entities (values in the facts)
    console.log(`>> Analyzing values...`);
    const featureValues = await analyzeValues(model, text, features, sb.breakdowns, sb.space);
    console.log(`- Identified ${featureValues.length} features`);
    console.log(`-- Feature values: ${featureValues.map(fv => `${fv.feature} (${fv.values.length} values)`).join(', ')}`);
    allFeatureValues.push(...featureValues); // flatten
  }
  const endTime2 = performance.now();
  console.log(`Step 2 completed in ${(endTime2 - startTime2).toFixed(2)}ms`);
  console.log(`Total feature values identified: ${allFeatureValues.length}`);

  // Step 3: Convert to final data specs
  console.log('Step 3: Processing data specifications...');
  const startTime3 = performance.now();
  const dataSpecs = processToDataSpecs(allFeatureValues);
  const endTime3 = performance.now();
  console.log(`Step 3 completed in ${(endTime3 - startTime3).toFixed(2)}ms`);
  console.log(`Generated ${dataSpecs.length} data specifications`);
  console.log('Pipeline execution completed!');
  console.log(`Total execution time: ${(endTime3 - startTime1).toFixed(2)}ms`);
  
  return dataSpecs;
};

export const runReasoningPipeline = async (
  model: ChatOpenAI,
  text: string
): Promise<DataSpec[]> => {
  const reasoningStructures = await analyzeReasoning(model, text);
  console.log('Reasoning structures:', reasoningStructures);
  
  const featureValues = await Promise.all(reasoningStructures.map(rs => getValuesFromReasoningStructure(model, rs)));
  console.log('Feature values:', featureValues);
  
  const allFeatureValues = featureValues.flat();
  const dataSpecs = processToDataSpecs(allFeatureValues);

  return dataSpecs;
}

export * from './types';