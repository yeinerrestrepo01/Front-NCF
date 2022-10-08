import { ComponentType } from 'react';

export type DataResult = {
  data: unknown[];
  total: number;
};

export interface ColumnsProps {
  cell?: ComponentType<GridCellProps>;
  field?: string;
  title?: string;
  width?: string | number;
  format?: string;
  headerClassName?: string;
  className?: string;
  resizable?: boolean;
  orderIndex?: number;
  id?: string;
  locked?: boolean;
}

export interface GridCellProps extends ColumnsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataItem?: any;
}
