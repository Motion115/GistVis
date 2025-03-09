declare module 'gist-wsv' {
  import { ScaleOrdinal } from 'd3';
  import { FC } from 'react';

  export type VisInsightType = 'comparison' | 'trend' | 'rank' | 'proportion' | 'extreme' | 'value';
  export type InsightType = VisInsightType | 'noType';
  export type ExtremeAttribute = 'maximum' | 'minimum';
  export type TrendAttribute = 'positive' | 'negative' | 'invariable';
  export type BarType = 'comparison' | 'rank';
  export type Attribute = ExtremeAttribute | TrendAttribute;

  export type DataSpec = {
    categoryKey: string;
    categoryValue: string;
    valueKey: string;
    valueValue: number;
  };

  export type UnitSegmentSpec = {
    insightType: InsightType;
    segmentIdx: number;
    context: string;
    attribute?: Attribute;
    inSituPosition?: string[];
  };

  export interface GistvisSpec {
    id: string;
    unitSegmentSpec: UnitSegmentSpec;
    dataSpec?: DataSpec[];
  }

  export interface DataPoint {
    x: number;
    y: number;
    label?: string;
  }

  export type TrendType = 'actual' | 'nominal' | 'trending' | 'start-end';

  export interface LineChartProps {
    gistvisSpec: GistvisSpec;
    visualizeData: DataPoint[];
    type: TrendType;
    colorScale: ScaleOrdinal<string, string>;
    selectedEntity: string;
    setSelectedEntity: (entity: string) => void;
  }

  export interface SimpleLineChartProps {
    data: DataPoint[];
    type?: TrendType;
    attribute?: TrendAttribute;
    color?: string;
    width?: number;
    height?: number;
  }

  export interface SimpleBarChartProps {
    data: DataPoint[];
    type?: BarType;
    color?: string;
    colors?: string[];
    width?: number;
    height?: number;
  }

  export interface SimpleStackedBarChartProps {
    data: {
      category: string;
      values: number[];
    }[];
    colors?: string[];
    width?: number;
    height?: number;
  }

  export interface SimpleMaxMinProps {
    min: number;
    max: number;
    current: number;
    color?: string;
    width?: number;
    height?: number;
  }

  export const LineChart: FC<LineChartProps>;
  export const SimpleLine: FC<SimpleLineChartProps>;
  export const SimpleBar: FC<SimpleBarChartProps>;
  export const SimpleStackedBar: FC<SimpleStackedBarChartProps>;
  export const SimpleMaxMin: FC<SimpleMaxMinProps>;
}