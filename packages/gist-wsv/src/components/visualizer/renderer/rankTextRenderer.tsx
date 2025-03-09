import React, { useState } from 'react';
import { DataSpec, EntitySpec, GistvisSpec } from '../types';
import * as d3 from 'd3';
import lodash from 'lodash';
import HoverText from '../widgets/hoverText';
import { VerticalBarChart } from '../wordScaleVis/chartList';
import { getHighlightPos, getProductionVisSpec, getUniqueEntities } from '../utils/postProcess';
import useTrackVisit from '../utils/useTrack';

const addPlaceholders = (dataSpec: DataSpec[], maxRank: number) => {
  const existingRanks = dataSpec.map((item) => item.valueValue);
  const placeholders = Array.from({ length: maxRank }, (_, i) => i + 1)
    .filter((rank) => !existingRanks.includes(rank))
    .map((rank) => ({
      categoryKey: dataSpec[0].categoryKey,
      categoryValue: 'placeholder',
      valueKey: dataSpec[0].valueKey,
      valueValue: rank,
    }));
  return [...dataSpec, ...placeholders];
};

const ensureMinimumLength = (dataSpec: DataSpec[], minLength: number) => {
  if (dataSpec.length < minLength) {
    const additionalData = Array.from({ length: minLength - dataSpec.length }, (_, i) => ({
      categoryKey: dataSpec[0].categoryKey,
      categoryValue: 'placeholder',
      valueKey: dataSpec[0].valueKey,
      valueValue: dataSpec.length + i + 1,
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
  // get maximum valueValue
  const existingRanks = dataSpec.map((d) => d.valueValue);
  const maxRank = Math.max(...existingRanks);

  // if the length and maxRank does not match, fill in the rest with placeholder
  if (dataSpec.length !== maxRank && dataSpec.length > 0) {
    dataSpec = addPlaceholders(dataSpec, maxRank);
  }
  // sort dataSpec
  dataSpec = lodash.orderBy(dataSpec, ['valueValue'], ['asc']);
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
