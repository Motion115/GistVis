import React from 'react';
import { SimpleLine, SimpleBar, SimpleStackedBar, SimpleMaxMin } from 'gist-wsv';

export const GistTest: React.FC = () => {
  const lineData = [
    { x: 0, y: 0.5, label: 'Jan' },
    { x: 1, y: 0.8, label: 'Feb' },
    { x: 2, y: 0.2, label: 'Mar' },
  ];

  const barData = [
    { x: 0, y: 30, label: 'group A' },
    { x: 1, y: 50, label: 'group B' },
    { x: 2, y: 20, label: 'group C' },
  ];

  const stackedData = [
    { category: 'category 1', values: [30, 20] },
    { category: 'category 2', values: [50, 30] },
  ];

  return (
    <div style={{ margin: '20px' }}>
      <h2>Gist WSV Test</h2>
      
      <div style={{ marginBottom: '30px' }}>
        <h3>1. SimpleLine</h3>
        <div style={{ marginBottom: '10px' }}>Trend-upward</div>
        <SimpleLine 
          data={lineData}
          type="trending"
          attribute="positive"
          color="#1890ff"
        />
        <div style={{ marginBottom: '10px' }}>Trend-downward</div>
        <SimpleLine 
          data={lineData}
          type="trending"
          attribute="negative"
          color="#1890ff"
        />

        <div style={{ marginBottom: '10px' }}>common</div>
        <SimpleLine 
          data={lineData}
          type="actual"
          color="#52c41a"
        />
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>2. SimpleBar</h3>
        <div style={{ marginBottom: '10px' }}>comparison - monocolor</div>
        <SimpleBar
          data={barData}
          type="comparison"
          color="#1890ff"
        />

        <div style={{ marginBottom: '10px' }}>comparison - multicolors</div>
        <SimpleBar
          data={barData}
          type="comparison"
          colors={['#1890ff', '#13c2c2', '#52c41a']}
        />

        <div style={{ marginBottom: '10px' }}>rank - gradient</div>
        <SimpleBar
          data={barData}
          type="rank"
          colors={['#722ed1', '#2f54eb', '#1890ff']}
        />
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>3. SimpleStackedBar</h3>
        <SimpleStackedBar
          data={stackedData}
          colors={['#1890ff', '#13c2c2']}
        />
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>4. SimpleMaxMin</h3>
        <div style={{ marginBottom: '10px' }}>maximum</div>
        <SimpleMaxMin
          min={0}
          max={100}
          current={80}
        />

        <div style={{ marginBottom: '10px' }}>minimum</div>
        <SimpleMaxMin
          min={0}
          max={100}
          current={20}
        />
      </div>

      <div>
        <h3>README</h3>
        <pre style={{ background: '#f5f5f5', padding: '15px', borderRadius: '4px' }}>
{`// 1. import
import { SimpleLine, SimpleBar, SimpleStackedBar, SimpleMaxMin } from 'gist-wsv';

// 2. prepare data
const data = [
  { x: 0, y: 0.5, label: 'Jan' },
  { x: 1, y: 0.8, label: 'Feb' },
  { x: 2, y: 0.2, label: 'Mar' },
];

// 3. using
<SimpleLine 
  data={data}
  type="trending"  // actual | nominal | trending | start-end
  attribute="positive"  // positive | negative | invariable
  color="#1890ff"
/>

<SimpleBar
  data={data}
  type="comparison"  // comparison | rank
  color="#1890ff"
  colors={['#1890ff', '#13c2c2', '#52c41a']}
/>
`}
        </pre>
      </div>
    </div>
  );
};

export default GistTest;