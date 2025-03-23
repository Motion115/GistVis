export interface SpaceBreakdown {
  space: string;
  breakdowns: string[];
}

export interface FeatureValue {
  feature: string;
  values: {
    entity: string;
    value: any;
  }[];
}

export interface DataSpec {
  // TODO: Define data spec interface based on requirements
  space: string;
  feature: string;
  entities: string[];
  values: any[];
}