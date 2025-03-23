import { DataSpec, InsightType } from 'gist-wsv';

export type GistFactTypeAnnotation = {
  id?: string;
  text?: string;
  type: InsightType;
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
