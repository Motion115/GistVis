import { analyzeReasoning } from '../../modules/exp/pipeline/reasoningProcess';
import { TestPipeline } from './AnnotatorTest';
import { ChatOpenAI } from '@langchain/openai';

export interface TestResult {
  types: string[];
  isCorrect: boolean;
}

export class RestatementPipeline implements TestPipeline {
  private model: ChatOpenAI;
  
  constructor() {
    this.model = new ChatOpenAI({
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
  }

  // 验证预测结果是否在候选类型列表中
  private validatePredictions(predictions: string[], candidateTypes: string[]): boolean {
    return predictions.length > 0 && 
           predictions.some(prediction => 
             candidateTypes.some(type => type.toLowerCase() === prediction.toLowerCase())
           );
  }

  // 处理单个测试项
  async testWithValidation(content: string, candidateTypes: string[]): Promise<TestResult> {
    const results = await analyzeReasoning(this.model, content);
    
    // 获取所有预测的类型
    const predictedTypes = results.map(r => r.type);

    return {
      types: predictedTypes, // 返回所有预测结果，不管对错
      isCorrect: this.validatePredictions(predictedTypes, candidateTypes)
    };
  }

  // 实现 TestPipeline 接口要求的方法
  async test(content: string): Promise<string[]> {
    const results = await analyzeReasoning(this.model, content);
    // 返回所有预测的类型
    return results.map(r => r.type);
  }
}