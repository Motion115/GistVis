import { z } from 'zod';
import { InsightType } from '../../visualizer/types';
import numeral from 'numeral';

export const SpecDescriptions = {
  ID_DESCRIPTION: 'unique id of text block',
  CONTEXT_DESCRIPTION: 'original text provided by the user',
  CATEGORY_KEY_DESCRIPTION:
    'The category of the entity of the data item according to the context. If it does not exist, return an empty string',
  CATEGORY_VALUE_DESCRIPTION: 'The entity of the data item. If it does not exist, return an empty string',
  VALUE_KEY_DESCRIPTION:
    'The definition of the value of the data item according to the context. If it does not exist or is uncertain, return an empty string',
  VALUE_VALUE_DESCRIPTION: {
    comparison:
      'The value (only numbers) of the value of the data item. If it does not exist or is uncertain, return NAN',
    extreme: 'The extreme (already converted into numbers).  If it does not exist or is uncertain, return NAN',
    proportion:
      'The value of proportion (already converted into decimals). If it does not exist or is uncertain, return NAN',
    rank: 'The ranking of the entity (already converted into numbers).  If it does not exist or is uncertain, return NAN',
    trend:
      'The definition of the value of the data item according to the context. For invariable trends, use consistent values across points. If it does not exist or is uncertain, return an empty string',
    value: 'The numeric word(value). If it does not exist or is uncertain, return an empty string',
  } as { [key in InsightType]: string },
  POS_DESCRIPTION: 'The words containing the value. Do not split the words if it only has one position.',
};

function parseValue(value: string | number) {
  if (typeof value === 'string') {
    const parsedValue = numeral(value).value();
    if (parsedValue === null) {
      return NaN;
    }
    return parsedValue;
  } else if (typeof value === 'number') {
    return value;
  } else {
    return NaN;
  }
}

export const getZodFormatting = (insightType: InsightType) => {
  const valueValueBespokeDescription = SpecDescriptions.VALUE_VALUE_DESCRIPTION[insightType];
  const baseZodFormatting = z.object({
    dataSpec: z.array(
      z.object({
        categoryKey: z.string().describe(SpecDescriptions.CATEGORY_KEY_DESCRIPTION),
        categoryValue: z.string().describe(SpecDescriptions.CATEGORY_VALUE_DESCRIPTION),
        valueKey: z.string().describe(SpecDescriptions.VALUE_KEY_DESCRIPTION),
        valueValue: z
          .union([z.number(), z.string()])
          .transform((value) => {
            if (typeof value === 'string' && value.toUpperCase() === 'NAN') {
              return NaN;
            } else {
              return parseValue(value);
            }
          })
          .describe(valueValueBespokeDescription),
      })
    ),
  });

  const specWithPos = baseZodFormatting.extend({
    pos: z.array(
      z
        .string()
        .describe('The words containing the value of extreme. Do not split the words if it only has one position.')
    ),
  });

  // console.log(specWithPos)

  if (insightType === 'extreme' || insightType === 'value') {
    return specWithPos;
  } else {
    return baseZodFormatting;
  }
};
