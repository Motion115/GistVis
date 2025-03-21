import { ChatOpenAI, ChatOpenAICallOptions } from '@langchain/openai';
import { paragraphSpec, GistvisSpec } from 'gist-wsv';
import { GistFactTypeAnnotation } from '../types';
import {
  specComparison,
  specExtreme,
  specProportion,
  specRank,
  specTrend,
  specValue,
} from '../extractor/specParsersList';

const extractorMap = {
  comparison: specComparison,
  trend: specTrend,
  rank: specRank,
  proportion: specProportion,
  extreme: specExtreme,
  value: specValue,
};

export const extractDataForParagraphs = async (
  typedParagraphSpecList: paragraphSpec[],
  model: ChatOpenAI<ChatOpenAICallOptions>
): Promise<paragraphSpec[]> => {
  return Promise.all(
    typedParagraphSpecList.map(
      async (paragraphSpec: paragraphSpec) =>
        ({
          ...paragraphSpec,
          paragraphContent: await Promise.all(
            paragraphSpec.paragraphContent.map(async (gistvisSpec: GistvisSpec) => {
              if (gistvisSpec.unitSegmentSpec.insightType !== 'noType') {
                const extractor = extractorMap[gistvisSpec.unitSegmentSpec.insightType];
                const input: GistFactTypeAnnotation = {
                  text: gistvisSpec.unitSegmentSpec.context,
                  type: gistvisSpec.unitSegmentSpec.insightType,
                };
                const result = await extractor(model, input);
                return {
                  ...gistvisSpec,
                  dataSpec: result.dataSpec
                    ? result.dataSpec.map((item) => ({
                        ...item,
                        value:
                          item.value !== undefined ? parseFloat(item.value.toFixed(2)) : item.value,
                      }))
                    : [],
                  unitSegmentSpec: {
                    ...gistvisSpec.unitSegmentSpec,
                    inSituPosition: result.pos ?? [],
                    attribute: result.attribute ?? undefined,
                  },
                };
              }
              return gistvisSpec;
            })
          ),
        }) as paragraphSpec
    )
  );
};
