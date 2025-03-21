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
            breakdown: 'retail e-commerce sales',
            feature: 'total online sales in the fourth quarter',
            value: 303.1,
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
            breakdown: 'first nine months of the year',
            feature: 'value in billion USD',
            value: 245.6,
          },
          {
            space: 'current quarter',
            breakdown: 'current quarter',
            feature: 'value in billion USD',
            value: 302.1704,
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
            breakdown: 'online share',
            feature: 'share of all retail sales',
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
            'In the fourth quarter of 2022, for instance, online sales accounted for 16.3% of all retail sales, compared with an average of 14.1% in the first three quarters.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'category of retail sales',
            breakdown: 'online sales',
            feature: 'proportion of retail sales',
            value: 0.163,
          },
          {
            space: 'category of retail sales',
            breakdown: 'other retail sales',
            feature: 'proportion of retail sales',
            value: 0.837,
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
            breakdown: 'online shopping',
            feature: 'growth in the fourth quarter of 2023',
            value: 100,
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
            breakdown: 'retail e-commerce',
            feature: 'proportion of all retail sales',
            value: 0.149,
          },
          {
            space: 'category of retail sales',
            breakdown: 'other retail sales',
            feature: 'proportion of all retail sales',
            value: 0.851,
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
            breakdown: 'online sales',
            feature: 'growth rate of online sales',
            value: 100,
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
            breakdown: '2000-2020',
            feature: 'online share of retail sales',
            value: NaN,
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
            breakdown: 'online sales',
            feature: 'sales during pandemic',
            value: NaN,
          },
          {
            space: 'category of sales',
            breakdown: 'online share of total sales',
            feature: 'share during pandemic',
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
            'By such stepwise moves, the online share of total retail sales grew from 0.7% in the fourth quarter of 1999, when the U.S. Census Bureau began tracking online sales, to 12.4% in the fourth quarter of 2019.',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            space: 'online share of total retail sales',
            breakdown: 'online share of total retail sales',
            feature: 'percentage of online sales',
            value: 0.7,
          },
          {
            space: 'online share of total retail sales',
            breakdown: 'online share of total retail sales',
            feature: 'percentage of online sales',
            value: 12.4,
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
            breakdown: 'online sales',
            feature: 'online sales rate',
            value: NaN,
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
            breakdown: 'second quarter of 2020',
            feature: 'e-commerce sales',
            value: 205.3,
          },
          {
            space: 'time segment',
            breakdown: 'second quarter of 2019',
            feature: 'e-commerce sales',
            value: 132.3,
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
            breakdown: 'e-commerce',
            feature: 'proportion of retail sales',
            value: 0.167,
          },
          {
            space: 'category of retail sales',
            breakdown: 'other retail sales',
            feature: 'proportion of retail sales',
            value: 0.833,
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
            breakdown: 'e-commerce share',
            feature: 'e-commerce share value',
            value: NaN,
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
            breakdown: 'online sales',
            feature: 'percentage of retail sales',
            value: 16.3,
          },
          {
            space: 'category of retail sales',
            breakdown: 'online sales',
            feature: 'percentage of retail sales',
            value: 16.1,
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
            breakdown: 'retailer',
            feature: 'online sales benefit',
            value: NaN,
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
            breakdown: 'retailers without physical stores',
            feature: 'share of online sales',
            value: 0,
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
            breakdown: 'Nonstore retailers',
            feature: 'E-commerce Sales Proportion',
            value: 0.62,
          },
          {
            space: 'Retail Category',
            breakdown: 'Other retailers',
            feature: 'E-commerce Sales Proportion',
            value: 0.38,
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
            breakdown: 'E-commerce sales at nonstore retailers',
            feature: 'year over year growth rate',
            value: 12.4,
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
            breakdown: 'general merchandise stores',
            feature: 'online sales increase rate',
            value: 8.7,
          },
          {
            space: 'category of sales increase',
            breakdown: 'food and beverage stores',
            feature: 'online sales increase rate',
            value: 5.1,
          },
          {
            space: 'category of sales increase',
            breakdown: 'health and personal care stores',
            feature: 'online sales increase rate',
            value: 4.7,
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
            breakdown: 'electronics and appliance stores',
            feature: 'sales percentage change',
            value: -1.6,
          },
          {
            space: 'category of sales',
            breakdown: 'motor vehicle and parts dealers',
            feature: 'sales percentage change',
            value: -3.2,
          },
          {
            space: 'category of sales',
            breakdown: 'furniture and home furnishings stores',
            feature: 'sales percentage change',
            value: -16.2,
          },
        ],
      },
    ],
  },
];

export default article4;
