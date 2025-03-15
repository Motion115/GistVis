import { RegexParser, CombiningOutputParser } from 'langchain/output_parsers';
import { PromptTemplate } from '@langchain/core/prompts';
import { RunnableSequence } from '@langchain/core/runnables';
import { ChatOpenAI, ChatOpenAICallOptions } from '@langchain/openai';
import { GistFactTypeAnnotation } from '../types';
import { generateFewShotExample, getTypeCheckerSystemInstruction, gistKB, SystemInstruction, VisInsightType } from 'gist-wsv';

const runTypeCheck = async (
  model: ChatOpenAI<ChatOpenAICallOptions>,
  textContent: string,
  targetGistType: VisInsightType
) => {
  const targetType = targetGistType as string;
  const typeParser = new RegexParser(`/Type: (${targetType}|)/`, ['type'], 'noType');
  const parser = new CombiningOutputParser(typeParser);

  const valchain = RunnableSequence.from([
    PromptTemplate.fromTemplate(`
      ${SystemInstruction}
      ${getTypeCheckerSystemInstruction(targetGistType)}
      ${gistKB[targetGistType].definition}

      ${generateFewShotExample(targetGistType, 2, 1, false)}

      \n{formatInstructions}\n{paragraph}
      `),
    model as ChatOpenAI<ChatOpenAICallOptions>,
    parser,
  ]);

  const response = await valchain.invoke({
    formatInstructions: parser.getFormatInstructions(),
    paragraph: 'User:' + textContent,
  });
  console.log(response);
  return response as GistFactTypeAnnotation;
};

export default runTypeCheck;
