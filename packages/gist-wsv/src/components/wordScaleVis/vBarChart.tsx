import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import { SVG_HEIGHT, SVG_UNIT_WIDTH } from '../constants';
import { ChartProps, DataSpec, InsightType } from '../types';
import { Tooltip } from 'antd';

const POSITIVE_INFINITY_PLACEHOLDER = 99999999;
const NEGATIVE_INFINITY_PLACEHOLDER = -99999999;
const HIGH_FIXED_VALUE = 10;
const LOW_FIXED_VALUE = 5;
const GROUP_PADDING = SVG_UNIT_WIDTH; // Special comparison group padding

const VerticalBarChart: React.FC<ChartProps> = ({
  gistvisSpec,
  colorScale,
  selectedEntity,
  setSelectedEntity,
}: ChartProps) => {
  const [hoveredUniqueId, setHoveredUniqueId] = useState<string | null>(null);
  const dataSpec = gistvisSpec.dataSpec ?? [];
  const insightType = gistvisSpec.unitSegmentSpec?.insightType;

  //Mode Determination
  const isComparison = insightType === 'comparison';
  const containsPositive = dataSpec.some((d) => d.value === POSITIVE_INFINITY_PLACEHOLDER);
  const containsNegative = dataSpec.some((d) => d.value === NEGATIVE_INFINITY_PLACEHOLDER);
  const isSpecialComparisonMode = isComparison && containsPositive && containsNegative;

  //State for Layout and Data (depends on mode)
  let finalWidth: number;
  let knownCategories: JSX.Element[] = [];
  let comparisonGroups: { [key: string]: DataSpec[] } = {}; // Only for special comparison
  const groupLayouts: { group: DataSpec[]; startX: number; width: number }[] = []; // Only for special comparison

  //Special Comparison Mode Logic
  if (isSpecialComparisonMode) {
    comparisonGroups = dataSpec.reduce(
      (acc, item) => {
        const groupKey = item.space || item.feature || 'default_group';
        if (!acc[groupKey]) {
          acc[groupKey] = [];
        }
        acc[groupKey].push(item);
        return acc;
      },
      {} as { [key: string]: DataSpec[] }
    );

    const validComparisonGroups = Object.values(comparisonGroups).filter(
      (group) =>
        group.some((d) => d.value === POSITIVE_INFINITY_PLACEHOLDER) &&
        group.some((d) => d.value === NEGATIVE_INFINITY_PLACEHOLDER)
    );

    let currentX = 0;
    validComparisonGroups.forEach((group) => {
      const groupWidth = group.length * SVG_UNIT_WIDTH;
      groupLayouts.push({ group: group, startX: currentX, width: groupWidth });
      currentX += groupWidth + GROUP_PADDING;
    });
    finalWidth = Math.max(0, currentX - GROUP_PADDING);

    const yScaleSpecial = d3.scaleLinear().domain([0, HIGH_FIXED_VALUE]).range([SVG_HEIGHT, 0]);

    knownCategories = groupLayouts.flatMap(({ group, startX }) => {
      group.sort((a, b) => b.value - a.value); // Sort within group for consistent layout if desired

      return group.map((d, itemIndexInGroup) => {
        const uniqueId = `${d.space || ''}-${d.breakdown}-${d.feature}-${d.value}-${itemIndexInGroup}`; // Complex ID for special mode
        const isHovered = uniqueId === hoveredUniqueId;
        const hoverStyle = {
          opacity: isHovered ? 1 : hoveredUniqueId === null && d.breakdown === selectedEntity ? 1 : 0.5,
          transition: 'opacity 0.3s',
        };
        const valueForScale = d.value === POSITIVE_INFINITY_PLACEHOLDER ? HIGH_FIXED_VALUE : LOW_FIXED_VALUE;
        const barY = yScaleSpecial(valueForScale);
        const barHeight = SVG_HEIGHT - barY;
        const barX = startX + itemIndexInGroup * SVG_UNIT_WIDTH;

        return (
          <rect
            key={uniqueId}
            x={barX}
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
    });

    // (Rank or Normal Comparison)
  } else {
    const datasetMap: { [key in InsightType]?: number[] } = {
      rank: dataSpec.map((d: DataSpec) =>
        d.value === NEGATIVE_INFINITY_PLACEHOLDER || d.value === POSITIVE_INFINITY_PLACEHOLDER
          ? 0
          : dataSpec.length + 1 - d.value
      ), // Handle potential leftover placeholders in rank/normal data? Default to 0 height?
      comparison: dataSpec.map((d: DataSpec) =>
        d.value === NEGATIVE_INFINITY_PLACEHOLDER || d.value === POSITIVE_INFINITY_PLACEHOLDER ? 0 : d.value
      ), // Handle potential leftover placeholders?
    };
    const dataset = insightType ? (datasetMap[insightType] ?? []) : [];

    finalWidth = SVG_UNIT_WIDTH * dataSpec.length;
    const xScale = d3.scaleLinear().domain([0, dataSpec.length]).range([0, finalWidth]);
    const yMax = d3.max(dataset) ?? 1;
    const yScale = d3.scaleLinear().domain([0, yMax]).range([SVG_HEIGHT, 0]);

    knownCategories = dataSpec.map((d: DataSpec, i: number) => {
      // Use simpler original ID format for these modes
      const uniqueId = `${d.breakdown}-${d.feature}-${d.value}`;
      const isHovered = uniqueId === hoveredUniqueId || (hoveredUniqueId === null && d.breakdown === selectedEntity);
      const hoverStyle = {
        opacity: isHovered ? 1 : 0.5,
        transition: 'opacity 0.3s',
      };
      const valueForScale = dataset[i] ?? 0; // Use value from calculated dataset
      const barY = yScale(valueForScale);
      const barHeight = SVG_HEIGHT - barY;

      return (
        <rect
          key={uniqueId}
          x={xScale(i)}
          y={barY >= 0 ? barY : 0} // Handle potential negative values if domain changes
          width={SVG_UNIT_WIDTH}
          height={barHeight >= 0 ? barHeight : 0} // Ensure non-negative height
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
  }

  //Tooltip Logic (Handles all modes)
  const formatBreakdownList = (items: DataSpec[]) => {
    return items.map((item, index) => (
      <React.Fragment key={item.breakdown + index}>
        <span style={{ color: colorScale(item.breakdown) }}>
          {/* Display breakdown and optionally feature for context */}
          {item.breakdown} {/* ({item.feature}) - uncomment if feature needed */}
        </span>
        {index < items.length - 2 ? ', ' : index === items.length - 2 ? ' and ' : ''}
      </React.Fragment>
    ));
  };

  const getToolTipContent = () => {
    if (hoveredUniqueId === null) {
      return null;
    }

    let currentCase: DataSpec | undefined;
    let currentGroup: DataSpec[] | undefined; // For special comparison context
    // Find the hovered data item based on the ID structure
    if (isSpecialComparisonMode) {
      for (const layout of groupLayouts) {
        for (let i = 0; i < layout.group.length; i++) {
          const d = layout.group[i];
          const idToCheck = `${d.space || ''}-${d.breakdown}-${d.feature}-${d.value}-${i}`;
          if (idToCheck === hoveredUniqueId) {
            currentCase = d;
            currentGroup = layout.group;
            break;
          }
        }
        if (currentCase) break;
      }
    } else {
      // Find based on original ID format
      currentCase = dataSpec.find((d) => `${d.breakdown}-${d.feature}-${d.value}` === hoveredUniqueId);
    }

    if (!currentCase) {
      return null; // Should not happen if hoveredUniqueId is valid
    }

    if (currentCase.breakdown === 'placeholder') {
      return <div style={{ lineHeight: 1.1, fontSize: '14px', color: 'grey', fontWeight: 'bold' }}>Placeholder</div>; // Adjusted text
    }

    // Special Comparison Tooltip
    if (
      isSpecialComparisonMode &&
      currentGroup &&
      (currentCase.value === POSITIVE_INFINITY_PLACEHOLDER || currentCase.value === NEGATIVE_INFINITY_PLACEHOLDER)
    ) {
      const peers = currentGroup.filter((d) => d !== currentCase);
      const highPeers = peers.filter((d) => d.value === POSITIVE_INFINITY_PLACEHOLDER);
      const lowPeers = peers.filter((d) => d.value === NEGATIVE_INFINITY_PLACEHOLDER);
      let comparisonText = '';
      let comparisonList: DataSpec[] = [];

      if (currentCase.value === POSITIVE_INFINITY_PLACEHOLDER) {
        comparisonText = 'is higher than';
        comparisonList = lowPeers;
      } else {
        comparisonText = 'is lower than';
        comparisonList = highPeers;
      }

      if (comparisonList.length > 0) {
        return (
          <div style={{ lineHeight: 1.1, fontSize: '14px', color: 'black', fontWeight: 'bold' }}>
            <span style={{ color: colorScale(currentCase.breakdown) }}>{currentCase.breakdown}</span> (
            {currentCase.feature || currentCase.space}) {comparisonText} {formatBreakdownList(comparisonList)}.
          </div>
        );
      } else {
        return (
          // Fallback if no peers to compare with
          <div style={{ lineHeight: 1.1, fontSize: '14px', color: 'black', fontWeight: 'bold' }}>
            <span style={{ color: colorScale(currentCase.breakdown) }}>{currentCase.breakdown}</span> (
            {currentCase.feature || currentCase.space}).
          </div>
        );
      }
      // Normal Comparison Tooltip
    } else if (insightType === 'comparison' && !isSpecialComparisonMode) {
      const refCase = dataSpec.find((d) => d !== currentCase && d.breakdown !== 'placeholder'); // Find a non-placeholder reference
      if (!refCase) {
        // Handle case with only one non-placeholder item
        return (
          <div style={{ lineHeight: 1.1, fontSize: '14px', color: 'black', fontWeight: 'bold' }}>
            {currentCase.breakdown}: {currentCase.value}
          </div>
        );
      }
      // Ensure values are numbers before calculating diff
      if (typeof currentCase.value !== 'number' || typeof refCase.value !== 'number') {
        return (
          <div style={{ lineHeight: 1.1, fontSize: '14px', color: 'grey', fontWeight: 'bold' }}>
            Comparison data invalid
          </div>
        );
      }
      const diff = Math.abs(currentCase.value - refCase.value);
      const currentDisplayValue = currentCase.value;
      const refDisplayValue = refCase.value;
      return (
        <div style={{ lineHeight: 1.1, fontSize: '14px', color: 'black', fontWeight: 'bold' }}>
          Comparing{' '}
          <span style={{ color: colorScale(currentCase.breakdown) }}>
            {currentCase.breakdown} ({currentDisplayValue})
          </span>{' '}
          and{' '}
          <span style={{ color: colorScale(refCase.breakdown) }}>
            {refCase.breakdown} ({refDisplayValue})
          </span>
          . Difference is {diff}.
        </div>
      );

      // Rank Tooltip
    } else if (insightType === 'rank') {
      const rankData = currentCase;
      const rankValue = rankData.value;

      if (
        rankValue === undefined ||
        typeof rankValue !== 'number' ||
        rankValue === POSITIVE_INFINITY_PLACEHOLDER ||
        rankValue === NEGATIVE_INFINITY_PLACEHOLDER
      ) {
        // Add check for special values in rank data
        return (
          <div style={{ lineHeight: 1.1, fontSize: '14px', color: 'grey', fontWeight: 'bold' }}>
            Rank data unavailable
          </div>
        );
      }
      return (
        <div style={{ lineHeight: 1.1, fontSize: '14px', color: colorScale(rankData.breakdown), fontWeight: 'bold' }}>
          {rankData.feature} Rank {rankValue}: {rankData.breakdown}
        </div>
      );
    }

    return null; // Fallback for unhandled cases
  };

  const visElement = (
    <Tooltip title={getToolTipContent()} placement="bottom" color="#ffffff" mouseEnterDelay={0.1}>
      <svg height={SVG_HEIGHT} width={finalWidth}>
        {knownCategories}
      </svg>
    </Tooltip>
  );

  return <>{visElement}</>;
};

export default VerticalBarChart;
