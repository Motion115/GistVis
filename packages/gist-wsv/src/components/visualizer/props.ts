import { DataSpec } from './types';

export interface HorizontalStackedBarProps {
  dataSpec: DataSpec[];
  colorScale: d3.ScaleOrdinal<string, string, never>;
  selectedEntity: string;
  setSelectedEntity: (entity: string) => void;
}
