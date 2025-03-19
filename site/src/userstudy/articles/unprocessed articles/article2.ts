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
            breakdown: 'United States',
            feature: 'comparison of K-12 STEM education with other wealthy nations',
            value: 0,
          },
          {
            space: 'category of K-12 STEM education',
            breakdown: 'other wealthy nations',
            feature: 'comparison of K-12 STEM education with other wealthy nations',
            value: 30,
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
            breakdown: 'U.S.',
            feature: 'math test scores',
            value: 0,
          },
          {
            space: 'country',
            breakdown: 'other wealthy nations',
            feature: 'math test scores',
            value: 30,
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
            breakdown: "America's students",
            feature: 'performance in science',
            value: NaN,
          },
          {
            space: "category of students' performance",
            breakdown: 'pupils in other countries',
            feature: 'performance in science',
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
            breakdown: 'U.S. STEM education',
            feature: 'comparison with other wealthy countries',
            value: NaN,
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
            breakdown: 'Americans',
            feature: 'Proportion of Average or Below Average Perception',
            value: 0.67,
          },
          {
            space: 'Perception of K-12 STEM Education',
            breakdown: 'Americans',
            feature: 'Proportion of Above Average Perception',
            value: 0.33,
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
            breakdown: 'U.S. adults',
            feature:
              'proportion of U.S. adults who think America is the best or above average in K-12 science, technology, engineering and math education',
            value: 0.28,
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
            breakdown: 'Average',
            feature: 'Proportion of Responses',
            value: 0.33,
          },
          {
            space: 'Perception of U.S. K-12 STEM Education',
            breakdown: 'Below Average or Worst',
            feature: 'Proportion of Responses',
            value: 0.32,
          },
          {
            space: 'Perception of U.S. K-12 STEM Education',
            breakdown: 'Other',
            feature: 'Proportion of Responses',
            value: 0.35,
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
            breakdown: 'White Americans',
            feature: 'Pessimism Level',
            value: 24,
          },
          {
            space: 'Demographic Group',
            breakdown: 'Black Americans',
            feature: 'Pessimism Level',
            value: 31,
          },
          {
            space: 'Demographic Group',
            breakdown: 'Hispanic Americans',
            feature: 'Pessimism Level',
            value: 37,
          },
          {
            space: 'Demographic Group',
            breakdown: 'English-speaking Asian Americans',
            feature: 'Pessimism Level',
            value: 43,
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
            breakdown: 'Women',
            feature: 'Proportion of respondents',
            value: 0.25,
          },
          {
            space: 'Gender',
            breakdown: 'Men',
            feature: 'Proportion of respondents',
            value: 0.32,
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
            breakdown: 'Democrats and Democratic-leaning independents',
            feature: 'Percentage rating K-12 STEM education as at least above average',
            value: 31,
          },
          {
            space: 'Political Affiliation',
            breakdown: 'Republicans and GOP leaners',
            feature: 'Percentage rating K-12 STEM education as at least above average',
            value: 27,
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
            breakdown: '2019',
            feature: 'Views Similarity',
            value: 0,
          },
          {
            space: 'Survey Year',
            breakdown: '2023',
            feature: 'Views Similarity',
            value: 0,
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
            breakdown: 'U.S. K-12 STEM education',
            feature: 'proportion of positive responses',
            value: 0.31,
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
            breakdown: 'U.S.',
            feature: 'STEM test scores',
            value: NaN,
          },
          {
            space: 'Country',
            breakdown: 'Other countries',
            feature: 'STEM test scores',
            value: NaN,
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
            breakdown: 'U.S.',
            feature: 'math ranking',
            value: 2,
          },
          {
            space: 'OECD countries',
            breakdown: 'average',
            feature: 'math ranking',
            value: 1,
          },
          {
            space: 'OECD countries',
            breakdown: 'U.S.',
            feature: 'science ranking',
            value: 1,
          },
          {
            space: 'OECD countries',
            breakdown: 'average',
            feature: 'science ranking',
            value: 2,
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
            breakdown: 'U.S.',
            feature: 'math performance compared to OECD average',
            value: 0,
          },
          {
            space: 'category of academic performance',
            breakdown: 'OECD average',
            feature: 'math performance compared to OECD average',
            value: 30,
          },
          {
            space: 'category of academic performance',
            breakdown: 'U.S.',
            feature: 'science performance compared to OECD average',
            value: 30,
          },
          {
            space: 'category of academic performance',
            breakdown: 'OECD average',
            feature: 'science performance compared to OECD average',
            value: 0,
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
            breakdown: 'U.S. students',
            feature: 'math ranking',
            value: 28,
          },
          {
            space: 'OECD member countries',
            breakdown: 'Japanese students',
            feature: 'math ranking',
            value: 1,
          },
          {
            space: 'OECD member countries',
            breakdown: 'Colombian students',
            feature: 'math ranking',
            value: 37,
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
            breakdown: '2018',
            feature: 'U.S. Average Math Score',
            value: 0,
          },
          {
            space: 'Time Period',
            breakdown: '2022',
            feature: 'U.S. Average Math Score',
            value: -13,
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
            breakdown: 'U.S.',
            feature: 'rank in OECD countries',
            value: 12,
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
            breakdown: 'Japanese',
            feature: 'noType',
            value: 1,
          },
          {
            space: 'students',
            breakdown: 'Mexican',
            feature: 'noType',
            value: 2,
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
            breakdown: 'U.S average science score',
            feature: 'score value',
            value: 100,
          },
          {
            space: 'category of score',
            breakdown: 'U.S average science score trend',
            feature: 'trend value',
            value: 0,
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
            breakdown: 'science scores',
            feature: 'decline in scores',
            value: 0,
          },
          {
            space: 'subject of scores',
            breakdown: 'math scores',
            feature: 'decline in scores',
            value: 30,
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
            breakdown: 'Seven OECD countries',
            feature: 'mean science scores',
            value: -10,
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
            breakdown: '15-year-old students',
            feature: 'frequency of testing',
            value: NaN,
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
            breakdown: '37',
            feature: '',
            value: NaN,
          },
        ],
      },
    ],
  },
];

export default article2;
