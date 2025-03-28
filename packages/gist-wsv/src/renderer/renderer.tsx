import { GistvisSpec, InsightType, paragraphSpec } from '../components/types';
import {
  ComparisonTextRenderer,
  ExtremeTextRenderer,
  PlainTextRenderer,
  ProportionTextRenderer,
  RankTextRenderer,
  ValueTextRenderer,
  TrendTextRenderer,
} from './rendererList';
import { recommendValidTypes } from '../utils/utils';
import FallBackCase from '../components/widgets/fallbackVis';
import React from 'react';

export const GistvisVisualizer: React.FC<{ datafactSpec: paragraphSpec[] }> = ({ datafactSpec }) => {
  const renderMap = {
    noType: (item: GistvisSpec) => <PlainTextRenderer gistvisSpec={item} />,
    trend: (item: GistvisSpec) => <TrendTextRenderer gistvisSpec={item} />,
    rank: (item: GistvisSpec) => <RankTextRenderer gistvisSpec={item} />,
    proportion: (item: GistvisSpec) => <ProportionTextRenderer gistvisSpec={item} />,
    comparison: (item: GistvisSpec) => <ComparisonTextRenderer gistvisSpec={item} />,
    extreme: (item: GistvisSpec) => <ExtremeTextRenderer gistvisSpec={item} />,
    value: (item: GistvisSpec) => <ValueTextRenderer gistvisSpec={item} />,
    fallback: (item: GistvisSpec) => <FallBackCase gistvisSpec={item} />,
  };
  // console.log(JSON.stringify(datafactSpec, null, 2))

  const checkDataspecValidity = (item: GistvisSpec) => {
    const dataSpec = item.dataSpec ?? [];
    // if (dataSpec.length === 0) {
    //   return false;
    // }
    // else {
    //   let spaceList = lodash.uniq(dataSpec.map((data) => data.space));
    //   let featureList = lodash.uniq(dataSpec.map((data) => data.feature));
    //   if (spaceList.length > 1 || featureList.length > 1) {
    //     return false;
    //   }
    //   else {
    return true;
    //   }
    // }
  };

  return (
    <div style={{ textAlign: 'justify' }}>
      {datafactSpec.map((para) => {
        return (
          <p key={para.paragraphIdx}>
            {para.paragraphContent.map((item) => {
              const recommendedTypes = recommendValidTypes(item);
              const renderType = recommendedTypes.includes(item.unitSegmentSpec.insightType)
                ? item.unitSegmentSpec.insightType
                : 'fallback';

              let finalRenderType: InsightType | 'fallback' = renderType;
              if (renderType !== 'noType' && renderType !== 'fallback' && !checkDataspecValidity(item)) {
                finalRenderType = 'fallback';
              }
              const renderFunction = renderMap[finalRenderType];
              return renderFunction ? renderFunction(item) : null;
            })}
          </p>
        );
      })}
    </div>
  );
};
