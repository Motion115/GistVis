import { paragraphSpec } from 'gist-wsv';

const article3: paragraphSpec[] = [
  {
    paragraphIdx: 0,
    paragraphContent: [
      {
        id: 'p0s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context:
            'The typical age gap between husbands and wives in the United States has narrowed over the past 20 years, continuing a 20th-century trend.',
          inSituPosition: [],
          attribute: 'negative',
        },
        dataSpec: [
          {
            space: 'category of age gap',
            breakdown: 'age gap between husbands and wives',
            feature: 'age gap value',
            value: NaN,
          },
        ],
      },
      {
        id: 'p0s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context:
            'On average, husbands and wives were 2.2 years apart in age in 2022, according to a new Pew Research Center analysis of U.S. Census Bureau data. This is down from 2.4 years in 2000 and 4.9 years in 1880.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'Age difference between husbands and wives',
            breakdown: '2022',
            feature: 'Age difference in years',
            value: 2.2,
          },
          {
            space: 'Age difference between husbands and wives',
            breakdown: '2000',
            feature: 'Age difference in years',
            value: 2.4,
          },
          {
            space: 'Age difference between husbands and wives',
            breakdown: '1880',
            feature: 'Age difference in years',
            value: 4.9,
          },
        ],
      },
    ],
  },
  {
    paragraphIdx: 1,
    paragraphContent: [
      {
        id: 'p1s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context:
            'A line chart showing that the age gap between U.S. husbands and wives has kept dropping in 21st century.',
          inSituPosition: [],
          attribute: 'negative',
        },
        dataSpec: [
          {
            space: 'category of age gap',
            breakdown: 'age gap between U.S. husbands and wives',
            feature: 'age gap value',
            value: NaN,
          },
        ],
      },
    ],
  },
  {
    paragraphIdx: 2,
    paragraphContent: [
      {
        id: 'p2s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context:
            'Since 1880, the share of marriages in which the husband is several years older than the wife has fallen significantly.',
          inSituPosition: [],
          attribute: 'negative',
        },
        dataSpec: [
          {
            space: 'category of marriages',
            breakdown: 'marriages in which the husband is several years older than the wife',
            feature: 'share of marriages',
            value: NaN,
          },
        ],
      },
      {
        id: 'p2s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context:
            'And since 2000, marriages where the wife is significantly older than the husband have also become more rare. (This analysis is limited to opposite-sex marriages in which the spouses live together.)',
          inSituPosition: [],
          attribute: 'negative',
        },
        dataSpec: [
          {
            space: 'category of marriages',
            breakdown: 'marriages where the wife is significantly older than the husband',
            feature: 'frequency of occurrence',
            value: NaN,
          },
        ],
      },
    ],
  },
  {
    paragraphIdx: 3,
    paragraphContent: [
      {
        id: 'p3s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context:
            'A stacked bar chart showing that about half of opposite-sex marriages in 2022 were between spouses who were roughly the same age.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'category of marriages',
            breakdown: 'opposite-sex marriages in 2022',
            feature: 'proportion of marriages',
            value: 0.5,
          },
        ],
      },
    ],
  },
  {
    paragraphIdx: 4,
    paragraphContent: [
      {
        id: 'p4s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context: 'Overall, in 2022:',
        },
      },
    ],
  },
  {
    paragraphIdx: 5,
    paragraphContent: [
      {
        id: 'p5s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context:
            '51% of opposite-sex marriages had spouses who were two years apart in age or less. This is up from 46% in 2000.',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            space: 'category of opposite-sex marriages',
            breakdown: 'spouses age difference',
            feature: 'percentage of marriages',
            value: 51,
          },
          {
            space: 'category of opposite-sex marriages',
            breakdown: 'spouses age difference',
            feature: 'percentage of marriages',
            value: 46,
          },
        ],
      },
    ],
  },
  {
    paragraphIdx: 6,
    paragraphContent: [
      {
        id: 'p6s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context:
            '40% of marriages had a husband who was three or more years older than his wife. This is down from 43% in 2000.',
          inSituPosition: [],
          attribute: 'negative',
        },
        dataSpec: [
          {
            space: 'category of marriages',
            breakdown: 'marriages with husband 3+ years older',
            feature: 'percentage of marriages',
            value: 40,
          },
          {
            space: 'category of marriages',
            breakdown: 'marriages with husband 3+ years older',
            feature: 'percentage of marriages',
            value: 43,
          },
        ],
      },
    ],
  },
  {
    paragraphIdx: 7,
    paragraphContent: [
      {
        id: 'p7s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context:
            '10% of marriages had a wife who was three or more years older than her husband. This share had been on the rise during the 20th century but is now down marginally from a peak of 11% in 2000.',
          inSituPosition: [],
          attribute: 'negative',
        },
        dataSpec: [
          {
            space: 'category of marriages',
            breakdown: 'marriages with a wife three or more years older',
            feature: 'share of marriages',
            value: 10,
          },
          {
            space: 'category of marriages',
            breakdown: 'marriages with a wife three or more years older',
            feature: 'peak share of marriages',
            value: 11,
          },
        ],
      },
    ],
  },
  {
    paragraphIdx: 8,
    paragraphContent: [
      {
        id: 'p8s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context:
            'Not all family historians agree on how to define a “same-age” marriage. But whether we consider spouses of the same age to be those within two years of each other or four years, the historical trend is similar.',
          inSituPosition: [],
          attribute: undefined,
        },
        dataSpec: [
          {
            space: 'category of same-age marriage',
            breakdown: 'spouses within two years',
            feature: 'historical trend',
            value: 100,
          },
          {
            space: 'category of same-age marriage',
            breakdown: 'spouses within four years',
            feature: 'historical trend',
            value: 100,
          },
        ],
      },
    ],
  },
  {
    paragraphIdx: 9,
    paragraphContent: [
      {
        id: 'p9s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context: 'Who is most likely to be in a same-age marriage?',
        },
      },
    ],
  },
  {
    paragraphIdx: 10,
    paragraphContent: [
      {
        id: 'p10s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context: 'Some people are more likely than others to be in a same-age marriage:',
        },
      },
    ],
  },
  {
    paragraphIdx: 11,
    paragraphContent: [
      {
        id: 'p11s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context:
            'More than half of husbands who have at least a bachelor’s degree (55%) are in a same-age marriage, compared with 48% of husbands with some college education or less.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'category of husbands with education level',
            breakdown: 'husbands with at least a bachelor’s degree',
            feature: 'percentage in same-age marriage',
            value: 55,
          },
          {
            space: 'category of husbands with education level',
            breakdown: 'husbands with some college education or less',
            feature: 'percentage in same-age marriage',
            value: 48,
          },
        ],
      },
    ],
  },
  {
    paragraphIdx: 12,
    paragraphContent: [
      {
        id: 'p12s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context:
            'Husbands in their first marriage are much more likely than husbands who have been married more than once to be roughly the same age as their wife (56% vs. 32%).',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'category of marriage status',
            breakdown: 'first marriage',
            feature: 'percentage of husbands same age as wife',
            value: 56,
          },
          {
            space: 'category of marriage status',
            breakdown: 'more than once married',
            feature: 'percentage of husbands same age as wife',
            value: 32,
          },
        ],
      },
      {
        id: 'p12s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context:
            'And only 35% of husbands in their first marriage have a wife three or more years younger than them, compared with 56% of remarried husbands.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'type of marriage',
            breakdown: 'first marriage',
            feature: 'percentage of husbands with a wife three or more years younger',
            value: 35,
          },
          {
            space: 'type of marriage',
            breakdown: 'remarried',
            feature: 'percentage of husbands with a wife three or more years younger',
            value: 56,
          },
        ],
      },
    ],
  },
  {
    paragraphIdx: 13,
    paragraphContent: [
      {
        id: 'p13s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context:
            'White husbands (53%) are more likely than Hispanic (46%), Black (45%) and Asian husbands (45%) to be in a same-age marriage.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: "Husband's Ethnicity",
            breakdown: 'White',
            feature: 'Likelihood of Same-Age Marriage',
            value: 53,
          },
          {
            space: "Husband's Ethnicity",
            breakdown: 'Hispanic',
            feature: 'Likelihood of Same-Age Marriage',
            value: 46,
          },
          {
            space: "Husband's Ethnicity",
            breakdown: 'Black',
            feature: 'Likelihood of Same-Age Marriage',
            value: 45,
          },
          {
            space: "Husband's Ethnicity",
            breakdown: 'Asian',
            feature: 'Likelihood of Same-Age Marriage',
            value: 45,
          },
        ],
      },
      {
        id: 'p13s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context:
            'And about half of Asian husbands (49%) have a wife who is three or more years younger. The shares are lower among Hispanic (42%), Black (43%) and White husbands (38%).',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'Race',
            breakdown: 'Asian',
            feature: 'Percentage of husbands with a wife three or more years younger',
            value: 49,
          },
          {
            space: 'Race',
            breakdown: 'Hispanic',
            feature: 'Percentage of husbands with a wife three or more years younger',
            value: 42,
          },
          {
            space: 'Race',
            breakdown: 'Black',
            feature: 'Percentage of husbands with a wife three or more years younger',
            value: 43,
          },
          {
            space: 'Race',
            breakdown: 'White',
            feature: 'Percentage of husbands with a wife three or more years younger',
            value: 38,
          },
        ],
      },
    ],
  },
  {
    paragraphIdx: 14,
    paragraphContent: [
      {
        id: 'p14s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context:
            'The marriage patterns are similar when looking at the wife’s characteristics rather than the husband’s.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'category of marriage patterns',
            breakdown: "wife's characteristics",
            feature: 'similarity in marriage patterns',
            value: 0,
          },
          {
            space: 'category of marriage patterns',
            breakdown: "husband's characteristics",
            feature: 'similarity in marriage patterns',
            value: 0,
          },
        ],
      },
    ],
  },
  {
    paragraphIdx: 15,
    paragraphContent: [
      {
        id: 'p15s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context: 'Why do age gaps in marriage matter?',
        },
      },
    ],
  },
  {
    paragraphIdx: 16,
    paragraphContent: [
      {
        id: 'p16s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context:
            'A bar chart showing that husbands in first marriages are more likely than those who’ve been married more than once to be of similar age to their wife.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'marital status',
            breakdown: 'first marriage',
            feature: 'likelihood of similar age',
            value: 0,
          },
          {
            space: 'marital status',
            breakdown: 'married more than once',
            feature: 'likelihood of similar age',
            value: 30,
          },
        ],
      },
    ],
  },
  {
    paragraphIdx: 17,
    paragraphContent: [
      {
        id: 'p17s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context:
            'Large age differences between husbands and wives can have important consequences for the well-being of one of the spouses.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'category of age difference',
            breakdown: 'husbands and wives',
            feature: 'age difference value',
            value: 0,
          },
          {
            space: 'category of age difference',
            breakdown: 'husbands and wives',
            feature: 'age difference value',
            value: 30,
          },
        ],
      },
      {
        id: 'p17s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context:
            'For example, someone is more likely to end up widowed if their spouse is significantly older than them.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'marital status',
            breakdown: 'widowed',
            feature: 'likelihood',
            value: NaN,
          },
        ],
      },
    ],
  },
  {
    paragraphIdx: 18,
    paragraphContent: [
      {
        id: 'p18s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context:
            'As the share of marriages where the husband is older than his wife has fallen, there’s also been a decline in widowhood among older women.',
          inSituPosition: [],
          attribute: 'negative',
        },
        dataSpec: [
          {
            space: 'category of marriages',
            breakdown: 'marriages where the husband is older than his wife',
            feature: 'share of marriages',
            value: NaN,
          },
          {
            space: 'category of widowhood',
            breakdown: 'widowhood among older women',
            feature: 'rate of widowhood',
            value: NaN,
          },
        ],
      },
      {
        id: 'p18s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context: 'Today, 30% of women ages 65 and older are widows, down from 45% in 2000.',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            space: 'category of widows',
            breakdown: 'women ages 65 and older',
            feature: 'percentage of widows',
            value: 30,
          },
          {
            space: 'category of widows',
            breakdown: 'women ages 65 and older',
            feature: 'percentage of widows',
            value: 45,
          },
        ],
      },
    ],
  },
];

export default article3;
