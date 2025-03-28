import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import { SVG_HEIGHT, SVG_UNIT_WIDTH } from '../constants';
import { ChartProps, DataSpec, InsightType } from '../types';
import { Tooltip } from 'antd';

const VerticalBarChart: React.FC<ChartProps> = ({
  gistvisSpec,
  colorScale,
  selectedEntity,
  setSelectedEntity,
}: ChartProps) => {
  const [hoveredUniqueId, setHoveredUniqueId] = useState<string | null>(null);
  useEffect(() => {
    console.log('hoveredUniqueId:', hoveredUniqueId);
    console.log('selectedEntity:', selectedEntity);
  }, [selectedEntity]);
  const dataSpec = gistvisSpec.dataSpec ?? [];

  const verticalBarChartWidth = SVG_UNIT_WIDTH * dataSpec.length;

  const datasetMap: { [key in InsightType]?: number[] } = {
    rank: dataSpec.map((d: DataSpec) => dataSpec.length + 1 - d.value),
    comparison: dataSpec.map((d: DataSpec) => d.value),
  };

  const dataset = datasetMap[gistvisSpec.unitSegmentSpec.insightType] ?? [];

  const xScale = d3.scaleLinear().domain([0, dataset.length]).range([0, verticalBarChartWidth]);
  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(dataset) ?? 1])
    .range([SVG_HEIGHT, 0]);

  const knownCategories = dataSpec.map((d: DataSpec, i: number) => {
    const uniqueId = `${d.breakdown}-${d.feature}-${d.value}`;
    const isHovered = uniqueId === hoveredUniqueId || (hoveredUniqueId === null && d.breakdown === selectedEntity);
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
        fill={d.breakdown !== 'placeholder' ? colorScale(d.breakdown) : 'grey'}
        style={hoverStyle}
        onMouseOver={() => {
          setSelectedEntity(d.breakdown);
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
      const currentCase = dataSpec.find((d) => `${d.breakdown}-${d.feature}-${d.value}` === hoveredUniqueId);
      if (!currentCase) {
        return <div style={{ lineHeight: 1.1, fontSize: '14px', color: 'grey', fontWeight: 'bold' }}>Comparison</div>;
      }
      const refCase = dataSpec.find((d) => d !== currentCase) || dataSpec[0];
      const diff = Math.abs(currentCase.value - refCase.value);
      if (refCase.breakdown === selectedEntity) {
        return (
          <div style={{ lineHeight: 1.1, fontSize: '14px', color: 'black', fontWeight: 'bold' }}>
            The difference between{' '}
            <span style={{ color: colorScale(refCase.breakdown) }}>
              {refCase.breakdown} ({refCase.value})
            </span>{' '}
            and {selectedEntity} ({currentCase.value}) is {diff}.
          </div>
        );
      } else {
        return (
          <div style={{ lineHeight: 1.1, fontSize: '14px', color: 'black', fontWeight: 'bold' }}>
            The difference between{' '}
            <span style={{ color: colorScale(refCase.breakdown) }}>
              {refCase.breakdown} ({refCase.value})
            </span>{' '}
            and{' '}
            <span style={{ color: colorScale(selectedEntity) }}>
              {selectedEntity} ({currentCase.value})
            </span>{' '}
            is {diff}.
          </div>
        );
      }
    } else if (gistvisSpec.unitSegmentSpec.insightType === 'rank') {
      const rankData = dataSpec.find((d) => `${d.breakdown}-${d.feature}-${d.value}` === hoveredUniqueId);
      const rank = rankData?.value;
      if (!rankData || rank === undefined) {
        return <div style={{ lineHeight: 1.1, fontSize: '14px', color: 'grey', fontWeight: 'bold' }}>Rank</div>;
      }
      return (
        <div style={{ lineHeight: 1.1, fontSize: '14px', color: colorScale(selectedEntity), fontWeight: 'bold' }}>
          {rankData.feature + ' ' + rank + ': ' + selectedEntity}
        </div>
      );
    }
    return null;
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
