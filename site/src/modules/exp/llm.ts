import { convert } from 'html-to-text';
import { ChatOpenAI } from '@langchain/openai';
import splitInsight from '@src/modules/llm/discoverer/discoverer';
import { runNewPipeline } from './pipeline';

const removeHTML = (input: string) => {
  const plainText = convert(input, {
    wordwrap: false,
    // ignoreHref: true,
    // ignoreImage: true,
    preserveNewlines: true,
  });

  // split by \n
  const textContent = plainText
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line !== '');

  return textContent;
};

const generateGistVisMarkup = async (input: string, setStage: (stage: number) => void) => {
  const paragraphList = removeHTML(input);
  // check if textContent is empty, if so, return null
  if (paragraphList.length === 0) {
    return [];
  }

  /**  Step 0: Initialize LLM (of choice)

  const model = new ChatZhipuAI({
    modelName: "glm-3-turbo", // Available models:
    temperature: 0.01,
    zhipuAIApiKey: API_KEY, // In Node.js defaults to process.env.ZHIPUAI_API_KEY
    verbose: true,
  }); 
  
  */

  const model = new ChatOpenAI({
    temperature: 0.7,
    topP: 1,
    n: 1,
    streaming: false,
    openAIApiKey:
      JSON.parse(localStorage.getItem('envVariables') || '{}')?.VITE_LLM_API_KEY ||
      import.meta.env.VITE_LLM_API_KEY ||
      '',
    modelName:
      JSON.parse(localStorage.getItem('envVariables') || '{}')?.VITE_LLM_MODEL_NAME ||
      import.meta.env.VITE_LLM_MODEL_NAME ||
      '',
    configuration: {
      apiKey:
        JSON.parse(localStorage.getItem('envVariables') || '{}')?.VITE_LLM_API_KEY ||
        import.meta.env.VITE_LLM_API_KEY ||
        '',
      baseURL:
        JSON.parse(localStorage.getItem('envVariables') || '{}')?.VITE_LLM_URL_BASE ||
        import.meta.env.VITE_LLM_URL_BASE ||
        '',
    },
    verbose: false,
  });

  // Step 1: Use discoverer to split insights
  const gistParagraphSpecList = await splitInsight(model, paragraphList);
  setStage(1); // Stage 1 complete

  // Step 2 & 3: Process each segment through the new pipeline
  const results = [];
  for (const paragraph of gistParagraphSpecList) {
    const processedSegments = await Promise.all(
      paragraph.paragraphContent.map(async (segment) => {
        const specs = await runNewPipeline(model, segment.unitSegmentSpec.context);
        return {
          ...segment,
          dataSpecs: specs
        };
      })
    );

    results.push({
      ...paragraph,
      paragraphContent: processedSegments
    });

    setStage(1 + (results.length / gistParagraphSpecList.length * 2)); // Stages 2-3 (progress from 1 to 3)
  }

  console.log(results);
  return results;
};

export default generateGistVisMarkup;
