import React, { useState } from 'react';
import * as d3 from 'd3';
import { SVG_HEIGHT, SVG_PADDING, SVG_UNIT_WIDTH, SVG_INTERVAL } from '../constants';
import { DataPoint, LineChartProps } from '../types';
import { Tooltip } from 'antd';
import { capitalizeFirstLetter } from '../utils/utils';

interface LineChartTooltipProps {
  x: number;
  y: number;
  value: number;
}

const Line = ({ gistvisSpec, visualizeData, type, colorScale, selectedEntity, setSelectedEntity }: LineChartProps) => {
  const dataSpec = gistvisSpec.dataSpec ?? [];
  const dataset = visualizeData;

  const svgRef = React.useRef<SVGSVGElement>(null);
  const lineChartWidth = type === 'start-end' ? SVG_UNIT_WIDTH * dataset.length * 2 : SVG_UNIT_WIDTH * dataset.length;
  const lineChartHeight = SVG_HEIGHT;

  const dataPosX = dataset[dataset.length - 1].x;
  const differenceLineDataset: DataPoint[] = [
    { x: dataPosX, y: dataset[0].y },
    { x: dataPosX, y: dataset[dataset.length - 1].y },
  ];

  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(dataset, (d) => d.x) as [number, number])
    .range([SVG_PADDING, lineChartWidth - SVG_PADDING]);

  const yScale = d3
    .scaleLinear()
    .domain(d3.extent(dataset, (d) => d.y) as [number, number])
    .range([lineChartHeight - SVG_PADDING, SVG_PADDING]);

  const lineGenerator = d3
    .line<{ x: number; y: number }>()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y));

  const lineGeneratorDifference = d3
    .line<{ x: number; y: number }>()
    .x((d) => xScale(d.x) + SVG_INTERVAL)
    .y((d) => yScale(d.y));

  const areaGenerator = d3
    .area<{ x: number; y: number }>()
    .x((d) => xScale(d.x))
    .y1((d) => yScale(d.y))
    .y0(yScale(0));

  const getTooltipContnet = (selectionVal: number | null) => {
    if (type === 'nominal') {
      return (
        <div
          style={{
            lineHeight: 1.1,
            fontSize: '14px',
            color: `${lineColor}`,
            fontWeight: 'bold',
          }}
        >
          {gistvisSpec.unitSegmentSpec.attribute === 'positive' ? '↗ increasing' : '↘ decreasing'}
        </div>
      );
    } else if (type === 'trending') {
      return (
        <div
          style={{
            lineHeight: 1.1,
            fontSize: '14px',
            color: `${lineColor}`,
            fontWeight: 'bold',
          }}
        >
          {gistvisSpec.unitSegmentSpec.attribute === 'positive' ? '↗ increased' : '↘ decreased'}{' '}
          {dataSpec[0].valueValue}
        </div>
      );
    } else if (type === 'start-end') {
      return (
        <div
          style={{
            lineHeight: 1.1,
            fontSize: '14px',
            color: `${lineColor}`,
            fontWeight: 'bold',
          }}
        >
          {capitalizeFirstLetter(dataSpec[0].valueKey) +
            ' of ' +
            dataSpec.find((d) => d.valueValue === selectionVal)?.categoryValue +
            ': ' +
            selectionVal}
          . The {gistvisSpec.unitSegmentSpec.attribute === 'positive' ? '↗ increase' : '↘ decrease'} is{' '}
          {Math.abs(dataSpec[1].valueValue - dataSpec[0].valueValue)}.
        </div>
      );
    } else {
      return (
        <div
          style={{
            lineHeight: 1.1,
            fontSize: '14px',
            color: `${lineColor}`,
            fontWeight: 'bold',
          }}
        >
          {capitalizeFirstLetter(dataSpec[0].valueKey) +
            ' of ' +
            dataSpec.find((d) => d.valueValue === selectionVal)?.categoryValue +
            ': ' +
            selectionVal}
          .
        </div>
      );
    }
  };

  const [tooltip, setTooltip] = useState<LineChartTooltipProps | null>(null);

  const handleMouseMove = (event: React.MouseEvent<SVGSVGElement>) => {
    const svg = svgRef.current;
    if (!svg) return;

    // Calculate the position of the mouse relative to the SVG
    const rect = svg.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Find the closest data point based on the x position
    const bisect = d3.bisector((d: DataPoint) => xScale(d.x)).center;
    const index = bisect(dataset, x);

    const closestPoint = dataset[index];
    setTooltip({
      x: xScale(closestPoint.x),
      y: yScale(closestPoint.y),
      value: closestPoint.y,
    } as LineChartTooltipProps);
  };

  const handleMouseOut = () => {
    setTooltip(null);
  };

  const lineColor =
    type === 'nominal' || type === 'trending' || type === 'start-end'
      ? gistvisSpec.unitSegmentSpec.attribute === 'positive'
        ? 'green'
        : 'red'
      : colorScale(dataSpec[0].categoryValue);

  const uid =
    gistvisSpec.unitSegmentSpec.insightType + '-' + gistvisSpec.unitSegmentSpec.attribute + '-' + gistvisSpec.id;
  return (
    <Tooltip title={tooltip != null ? getTooltipContnet(tooltip.value) : ''} placement="bottom" color="#ffffff">
      <svg
        ref={svgRef}
        width={lineChartWidth + SVG_INTERVAL}
        height={SVG_HEIGHT}
        // style={zoomedIn ? zoomedStyle.zoomedIn : zoomedStyle.normal}
        // onMouseEnter={handleZoomIn}
        // onMouseLeave={handleZoomOut}
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
      >
        <path d={areaGenerator(dataset) || undefined} fill={`url(#${uid}-areaGradient`} />
        <path d={lineGenerator(dataset) || undefined} fill="none" strokeWidth={1.5} />
        <defs>
          <linearGradient id={`${uid}-areaGradient`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor={lineColor} stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {type === 'trending' && (
          <path
            d={lineGeneratorDifference(differenceLineDataset) || undefined}
            fill="none"
            stroke={lineColor}
            strokeWidth={1}
            markerStart={`url(#arrow-start-${lineColor})`}
            markerEnd={`url(#arrow-end-${lineColor})`}
          />
        )}

        <defs>
          <marker
            id={`arrow-end-${lineColor}`}
            markerWidth="4"
            markerHeight="4"
            refX="3"
            refY="2"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,4 L4,2 z" fill={lineColor} />
          </marker>
        </defs>

        <defs>
          <marker
            id={`arrow-start-${lineColor}`}
            markerWidth="4"
            markerHeight="4"
            refX="1"
            refY="2"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M4,0 L4,4 L0,2 z" fill={lineColor} />
          </marker>
        </defs>

        <path d={lineGenerator(dataset) || undefined} fill="none" stroke={lineColor} strokeWidth={1} />
        {tooltip && <circle cx={tooltip.x} cy={tooltip.y} r={2} fill="black" opacity={0.9} />}
      </svg>
    </Tooltip>
  );
  // return <>{visElement}</>;
};

export default Line;
