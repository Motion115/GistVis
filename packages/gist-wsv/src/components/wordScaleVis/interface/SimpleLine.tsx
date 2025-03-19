import React from 'react';
import { SimpleLineChartProps } from './types';
import Line from '../lineChart';
import { GistvisSpec, DataPoint } from '../../types';
import * as d3 from 'd3';
import { SVG_HEIGHT } from '../../constants';

const SimpleLine: React.FC<SimpleLineChartProps> = ({
  data,
  type = 'actual',
  attribute = 'invariable',
  color = '#1890ff',
  width,
  height = SVG_HEIGHT,
}) => {
  // construct GistvisSpec
  const gistvisSpec: GistvisSpec = {
    id: Math.random().toString(36).substr(2, 9),
    unitSegmentSpec: {
      insightType: 'trend',
      segmentIdx: 0,
      context: '',
      attribute: attribute,
    },
    dataSpec: data.map((point, index) => ({
      space: 'time',
      breakdown: point.label || index.toString(),
      valueKey: 'value',
      valueValue: point.y,
    })),
  };

  // construct color scale
  const colorScale = d3.scaleOrdinal<string>().range([color]);

  return (
    <Line
      gistvisSpec={gistvisSpec}
      visualizeData={data}
      type={type}
      colorScale={colorScale}
      selectedEntity=""
      setSelectedEntity={() => {}}
    />
  );
};

export default SimpleLine;