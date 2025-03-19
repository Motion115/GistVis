import React from 'react';
import { paragraphSpec, ArtcleProcess } from 'gist-wsv';
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
              valueKey: 'the number of cars produced',
              valueValue: 4000000,
            },
            {
              space: 'the category of car production growth rate',
              breakdown: 'BYD',
              valueKey: 'the year-on-year growth rate of car production',
              valueValue: 41.3,
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
              valueKey: 'the number of BYD sales',
              valueValue: 409000,
            },
            {
              space: 'the category of BYD sales',
              breakdown: 'BYD sales',
              valueKey: 'the number of BYD sales',
              valueValue: 395000,
            },
            {
              space: 'the category of BYD sales',
              breakdown: 'BYD sales',
              valueKey: 'the number of BYD sales',
              valueValue: 721000,
            },
            {
              space: 'the category of BYD sales',
              breakdown: 'BYD sales',
              valueKey: 'the number of BYD sales',
              valueValue: 1802000,
            },
            {
              space: 'the category of BYD sales',
              breakdown: 'BYD sales',
              valueKey: 'the number of BYD sales',
              valueValue: 3024000,
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
              valueKey: 'the number of units sold',
              valueValue: 636530,
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
              valueKey: 'the proportion of global EV sales',
              valueValue: 0.22,
            },
            {
              space: 'the category of market share in global EV sales',
              breakdown: 'Other manufacturers',
              valueKey: 'the proportion of global EV sales',
              valueValue: 0.78,
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
              valueKey: 'sales rank',
              valueValue: 1,
            },
            {
              space: 'seller',
              breakdown: 'Tesla',
              valueKey: 'sales rank',
              valueValue: 2,
            },
            {
              space: 'seller',
              breakdown: 'VW',
              valueKey: 'sales rank',
              valueValue: 3,
            },
            {
              space: 'seller',
              breakdown: 'Geely-Volvo Car Group',
              valueKey: 'sales rank',
              valueValue: 4,
            },
            {
              space: 'seller',
              breakdown: 'SAIC',
              valueKey: 'sales rank',
              valueValue: 5,
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
              valueKey: 'the market share percentage',
              valueValue: 0,
            },
            {
              space: 'the category of market share',
              breakdown: 'BYD',
              valueKey: 'the market share percentage',
              valueValue: 8.8,
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
              valueKey: 'the sales percentage',
              valueValue: 0.3,
            },
            {
              space: 'the category of sales',
              breakdown: 'the rest of the top 5 companies',
              valueKey: 'the sales percentage',
              valueValue: 0.25,
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
              valueKey: 'the sales volumn',
              valueValue: NaN,
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
              valueKey: 'the sales volumn',
              valueValue: 10000,
            },
            {
              space: 'the category of sales',
              breakdown: 'BYD',
              valueKey: 'the sales volumn',
              valueValue: 5000,
            },
            {
              space: 'the category of sales',
              breakdown: 'BYD',
              valueKey: 'the sales volumn',
              valueValue: 30000,
            },
            {
              space: 'the category of sales',
              breakdown: 'BYD',
              valueKey: 'the sales volumn',
              valueValue: 80000,
            },
            {
              space: 'the category of sales',
              breakdown: 'BYD',
              valueKey: 'the sales volumn',
              valueValue: 50000,
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
              valueKey: 'The vehicle range',
              valueValue: 2000,
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
              valueKey: 'rank in top 5 sellers for traditional NCE vehicles',
              valueValue: 1,
            },
            {
              space: 'seller',
              breakdown: 'VW',
              valueKey: 'rank in top 5 sellers for traditional NCE vehicles',
              valueValue: 2,
            },
            {
              space: 'seller',
              breakdown: 'Stellantis',
              valueKey: 'rank in top 5 sellers for traditional NCE vehicles',
              valueValue: 3,
            },
            {
              space: 'seller',
              breakdown: 'Nissan',
              valueKey: 'rank in top 5 sellers for traditional NCE vehicles',
              valueValue: 4,
            },
            {
              space: 'seller',
              breakdown: 'Geely',
              valueKey: 'rank in top 5 sellers for traditional NCE vehicles',
              valueValue: 5,
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
              valueKey: 'The number of cars sold per year',
              valueValue: 5000000,
            },
            {
              space: 'The category of car sales',
              breakdown: 'VW',
              valueKey: 'The number of cars sold per year',
              valueValue: 0,
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
              valueKey: 'the average price',
              valueValue: 25000,
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
          {/* <ArtcleProcess llmarticle={sampleArticle} /> */}
          <ArtcleProcess llmarticle={sampleArticle2} />
        </div>
      </Layout>
    </div>
  );
};
