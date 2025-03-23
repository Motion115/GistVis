export interface SpaceBreakdown {
  space: string;
  breakdowns: string[];
}

export interface FeatureValue {
  space: string;
  feature: string;
  values: {
    entity: string;
    value: number;
  }[];
}