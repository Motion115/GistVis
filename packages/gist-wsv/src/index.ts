export { GistViewer } from './App';
export * from './components/visualizer/renderer/rendererList';
export * from './components/visualizer/wordScaleVis/chartList';
export type { GistViewerProps } from './App';

// Export Line Chart component
export { default as LineChart } from './components/visualizer/wordScaleVis/lineChart';

// Export Article Process component
export { ArtcleProcess } from './components/visualizer/renderer/renderer';

// Export Line Chart component
export { default as LineChart } from './components/visualizer/wordScaleVis/lineChart';

// Export Article Process component
export { ArtcleProcess } from './components/visualizer/renderer/renderer';

// Export simplified interface components
export {
  SimpleLine,
  SimpleBar,
  SimpleStackedBar,
  SimpleMaxMin,
} from './components/visualizer/wordScaleVis/interface';

// Export types for simplified interface
export type {
  SimpleLineChartProps,
  SimpleBarChartProps,
  SimpleStackedBarChartProps,
  SimpleMaxMinProps,
  DataPoint,
  TrendType,
  BarType,
} from './components/visualizer/wordScaleVis/interface';

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
} from './components/visualizer/types';