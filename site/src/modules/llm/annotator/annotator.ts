import { ChatOpenAI, ChatOpenAICallOptions } from '@langchain/openai';
import runTypeCheck from './runTypeCheck';
import runMatch from './typeModerator';
import { GistvisSpec, InsightType, paragraphSpec, UnitSegmentSpec, VisInsightType } from '../../visualizer/types';
import { GistFactTypeAnnotation } from '../types';
import lodash from 'lodash';

import { RegexParser, CombiningOutputParser } from 'langchain/output_parsers';
import { PromptTemplate } from '@langchain/core/prompts';
import { RunnableSequence } from '@langchain/core/runnables';
import { SystemInstruction, gistKB } from '../visKB';

const getInsightType = async (model: ChatOpenAI<ChatOpenAICallOptions>, gistvisSpec: GistvisSpec): Promise<string> => {
  // const candidateTypeProposals = await Promise.all(
  //   Object.keys(gistKB).map((typeKey) => {
  //     return runTypeCheck(model, gistvisSpec.unitSegmentSpec.context, typeKey as VisInsightType);
  //   })
  // );



  // // test 1: saying
  // const parser = new RegexParser(
  //   `.*(increase|decrease).*|.*is the (maximum|minimum) of.*|.*is descending (arrangement).*|.*and.*are (different).*|.*'s (value) is.*|.*is.*(%) of.*|.*should (not) be considered a data fact in this project.*`,
  //   ['type1', 'type2', 'type3', 'type4', 'type5', 'type6', 'type7'],
  //   'noType'
  // );
  // const matchain = RunnableSequence.from([
  //   PromptTemplate.fromTemplate(`
  //       ${SystemInstruction}

  //       You are given a text chunk, and you need to rewrite it in a more concise way based on the following definitions and return it as the type. You can't deform the original meaning, if you can't find a suitable format in first 6 kinds, return the last one.

  //       Rewrite the text only in the following 6 formats:
  //       1. "The value increases."
  //       2. "It is the maximum of the data."
  //       3. "It is descending arrangement."
  //       4. "value1 and value2 are different."
  //       5. "The value is 10% of the total."
  //       6. "It should not be considered a data fact in this project."
        
  //       If there is no data fact or the text is not a data fact (this test is not neccessary to be a data insight), return the last format:
  //       7. It should not be considered a data fact in this project.

  //       \n{formatInstructions}\n{paragraph}
  //       `),
  //   model as ChatOpenAI<ChatOpenAICallOptions>,
  //   parser,
  // ]);

  // const response = await matchain.invoke({
  //   formatInstructions: parser.getFormatInstructions(),
  //   paragraph: 'User:' + gistvisSpec.unitSegmentSpec.context,
  // });
  // console.log(response);



  // test 2
  const descriptions = [
    'There is a trend in the sentence',
    'There is an extreme value in the sentence',
    'There is a ranking order in the sentence',
    'There is a comparison in the sentence',
    'There is a proportion in the sentence',
    'There is a value in the sentence',
    'It should not be considered a data fact in this project',
  ]
  const types = [
    'trend',
    'extreme',
    'rank',
    'comparison',
    'proportion',
    'value',
    'noType',
  ]
  const des2type = descriptions.reduce((acc, cur, idx) => {
    acc[cur] = types[idx];
    return acc;
  }
  , {} as {[key: string]: string});

  const parser = new RegexParser(
    `.*(There is a trend in the sentence|There is an extreme value in the sentence|There is a ranking order in the sentence|There is a comparison in the sentence|There is a proportion in the sentence|There is a value in the sentence|It should not be considered a data fact in this project).*|(.*)`,
    ['res','text'],
    'noType'
  );
  const matchain = RunnableSequence.from([
    PromptTemplate.fromTemplate(`
        ${SystemInstruction}

        You are given a text chunk, and you need to point out the type of the data fact in the text.

        You are only allowed to choose types from the following 6 types:
        1. There is a trend in the sentence.
        2. There is an extreme value in the sentence.
        3. There is a ranking order in the sentence like A > B > C.
        4. There is a comparison in the sentence like A is different from B or A is 3 but B is 4.
        5. There is a proportion in the sentence like A is 10% of the total or A is half of B.
        6. There is a value in the sentence like A is 3000.
        
        If there is no data fact or the text is not a data fact (this test is not neccessary to be a data insight), return the last format:
        7. It should not be considered a data fact in this project.

        \n{formatInstructions}\n{paragraph}
        `),
    model as ChatOpenAI<ChatOpenAICallOptions>,
    parser,
  ]);

  const response = await matchain.invoke({
    formatInstructions: parser.getFormatInstructions(),
    paragraph: 'User:' + gistvisSpec.unitSegmentSpec.context,
  });
  console.log(response);
  
  return des2type[response.res];

  // const candidateTypeProposals : GistFactTypeAnnotation[] = await Promise.all(
  //   Object.keys(gistKB).map((typeKey) => {
  //     return {
  //       type: typeKey as InsightType
  //     }
  //   })
  // );

  // const candidateTypes = lodash
  //   .uniq(candidateTypeProposals.map((d: GistFactTypeAnnotation) => d.type))
  //   .filter((d: string) => d !== '');

  // if (candidateTypes.length > 1) {
  //   const moderatedType = await runMatch(model, gistvisSpec.unitSegmentSpec.context, candidateTypes as string[]);
  //   return moderatedType.type;
  // } else if (candidateTypes.length === 1) {
  //   return candidateTypes[0];
  // }

  return 'noType';
};

export const processParagraphs = async (
  gistParagraphSpecList: paragraphSpec[],
  model: ChatOpenAI<ChatOpenAICallOptions>
): Promise<paragraphSpec[]> => {
  return Promise.all(
    gistParagraphSpecList.map(async (paragraphSpec: paragraphSpec) => {
      const paragraphContent = await Promise.all(
        paragraphSpec.paragraphContent.map(async (gistvisSpec: GistvisSpec) => {
          const insightType = await getInsightType(model, gistvisSpec);
          return {
            ...gistvisSpec,
            unitSegmentSpec: {
              ...gistvisSpec.unitSegmentSpec,
              insightType,
            } as UnitSegmentSpec,
          } as GistvisSpec;
        })
      );

      return {
        ...paragraphSpec,
        paragraphContent,
      } as paragraphSpec;
    })
  );
};
