import React, { useRef, useState, useEffect } from "react";
import { EntitySpec, GistvisSpec } from "../types";
import * as d3 from "d3";
import _ from "lodash";
import HoverText from "../widgets/hoverText";
import GlyphText from "../wordScaleVis/glyphText";
import {
  getHighlightPos,
  getProductionVisSpec,
  getUniqueEntities,
} from "../utils/postProcess";
import useTrackVisit from "../utils/useTrack";

const ValueTextRenderer = ({
  gistvisSpec,
}: {
  gistvisSpec: GistvisSpec;
}) => {  
  const id = gistvisSpec.id;
  const { visitCount, handleMouseEnter, handleMouseLeave, identifier } = useTrackVisit('value-' + id);
  const [currentEntity, setCurrentEntity] = useState<string>("");
  const dataSpec = gistvisSpec.dataSpec ?? [];

  // const inSituPos: EntitySpec[] = getHighlightPos(gistvisSpec, "phrase");
  const entityPos: EntitySpec[] = getHighlightPos(gistvisSpec, "entity");
  const uniqueEntities = getUniqueEntities(entityPos);

  const vis = getProductionVisSpec(
    gistvisSpec.unitSegmentSpec.context,
    entityPos,
    "right"
  );

  const colorScale = d3
    .scaleOrdinal(d3.schemeCategory10)
    .domain(uniqueEntities);

  const valueVis = (
    <GlyphText
      gistvisSpec={gistvisSpec}
      colorScale={colorScale}
      selectedEntity={currentEntity}
      setSelectedEntity={setCurrentEntity}
    />
  );

  return (
    <span data-component-id={identifier}>
      {vis.map((content, index) => {
        if (content.displayType === "text") {
          return <span key={index}>{content.content}</span>;
        } else if (content.displayType === "entity") {
          return (
            <HoverText
              key={index}
              text={content.content}
              isHovered={content.entity === currentEntity}
              color={colorScale(content.entity ?? "grey")}
              onMouseOver={() => {
                handleMouseEnter();
                setCurrentEntity(content.entity ?? "");
              }}
              onMouseOut={() => {
                handleMouseLeave();
                setCurrentEntity("");
              }}
            />
          );
        } else if (content.displayType === "word-scale-vis") {
          return (
            <span
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
            <span key={index}>
              {content.content}
              {valueVis}
            </span>
            </span>
          );
        }
      })}
    </span>
  );
};

export default ValueTextRenderer;
