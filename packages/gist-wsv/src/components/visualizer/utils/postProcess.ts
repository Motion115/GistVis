import { DataSpec, DisplayPosition, DisplaySpec, EntitySpec, GistvisSpec } from '../types';
import { fuzzySearch } from './fuzzySearch';
import lodash from 'lodash';

export const getHighlightPos = (gistVisSpec: GistvisSpec, type: 'phrase' | 'entity'): EntitySpec[] => {
  let items: string[] | DataSpec[] = [];

  if (type === 'phrase') {
    items = gistVisSpec.unitSegmentSpec.inSituPosition ?? [];
  } else if (type === 'entity') {
    items = gistVisSpec.dataSpec ?? [];
  }

  return items
    .map((item: string | DataSpec) => {
      const str = typeof item === 'string' ? item : item.categoryValue;
      const pos = fuzzySearch(str, gistVisSpec.unitSegmentSpec.context, false);
      const posArray = pos.map((p) => {
        return {
          entity: str,
          postion: {
            start: p[0],
            end: p[1],
          },
        } as EntitySpec;
      });
      return posArray;
    })
    .flat();
};

export const getUniqueEntities = (entityPos: EntitySpec[]) => {
  return lodash.uniqBy(
    entityPos.map((d) => d.entity),
    'entity'
  );
};

export const getNonOverlappingEntities = (entityPos: EntitySpec[]) => {
  // Sort entityPos by start position using lodash
  const sortedEntityPos = lodash.sortBy(entityPos, ['postion.start']);
  // Filter out overlapping entities using reduce
  const nonOverlappingEntities = sortedEntityPos.reduce((acc: EntitySpec[], entity: EntitySpec) => {
    if (acc.length === 0 || entity.postion.start >= acc[acc.length - 1].postion.end) {
      return [...acc, entity];
    }
    return acc;
  }, []);
  return nonOverlappingEntities;
};

export const getProductionVisSpec = (text: string, entityPos: EntitySpec[], displayPos: DisplayPosition = 'none') => {
  const nonOverlappingEntities = getNonOverlappingEntities(entityPos);

  const contentArray: DisplaySpec[] = [];
  let lastEnd = 0;
  nonOverlappingEntities.forEach((entity) => {
    if (entity.postion.start > lastEnd) {
      contentArray.push({
        displayType: 'text',
        content: text.slice(lastEnd, entity.postion.start),
      });
    }
    if (displayPos === 'left') {
      contentArray.push({
        displayType: 'word-scale-vis',
        content: ' ',
      });
    }
    contentArray.push({
      displayType: 'entity',
      content: text.slice(entity.postion.start, entity.postion.end),
      entity: entity.entity,
    });
    if (displayPos === 'right') {
      contentArray.push({
        displayType: 'word-scale-vis',
        content: ' ',
      });
    }
    lastEnd = entity.postion.end;
  });

  if (lastEnd < text.length) {
    // check if the trimmed last character is a punctuaation
    const lastChar = text.slice(text.length - 1);
    const isPunctuation = /[.,;!?]/.test(lastChar);
    const endPos = isPunctuation ? text.length - 1 : text.length;
    contentArray.push({
      displayType: 'text',
      content: text.slice(lastEnd, endPos),
    });
    if (displayPos === 'none') {
      contentArray.push({
        displayType: 'word-scale-vis',
        content: ' ',
      });
    }
    contentArray.push({
      displayType: 'text',
      content: text.slice(endPos) + ' ',
    });
  }
  return contentArray;
};
