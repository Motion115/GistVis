import { DataSpec, InsightType } from 'gist-wsv';

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
