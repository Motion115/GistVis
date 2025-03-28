import { paragraphSpec } from 'gist-wsv';

const article6: paragraphSpec[] = [
  {
    paragraphIdx: 0,
    paragraphContent: [
      {
        id: 'p0s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context:
            'Black registered voters overwhelmingly support Vice President Kamala Harris over former President Donald Trump and Robert F. Kennedy Jr. in the presidential race.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'candidate',
            breakdown: 'Kamala Harris',
            feature: 'support rate',
            value: 0,
          },
          {
            space: 'candidate',
            breakdown: 'Donald Trump',
            feature: 'support rate',
            value: 0,
          },
          {
            space: 'candidate',
            breakdown: 'Robert F. Kennedy Jr.',
            feature: 'support rate',
            value: 0,
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
            'A diverging bar chart showing that most Black voters favor Kamala Harris over Donald Trump and Robert F. Kennedy Jr.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'Candidate Preference',
            breakdown: 'Kamala Harris',
            feature: 'Voter Preference',
            value: 0,
          },
          {
            space: 'Candidate Preference',
            breakdown: 'Donald Trump',
            feature: 'Voter Preference',
            value: -30,
          },
          {
            space: 'Candidate Preference',
            breakdown: 'Robert F. Kennedy Jr.',
            feature: 'Voter Preference',
            value: -30,
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
            'About three-quarters of Black voters (77%) say they would vote for or lean toward Harris if the 2024 presidential election were held today. Another 13% say they would back or lean toward Trump. Just 7% would support or lean toward Kennedy, according to a Pew Research Center survey of U.S. adults conducted Aug. 5-11 (before the start of the Democratic National Convention).',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'Candidate Preference',
            breakdown: 'Harris',
            feature: 'Proportion of Black Voters',
            value: 0.77,
          },
          {
            space: 'Candidate Preference',
            breakdown: 'Trump',
            feature: 'Proportion of Black Voters',
            value: 0.13,
          },
          {
            space: 'Candidate Preference',
            breakdown: 'Kennedy',
            feature: 'Proportion of Black Voters',
            value: 0.07,
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
          context: 'Black voters’ support for the top of the Democratic ticket has increased over the past month.',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            space: 'category of support',
            breakdown: "Black voters' support for the top of the Democratic ticket",
            feature: 'support rate',
            value: NaN,
          },
        ],
      },
      {
        id: 'p3s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context:
            'In July, before President Joe Biden withdrew from the race and endorsed Harris, 64% of Black voters supported Biden.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'the category of voters',
            breakdown: 'Black voters',
            feature: 'the support rate for Biden',
            value: 0.64,
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
            'Meanwhile, the share of Black voters who say they support Trump has not changed, and the share who prefer Kennedy has fallen from 21% to 7%.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'Voter Support Category',
            breakdown: 'Black Voters Supporting Trump',
            feature: 'Proportion of Black Voters',
            value: 0.75,
          },
          {
            space: 'Voter Support Category',
            breakdown: 'Black Voters Supporting Kennedy',
            feature: 'Proportion of Black Voters',
            value: 0.25,
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
          context: 'How we did this',
        },
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
          context: 'Demographic differences in Black voters’ support for Harris',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'Demographic',
            breakdown: 'Black voters',
            feature: 'Support for Harris',
            value: NaN,
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
            'Black voters differ by age in their support for Harris. While 86% of Black voters 50 and older back her, a smaller share of Black voters 18 to 49 (68%) say the same.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'age group',
            breakdown: 'Black voters 50 and older',
            feature: 'support for Harris',
            value: 86,
          },
          {
            space: 'age group',
            breakdown: 'Black voters 18 to 49',
            feature: 'support for Harris',
            value: 68,
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
          context: 'These age differences are consistent with those for Biden in an April 2024 survey.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'Survey Entity',
            breakdown: 'Biden',
            feature: 'Age Difference',
            value: 0,
          },
          {
            space: 'Survey Entity',
            breakdown: 'April 2024 Survey',
            feature: 'Age Difference',
            value: 30,
          },
        ],
      },
      {
        id: 'p8s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context:
            'However, this is different from the pattern among registered voters of all races and ethnicities, where support for Harris is slightly higher among those 18 to 49 (49%) than those 50 and older (44%).',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'age group',
            breakdown: '18 to 49',
            feature: 'support for Harris',
            value: 49,
          },
          {
            space: 'age group',
            breakdown: '50 and older',
            feature: 'support for Harris',
            value: 44,
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
            'Black voters with college degrees are also more likely than those without degrees to support Harris (84% vs. 74%).',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'Black voters with',
            breakdown: 'college degrees',
            feature: 'support for Harris',
            value: 84,
          },
          {
            space: 'Black voters with',
            breakdown: 'without degrees',
            feature: 'support for Harris',
            value: 74,
          },
        ],
      },
      {
        id: 'p9s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context:
            'This is similar to the pattern for voters overall, where Harris gets more support from college graduates (56%) than she does from those without bachelor’s degrees (41%).',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'category of education level',
            breakdown: 'college graduates',
            feature: 'support percentage for Harris',
            value: 56,
          },
          {
            space: 'category of education level',
            breakdown: 'those without bachelor’s degrees',
            feature: 'support percentage for Harris',
            value: 41,
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
          context: 'In contrast, there are no significant differences by gender in Black voters’ support for Harris.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'category of voters',
            breakdown: 'Black voters',
            feature: 'support for Harris',
            value: 0,
          },
          {
            space: 'category of voters',
            breakdown: 'Black voters by gender',
            feature: 'support for Harris',
            value: 0,
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
          context: 'More Black voters view Harris favorably now than in the spring',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            space: 'category of voters',
            breakdown: 'Black voters',
            feature: 'view Harris favorably',
            value: NaN,
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
          context: 'A line chart showing that Harris’ favorability among Black voters has improved.',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            space: 'category of voters',
            breakdown: 'Black voters',
            feature: 'favorability rating',
            value: NaN,
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
          context: 'About eight-in-ten Black voters (79%) have a favorable opinion of Harris,',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'Demographic Group',
            breakdown: 'Black voters',
            feature: 'Favorability of Harris',
            value: 0.79,
          },
        ],
      },
      {
        id: 'p13s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context: 'and a similar share (80%) are happy that she is now the Democratic nominee for president.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'share of sentiment',
            breakdown: 'happy',
            feature: 'proportion of sentiment',
            value: 0.8,
          },
          {
            space: 'share of sentiment',
            breakdown: 'other',
            feature: 'proportion of sentiment',
            value: 0.2,
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
            'While the shares of Black voters who have a favorable view of Biden (68%) and Trump (14%) have held relatively steady since July 2023,',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'category of voters',
            breakdown: 'Black voters',
            feature: 'favorable view of Biden',
            value: 68,
          },
          {
            space: 'category of voters',
            breakdown: 'Black voters',
            feature: 'favorable view of Trump',
            value: 14,
          },
        ],
      },
      {
        id: 'p14s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context: 'the share who have a positive view of Harris has increased.',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            space: 'category of view',
            breakdown: 'Harris',
            feature: 'percentage of positive views',
            value: NaN,
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
          context:
            'Roughly two-thirds of Black voters had a favorable view of Harris in July 2023 (65%) and May 2024 (67%). This share increased to 79% in August 2024, after Harris rose to the top of the Democratic ticket.',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            space: 'Time Segment',
            breakdown: 'July 2023',
            feature: 'Favorable View Percentage',
            value: 65,
          },
          {
            space: 'Time Segment',
            breakdown: 'May 2024',
            feature: 'Favorable View Percentage',
            value: 67,
          },
          {
            space: 'Time Segment',
            breakdown: 'August 2024',
            feature: 'Favorable View Percentage',
            value: 79,
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
          context:
            'Some groups of Black voters have had particularly large shifts in opinion over the past few months:',
          inSituPosition: [],
          attribute: undefined,
        },
        dataSpec: [
          {
            space: 'category of opinion shift',
            breakdown: 'Black voters',
            feature: 'opinion shift rate',
            value: NaN,
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
          context: 'Women: 67% of Black women had a favorable opinion of Harris in May, compared with 82% in August.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'Opinion of Harris among Women',
            breakdown: 'Black women',
            feature: 'Favorable opinion percentage',
            value: 67,
          },
          {
            space: 'Opinion of Harris among Women',
            breakdown: 'Black women',
            feature: 'Favorable opinion percentage',
            value: 82,
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
            'Younger adults: 52% of Black voters ages 18 to 49 viewed Harris favorably in May. By August, 70% did.',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            space: 'Age Group',
            breakdown: 'Black voters ages 18 to 49',
            feature: 'Favorability of Harris',
            value: 52,
          },
          {
            space: 'Age Group',
            breakdown: 'Black voters ages 18 to 49',
            feature: 'Favorability of Harris',
            value: 70,
          },
        ],
      },
    ],
  },
  {
    paragraphIdx: 19,
    paragraphContent: [
      {
        id: 'p19s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context:
            'Those with college degrees: Harris’ favorability ratings among Black voters with college degrees rose by 20 points from May to August (62% vs. 82%).',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            space: 'category of voters',
            breakdown: 'Black voters with college degrees',
            feature: 'favorability ratings',
            value: 82,
          },
        ],
      },
    ],
  },
  {
    paragraphIdx: 20,
    paragraphContent: [
      {
        id: 'p20s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context: 'However, the increase in positive views of Harris is not limited to Black voters.',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            space: 'category of voters',
            breakdown: 'Black voters',
            feature: 'positive views increase',
            value: 100,
          },
        ],
      },
      {
        id: 'p20s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context:
            'Her favorability ratings have also increased since May among Democrats and Democratic leaners overall.',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            space: 'category of favorability ratings',
            breakdown: 'Democrats and Democratic leaners',
            feature: 'favorability ratings',
            value: NaN,
          },
        ],
      },
    ],
  },
  {
    paragraphIdx: 21,
    paragraphContent: [
      {
        id: 'p21s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context: 'More Black voters are motivated to vote now than last month',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            space: 'category of voters',
            breakdown: 'Black voters',
            feature: 'motivation to vote',
            value: NaN,
          },
        ],
      },
    ],
  },
  {
    paragraphIdx: 22,
    paragraphContent: [
      {
        id: 'p22s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context:
            'Many voters across demographic and political groups have become more motivated to cast a ballot since July.',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            space: 'demographic and political groups',
            breakdown: 'voters',
            feature: 'motivation to cast a ballot',
            value: NaN,
          },
        ],
      },
      {
        id: 'p22s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context:
            'Among Black voters specifically, the share who were extremely or very motivated to vote rose from 56% in July to 67% in August.',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            space: 'Time Segment',
            breakdown: 'July',
            feature: 'Motivation Level Among Black Voters',
            value: 56,
          },
          {
            space: 'Time Segment',
            breakdown: 'August',
            feature: 'Motivation Level Among Black Voters',
            value: 67,
          },
        ],
      },
      {
        id: 'p22s2',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 2,
          context: 'Once again, women and those with college degrees had particularly large increases:',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            space: 'category of demographic',
            breakdown: 'women',
            feature: 'increase rate',
            value: NaN,
          },
          {
            space: 'category of education',
            breakdown: 'college degrees',
            feature: 'increase rate',
            value: NaN,
          },
        ],
      },
    ],
  },
  {
    paragraphIdx: 23,
    paragraphContent: [
      {
        id: 'p23s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context:
            '51% of Black women said they were extremely or very motivated to vote in July, compared with 67% in August.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'time period',
            breakdown: 'July',
            feature: 'motivation level of Black women to vote',
            value: 51,
          },
          {
            space: 'time period',
            breakdown: 'August',
            feature: 'motivation level of Black women to vote',
            value: 67,
          },
        ],
      },
    ],
  },
  {
    paragraphIdx: 24,
    paragraphContent: [
      {
        id: 'p24s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context:
            'Motivation to vote rose by almost 20 points from July to August among Black voters with college degrees (63% vs. 81%).',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            space: 'category of voters',
            breakdown: 'Black voters with college degrees',
            feature: 'motivation to vote',
            value: 63,
          },
          {
            space: 'category of voters',
            breakdown: 'Black voters with college degrees',
            feature: 'motivation to vote',
            value: 81,
          },
        ],
      },
    ],
  },
];

export default article6;
