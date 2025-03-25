import { SpaceBreakdown, FeatureValue } from './types';
import { DataSpec } from 'gist-wsv';

export const processToDataSpecs = (
  featureValues: FeatureValue[]
): DataSpec[] => {
  const specs: DataSpec[] = [];

  for (const feature of featureValues) {
    for (const valueItem of feature.values) {
      specs.push({
        space: feature.space,
        breakdown: valueItem.entity,
        feature: feature.feature,
        value: valueItem.value
      });
    }
  }

  return specs;
};