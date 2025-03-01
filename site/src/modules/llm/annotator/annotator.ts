import { ChatOpenAI, ChatOpenAICallOptions } from '@langchain/openai';
import runTypeCheck from './runTypeCheck';
import runMatch from './typeModerator';
import { GistvisSpec, InsightType, paragraphSpec, UnitSegmentSpec, VisInsightType } from '../../visualizer/types';
import { gistKB } from '../visKB';
import { GistFactTypeAnnotation } from '../types';
import lodash from 'lodash';

const getInsightType = async (model: ChatOpenAI<ChatOpenAICallOptions>, gistvisSpec: GistvisSpec): Promise<string> => {
  // const candidateTypeProposals = await Promise.all(
  //   Object.keys(gistKB).map((typeKey) => {
  //     return runTypeCheck(model, gistvisSpec.unitSegmentSpec.context, typeKey as VisInsightType);
  //   })
  // );
  const candidateTypeProposals : GistFactTypeAnnotation[] = await Promise.all(
    Object.keys(gistKB).map((typeKey) => {
      return {
        type: typeKey as InsightType
      }
    })
  );

  const candidateTypes = lodash
    .uniq(candidateTypeProposals.map((d: GistFactTypeAnnotation) => d.type))
    .filter((d: string) => d !== '');

  if (candidateTypes.length > 1) {
    const moderatedType = await runMatch(model, gistvisSpec.unitSegmentSpec.context, candidateTypes as string[]);
    return moderatedType.type;
  } else if (candidateTypes.length === 1) {
    return candidateTypes[0];
  }

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
