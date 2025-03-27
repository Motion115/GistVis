import { paragraphSpec, GistvisVisualizer } from 'gist-wsv';
import { Divider, Layout, Typography } from 'antd';

const { Text } = Typography;

export const DemoPage = () => {
  const sampleArticle2: paragraphSpec[] = [
    {
      paragraphIdx: 0,
      paragraphContent: [
        {
          id: 'p0s0',
          unitSegmentSpec: {
            insightType: 'noType',
            segmentIdx: 0,
            context: '2024 has been another year of fierce competition in the EV sector.',
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
            insightType: 'trend',
            segmentIdx: 0,
            context:
              'BYD had another record year with worldwide car production in 2024. In 2024 (January to December), BYD produced more than 4 million units, an increase of 41.3% year-on-year.',
            inSituPosition: [],
            attribute: 'positive',
          },
          dataSpec: [
            {
              space: 'the category of car production',
              breakdown: 'BYD',
              feature: 'the number of cars produced',
              value: 4000000,
            },
            {
              space: 'the category of car production growth rate',
              breakdown: 'BYD',
              feature: 'the year-on-year growth rate of car production',
              value: 41.3,
            },
          ],
        },
        {
          id: 'p1s1',
          unitSegmentSpec: {
            insightType: 'trend',
            segmentIdx: 1,
            context:
              'BYD sales have steadily increased in the past five years (2019 - 2023). Specifically, BYD sales 409k, 395k, 721k, 1802k, and 3024k respectively.',
            inSituPosition: [],
            attribute: 'positive',
          },
          dataSpec: [
            {
              space: 'the category of BYD sales',
              breakdown: 'BYD sales',
              feature: 'the number of BYD sales',
              value: 409000,
            },
            {
              space: 'the category of BYD sales',
              breakdown: 'BYD sales',
              feature: 'the number of BYD sales',
              value: 395000,
            },
            {
              space: 'the category of BYD sales',
              breakdown: 'BYD sales',
              feature: 'the number of BYD sales',
              value: 721000,
            },
            {
              space: 'the category of BYD sales',
              breakdown: 'BYD sales',
              feature: 'the number of BYD sales',
              value: 1802000,
            },
            {
              space: 'the category of BYD sales',
              breakdown: 'BYD sales',
              feature: 'the number of BYD sales',
              value: 3024000,
            },
          ],
        },
        {
          id: 'p1s2',
          unitSegmentSpec: {
            insightType: 'extreme',
            segmentIdx: 2,
            context: 'The best-selling type, the BYD Song series, sold 636530 units on its own.',
            inSituPosition: ['636530'],
            attribute: 'maximum',
          },
          dataSpec: [
            {
              space: 'the category of vehicle sales',
              breakdown: 'BYD Song series',
              feature: 'the number of units sold',
              value: 636530,
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
            insightType: 'proportion',
            segmentIdx: 0,
            context:
              'This sales figure made BYD the biggest EV manufacturer in terms of market share. Specifically, BYD constitutes 22% of global sales.',
            inSituPosition: [],
          },
          dataSpec: [
            {
              space: 'the category of market share in global EV sales',
              breakdown: 'BYD',
              feature: 'the proportion of global EV sales',
              value: 0.22,
            },
            {
              space: 'the category of market share in global EV sales',
              breakdown: 'Other manufacturers',
              feature: 'the proportion of global EV sales',
              value: 0.78,
            },
          ],
        },
        {
          id: 'p2s1',
          unitSegmentSpec: {
            insightType: 'rank',
            segmentIdx: 1,
            context: 'Meanwhile, the top 5 sellers are BYD, Tesla, VW, Geely-Volvo Car Group, and SAIC.',
            inSituPosition: [],
          },
          dataSpec: [
            {
              space: 'seller',
              breakdown: 'BYD',
              feature: 'sales rank',
              value: 1,
            },
            {
              space: 'seller',
              breakdown: 'Tesla',
              feature: 'sales rank',
              value: 2,
            },
            {
              space: 'seller',
              breakdown: 'VW',
              feature: 'sales rank',
              value: 3,
            },
            {
              space: 'seller',
              breakdown: 'Geely-Volvo Car Group',
              feature: 'sales rank',
              value: 4,
            },
            {
              space: 'seller',
              breakdown: 'SAIC',
              feature: 'sales rank',
              value: 5,
            },
          ],
        },
        {
          id: 'p2s2',
          unitSegmentSpec: {
            insightType: 'comparison',
            segmentIdx: 2,
            context: 'The difference in market share between Tesla and BYD is now 8.8%.',
            inSituPosition: [],
          },
          dataSpec: [
            {
              space: 'the category of market share',
              breakdown: 'Tesla',
              feature: 'the market share percentage',
              value: 0,
            },
            {
              space: 'the category of market share',
              breakdown: 'BYD',
              feature: 'the market share percentage',
              value: 8.8,
            },
          ],
        },
      ],
    },
  ];

  const sampleArticle: paragraphSpec[] = [
    {
      paragraphIdx: 1,
      paragraphContent: [
        {
          id: '1',
          unitSegmentSpec: {
            insightType: 'noType',
            segmentIdx: 1,
            context: 'Electric cars manufactures are competing hard in the global market.',
          },
        },
      ],
    },
    {
      paragraphIdx: 2,
      paragraphContent: [
        {
          id: '2',
          unitSegmentSpec: {
            insightType: 'proportion',
            segmentIdx: 1,
            context:
              'The percentage of the sales of BYD is 30%, while the rest of the top 5 companies only consist of 25%.',
          },
          dataSpec: [
            {
              space: 'the category of sales',
              breakdown: 'BYD',
              feature: 'the sales percentage',
              value: 0.3,
            },
            {
              space: 'the category of sales',
              breakdown: 'the rest of the top 5 companies',
              feature: 'the sales percentage',
              value: 0.25,
            },
          ],
        },
        {
          id: '3',
          unitSegmentSpec: {
            insightType: 'trend',
            segmentIdx: 2,
            context: 'The sales of BYD have been steadily increasing over the past 5 years.',
            attribute: 'positive',
          },
          dataSpec: [
            {
              space: 'the category of sales',
              breakdown: 'BYD',
              feature: 'the sales volumn',
              value: NaN,
            },
          ],
        },
        {
          id: '4',
          unitSegmentSpec: {
            insightType: 'trend',
            segmentIdx: 3,
            context: 'Specifically, the sales of BYD was 10k, 5k, 30k, 80k, and 50k respectively.',
            attribute: 'positive',
          },
          dataSpec: [
            {
              space: 'the category of sales',
              breakdown: 'BYD',
              feature: 'the sales volumn',
              value: 10000,
            },
            {
              space: 'the category of sales',
              breakdown: 'BYD',
              feature: 'the sales volumn',
              value: 5000,
            },
            {
              space: 'the category of sales',
              breakdown: 'BYD',
              feature: 'the sales volumn',
              value: 30000,
            },
            {
              space: 'the category of sales',
              breakdown: 'BYD',
              feature: 'the sales volumn',
              value: 80000,
            },
            {
              space: 'the category of sales',
              breakdown: 'BYD',
              feature: 'the sales volumn',
              value: 50000,
            },
          ],
        },
        {
          id: '5',
          unitSegmentSpec: {
            insightType: 'extreme',
            segmentIdx: 4,
            context:
              'The top seller for BYD, Qin series, could do a maximum range of 2000 kilometers, making it the longest ranged plug-in hybrid you can buy on the market.',
            attribute: 'maximum',
            inSituPosition: ['maximum range of 2000 kilometers'],
          },
          dataSpec: [
            {
              space: 'The category of vehicle range',
              breakdown: 'Qin series',
              feature: 'The vehicle range',
              value: 2000,
            },
          ],
        },
      ],
    },
    {
      paragraphIdx: 3,
      paragraphContent: [
        {
          id: '6',
          unitSegmentSpec: {
            insightType: 'rank',
            segmentIdx: 1,
            context:
              'Conversly, the top 5 seller for traditional NCE vehicles are Toyota, VW, Stellantis, Nissan and Geely.',
          },
          dataSpec: [
            {
              space: 'seller',
              breakdown: 'Toyota',
              feature: 'rank in top 5 sellers for traditional NCE vehicles',
              value: 1,
            },
            {
              space: 'seller',
              breakdown: 'VW',
              feature: 'rank in top 5 sellers for traditional NCE vehicles',
              value: 2,
            },
            {
              space: 'seller',
              breakdown: 'Stellantis',
              feature: 'rank in top 5 sellers for traditional NCE vehicles',
              value: 3,
            },
            {
              space: 'seller',
              breakdown: 'Nissan',
              feature: 'rank in top 5 sellers for traditional NCE vehicles',
              value: 4,
            },
            {
              space: 'seller',
              breakdown: 'Geely',
              feature: 'rank in top 5 sellers for traditional NCE vehicles',
              value: 5,
            },
          ],
        },
        {
          id: '7',
          unitSegmentSpec: {
            insightType: 'comparison',
            segmentIdx: 2,
            context: 'The difference in sales between Toyota and VW is 5 million cars per year.',
          },
          dataSpec: [
            {
              space: 'The category of car sales',
              breakdown: 'Toyota',
              feature: 'The number of cars sold per year',
              value: 5000000,
            },
            {
              space: 'The category of car sales',
              breakdown: 'VW',
              feature: 'The number of cars sold per year',
              value: 0,
            },
          ],
        },
        {
          id: '8',
          unitSegmentSpec: {
            insightType: 'value',
            segmentIdx: 3,
            context: 'The average price for a Toyota car is 25000 pounds.',
            inSituPosition: ['25000 pounds'],
          },
          dataSpec: [
            {
              space: 'the category of car prices',
              breakdown: 'Toyota car',
              feature: 'the average price',
              value: 25000,
            },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <Layout dir="vertical">
        <Text style={{ fontSize: '20px', fontWeight: 'bold' }}>Sample Paragraph</Text>
        <Text style={{ fontSize: '16px', fontStyle: 'italic' }}>Word-scale in situ visualization</Text>
        <Divider style={{ margin: '0 0 0 0' }} />
        <div style={{ width: '50%', margin: '0 auto' }}>
          {/* <GistvisVisualizer datafactSpec={sampleArticle} /> */}
          <GistvisVisualizer datafactSpec={sampleArticle2} />
        </div>
      </Layout>
    </div>
  );
};
