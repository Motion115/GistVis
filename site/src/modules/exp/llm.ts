import { convert } from 'html-to-text';
import { ChatOpenAI } from '@langchain/openai';
import splitInsight from '@src/modules/llm/discoverer/discoverer';
import { processParagraphs } from '@src/modules/llm/annotator/annotator';
import { extractDataForParagraphs } from '@src/modules/llm/extractor/extractor';

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

  /**
   * Step 1: Discoverer
   * @param model: ChatOpenAI<ChatOpenAICallOptions> - An instance of the OpenAI chat model used for segmentation.
   * @param paragraphList: string[] - A list of paragraphs provided by the user for segmentation.
   *
   * @returns {Promise<paragraphSpec[]>} - Returns a list of paragraph specification objects (`paragraphSpec`)
   */
  const gistParagraphSpecList = await splitInsight(model, paragraphList);
  setStage(1); // Stage 1 complete

  /**
   * Step 2: Annotator
   * @param {paragraphSpec[]} gistParagraphSpecList - The list of paragraphs to be processed. Each paragraph contains multiple `GistvisSpec`
   * objects, each representing a smaller segment of the paragraph's content.
   *
   * @param {ChatOpenAI<ChatOpenAICallOptions>} model
   *
   * @returns {Promise<paragraphSpec[]>} Returns a new list of paragraphs, where each paragraph's `insightType` has been updated
   * according to the inferred type.
   *
   * @description
   * This function uses asynchronous processing (`Promise.all`) to iterate over all paragraphs and performs the following steps for each:
   * - For each segment of the paragraph, it calls `runTypeCheck` to infer its type.
   * - If there are multiple candidate types, it uses `runMatch` to further determine the most suitable type.
   * - It updates the `insightType` attribute of each paragraph and returns the updated paragraph object.
   */
  const typedParagraphSpecList = await processParagraphs(gistParagraphSpecList, model);
  setStage(2); // stage 2 complete

  /**
   * step 3: Extractor
   * @param {paragraphSpec[]} typedParagraphSpecList - A list of paragraph specifications to be processed.
   * Each specification contains paragraph content that may need further data extraction based on its `insightType`.
   * @param {ChatOpenAI<ChatOpenAICallOptions>} model
   *
   * @returns {Promise<paragraphSpec[]>} - A promise that resolves to a list of enhanced paragraph specifications
   * with extracted data based on their respective insight types.
   */
  const fullList = await extractDataForParagraphs(typedParagraphSpecList, model);
  setStage(3); // stage 3 complete
  console.log(fullList);

  return fullList;
};

export default generateGistVisMarkup;
