export * from './renderer/rendererList';
export * from './components/wordScaleVis/chartList';

// Export Article Process component
export { GistvisVisualizer } from './renderer/renderer';

// Export simplified interface components
export { SimpleLine, SimpleBar, SimpleStackedBar, SimpleMaxMin } from './components/wordScaleVis/interface';

// Export types for simplified interface
export type {
  SimpleLineChartProps,
  SimpleBarChartProps,
  SimpleStackedBarChartProps,
  SimpleMaxMinProps,
  DataPoint,
  TrendType,
  BarType,
} from './components/wordScaleVis/interface';

// Export types from visualizer
export type {
  VisInsightType,
  InsightType,
  ExtremeAttribute,
  TrendAttribute,
  Attribute,
  GistvisSpec,
  LineChartProps,
  UnitSegmentSpec,
  paragraphSpec,
  DataSpec,
} from './components/types';