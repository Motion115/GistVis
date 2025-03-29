import { ChatOpenAI } from '@langchain/openai';
export const model = new ChatOpenAI({
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

export async function translateText(text: string): Promise<string> {
  const response = await model.call([
    {
      role: 'user',
      content: `Translate the following text to Chinese:\n\n${text}\n===\n just return the Chinese text, do not add any other text`,
    },
  ]);
  return response.text;
}