import { paragraphSpec } from 'gist-wsv';

const article5: paragraphSpec[] = [
  {
    paragraphIdx: 0,
    paragraphContent: [
      {
        id: 'p0s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context:
            'Some 12% of all restaurants in the United States serve Asian food, according to a new Pew Research Center analysis.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            categoryKey: 'category of restaurants in the United States',
            categoryValue: 'Asian food serving restaurants',
            valueKey: 'proportion of all restaurants',
            valueValue: 0.12,
          },
          {
            categoryKey: 'category of restaurants in the United States',
            categoryValue: 'Other restaurants',
            valueKey: 'proportion of all restaurants',
            valueValue: 0.88,
          },
        ],
      },
      {
        id: 'p0s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context: 'That share is slightly higher than the 7% of the U.S. population that is Asian American.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            categoryKey: 'category of population',
            categoryValue: 'Asian American',
            valueKey: 'percentage of population',
            valueValue: 7,
          },
          {
            categoryKey: 'category of population',
            categoryValue: 'other population',
            valueKey: 'percentage of population',
            valueValue: 0,
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
            'A bar chart showing that 71% of Asian restaurants in the U.S. serve Chinese, Japanese or Thai food.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            categoryKey: 'Type of Food',
            categoryValue: 'Chinese',
            valueKey: 'Proportion of Asian Restaurants',
            valueValue: 0.71,
          },
          {
            categoryKey: 'Type of Food',
            categoryValue: 'Japanese',
            valueKey: 'Proportion of Asian Restaurants',
            valueValue: 0.71,
          },
          {
            categoryKey: 'Type of Food',
            categoryValue: 'Thai',
            valueKey: 'Proportion of Asian Restaurants',
            valueValue: 0.71,
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
            'Around seven-in-ten of all Asian restaurants in the U.S. serve the food of just three Asian origin groups: Chinese, Japanese and Thai.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            categoryKey: 'Asian origin groups',
            categoryValue: 'Chinese',
            valueKey: 'Proportion of Asian restaurants',
            valueValue: 0.3,
          },
          {
            categoryKey: 'Asian origin groups',
            categoryValue: 'Japanese',
            valueKey: 'Proportion of Asian restaurants',
            valueValue: 0.3,
          },
          {
            categoryKey: 'Asian origin groups',
            categoryValue: 'Thai',
            valueKey: 'Proportion of Asian restaurants',
            valueValue: 0.3,
          },
          {
            categoryKey: 'Asian origin groups',
            categoryValue: 'Other',
            valueKey: 'Proportion of Asian restaurants',
            valueValue: 0.1,
          },
        ],
      },
      {
        id: 'p2s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context: 'These groups together comprise 33% of the U.S. Asian population.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            categoryKey: 'the category of U.S. Asian population',
            categoryValue: 'These groups',
            valueKey: 'the proportion of U.S. Asian population',
            valueValue: 0.33,
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
            'Here are some other key takeaways from the analysis, which is based on data from SafeGraph, a data company that curates high-precision data on millions of places around the globe.',
        },
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
          context:
            'Chinese establishments are by far the most common type of Asian restaurant in the U.S. Nearly four-in-ten Asian restaurants (39%) serve Chinese food, which has a long history in the U.S.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            categoryKey: 'type of Asian restaurant',
            categoryValue: 'Chinese food',
            valueKey: 'proportion of Asian restaurants serving Chinese food',
            valueValue: 0.39,
          },
          {
            categoryKey: 'type of Asian restaurant',
            categoryValue: 'Other Asian food',
            valueKey: 'proportion of Asian restaurants serving other Asian food',
            valueValue: 0.61,
          },
        ],
      },
      {
        id: 'p4s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context: 'By comparison, Chinese Americans account for about a quarter of Asians living in the U.S. (24%).',
          inSituPosition: [],
        },
        dataSpec: [
          {
            categoryKey: 'category of Asians living in the U.S.',
            categoryValue: 'Chinese Americans',
            valueKey: 'proportion of Asians living in the U.S.',
            valueValue: 0.24,
          },
        ],
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
            'Japanese and Thai food has spread widely, despite these groups’ relatively small shares of the U.S. population.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            categoryKey: 'type of food',
            categoryValue: 'Japanese food',
            valueKey: 'share of U.S. population',
            valueValue: 0,
          },
          {
            categoryKey: 'type of food',
            categoryValue: 'Thai food',
            valueKey: 'share of U.S. population',
            valueValue: 0,
          },
        ],
      },
      {
        id: 'p5s1',
        unitSegmentSpec: {
          insightType: 'rank',
          segmentIdx: 1,
          context:
            'The first sushi restaurant in the U.S. opened just over 50 years ago, but today sushi is widely available from coast to coast.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            categoryKey: '',
            categoryValue: '',
            valueKey: '',
            valueValue: NaN,
          },
        ],
      },
      {
        id: 'p5s2',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 2,
          context:
            'Restaurants that serve Japanese food account for 28% of Asian restaurants in the U.S., making it the second-most common Asian cuisine.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            categoryKey: 'category of Asian restaurants in the U.S.',
            categoryValue: 'Japanese food',
            valueKey: 'proportion of Asian restaurants',
            valueValue: 0.28,
          },
        ],
      },
      {
        id: 'p5s3',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 3,
          context:
            'Japanese Americans, by comparison, are the sixth-largest Asian origin group in the country, comprising 7% of the U.S. Asian population.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            categoryKey: 'population category',
            categoryValue: 'Japanese Americans',
            valueKey: 'proportion of U.S. Asian population',
            valueValue: 0.07,
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
            'Similarly, Thai establishments make up 11% of all Asian restaurants – the third-most common cuisine behind Chinese and Japanese food – while just 2% of Asian Americans are Thai.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            categoryKey: 'cuisine type',
            categoryValue: 'Thai',
            valueKey: 'proportion of all Asian restaurants',
            valueValue: 0.11,
          },
          {
            categoryKey: 'ethnicity',
            categoryValue: 'Thai',
            valueKey: 'proportion of Asian Americans',
            valueValue: 0.02,
          },
        ],
      },
      {
        id: 'p6s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context:
            'The Thai government has historically supported efforts to increase the number of Thai restaurants around the world as a form of diplomacy.',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            categoryKey: 'category of diplomacy',
            categoryValue: 'Thai restaurants',
            valueKey: 'number of Thai restaurants',
            valueValue: NaN,
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
            'Indian and Filipino establishments account for a relatively small share of Asian restaurants. Indian and Filipino restaurants account for 7% and 1% of all Asian restaurants in the U.S., respectively – even though Indian and Filipino Americans account for nearly 40% of Asians in the U.S. combined.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            categoryKey: 'category of Asian restaurants',
            categoryValue: 'Indian restaurants',
            valueKey: 'proportion of Asian restaurants in the U.S.',
            valueValue: 0.07,
          },
          {
            categoryKey: 'category of Asian restaurants',
            categoryValue: 'Filipino restaurants',
            valueKey: 'proportion of Asian restaurants in the U.S.',
            valueValue: 0.01,
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
            'Like the Asian American population, Asian restaurants in the U.S. are heavily concentrated in a few states. More than half of U.S. Asians (55%) live in five states: California, New York, Texas, New Jersey and Washington.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            categoryKey: 'state',
            categoryValue: 'California',
            valueKey: 'Asian American population proportion',
            valueValue: 0.11,
          },
          {
            categoryKey: 'state',
            categoryValue: 'New York',
            valueKey: 'Asian American population proportion',
            valueValue: 0.11,
          },
          {
            categoryKey: 'state',
            categoryValue: 'Texas',
            valueKey: 'Asian American population proportion',
            valueValue: 0.11,
          },
          {
            categoryKey: 'state',
            categoryValue: 'New Jersey',
            valueKey: 'Asian American population proportion',
            valueValue: 0.11,
          },
          {
            categoryKey: 'state',
            categoryValue: 'Washington',
            valueKey: 'Asian American population proportion',
            valueValue: 0.11,
          },
        ],
      },
      {
        id: 'p8s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context: 'And just under half of all Asian restaurants – 45% – are located in those five states.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            categoryKey: 'location category',
            categoryValue: 'five states',
            valueKey: 'proportion of Asian restaurants',
            valueValue: 0.45,
          },
          {
            categoryKey: 'location category',
            categoryValue: 'other states',
            valueKey: 'proportion of Asian restaurants',
            valueValue: 0.55,
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
          context:
            'More than 15% of all restaurants in Hawaii, California, Washington, Nevada and New York serve Asian food, and each state has a significant Asian American population.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            categoryKey: 'State',
            categoryValue: 'Hawaii, California, Washington, Nevada, New York',
            valueKey: 'Proportion of Restaurants Serving Asian Food',
            valueValue: 0.15,
          },
        ],
      },
      {
        id: 'p9s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context:
            'Meanwhile, Asian restaurants account for 6% of all restaurants in Montana, North Dakota, South Dakota and West Virginia.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            categoryKey: 'category of restaurants',
            categoryValue: 'Asian restaurants',
            valueKey: 'proportion of all restaurants',
            valueValue: 0.06,
          },
          {
            categoryKey: 'category of restaurants',
            categoryValue: 'Other restaurants',
            valueKey: 'proportion of all restaurants',
            valueValue: 0.94,
          },
        ],
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
          context:
            'Around three-quarters of all counties in the U.S. (73%) have at least one Asian restaurant of any kind.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            categoryKey: 'category of counties in the U.S.',
            categoryValue: 'counties with at least one Asian restaurant',
            valueKey: 'proportion of counties with at least one Asian restaurant',
            valueValue: 0.73,
          },
          {
            categoryKey: 'category of counties in the U.S.',
            categoryValue: 'counties without any Asian restaurant',
            valueKey: 'proportion of counties without any Asian restaurant',
            valueValue: 0.27,
          },
        ],
      },
      {
        id: 'p10s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context:
            'And in eight counties with at least 15 restaurants of any type, Asian restaurants make up at least a quarter of all food establishments. Half of those counties are in California.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            categoryKey: 'type of restaurant',
            categoryValue: 'Asian restaurants',
            valueKey: 'proportion of food establishments',
            valueValue: 0.25,
          },
          {
            categoryKey: 'location',
            categoryValue: 'California',
            valueKey: 'proportion of counties',
            valueValue: 0.5,
          },
        ],
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
          context: 'A map of the U.S. that shows in eight counties, at least one-in-four restaurants serve Asian food.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            categoryKey: 'category of restaurants',
            categoryValue: 'Asian food',
            valueKey: 'proportion of restaurants serving Asian food',
            valueValue: 0.25,
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
          context: 'Chinese restaurants are found in every state and in 70% of all U.S. counties.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            categoryKey: 'category of U.S. counties',
            categoryValue: 'Chinese restaurants',
            valueKey: 'proportion of U.S. counties',
            valueValue: 0.7,
          },
          {
            categoryKey: 'category of U.S. counties',
            categoryValue: 'Other restaurants',
            valueKey: 'proportion of U.S. counties',
            valueValue: 0.3,
          },
        ],
      },
      {
        id: 'p12s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context:
            'Every state and a third or more of all counties also have at least one Japanese (45%) or Thai (33%) restaurant.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            categoryKey: 'restaurant type',
            categoryValue: 'Japanese',
            valueKey: 'proportion of restaurants',
            valueValue: 0.45,
          },
          {
            categoryKey: 'restaurant type',
            categoryValue: 'Thai',
            valueKey: 'proportion of restaurants',
            valueValue: 0.33,
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
            'However, restaurants serving other types of Asian food are less widely distributed. Around one-in-five U.S. counties have Vietnamese and Indian restaurants, and fewer than 10% of counties have Filipino, Pakistani, Mongolian or Burmese restaurants.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            categoryKey: 'type of Asian food',
            categoryValue: 'Vietnamese and Indian',
            valueKey: 'percentage of U.S. counties',
            valueValue: 20,
          },
          {
            categoryKey: 'type of Asian food',
            categoryValue: 'Filipino, Pakistani, Mongolian, Burmese',
            valueKey: 'percentage of U.S. counties',
            valueValue: 10,
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
            'Multiple maps of the U.S. that show restaurants serving Asian cuisines are found across the United States.',
        },
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
          context: 'Some 9% of Asian restaurants in the U.S. offer cuisines from multiple Asian origin groups.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            categoryKey: 'category of Asian restaurants in the U.S.',
            categoryValue: 'Asian restaurants offering cuisines from multiple origin groups',
            valueKey: 'proportion of Asian restaurants in the U.S. offering cuisines from multiple origin groups',
            valueValue: 0.09,
          },
          {
            categoryKey: 'category of Asian restaurants in the U.S.',
            categoryValue: 'Asian restaurants not offering cuisines from multiple origin groups',
            valueKey: 'proportion of Asian restaurants in the U.S. not offering cuisines from multiple origin groups',
            valueValue: 0.91,
          },
        ],
      },
      {
        id: 'p15s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context:
            'Nearly seven in every 10 of these establishments are combinations of Chinese or Japanese food, either with each other (36%) or with some other cuisine: 18% serve Chinese and Thai food, 15% serve Japanese and Thai food and 10% serve Japanese and Korean food.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            categoryKey: 'Type of Establishment',
            categoryValue: 'Chinese and Japanese food combinations',
            valueKey: 'Percentage of Establishments',
            valueValue: 36,
          },
          {
            categoryKey: 'Type of Establishment',
            categoryValue: 'Chinese and Thai food',
            valueKey: 'Percentage of Establishments',
            valueValue: 18,
          },
          {
            categoryKey: 'Type of Establishment',
            categoryValue: 'Japanese and Thai food',
            valueKey: 'Percentage of Establishments',
            valueValue: 15,
          },
          {
            categoryKey: 'Type of Establishment',
            categoryValue: 'Japanese and Korean food',
            valueKey: 'Percentage of Establishments',
            valueValue: 10,
          },
        ],
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
          context: 'However, these relationships are not always symmetrical.',
        },
      },
      {
        id: 'p16s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context:
            'For instance, 78% of Pakistani restaurants in the U.S. also serve Indian food, but just 10% of Indian restaurants serve Pakistani food.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            categoryKey: 'type of restaurant',
            categoryValue: 'Pakistani restaurants in the U.S.',
            valueKey: 'proportion serving Indian food',
            valueValue: 0.78,
          },
          {
            categoryKey: 'type of restaurant',
            categoryValue: 'Indian restaurants in the U.S.',
            valueKey: 'proportion serving Pakistani food',
            valueValue: 0.1,
          },
        ],
      },
    ],
  },
];

export default article5;
