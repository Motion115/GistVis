export { GistViewer } from './App';
export * from './renderer/rendererList';
export * from './components/wordScaleVis/chartList';
export type { GistViewerProps } from './App';

// Export Line Chart component
export { default as LineChart } from './components/wordScaleVis/lineChart';

// Export Article Process component
export { ArtcleProcess } from './renderer/renderer';

// Export simplified interface components
export {
  SimpleLine,
  SimpleBar,
  SimpleStackedBar,
  SimpleMaxMin,
} from './components/wordScaleVis/interface';

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
  VIS_INSIGHT_TYPES,
} from './components/types';