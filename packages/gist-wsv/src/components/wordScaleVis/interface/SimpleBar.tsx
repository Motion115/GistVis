import React from 'react';
import { SimpleBarChartProps } from './types';
import VerticalBarChart from '../vBarChart';
import { GistvisSpec } from '../../types';
import * as d3 from 'd3';

const SimpleBar: React.FC<SimpleBarChartProps> = ({
  data,
  color = '#1890ff',
  colors,
  type = 'comparison',
  width,
  height,
}) => {
  // construct GistvisSpec
  const gistvisSpec: GistvisSpec = {
    id: Math.random().toString(36).substr(2, 9),
    unitSegmentSpec: {
      insightType: type === 'rank' ? 'rank' : 'comparison',
      segmentIdx: 0,
      context: '',
    },
    dataSpec: data.map((point, index) => ({
      space: 'category',
      breakdown: point.label || `Item ${index + 1}`,
      feature: 'value',
      value: point.y,
    })),
  };

  // construct color scale
  const colorScale = d3.scaleOrdinal<string>();
  
  if (colors) {
    // if provided colors
    colorScale.range(colors);
  } else {
    colorScale.range(data.map(() => color));
  }

  const [selectedEntity, setSelectedEntity] = React.useState('');

  return (
    <VerticalBarChart
      gistvisSpec={gistvisSpec}
      colorScale={colorScale}
      selectedEntity={selectedEntity}
      setSelectedEntity={setSelectedEntity}
    />
  );
};

export default SimpleBar;