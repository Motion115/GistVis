import { paragraphSpec } from 'gist-wsv';

const article2: paragraphSpec[] = [
  {
    paragraphIdx: 0,
    paragraphContent: [
      {
        id: 'p0s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context:
            'Most Americans believe K-12 STEM education in the United States is either average or below average compared with other wealthy nations, according to a new Pew Research Center survey.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'category of K-12 STEM education',
            categoryValue: 'United States',
            valueKey: 'comparison of K-12 STEM education with other wealthy nations',
            valueValue: 0,
          },
          {
            space: 'category of K-12 STEM education',
            categoryValue: 'other wealthy nations',
            valueKey: 'comparison of K-12 STEM education with other wealthy nations',
            valueValue: 30,
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
            'Recent global standardized test scores show that students in the U.S. are, in fact, lagging behind their peers in other wealthy nations when it comes to math.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'country',
            categoryValue: 'U.S.',
            valueKey: 'math test scores',
            valueValue: 0,
          },
          {
            space: 'country',
            categoryValue: 'other wealthy nations',
            valueKey: 'math test scores',
            valueValue: 30,
          },
        ],
      },
      {
        id: 'p1s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context:
            'But America’s students are doing better than average in science compared with pupils in these other countries.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: "category of students' performance",
            categoryValue: "America's students",
            valueKey: 'performance in science',
            valueValue: NaN,
          },
          {
            space: "category of students' performance",
            categoryValue: 'pupils in other countries',
            valueKey: 'performance in science',
            valueValue: NaN,
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
          context: 'How we did this',
        },
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
          context: 'How do Americans think U.S. STEM education compares with other wealthy countries?',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'category of comparison',
            categoryValue: 'U.S. STEM education',
            valueKey: 'comparison with other wealthy countries',
            valueValue: NaN,
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
          context:
            'A horizontal stacked bar chart showing that about two-thirds of Americans see K-12 STEM education in the U.S. as average or below average.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'Perception of K-12 STEM Education',
            categoryValue: 'Americans',
            valueKey: 'Proportion of Average or Below Average Perception',
            valueValue: 0.67,
          },
          {
            space: 'Perception of K-12 STEM Education',
            categoryValue: 'Americans',
            valueKey: 'Proportion of Above Average Perception',
            valueValue: 0.33,
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
            'Just 28% of U.S. adults say America is the best in the world or above average in K-12 science, technology, engineering and math education compared with other wealthy nations.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'category of K-12 education quality',
            categoryValue: 'U.S. adults',
            valueKey:
              'proportion of U.S. adults who think America is the best or above average in K-12 science, technology, engineering and math education',
            valueValue: 0.28,
          },
        ],
      },
      {
        id: 'p5s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context:
            'A third say the U.S. is average, while another 32% think the U.S. is below average or the worst in K-12 STEM education.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'Perception of U.S. K-12 STEM Education',
            categoryValue: 'Average',
            valueKey: 'Proportion of Responses',
            valueValue: 0.33,
          },
          {
            space: 'Perception of U.S. K-12 STEM Education',
            categoryValue: 'Below Average or Worst',
            valueKey: 'Proportion of Responses',
            valueValue: 0.32,
          },
          {
            space: 'Perception of U.S. K-12 STEM Education',
            categoryValue: 'Other',
            valueKey: 'Proportion of Responses',
            valueValue: 0.35,
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
            'Some demographic groups are more pessimistic than others about the state of U.S. STEM education. White Americans (24%) are less likely than Black (31%), Hispanic (37%) or English-speaking Asian (43%) Americans to say U.S. K-12 STEM education is the best in the world or above average.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'Demographic Group',
            categoryValue: 'White Americans',
            valueKey: 'Pessimism Level',
            valueValue: 24,
          },
          {
            space: 'Demographic Group',
            categoryValue: 'Black Americans',
            valueKey: 'Pessimism Level',
            valueValue: 31,
          },
          {
            space: 'Demographic Group',
            categoryValue: 'Hispanic Americans',
            valueKey: 'Pessimism Level',
            valueValue: 37,
          },
          {
            space: 'Demographic Group',
            categoryValue: 'English-speaking Asian Americans',
            valueKey: 'Pessimism Level',
            valueValue: 43,
          },
        ],
      },
      {
        id: 'p6s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context: 'And fewer women (25%) than men (32%) say K-12 STEM education is at least above average.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'Gender',
            categoryValue: 'Women',
            valueKey: 'Proportion of respondents',
            valueValue: 0.25,
          },
          {
            space: 'Gender',
            categoryValue: 'Men',
            valueKey: 'Proportion of respondents',
            valueValue: 0.32,
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
            'Republicans and Democrats give similar ratings to K-12 STEM education: 31% of Democrats and Democratic-leaning independents say it is at least above average, as do 27% of Republicans and GOP leaners.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'Political Affiliation',
            categoryValue: 'Democrats and Democratic-leaning independents',
            valueKey: 'Percentage rating K-12 STEM education as at least above average',
            valueValue: 31,
          },
          {
            space: 'Political Affiliation',
            categoryValue: 'Republicans and GOP leaners',
            valueKey: 'Percentage rating K-12 STEM education as at least above average',
            valueValue: 27,
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
            'Americans’ views today are similar to those in a 2019 telephone survey by the Center, which was conducted before the coronavirus pandemic caused major disruptions in the country’s schools.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'Survey Year',
            categoryValue: '2019',
            valueKey: 'Views Similarity',
            valueValue: 0,
          },
          {
            space: 'Survey Year',
            categoryValue: '2023',
            valueKey: 'Views Similarity',
            valueValue: 0,
          },
        ],
      },
      {
        id: 'p8s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context:
            'In that survey, 31% of Americans said U.S. K-12 STEM education is the best in the world or above average compared with other nations.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'category of survey response',
            categoryValue: 'U.S. K-12 STEM education',
            valueKey: 'proportion of positive responses',
            valueValue: 0.31,
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
          context: 'How does the U.S. compare with other countries in STEM test scores?',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'Country',
            categoryValue: 'U.S.',
            valueKey: 'STEM test scores',
            valueValue: NaN,
          },
          {
            space: 'Country',
            categoryValue: 'Other countries',
            valueKey: 'STEM test scores',
            valueValue: NaN,
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
            'A dot plot showing that U.S. ranks below average in math, above average in science compared with other OECD countries.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'OECD countries',
            categoryValue: 'U.S.',
            valueKey: 'math ranking',
            valueValue: 2,
          },
          {
            space: 'OECD countries',
            categoryValue: 'average',
            valueKey: 'math ranking',
            valueValue: 1,
          },
          {
            space: 'OECD countries',
            categoryValue: 'U.S.',
            valueKey: 'science ranking',
            valueValue: 1,
          },
          {
            space: 'OECD countries',
            categoryValue: 'average',
            valueKey: 'science ranking',
            valueValue: 2,
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
          context:
            'The latest figures from the Program for International Student Assessment (PISA) show a mixed picture in U.S. math and science scores.',
        },
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
            'As of 2022, the U.S. was below average in math but above average in science compared with other member countries in the Organization for Economic Cooperation and Development (OECD), a group of mostly highly developed, democratic nations:',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'category of academic performance',
            categoryValue: 'U.S.',
            valueKey: 'math performance compared to OECD average',
            valueValue: 0,
          },
          {
            space: 'category of academic performance',
            categoryValue: 'OECD average',
            valueKey: 'math performance compared to OECD average',
            valueValue: 30,
          },
          {
            space: 'category of academic performance',
            categoryValue: 'U.S.',
            valueKey: 'science performance compared to OECD average',
            valueValue: 30,
          },
          {
            space: 'category of academic performance',
            categoryValue: 'OECD average',
            valueKey: 'science performance compared to OECD average',
            valueValue: 0,
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
            'U.S. students ranked 28th out of 37 OECD member countries in math. Among OECD countries, Japanese students had the highest math scores and Colombian students scored lowest. The U.S. ranking was similar in 2018, the last time the test was administered.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'OECD member countries',
            categoryValue: 'U.S. students',
            valueKey: 'math ranking',
            valueValue: 28,
          },
          {
            space: 'OECD member countries',
            categoryValue: 'Japanese students',
            valueKey: 'math ranking',
            valueValue: 1,
          },
          {
            space: 'OECD member countries',
            categoryValue: 'Colombian students',
            valueKey: 'math ranking',
            valueValue: 37,
          },
        ],
      },
      {
        id: 'p13s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context:
            'The U.S. average score for math fell by 13 percentage points between 2018 and 2022, but the U.S. was far from alone in experiencing a decline in scores. In fact, 25 of the 37 OECD countries saw at least a 10-point drop in average math scores from 2018 to 2022.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'Time Period',
            categoryValue: '2018',
            valueKey: 'U.S. Average Math Score',
            valueValue: 0,
          },
          {
            space: 'Time Period',
            categoryValue: '2022',
            valueKey: 'U.S. Average Math Score',
            valueValue: -13,
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
          context: 'In science, the U.S. ranked 12th out of 37 OECD countries.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'country',
            categoryValue: 'U.S.',
            valueKey: 'rank in OECD countries',
            valueValue: 12,
          },
        ],
      },
      {
        id: 'p14s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context: 'Japanese students ranked highest and Mexican students ranked lowest.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'students',
            categoryValue: 'Japanese',
            valueKey: 'noType',
            valueValue: 1,
          },
          {
            space: 'students',
            categoryValue: 'Mexican',
            valueKey: 'noType',
            valueValue: 2,
          },
        ],
      },
      {
        id: 'p14s2',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 2,
          context: 'The U.S average science score was virtually unchanged since 2018.',
          inSituPosition: [],
          attribute: undefined,
        },
        dataSpec: [
          {
            space: 'category of score',
            categoryValue: 'U.S average science score',
            valueKey: 'score value',
            valueValue: 100,
          },
          {
            space: 'category of score',
            categoryValue: 'U.S average science score trend',
            valueKey: 'trend value',
            valueValue: 0,
          },
        ],
      },
      {
        id: 'p14s3',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 3,
          context:
            'Across OECD countries, far fewer countries experienced a large decline in science scores than in math scores.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'subject of scores',
            categoryValue: 'science scores',
            valueKey: 'decline in scores',
            valueValue: 0,
          },
          {
            space: 'subject of scores',
            categoryValue: 'math scores',
            valueKey: 'decline in scores',
            valueValue: 30,
          },
        ],
      },
      {
        id: 'p14s4',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 4,
          context: 'Seven OECD countries saw their mean science scores decline by 10 points or more.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'OECD countries',
            categoryValue: 'Seven OECD countries',
            valueKey: 'mean science scores',
            valueValue: -10,
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
          context: 'PISA is taken by 15-year-old students about every three years.',
          inSituPosition: ['every three years'],
        },
        dataSpec: [
          {
            space: 'age group',
            categoryValue: '15-year-old students',
            valueKey: 'frequency of testing',
            valueValue: NaN,
          },
        ],
      },
      {
        id: 'p15s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context: 'Students in 37 OECD countries took the 2022 PISA.',
          inSituPosition: ['37'],
        },
        dataSpec: [
          {
            space: 'OECD countries',
            categoryValue: '37',
            valueKey: '',
            valueValue: NaN,
          },
        ],
      },
    ],
  },
];

export default article2;
