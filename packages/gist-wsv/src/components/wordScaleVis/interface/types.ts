export type TrendType = 'actual' | 'nominal' | 'trending' | 'start-end';
export type TrendAttribute = 'positive' | 'negative' | 'invariable';
export type BarType = 'comparison' | 'rank';

export interface DataPoint {
  x: number;
  y: number;
  label?: string;
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