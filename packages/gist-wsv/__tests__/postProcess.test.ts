import {
  getHighlightPos,
  getUniqueEntities,
  getNonOverlappingEntities,
  getProductionVisSpec,
} from '../src/utils/postProcess';
import { GistvisSpec, EntitySpec } from '../src/components/types';

describe('getHighlightPos', () => {
  const mockGistVisSpec: GistvisSpec = {
    id: 'test',
    unitSegmentSpec: {
      insightType: 'value',
      segmentIdx: 0,
      context: 'The sales of BYD increased to 30%',
      inSituPosition: ['BYD', 'sales']
    },
    dataSpec: [
      {
        space: 'company',
        breakdown: 'BYD',
        feature: 'sales',
        valueValue: 30
      }
    ]
  };

  it('finds phrase positions correctly', () => {
    const result = getHighlightPos(mockGistVisSpec, 'phrase');
    expect(result).toHaveLength(2);
    expect(result[0].entity).toBe('BYD');
    expect(result[1].entity).toBe('sales');
  });

  it('finds entity positions correctly', () => {
    const result = getHighlightPos(mockGistVisSpec, 'entity');
    expect(result).toHaveLength(1);
    expect(result[0].entity).toBe('BYD');
  });

  it('handles empty arrays', () => {
    const emptySpec: GistvisSpec = {
      ...mockGistVisSpec,
      unitSegmentSpec: { ...mockGistVisSpec.unitSegmentSpec, inSituPosition: [] },
      dataSpec: []
    };
    expect(getHighlightPos(emptySpec, 'phrase')).toHaveLength(0);
    expect(getHighlightPos(emptySpec, 'entity')).toHaveLength(0);
  });

  it('handles empty context', () => {
    const emptyContextSpec: GistvisSpec = {
      ...mockGistVisSpec,
      unitSegmentSpec: { ...mockGistVisSpec.unitSegmentSpec, context: '' }
    };
    expect(getHighlightPos(emptyContextSpec, 'phrase')).toHaveLength(0);
  });

  it('finds multiple phrase matches', () => {
    const multiMatchSpec: GistvisSpec = {
      ...mockGistVisSpec,
      unitSegmentSpec: {
        ...mockGistVisSpec.unitSegmentSpec,
        context: 'The sales increased, while other sales decreased',
        inSituPosition: ['sales']
      }
    };
    const result = getHighlightPos(multiMatchSpec, 'phrase');
    expect(result).toHaveLength(2);
    expect(result[0].postion.start).not.toBe(result[1].postion.start);
  });

  it('handles special characters in search terms', () => {
    const specialCharsSpec: GistvisSpec = {
      ...mockGistVisSpec,
      unitSegmentSpec: {
        ...mockGistVisSpec.unitSegmentSpec,
        context: 'The $ value is $100',
        inSituPosition: ['$']
      }
    };
    const result = getHighlightPos(specialCharsSpec, 'phrase');
    expect(result).toHaveLength(2);
  });
});

describe('getUniqueEntities', () => {
  it('removes duplicate entities', () => {
    const entities: EntitySpec[] = [
      { entity: 'BYD', postion: { start: 0, end: 3 } },
      { entity: 'BYD', postion: { start: 10, end: 13 } },
      { entity: 'Tesla', postion: { start: 20, end: 25 } }
    ];
    const result = getUniqueEntities(entities);
    expect(result).toEqual(['BYD', 'Tesla']);
  });

  it('handles empty array', () => {
    expect(getUniqueEntities([])).toEqual([]);
  });
});

describe('getNonOverlappingEntities', () => {
  it('filters out overlapping entities', () => {
    const entities: EntitySpec[] = [
      { entity: 'BYD', postion: { start: 0, end: 5 } },
      { entity: 'Sales', postion: { start: 3, end: 8 } },
      { entity: 'Tesla', postion: { start: 10, end: 15 } }
    ];
    const result = getNonOverlappingEntities(entities);
    expect(result).toHaveLength(2);
    expect(result[0].entity).toBe('BYD');
    expect(result[1].entity).toBe('Tesla');
  });

  it('keeps non-overlapping entities', () => {
    const entities: EntitySpec[] = [
      { entity: 'BYD', postion: { start: 0, end: 3 } },
      { entity: 'Tesla', postion: { start: 10, end: 15 } }
    ];
    const result = getNonOverlappingEntities(entities);
    expect(result).toHaveLength(2);
  });

  it('handles multiple overlapping entities', () => {
    const entities: EntitySpec[] = [
      { entity: 'A', postion: { start: 0, end: 10 } },
      { entity: 'B', postion: { start: 5, end: 15 } },
      { entity: 'C', postion: { start: 8, end: 12 } },
      { entity: 'D', postion: { start: 20, end: 25 } }
    ];
    const result = getNonOverlappingEntities(entities);
    expect(result).toHaveLength(2);
    expect(result[0].entity).toBe('A');
    expect(result[1].entity).toBe('D');
  });

  it('handles entities with same positions', () => {
    const entities: EntitySpec[] = [
      { entity: 'A', postion: { start: 0, end: 5 } },
      { entity: 'B', postion: { start: 0, end: 5 } },
      { entity: 'C', postion: { start: 10, end: 15 } }
    ];
    const result = getNonOverlappingEntities(entities);
    // Should keep the first one at each position
    expect(result).toHaveLength(2);
    expect(result[0].entity).toBe('A');
    expect(result[1].entity).toBe('C');
  });

  it('handles zero-length entities', () => {
    const entities: EntitySpec[] = [
      { entity: 'A', postion: { start: 0, end: 0 } },
      { entity: 'B', postion: { start: 0, end: 5 } },
      { entity: 'C', postion: { start: 5, end: 5 } }
    ];
    const result = getNonOverlappingEntities(entities);
    // Should filter out zero-length entities
    expect(result).toHaveLength(1);
    expect(result[0].entity).toBe('B');
  });
});

describe('getProductionVisSpec', () => {
  const text = 'BYD sales increased.';
  const entities: EntitySpec[] = [
    { entity: 'BYD', postion: { start: 0, end: 3 } },
    { entity: 'sales', postion: { start: 4, end: 9 } }
  ];

  it('generates correct display specs with no position', () => {
    const result = getProductionVisSpec(text, entities);
    expect(result).toHaveLength(6); // entity + space + entity + space + text + space
    expect(result[0].displayType).toBe('entity');
    expect(result[0].content).toBe('BYD');
  });

  it('generates correct display specs with left position', () => {
    const result = getProductionVisSpec(text, entities, 'left');
    expect(result.some(spec => spec.displayType === 'word-scale-vis')).toBe(true);
  });

  it('handles punctuation correctly', () => {
    const result = getProductionVisSpec(text, entities);
    // In punctuated text:
    // 1. Last non-punctuation content
    expect(result[result.length - 3].content).toBe(' increased');
    // 2. Word-scale-vis space
    expect(result[result.length - 2].displayType).toBe('word-scale-vis');
    // 3. Punctuation with space
    expect(result[result.length - 1].content).toBe('. ');
  });

  it('handles text without entities', () => {
    const result = getProductionVisSpec('Simple text.', []);
    expect(result).toHaveLength(3); // text + word-scale-vis + punctuation
    expect(result[0].content).toBe('Simple text');
  });
});