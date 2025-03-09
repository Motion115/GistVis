import React from 'react';
import * as d3 from 'd3';
import { SVG_WIDTH, SVG_HEIGHT, SVG_UNIT_WIDTH } from '../constants';
import { ChartProps, ExtremeAttribute } from '../types';
import { Tooltip } from 'antd';

const GlyphsMaxMin = ({ gistvisSpec, colorScale, selectedEntity, setSelectedEntity }: ChartProps) => {
  const dataSpec = gistvisSpec.dataSpec ?? [];
  const attribute = gistvisSpec.unitSegmentSpec.attribute as ExtremeAttribute;
  const highlightEntity = gistvisSpec.unitSegmentSpec.inSituPosition ?? [];

  const xScale = d3.scaleLinear().domain([0, 1]).range([0, SVG_WIDTH]);

  const glyphColor = attribute === 'maximum' ? '#E6450F' : 'green';
  const mainElement = highlightEntity.slice(0, 1).map((d: string, i: number) => {
    const hoverStyle = {
      opacity: d === selectedEntity ? 1 : 0.5,
      transition: 'opacity 0.3s',
    };
    const triangles = {
      maximum: [
        [0, SVG_HEIGHT],
        [SVG_UNIT_WIDTH, SVG_HEIGHT],
        [SVG_UNIT_WIDTH / 2, SVG_HEIGHT - (Math.sqrt(3) * SVG_UNIT_WIDTH) / 2],
      ],
      minimum: [
        [0, SVG_HEIGHT - (Math.sqrt(3) * SVG_UNIT_WIDTH) / 2],
        [SVG_UNIT_WIDTH, SVG_HEIGHT - (Math.sqrt(3) * SVG_UNIT_WIDTH) / 2],
        [SVG_UNIT_WIDTH / 2, SVG_HEIGHT],
      ],
    };

    const pointsStringify = triangles[attribute].map((d) => d.join(',')).join(' ');
    return (
      <polygon
        key={d}
        points={pointsStringify}
        fill={glyphColor}
        style={hoverStyle}
        onMouseOver={() => setSelectedEntity(d)}
        onMouseOut={() => setSelectedEntity('')}
      />
    );
  });

  const toolTipContent = (
    <div
      style={{
        lineHeight: 1.1,
        fontSize: '14px',
        color: `${glyphColor}`,
        fontWeight: 'bold',
      }}
    >
      {dataSpec.length > 0 ? 'The ' + attribute + ' of ' + dataSpec[0].categoryKey : attribute}
    </div>
  );

  const visElement = (
    <Tooltip title={toolTipContent} placement="bottom" color="#ffffff">
      <svg height={SVG_HEIGHT} width={SVG_UNIT_WIDTH}>
        {mainElement}
      </svg>
    </Tooltip>
  );

  return <>{visElement}</>;
};

export default GlyphsMaxMin;
