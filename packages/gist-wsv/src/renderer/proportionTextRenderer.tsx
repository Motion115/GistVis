import React, { useState } from 'react';
import { EntitySpec, GistvisSpec } from '../components/types';
import * as d3 from 'd3';
import HoverText from '../components/widgets/hoverText';
import { HorizontalStackedBarChart } from '../components/wordScaleVis/chartList';
import { getHighlightPos, getProductionVisSpec, getUniqueEntities } from '../utils/postProcess';
import useTrackVisit from '../utils/useTrack';

const ProportionTextRenderer: React.FC<{ gistvisSpec: GistvisSpec }> = ({ gistvisSpec }) => {
  const id = gistvisSpec.id;
  const { visitCount, handleMouseEnter, handleMouseLeave, identifier } = useTrackVisit('prop-' + id);
  const [currentEntity, setCurrentEntity] = useState<string>('');
  const dataSpec = gistvisSpec.dataSpec ?? [];

  const entityPos: EntitySpec[] = getHighlightPos(gistvisSpec, 'entity');
  const uniqueEntities = getUniqueEntities(entityPos);
  const vis = getProductionVisSpec(gistvisSpec.unitSegmentSpec.context, entityPos);
  const colorScale = d3.scaleOrdinal(d3.schemeCategory10).domain(uniqueEntities);

  const proportionVis = (
    <HorizontalStackedBarChart
      gistvisSpec={gistvisSpec}
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
                {proportionVis}
              </span>
            </span>
          );
        } else {
          console.warn('Unknown display type: ' + content.displayType);
          return <span key={index}>{content.content}</span>;
        }
      })}
    </span>
  );
};

export default ProportionTextRenderer;
