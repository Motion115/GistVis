import React, { useState } from 'react';
import { DataSpec, EntitySpec, GistvisSpec } from '../components/types';
import * as d3 from 'd3';
import lodash from 'lodash';
import HoverText from '../components/widgets/hoverText';
import { VerticalBarChart } from '../components/wordScaleVis/chartList';
import { getHighlightPos, getProductionVisSpec, getUniqueEntities } from '../utils/postProcess';
import useTrackVisit from '../utils/useTrack';

const addPlaceholders = (dataSpec: DataSpec[], maxRank: number) => {
  const existingRanks = dataSpec.map((item) => item.value);
  const placeholders = Array.from({ length: maxRank }, (_, i) => i + 1)
    .filter((rank) => !existingRanks.includes(rank))
    .map((rank) => ({
      space: dataSpec[0].space,
      breakdown: 'placeholder',
      feature: dataSpec[0].feature,
      value: rank,
    }));
  return [...dataSpec, ...placeholders];
};

const ensureMinimumLength = (dataSpec: DataSpec[], minLength: number) => {
  if (dataSpec.length < minLength) {
    const additionalData = Array.from({ length: minLength - dataSpec.length }, (_, i) => ({
      space: dataSpec[0].space,
      breakdown: 'placeholder',
      feature: dataSpec[0].feature,
      value: dataSpec.length + i + 1,
    }));
    return [...dataSpec, ...additionalData];
  }
  return dataSpec;
};

const RankTextRenderer = ({ gistvisSpec }: { gistvisSpec: GistvisSpec }) => {
  const id = gistvisSpec.id;
  const { visitCount, handleMouseEnter, handleMouseLeave, identifier } = useTrackVisit('rank-' + id);
  const [currentEntity, setCurrentEntity] = useState<string>('');

  // check entity counts in the dataSpec, if less than 3, add dummy data
  let dataSpec: DataSpec[] = gistvisSpec.dataSpec ? gistvisSpec.dataSpec : [];
  // get maximum value
  const existingRanks = dataSpec.map((d) => d.value);
  const maxRank = Math.max(...existingRanks);

  // if the length and maxRank does not match, fill in the rest with placeholder
  if (dataSpec.length !== maxRank && dataSpec.length > 0) {
    dataSpec = addPlaceholders(dataSpec, maxRank);
  }
  // sort dataSpec
  dataSpec = lodash.orderBy(dataSpec, ['value'], ['asc']);
  // ensure ranking vis has at least 3 items
  dataSpec = ensureMinimumLength(dataSpec, 3);

  const gistvisSpecForVis = {
    ...gistvisSpec,
    dataSpec: dataSpec,
  };

  const entityPos: EntitySpec[] = getHighlightPos(gistvisSpec, 'entity');
  const uniqueEntities = getUniqueEntities(entityPos);

  const vis = getProductionVisSpec(gistvisSpec.unitSegmentSpec.context, entityPos);

  const colorScale = d3.scaleOrdinal(d3.schemeCategory10).domain(uniqueEntities);

  const rankVis = (
    <VerticalBarChart
      gistvisSpec={gistvisSpecForVis}
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
                {rankVis}
              </span>
            </span>
          );
        }
      })}
    </span>
  );
};

export default RankTextRenderer;
