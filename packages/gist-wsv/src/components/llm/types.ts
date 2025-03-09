import { DataSpec, InsightType } from '../visualizer/types';

export type GistFactTypeAnnotation = {
  id?: string;
  text?: string;
  type: InsightType; // should be one of the fact types
};

export interface ExtractorType {
  dataSpec?: DataSpec[];
  pos?: string[];
  attribute?: string;
}

export type GistFactKnowledgeBase = {
  definition: string;
  examples: string[];
  negativeExamples: string[];
};
