import { gistKB } from '../../llm/visKB';
import { GistvisSpec, InsightType, DataSpec } from '../types';

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const recommendValidTypes = (gistVisSpec: GistvisSpec) => {
  const dataSpec = gistVisSpec.dataSpec ?? [];
  const unitSegmentSpec = gistVisSpec.unitSegmentSpec;
  // No dataSpec, revert to noType;
  // More than 10 entries, too long for word-scale vis, revert to noType
  if (dataSpec.length === 0 || dataSpec.length > 10) {
    return ['noType'] as InsightType[];
  }

  const dataSpecLength = dataSpec.length;

  // Task 1: check valueValue isNaN
  const valueValueHasNaN = dataSpec.some((d) => isNaN(d.valueValue));
  const categoryValueHasEmpty = dataSpec.some((d) => d.categoryValue === '');

  // Task 2: check insituPos
  const inSituPositionList: string[] = unitSegmentSpec.inSituPosition ?? [];
  const hasGotInsituPos = inSituPositionList.length > 0;

  // Task 3: check attribute string
  const attribute = unitSegmentSpec.attribute ?? '';
  const validForNominalTrend = attribute === 'negative' || attribute === 'positive' || attribute === 'invariable';
  const validForExtreme = attribute === 'maximum' || attribute === 'minimum';

  // Task 4: valueValue attribute
  const sumOfValueValue = dataSpec.reduce((sum, d) => sum + d.valueValue, 0);
  const isInOneToTenRange = dataSpec.every((d) => d.valueValue >= 1 && d.valueValue <= 10);

  const notValidTypes: InsightType[] = [];
  if (valueValueHasNaN || categoryValueHasEmpty || dataSpecLength < 2) {
    notValidTypes.push('comparison');
  }
  // value/extreme must have inSitu position
  if (!hasGotInsituPos) {
    notValidTypes.push('value');
    notValidTypes.push('extreme');
  }
  if (valueValueHasNaN || categoryValueHasEmpty) {
    notValidTypes.push('value');
  }
  // extreme must have attribute
  if (!validForExtreme || inSituPositionList.length > 1) {
    notValidTypes.push('extreme');
  }

  const checkInvariableTrend = (dataSpec: DataSpec[]): boolean => {
    if (dataSpec.length < 2) return false;
    const variations = dataSpec.slice(1).map((curr, idx) => {
      const prev = dataSpec[idx].valueValue;
      const change = Math.abs(curr.valueValue - prev) / prev;
      return change;
    });
    const VARIATION_THRESHOLD = 0.10; 
    return variations.every(v => v <= VARIATION_THRESHOLD);
  };
  
  // not negative/positive, while there exist empty value, or less than 2 data points, not valid for trend
  if (!validForNominalTrend && (valueValueHasNaN || dataSpecLength < 2)) {
    notValidTypes.push('trend');
  }else if (attribute === 'invariable' && !checkInvariableTrend(dataSpec)) {
    notValidTypes.push('trend');
  }
  // if the sum of valueValue is greater than 1, than not a proportion
  if (valueValueHasNaN || categoryValueHasEmpty || sumOfValueValue > 1) {
    notValidTypes.push('proportion');
  }
  // if valueValue is not in 1-10 range, should not be a rank
  if (!isInOneToTenRange || valueValueHasNaN || categoryValueHasEmpty) {
    notValidTypes.push('rank');
  }

  const validTypes = Object.keys(gistKB).filter((type) => !notValidTypes.includes(type as InsightType));
  // noType is always welcome
  validTypes.push('noType');

  return validTypes as InsightType[];
};
