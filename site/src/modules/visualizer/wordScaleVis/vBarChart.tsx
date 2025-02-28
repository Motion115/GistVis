import React, { useState } from 'react';
import * as d3 from 'd3';
import { SVG_HEIGHT, SVG_UNIT_WIDTH } from '../constants';
import { ChartProps, DataSpec, InsightType } from '../types';
import { Tooltip } from 'antd';

const VerticalBarChart = ({ gistvisSpec, colorScale, selectedEntity, setSelectedEntity }: ChartProps) => {
  const [hoveredUniqueId, setHoveredUniqueId] = useState<string | null>(null);
  const dataSpec = gistvisSpec.dataSpec ?? [];

  const verticalBarChartWidth = SVG_UNIT_WIDTH * dataSpec.length;

  const datasetMap: { [key in InsightType]?: number[] } = {
    rank: dataSpec.map((d: DataSpec) => dataSpec.length + 1 - d.valueValue),
    comparison: dataSpec.map((d: DataSpec) => d.valueValue),
  };

  const dataset = datasetMap[gistvisSpec.unitSegmentSpec.insightType] ?? [];

  const xScale = d3.scaleLinear().domain([0, dataset.length]).range([0, verticalBarChartWidth]);
  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(dataset) ?? 1])
    .range([SVG_HEIGHT, 0]);

  const knownCategories = dataSpec.map((d: DataSpec, i: number) => {
    const uniqueId = `${d.categoryValue}-${d.valueKey}-${d.valueValue}`;
    const isHovered = uniqueId === hoveredUniqueId;
    const hoverStyle = {
      opacity: isHovered ? 1 : 0.5,
      transition: 'opacity 0.3s',
    };
    return (
      <rect
        key={uniqueId}
        x={xScale(i)}
        y={yScale(dataset[i])}
        width={SVG_UNIT_WIDTH}
        height={SVG_HEIGHT - yScale(dataset[i])}
        fill={d.categoryValue !== 'placeholder' ? colorScale(d.categoryValue) : 'grey'}
        style={hoverStyle}
        onMouseOver={() => {
          setSelectedEntity(d.categoryValue);
          setHoveredUniqueId(uniqueId);
        }}
        onMouseOut={() => {
          setSelectedEntity('');
          setHoveredUniqueId(null);
        }}
      />
    );
  });

  const getToolTipContent = () => {
    if (hoveredUniqueId === null) {
      return null;
    }

    if (selectedEntity === 'placeholder') {
      return <div style={{ lineHeight: 1.1, fontSize: '14px', color: 'grey', fontWeight: 'bold' }}>Comparison</div>;
    }

    if (gistvisSpec.unitSegmentSpec.insightType === 'comparison') {
      const currentCase = dataSpec.find((d) => `${d.categoryValue}-${d.valueKey}-${d.valueValue}` === hoveredUniqueId);
      if (!currentCase) {
        return <div style={{ lineHeight: 1.1, fontSize: '14px', color: 'grey', fontWeight: 'bold' }}>Comparison</div>;
      }
      const refCase = dataSpec.find((d) => d !== currentCase) || dataSpec[0];
      const diff = Math.abs(currentCase.valueValue - refCase.valueValue);
      if (refCase.categoryValue === selectedEntity) {
        return (
          <div style={{ lineHeight: 1.1, fontSize: '14px', color: 'black', fontWeight: 'bold' }}>
            The difference between{' '}
            <span style={{ color: colorScale(refCase.categoryValue) }}>
              {refCase.categoryValue} ({refCase.valueValue})
            </span>{' '}
            and {selectedEntity} ({currentCase.valueValue}) is {diff}.
          </div>
        );
      } else {
        return (
          <div style={{ lineHeight: 1.1, fontSize: '14px', color: 'black', fontWeight: 'bold' }}>
            The difference between{' '}
            <span style={{ color: colorScale(refCase.categoryValue) }}>
              {refCase.categoryValue} ({refCase.valueValue})
            </span>{' '}
            and{' '}
            <span style={{ color: colorScale(selectedEntity) }}>
              {selectedEntity} ({currentCase.valueValue})
            </span>{' '}
            is {diff}.
          </div>
        );
      }
    } else if (gistvisSpec.unitSegmentSpec.insightType === 'rank') {
      const rankData = dataSpec.find((d) => `${d.categoryValue}-${d.valueKey}-${d.valueValue}` === hoveredUniqueId);
      const rank = rankData?.valueValue;
      if (!rankData || rank === undefined) {
        return <div style={{ lineHeight: 1.1, fontSize: '14px', color: 'grey', fontWeight: 'bold' }}>Rank</div>;
      }
      return (
        <div style={{ lineHeight: 1.1, fontSize: '14px', color: colorScale(selectedEntity), fontWeight: 'bold' }}>
          {rankData.valueKey + ' ' + rank + ': ' + selectedEntity}
        </div>
      );
    }
  };

  const visElement = (
    <Tooltip title={getToolTipContent()} placement="bottom" color="#ffffff">
      <svg height={SVG_HEIGHT} width={verticalBarChartWidth}>
        {knownCategories && [...knownCategories]}
      </svg>
    </Tooltip>
  );

  return <>{visElement}</>;
};

export default VerticalBarChart;
