import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import { SVG_HEIGHT, SVG_UNIT_WIDTH } from '../constants';
import { ChartProps, DataSpec, InsightType } from '../types';
import { Tooltip } from 'antd';

const POSITIVE_INFINITY_PLACEHOLDER = 99999999;
const NEGATIVE_INFINITY_PLACEHOLDER = -99999999;

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

  const baseDataset = datasetMap[gistvisSpec.unitSegmentSpec.insightType] ?? [];

  const isSpecialComparisonCase =
    gistvisSpec.unitSegmentSpec.insightType === 'comparison' &&
    dataSpec.length === 2 &&
    baseDataset.includes(POSITIVE_INFINITY_PLACEHOLDER) &&
    baseDataset.includes(NEGATIVE_INFINITY_PLACEHOLDER);

  let processedDataset: number[];
  let yMax: number;

  if (isSpecialComparisonCase) {
    const HIGH_FIXED_VALUE = 10;
    const LOW_FIXED_VALUE = 5;
    processedDataset = baseDataset.map((val) =>
      val === POSITIVE_INFINITY_PLACEHOLDER ? HIGH_FIXED_VALUE : LOW_FIXED_VALUE
    );
    yMax = HIGH_FIXED_VALUE;
  } else {
    processedDataset = baseDataset;
    yMax = d3.max(processedDataset) ?? 1;
  }

  const xScale = d3.scaleLinear().domain([0, processedDataset.length]).range([0, verticalBarChartWidth]);
  const yScale = d3.scaleLinear().domain([0, yMax]).range([SVG_HEIGHT, 0]);

  const knownCategories = dataSpec.map((d: DataSpec, i: number) => {
    const uniqueId = `${d.breakdown}-${d.feature}-${d.value}`;
    const isHovered = uniqueId === hoveredUniqueId || (hoveredUniqueId === null && d.breakdown === selectedEntity);
    const hoverStyle = {
      opacity: isHovered ? 1 : 0.5,
      transition: 'opacity 0.3s',
    };
    const valueForScale = processedDataset[i];
    const barY = yScale(valueForScale);
    const barHeight = SVG_HEIGHT - barY;

    return (
      <rect
        key={uniqueId}
        x={xScale(i)}
        y={barY >= 0 ? barY : 0}
        width={SVG_UNIT_WIDTH}
        height={barHeight >= 0 ? barHeight : 0}
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

      const isSpecialTooltipCase =
        dataSpec.length === 2 &&
        ((dataSpec[0].value === POSITIVE_INFINITY_PLACEHOLDER && dataSpec[1].value === NEGATIVE_INFINITY_PLACEHOLDER) ||
          (dataSpec[0].value === NEGATIVE_INFINITY_PLACEHOLDER && dataSpec[1].value === POSITIVE_INFINITY_PLACEHOLDER));

      if (isSpecialTooltipCase) {
        const highCase = dataSpec.find((d) => d.value === POSITIVE_INFINITY_PLACEHOLDER);
        const lowCase = dataSpec.find((d) => d.value === NEGATIVE_INFINITY_PLACEHOLDER);

        if (highCase && lowCase && currentCase) {
          if (currentCase.value === POSITIVE_INFINITY_PLACEHOLDER) {
            return (
              <div style={{ lineHeight: 1.1, fontSize: '14px', color: 'black', fontWeight: 'bold' }}>
                <span style={{ color: colorScale(highCase.breakdown) }}>{highCase.breakdown}</span> is higher than{' '}
                <span style={{ color: colorScale(lowCase.breakdown) }}>{lowCase.breakdown}</span>.
              </div>
            );
          } else if (currentCase.value === NEGATIVE_INFINITY_PLACEHOLDER) {
            return (
              <div style={{ lineHeight: 1.1, fontSize: '14px', color: 'black', fontWeight: 'bold' }}>
                <span style={{ color: colorScale(lowCase.breakdown) }}>{lowCase.breakdown}</span> is lower than{' '}
                <span style={{ color: colorScale(highCase.breakdown) }}>{highCase.breakdown}</span>.
              </div>
            );
          }
        }
        // Fallback if cases not found correctly
        return (
          <div style={{ lineHeight: 1.1, fontSize: '14px', color: 'grey', fontWeight: 'bold' }}>
            Comparison info unavailable
          </div>
        );
      } else {
        const refCase = dataSpec.find((d) => d !== currentCase) || dataSpec[0];
        if (typeof currentCase.value !== 'number' || typeof refCase.value !== 'number') {
          return (
            <div style={{ lineHeight: 1.1, fontSize: '14px', color: 'grey', fontWeight: 'bold' }}>
              Comparison data invalid
            </div>
          );
        }
        const diff = Math.abs(currentCase.value - refCase.value);
        if (refCase.breakdown === selectedEntity) {
          return (
            <div style={{ lineHeight: 1.1, fontSize: '14px', color: 'black', fontWeight: 'bold' }}>
              The difference between{' '}
              <span style={{ color: colorScale(refCase.breakdown) }}>
                {refCase.breakdown} ({refCase.value})
              </span>{' '}
              and {currentCase.breakdown} ({currentCase.value}) is {diff}.
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
