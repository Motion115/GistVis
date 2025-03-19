import { paragraphSpec } from 'gist-wsv';

const article4: paragraphSpec[] = [
  {
    paragraphIdx: 0,
    paragraphContent: [
      {
        id: 'p0s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context:
            'Thanksgiving – and, more specifically, Black Friday – is the semiofficial start of the holiday shopping season in the United States.',
        },
      },
      {
        id: 'p0s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context:
            'And if history is any guide, a lot of this year’s holiday shopping will be done online, and not just on Cyber Monday.',
        },
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
            'Like retail sales generally, online shopping reliably surges in the fourth quarter of every year. In 2022, for example, online sales – or, as the U.S. Census Bureau calls them, “retail e-commerce sales” – totaled $303.1 billion in the October-December period.',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            space: 'category of online sales',
            categoryValue: 'retail e-commerce sales',
            valueKey: 'total online sales in the fourth quarter',
            valueValue: 303.1,
          },
        ],
      },
      {
        id: 'p1s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context:
            'That was 23.4% higher than the quarterly average for the first nine months of the year, which was $245.6 billion. (Figures in this analysis are not adjusted to account for seasonal variations.)',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'quarterly average',
            categoryValue: 'first nine months of the year',
            valueKey: 'value in billion USD',
            valueValue: 245.6,
          },
          {
            space: 'current quarter',
            categoryValue: 'current quarter',
            valueKey: 'value in billion USD',
            valueValue: 302.1704,
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
            'But it’s not just the dollar volume of sales that peaks in the fourth quarter – the online share of all retail sales ticks higher at year’s end, too.',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            space: 'category of retail sales',
            categoryValue: 'online share',
            valueKey: 'share of all retail sales',
            valueValue: NaN,
          },
        ],
      },
      {
        id: 'p2s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context:
            'In the fourth quarter of 2022, for instance, online sales accounted for 16.3% of all retail sales, compared with an average of 14.1% in the first three quarters.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'category of retail sales',
            categoryValue: 'online sales',
            valueKey: 'proportion of retail sales',
            valueValue: 0.163,
          },
          {
            space: 'category of retail sales',
            categoryValue: 'other retail sales',
            valueKey: 'proportion of retail sales',
            valueValue: 0.837,
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
          context: 'The fourth quarter of 2023 could be another big one for online shopping.',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            space: 'category of online shopping',
            categoryValue: 'online shopping',
            valueKey: 'growth in the fourth quarter of 2023',
            valueValue: 100,
          },
        ],
      },
      {
        id: 'p3s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context:
            'Through the first three quarters of the year, retail e-commerce totaled $793.7 billion, or 14.9% of all retail sales.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'category of retail sales',
            categoryValue: 'retail e-commerce',
            valueKey: 'proportion of all retail sales',
            valueValue: 0.149,
          },
          {
            space: 'category of retail sales',
            categoryValue: 'other retail sales',
            valueKey: 'proportion of all retail sales',
            valueValue: 0.851,
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
          context: 'Online sales have grown over time',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            space: 'category of online sales',
            categoryValue: 'online sales',
            valueKey: 'growth rate of online sales',
            valueValue: 100,
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
            'Between 2000 and 2020, growth in online sales followed a predictable pattern. The online share of retail sales jumped in the fourth quarter and then fell back, but not all the way to where it had been. Then it jumped again, to an even higher level, in the fourth quarter of the following year.',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            space: 'year',
            categoryValue: '2000-2020',
            valueKey: 'online share of retail sales',
            valueValue: NaN,
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
            'Two line charts showing that overall online sales leaped during the pandemic and so did the online share of total sales.',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            space: 'category of sales',
            categoryValue: 'online sales',
            valueKey: 'sales during pandemic',
            valueValue: NaN,
          },
          {
            space: 'category of sales',
            categoryValue: 'online share of total sales',
            valueKey: 'share during pandemic',
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
            'By such stepwise moves, the online share of total retail sales grew from 0.7% in the fourth quarter of 1999, when the U.S. Census Bureau began tracking online sales, to 12.4% in the fourth quarter of 2019.',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            space: 'online share of total retail sales',
            categoryValue: 'online share of total retail sales',
            valueKey: 'percentage of online sales',
            valueValue: 0.7,
          },
          {
            space: 'online share of total retail sales',
            categoryValue: 'online share of total retail sales',
            valueKey: 'percentage of online sales',
            valueValue: 12.4,
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
            'The COVID-19 pandemic that swept the globe disrupted that pattern, at least temporarily, beginning in early 2020. With many physical stores shuttered and millions of Americans sheltering in their homes, online sales soared.',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            space: 'category of online sales',
            categoryValue: 'online sales',
            valueKey: 'online sales rate',
            valueValue: NaN,
          },
        ],
      },
      {
        id: 'p8s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context:
            'In the second quarter of 2020, for instance, e-commerce sales totaled $205.3 billion, up 55% from the $132.3 billion recorded a year earlier.',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            space: 'time segment',
            categoryValue: 'second quarter of 2020',
            valueKey: 'e-commerce sales',
            valueValue: 205.3,
          },
          {
            space: 'time segment',
            categoryValue: 'second quarter of 2019',
            valueKey: 'e-commerce sales',
            valueValue: 132.3,
          },
        ],
      },
      {
        id: 'p8s2',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 2,
          context:
            'In the fourth quarter of 2020, e-commerce accounted for 16.7% of all retail sales, still the record-high share.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'category of retail sales',
            categoryValue: 'e-commerce',
            valueKey: 'proportion of retail sales',
            valueValue: 0.167,
          },
          {
            space: 'category of retail sales',
            categoryValue: 'other retail sales',
            valueKey: 'proportion of retail sales',
            valueValue: 0.833,
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
            'That share fell back as stores reopened and consumers gradually resumed their old shopping habits. But the e-commerce share of all retail sales has remained well above pre-pandemic levels, suggesting that the COVID-19 outbreak gave online shopping a lasting boost.',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            space: 'category of retail sales',
            categoryValue: 'e-commerce share',
            valueKey: 'e-commerce share value',
            valueValue: NaN,
          },
        ],
      },
      {
        id: 'p9s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context: 'In the fourth quarter of 2022, 16.3% of retail sales were online, compared with 16.1% in 2021.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'category of retail sales',
            categoryValue: 'online sales',
            valueKey: 'percentage of retail sales',
            valueValue: 16.3,
          },
          {
            space: 'category of retail sales',
            categoryValue: 'online sales',
            valueKey: 'percentage of retail sales',
            valueValue: 16.1,
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
          context: 'Which retailers benefit most from online sales?',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'retailer category',
            categoryValue: 'retailer',
            valueKey: 'online sales benefit',
            valueValue: NaN,
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
            'The retailers that are getting the highest share of online sales tend to be those without physical stores.',
          inSituPosition: ['highest share of online sales'],
          attribute: 'maximum',
        },
        dataSpec: [
          {
            space: 'category of retailers',
            categoryValue: 'retailers without physical stores',
            valueKey: 'share of online sales',
            valueValue: 0,
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
            'Nonstore retailers, as the Census Bureau calls them, took nearly 62% of all retail e-commerce sales in the third quarter of 2023, versus just over 59% a year earlier.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'Retail Category',
            categoryValue: 'Nonstore retailers',
            valueKey: 'E-commerce Sales Proportion',
            valueValue: 0.62,
          },
          {
            space: 'Retail Category',
            categoryValue: 'Other retailers',
            valueKey: 'E-commerce Sales Proportion',
            valueValue: 0.38,
          },
        ],
      },
      {
        id: 'p12s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context:
            'E-commerce sales at nonstore retailers rose 12.4% year over year, faster than the online sales sector as a whole.',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            space: 'category of sales growth',
            categoryValue: 'E-commerce sales at nonstore retailers',
            valueKey: 'year over year growth rate',
            valueValue: 12.4,
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
            'Among retailers that do have physical stores, online sales rose 8.7% at general merchandise stores, 5.1% at food and beverage stores, and 4.7% at health and personal care stores.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'category of sales increase',
            categoryValue: 'general merchandise stores',
            valueKey: 'online sales increase rate',
            valueValue: 8.7,
          },
          {
            space: 'category of sales increase',
            categoryValue: 'food and beverage stores',
            valueKey: 'online sales increase rate',
            valueValue: 5.1,
          },
          {
            space: 'category of sales increase',
            categoryValue: 'health and personal care stores',
            valueKey: 'online sales increase rate',
            valueValue: 4.7,
          },
        ],
      },
      {
        id: 'p13s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context:
            'But online sales fell 1.6% at electronics and appliance stores, 3.2% at motor vehicle and parts dealers, and 16.2% at furniture and home furnishings stores.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'category of sales',
            categoryValue: 'electronics and appliance stores',
            valueKey: 'sales percentage change',
            valueValue: -1.6,
          },
          {
            space: 'category of sales',
            categoryValue: 'motor vehicle and parts dealers',
            valueKey: 'sales percentage change',
            valueValue: -3.2,
          },
          {
            space: 'category of sales',
            categoryValue: 'furniture and home furnishings stores',
            valueKey: 'sales percentage change',
            valueValue: -16.2,
          },
        ],
      },
    ],
  },
];

export default article4;
