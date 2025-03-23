import { SpaceBreakdown, FeatureValue, DataSpec } from './types';

export const processToDataSpecs = (
  spaceBreakdowns: SpaceBreakdown[],
  featureValues: FeatureValue[]
): DataSpec[] => {
  const specs: DataSpec[] = [];

  // 对每个space-feature组合创建一个DataSpec
  for (const sb of spaceBreakdowns) {
    const relevantFeatures = featureValues.filter(fv => 
      fv.values.some(v => sb.breakdowns.includes(v.entity))
    );

    for (const feature of relevantFeatures) {
      // 获取这个space下的所有实体的值
      const values = feature.values
        .filter(v => sb.breakdowns.includes(v.entity))
        .map(v => v.value);
      
      const entities = feature.values
        .filter(v => sb.breakdowns.includes(v.entity))
        .map(v => v.entity);

      if (entities.length > 0) {
        specs.push({
          space: sb.space,
          feature: feature.feature,
          entities,
          values
        });
      }
    }
  }

  return specs;
};