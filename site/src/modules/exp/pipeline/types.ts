import { VisInsightType } from 'gist-wsv';

export interface SpaceBreakdown {
  space: string;
  breakdowns: string[];
}

export interface ReasoningStructure {
  reasoning: string;
  type: VisInsightType;
  entity: SpaceBreakdown;
  feature: string;
  datafactRestatement: string;
}

export interface FeatureValue {
  space: string;
  feature: string;
  values: {
    entity: string;
    value: number;
  }[];
}