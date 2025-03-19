import React from 'react';
import { SimpleMaxMinProps } from './types';
import GlyphsMaxMin from '../glyphMaxMin';
import { GistvisSpec } from '../../types';
import * as d3 from 'd3';
import { SVG_HEIGHT } from '../../constants';

const SimpleMaxMin: React.FC<SimpleMaxMinProps> = ({
  min,
  max,
  current,
  color,
  width,
  height = SVG_HEIGHT,
}) => {
  // judge if current is closer to max or min
  const isMax = Math.abs(current - max) < Math.abs(current - min);
  const attribute = isMax ? 'maximum' : 'minimum';

  // construct GistvisSpec
  const gistvisSpec: GistvisSpec = {
    id: Math.random().toString(36).substr(2, 9),
    unitSegmentSpec: {
      insightType: 'extreme',
      segmentIdx: 0,
      context: '',
      attribute: attribute,
      inSituPosition: ['current'],
    },
    dataSpec: [{
      space: 'value',
      breakdown: 'current',
      feature: `${attribute} value`,
      valueValue: current,
    }],
  };

  // construct color scale
  const colorScale = d3.scaleOrdinal<string>().range([
    color || (attribute === 'maximum' ? '#E6450F' : 'green')
  ]);

  const [selectedEntity, setSelectedEntity] = React.useState('');

  return (
    <GlyphsMaxMin
      gistvisSpec={gistvisSpec}
      colorScale={colorScale}
      selectedEntity={selectedEntity}
      setSelectedEntity={setSelectedEntity}
    />
  );
};

export default SimpleMaxMin;