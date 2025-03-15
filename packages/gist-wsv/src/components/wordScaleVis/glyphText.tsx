import React from 'react';
import * as d3 from 'd3';
import { SVG_HEIGHT, SVG_PADDING } from '../constants';
import { ChartProps, DataSpec } from '../types';
import { Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const GlyphText = ({ gistvisSpec, colorScale, selectedEntity, setSelectedEntity }: ChartProps) => {
  const dataSpec = gistvisSpec.dataSpec ?? [];
  // process cases with one value only
  const value = dataSpec.map((d: DataSpec) => d.valueValue)[0];
  const inSituPosition = gistvisSpec.unitSegmentSpec.inSituPosition ?? [];

  const targetEntity = dataSpec.map((d: DataSpec) => d.categoryValue)[0];

  const getToolTipContent = (value: number, category: string) => {
    const formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return (
      <div
        style={{
          lineHeight: 1.1,
          fontSize: '14px',
          color: colorScale(category),
          fontWeight: 'bold',
        }}
      >
        The value of {category} is {formatter.format(value)}
      </div>
    );
  };

  const getVisElement = (value: number, currentEntity: string) => {
    const hoverStyle = {
      opacity: currentEntity === selectedEntity ? 1 : 0.5,
      transition: 'opacity 0.3s',
    };
    // if value < 0, then return the value
    if (value > 0 && value <= 100) {
      const glyphElementWidth = 6;
      const numRows = 5;
      const pointsPerRow = Math.ceil(value / numRows);

      const xScale = d3
        .scaleLinear()
        .domain([0, pointsPerRow])
        .range([SVG_PADDING, glyphElementWidth * pointsPerRow - SVG_PADDING]);

      const yScale = d3
        .scaleLinear()
        .domain([0, numRows])
        .range([SVG_HEIGHT - SVG_PADDING, SVG_PADDING]);

      const points = Array.from({ length: value }, (_, i) => {
        return {
          x: xScale(i % pointsPerRow),
          y: yScale(Math.floor(i / pointsPerRow)),
        };
      });

      return (
        <svg
          width={glyphElementWidth * pointsPerRow}
          height={SVG_HEIGHT}
          style={hoverStyle}
          onMouseOver={() => setSelectedEntity(currentEntity)}
          onMouseOut={() => setSelectedEntity('')}
        >
          {points.map((point, index) => (
            <circle key={index} cx={point.x} cy={point.y} r={1.2} fill={colorScale(currentEntity)} />
          ))}
        </svg>
      );
    } else {
      return (
        <SearchOutlined
          style={{ ...hoverStyle, color: colorScale(currentEntity) }}
          onMouseOver={() => setSelectedEntity(currentEntity)}
          onMouseOut={() => setSelectedEntity('')}
        />
      );
    }
  };

  const mainElement = dataSpec.map((d: DataSpec, i: number) => {
    const hoverStyle = {
      opacity: d.categoryValue === selectedEntity ? 1 : 0.5,
      transition: 'opacity 0.3s',
    };
    return (
      <Tooltip title={getToolTipContent(d.valueValue, d.categoryValue)} placement="bottom" color="#ffffff">
        {getVisElement(d.valueValue, d.categoryValue)}
      </Tooltip>
    );
  });

  // const mainElement = highlightEntity
  //   .map((d: string, i: number) => {
  //     const hoverStyle = {
  //       opacity: d === selectedEntity ? 1 : 0.5,
  //       transition: "opacity 0.3s",
  //     };
  //     return (
  //       <span>{d}</span>
  //     );
  //   });

  return <>{mainElement}</>;
};

export default GlyphText;
