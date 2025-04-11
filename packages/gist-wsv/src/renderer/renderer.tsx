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
    const insightType = item.unitSegmentSpec.insightType;

    if (!item.dataSpec) {
      return insightType === 'trend';
    }
  
    const dataSpec = item.dataSpec;
    
    if (dataSpec.length === 0) {
      return insightType === 'trend';
    }
  
    switch (insightType) {
      case 'trend':
        return true;
        
      case 'comparison':
        return dataSpec.length >= 2 && 
               dataSpec.every(data => !isNaN(data.value));
        
      case 'proportion':
        const values = dataSpec.map(data => data.value).filter(val => !isNaN(val));
        const hasValidValues = values.length > 0;
                
        if (!hasValidValues) 
          return false;
        const isZeroToOne = values.every(val => val >= 0 && val <= 1);
        const isZeroToHundred = values.every(val => val >= 0 && val <= 100);        
        return isZeroToOne || isZeroToHundred;            
        
      case 'extreme':
      case 'value':
        return dataSpec.every(data => 
          data.space &&
          data.feature &&
          !isNaN(data.value)
        );
        
      case 'rank':
        return dataSpec.length >= 2 && 
               dataSpec.every(data => 
                 data.space &&
                 data.feature &&
                 !isNaN(data.value)
               );
        
      default:
        return true;
    }
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
