/// <reference types="jest" />

import { capitalizeFirstLetter, recommendValidTypes } from '../src/utils/utils';
import { GistvisSpec, InsightType, DataSpec } from '../src/components/types';
import '@testing-library/jest-dom';

describe('capitalizeFirstLetter', () => {
  it('capitalizes first letter of a string', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
    expect(capitalizeFirstLetter('world')).toBe('World');
  });

  it('handles empty string', () => {
    expect(capitalizeFirstLetter('')).toBe('');
  });

  it('handles already capitalized string', () => {
    expect(capitalizeFirstLetter('Hello')).toBe('Hello');
  });
});

describe('recommendValidTypes', () => {
  const createMockDataSpec = (valueValues: number[], breakdowns: string[]): DataSpec[] => {
    return valueValues.map((value, index) => ({
      valueValue: value,
      breakdown: breakdowns[index] || '',
      space: 'category',
      valueKey: 'value'
    }));
  };

  const createBaseSpec = (dataSpec: DataSpec[]): GistvisSpec => ({
    id: 'test-spec',
    dataSpec,
    unitSegmentSpec: {
      insightType: 'noType',
      segmentIdx: 0,
      context: 'test context',
      inSituPosition: [],
      attribute: undefined
    }
  });

  it('returns only noType for empty dataSpec', () => {
    const spec = createBaseSpec([]);
    expect(recommendValidTypes(spec)).toEqual(['noType']);
  });

  it('returns only noType for dataSpec with more than 10 entries', () => {
    const data = createMockDataSpec(
      Array(11).fill(1),
      Array(11).fill('category')
    );
    expect(recommendValidTypes(createBaseSpec(data))).toEqual(['noType']);
  });

  it('validates value and extreme types when inSituPosition is present', () => {
    const data = createMockDataSpec([1, 2], ['A', 'B']);
    const spec: GistvisSpec = {
      ...createBaseSpec(data),
      unitSegmentSpec: {
        insightType: 'noType',
        segmentIdx: 0,
        context: 'test context',
        inSituPosition: ['pos1'],
        attribute: undefined
      }
    };
    const result = recommendValidTypes(spec);
    expect(result).toContain('value');
    expect(result).not.toContain('extreme'); // extreme needs valid attribute
  });

  it('validates extreme type with proper attribute', () => {
    const data = createMockDataSpec([1, 2], ['A', 'B']);
    const spec: GistvisSpec = {
      ...createBaseSpec(data),
      unitSegmentSpec: {
        insightType: 'extreme',
        segmentIdx: 0,
        context: 'test context',
        inSituPosition: ['pos1'],
        attribute: 'maximum'
      }
    };
    const result = recommendValidTypes(spec);
    expect(result).toContain('extreme');
  });

  it('validates trend type for invariable data', () => {
    const data = createMockDataSpec([100, 101, 102], ['A', 'B', 'C']); // Small variations
    const spec: GistvisSpec = {
      ...createBaseSpec(data),
      unitSegmentSpec: {
        insightType: 'trend',
        segmentIdx: 0,
        context: 'test context',
        inSituPosition: [],
        attribute: 'invariable'
      }
    };
    const result = recommendValidTypes(spec);
    expect(result).toContain('trend');
  });

  it('validates proportion type for valid proportional data', () => {
    const data = createMockDataSpec([0.3, 0.4], ['A', 'B']); // Sum < 1
    const spec = createBaseSpec(data);
    const result = recommendValidTypes(spec);
    expect(result).toContain('proportion');
  });

  it('validates rank type for values in 1-10 range', () => {
    const data = createMockDataSpec([1, 2, 3], ['A', 'B', 'C']);
    const spec = createBaseSpec(data);
    const result = recommendValidTypes(spec);
    expect(result).toContain('rank');
  });

  it('handles invalid data with NaN values', () => {
    const data = createMockDataSpec([NaN, 2], ['A', 'B']);
    const spec = createBaseSpec(data);
    const result = recommendValidTypes(spec);
    expect(result).toEqual(['noType']);
  });

  it('handles invalid data with empty category values', () => {
    const data = createMockDataSpec([1, 2], ['A', '']);
    const spec = createBaseSpec(data);
    const result = recommendValidTypes(spec);
    expect(result).toEqual(['noType']);
  });
});