import { ComponentType } from 'react';
import { TypesInputs } from '../../../global/types/Types.interface';

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
   * Defines the editor type. Used when the column enters the edit mode.
   */
  typeInput?: TypesInputs;
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
 * Represents the object of the `onRowClick` Table event.
 */
export interface TableRowClickEvent {
  /**
   * The item from the `data` property of the Table which corresponds to the row that is clicked.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataItem: any;
}
