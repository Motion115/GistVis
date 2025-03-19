import { paragraphSpec } from '../modules/visualizer/types';

export const discovererData: paragraphSpec[] = [
  {
    paragraphIdx: 0,
    paragraphContent: [
      {
        id: 'p0s0',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 0,
          context:
            'The percentage of the sales of BYD is 30%, while the rest of the top 5 companies only consist of 25%.',
        },
      },
      {
        id: 'p0s1',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 1,
          context:
            'The sales of BYD have been steadily increasing over the past 5 years. Specifically, the sales of BYD was 10k, 5k, 30k, 80k, and 50k respectively.',
        },
      },
      {
        id: 'p0s2',
        unitSegmentSpec: {
          insightType: 'noType',
          segmentIdx: 2,
          context:
            'The top seller for BYD, Qin series, could do a maximum range of 2000 kilometers, making it the longest ranged plug-in hybrid you can buy on the market.',
        },
      },
    ],
  },
];

export const annotatorData: paragraphSpec[] = [
  {
    paragraphIdx: 0,
    paragraphContent: [
      {
        id: 'p0s0',
        unitSegmentSpec: {
          insightType: 'comparison',
          segmentIdx: 0,
          context:
            'The percentage of the sales of BYD is 30%,while the rest of the top 5 companies only consist of 25%.',
        },
      },
      {
        id: 'p0s1',
        unitSegmentSpec: {
          insightType: 'trend',
          segmentIdx: 1,
          context:
            'The sales of BYD have been steadily increasing over the past 5 years.Specifically, the sales of BYD was 10k, 5k, 30k, 80k, and 50k respectively.',
        },
      },
      {
        id: 'p0s2',
        unitSegmentSpec: {
          insightType: 'extreme',
          segmentIdx: 2,
          context:
            'The top seller for BYD, Qin series,could do a maximum range of 2000 kilometers, making it the longest ranged plug-in hybrid you can buy on the market.',
        },
      },
    ],
  },
];

export const extractorData: paragraphSpec[] = [
  {
    paragraphIdx: 0,
    paragraphContent: [
      {
        id: 'p0s0',
        unitSegmentSpec: {
          insightType: 'comparison',
          segmentIdx: 0,
          context:
            'The percentage of the sales of BYD is 30%, while the rest of the top 5 companies only consist of 25%.',
          inSituPosition: [],
        },
        dataSpec: [
          {
            space: 'the category of sales percentage',
            breakdown: 'BYD',
            feature: 'the sales percentage',
            value: 30,
          },
          {
            space: 'the category of sales percentage',
            breakdown: 'rest of the top 5 companies',
            feature: 'the sales percentage',
            value: 25,
          },
        ],
      },
      {
        id: 'p0s1',
        unitSegmentSpec: {
          insightType: 'trend',
          segmentIdx: 1,
          context:
            'The sales of BYD have been steadily increasing over the past 5 years. Specifically, the sales of BYD was 10k, 5k, 30k, 80k, and 50k respectively.',
          inSituPosition: [],
          attribute: 'positive',
        },
        dataSpec: [
          {
            space: 'the category of sales',
            breakdown: 'BYD',
            feature: 'the sales amount',
            value: 10000,
          },
          {
            space: 'the category of sales',
            breakdown: 'BYD',
            feature: 'the sales amount',
            value: 5000,
          },
          {
            space: 'the category of sales',
            breakdown: 'BYD',
            feature: 'the sales amount',
            value: 30000,
          },
          {
            space: 'the category of sales',
            breakdown: 'BYD',
            feature: 'the sales amount',
            value: 80000,
          },
          {
            space: 'the category of sales',
            breakdown: 'BYD',
            feature: 'the sales amount',
            value: 50000,
          },
        ],
      },
      {
        id: 'p0s2',
        unitSegmentSpec: {
          insightType: 'extreme',
          segmentIdx: 2,
          context:
            'The top seller for BYD, Qin series, could do a maximum range of 2000 kilometers, making it the longest ranged plug-in hybrid you can buy on the market.',
          inSituPosition: ['maximum range of 2000 kilometers'],
          attribute: 'maximum',
        },
        dataSpec: [
          {
            space: 'the category of vehicle series',
            breakdown: 'Qin series',
            feature: 'the maximum range of the vehicle',
            value: 2000,
          },
        ],
      },
    ],
  },
];
