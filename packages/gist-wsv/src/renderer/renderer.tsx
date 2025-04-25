import { DataSpec, GistvisSpec, InsightType, paragraphSpec } from '../components/types';
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

class DataSpecValidator {
  private static checkTrendValidity(dataSpec: DataSpec[]): boolean {
    return true;
  }

  private static checkComparisonValidity(dataSpec: DataSpec[]): boolean {
    return dataSpec.length >= 2 && dataSpec.every(data => !isNaN(data.value));
  }

  private static checkProportionValidity(dataSpec: DataSpec[]): boolean {
    const values = dataSpec.map(data => data.value).filter(val => !isNaN(val));
    if (values.length === 0) 
      return false;

    const isZeroToOne = values.every(val => val >= 0 && val <= 1);
    const isZeroToHundred = values.every(val => val >= 0 && val <= 100);
    return isZeroToOne || isZeroToHundred;
  }

  private static checkExtremeOrValueValidity(dataSpec: DataSpec[]): boolean {
    return dataSpec.every(data => 
      data.space &&
      data.feature &&
      !isNaN(data.value)
    );
  }

  private static checkRankValidity(dataSpec: DataSpec[]): boolean {
    return dataSpec.length >= 2 && 
           dataSpec.every(data => 
             data.space &&
             data.feature &&
             !isNaN(data.value)
           );
  }

  private static validatorMap: Record<InsightType, (dataSpec: DataSpec[]) => boolean> = {
    trend: DataSpecValidator.checkTrendValidity,
    comparison: DataSpecValidator.checkComparisonValidity,
    proportion: DataSpecValidator.checkProportionValidity,
    extreme: DataSpecValidator.checkExtremeOrValueValidity,
    value: DataSpecValidator.checkExtremeOrValueValidity,
    rank: DataSpecValidator.checkRankValidity,
    noType: () => true
  };

  public static checkValidity(item: GistvisSpec): boolean {
    const { insightType } = item.unitSegmentSpec;
    
    if (!item.dataSpec) {
      return insightType === 'trend';
    }
    
    if (item.dataSpec.length === 0) {
      return insightType === 'trend';
    }

    const validator = this.validatorMap[insightType];
    return validator ? validator(item.dataSpec) : true;
  }
}

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

  const checkDataspecValidity = (item: GistvisSpec): boolean => {
    return DataSpecValidator.checkValidity(item);
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
