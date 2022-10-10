import { ComponentType } from 'react';

/**
 * The result of thet method applied to a data structure
 */
export type DataResult = {
  /**
   * The data that will be rendered by the Grid as an array.
   */
  data: unknown[];
  /**
   * The total number of records that are available.
   */
  total: number;
};

/**
 * The props of the Colum table component.
 */
export interface ColumnsProps {
  /**
   * Defines the component that will be rendered as a cell. If not set, a `GridCell` will be rendered by default.
   */
  cell?: ComponentType<GridCellProps>;
  /**
   * Sets the custom CSS classes to the column cells.
   */
  className?: string;
  /**
   * The field to which the column is bound.
   */
  field?: string;
  /**
   * Sets the custom CSS classes to the column header cell.
   */
  headerClassName?: string;
  /**
   * The column identifier used to distinguish columns for example in multi column header scenarios with resize and keyboard navigation.
   * Also used for unique key for rendering the component cells.
   * If not set, the component will generate unique `id` automatically.
   */
  id?: string;
  /**
   * @hidden
   */
  locked?: boolean;
  /**
   * Determinates the position of the column.
   * Columns with smaller `orderIndex` will appear before columns with bigger `orderIndex`.
   * Defaults to `0`.
   */
  orderIndex?: number;
  /**
   * Indicates whether the column is resizable, default to true.
   */
  resizable?: boolean;
  /**
   * The title of the column.
   */
  title?: string;
  /**
   * The width of the column (in pixels).
   */
  width?: string | number;
}

export interface GridCellProps extends ColumnsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataItem?: any;
}

/**
 * The sort descriptor used by the `orderBy` method.
 */
export interface SortDescriptor {
  /**
   * The field that is sorted.
   */
  field: string;
  /**
   * The sort direction. If no direction is set, the descriptor will be skipped during processing.
   *
   * The available values are:
   * - `asc`
   * - `desc`
   */
  dir?: 'asc' | 'desc';
}

/**
 * A complex filter expression. For more information, refer to the [filterBy]({% slug api_kendo-data-query_filterby %}) method.
 */

/**
 * The state of the data operations applied to the Grid component.
 */
export interface State {
  /**
   * The number of records to be skipped by the pager.
   */
  skip?: number;
  /**
   * The number of records to take.
   */
  take?: number;
  /**
   * The descriptors used for sorting.
   */
  sort?: Array<SortDescriptor>;
}
