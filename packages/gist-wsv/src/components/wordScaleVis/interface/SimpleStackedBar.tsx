import React from 'react';
import { SimpleStackedBarChartProps } from './types';
import HorizontalStackedBar from '../hStackedBarChart';
import { GistvisSpec } from '../../types';
import * as d3 from 'd3';
import { SVG_HEIGHT } from '../../constants';

const SimpleStackedBar: React.FC<SimpleStackedBarChartProps> = ({
  data,
  colors = ['#1890ff', '#13c2c2', '#52c41a', '#faad14', '#f5222d'],
  width,
  height = SVG_HEIGHT,
}) => {
  // turn values into proportions
  const total = data.reduce((sum, item) => sum + item.values.reduce((a, b) => a + b, 0), 0);
  const normalizedData = data.map(item => ({
    category: item.category,
    values: item.values.map(v => v / total)
  }));

  // construct GistvisSpec
  const gistvisSpec: GistvisSpec = {
    id: Math.random().toString(36).substr(2, 9),
    unitSegmentSpec: {
      insightType: 'proportion',
      segmentIdx: 0,
      context: '',
    },
    dataSpec: normalizedData.flatMap((item, i) => 
      item.values.map(value => ({
        space: 'category',
        breakdown: item.category,
        valueKey: 'proportion',
        valueValue: value,
      }))
    ),
  };

  // construct color scale
  const colorScale = d3.scaleOrdinal<string>()
    .domain(data.map(d => d.category))
    .range(colors);

  const [selectedEntity, setSelectedEntity] = React.useState('');

  return (
    <HorizontalStackedBar
      gistvisSpec={gistvisSpec}
      colorScale={colorScale}
      selectedEntity={selectedEntity}
      setSelectedEntity={setSelectedEntity}
    />
  );
};

export default SimpleStackedBar;