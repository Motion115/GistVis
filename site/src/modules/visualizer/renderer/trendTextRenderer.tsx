import React, { useState } from 'react';
import { DataPoint, EntitySpec, GistvisSpec, TrendAttribute, TrendOptions } from '../types';
import * as d3 from 'd3';
import HoverText from '../widgets/hoverText';
import { LineChart } from '../wordScaleVis/chartList';
import { getHighlightPos, getProductionVisSpec, getUniqueEntities } from '../utils/postProcess';
import useTrackVisit from '../utils/useTrack';

const dummyDataMap: { [key in TrendAttribute]: DataPoint[] } = {
  positive: [
    { x: 1, y: 1 },
    { x: 2, y: 6 },
    { x: 3, y: 20 },
    { x: 4, y: 40 },
    { x: 5, y: 80 },
  ],
  negative: [
    { x: 1, y: 80 },
    { x: 2, y: 40 },
    { x: 3, y: 20 },
    { x: 4, y: 6 },
    { x: 5, y: 1 },
  ],
};

const TrendTextRenderer = ({ gistvisSpec }: { gistvisSpec: GistvisSpec }) => {
  const id = gistvisSpec.id;
  const { visitCount, handleMouseEnter, handleMouseLeave, identifier } = useTrackVisit('trend-' + id);
  const [currentEntity, setCurrentEntity] = useState<string>('');
  const dataSpec = gistvisSpec.dataSpec ?? [];
  const attribute = (gistvisSpec.unitSegmentSpec.attribute as TrendAttribute) ?? '';

  const entityPos: EntitySpec[] = getHighlightPos(gistvisSpec, 'entity');
  const uniqueEntities = getUniqueEntities(entityPos);

  const vis = getProductionVisSpec(gistvisSpec.unitSegmentSpec.context, entityPos);

  const colorScale = d3.scaleOrdinal(d3.schemeCategory10).domain(uniqueEntities);

  const hasNaN = dataSpec.some((d) => isNaN(d.valueValue));
  const numEntries = dataSpec.length;
  const validForNominalTrend = attribute === 'negative' || attribute === 'positive';
  const lineChartType: TrendOptions =
    validForNominalTrend && (hasNaN || numEntries === 0)
      ? 'nominal'
      : validForNominalTrend && !hasNaN && numEntries === 1
        ? 'trending'
        : validForNominalTrend && !hasNaN && numEntries === 2
          ? 'start-end'
          : 'actual';

  const transformData = (): DataPoint[] => {
    if (lineChartType === 'nominal' || lineChartType === 'trending') {
      return dummyDataMap[attribute];
    } else if (lineChartType === 'start-end') {
      const low = d3.min(dataSpec, (d) => d.valueValue) as number;
      const high = d3.max(dataSpec, (d) => d.valueValue) as number;
      if (attribute === 'negative') {
        return [
          { x: 0, y: high },
          { x: 1, y: low },
        ];
      } else if (attribute === 'positive') {
        return [
          { x: 0, y: low },
          { x: 1, y: high },
        ];
      } else {
        // actual
        return dataSpec.map((d, i) => {
          return {
            x: i,
            y: d.valueValue,
            xLegend: d.categoryValue,
          };
        });
      }
    } else {
      return dataSpec.map((d, i) => {
        return {
          x: i,
          y: d.valueValue,
          xLegend: d.categoryValue,
        };
      });
    }
  };

  const dataset = transformData();

  const lineVis = (
    <LineChart
      gistvisSpec={gistvisSpec}
      visualizeData={dataset}
      type={lineChartType}
      colorScale={colorScale}
      selectedEntity={currentEntity}
      setSelectedEntity={setCurrentEntity}
    />
  );

  return (
    <span data-component-id={identifier}>
      {vis.map((content, index) => {
        if (content.displayType === 'text') {
          return <span key={index}>{content.content}</span>;
        } else if (content.displayType === 'entity') {
          return (
            <HoverText
              key={index}
              text={content.content}
              isHovered={content.entity === currentEntity}
              color={colorScale(content.entity ?? 'grey')}
              onMouseOver={() => {
                handleMouseEnter();
                setCurrentEntity(content.entity ?? '');
              }}
              onMouseOut={() => {
                handleMouseLeave();
                setCurrentEntity('');
              }}
            />
          );
        } else if (content.displayType === 'word-scale-vis') {
          return (
            <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <span key={index}>
                {content.content}
                {lineVis}
              </span>
            </span>
          );
        }
      })}
    </span>
  );
};

export default TrendTextRenderer;
