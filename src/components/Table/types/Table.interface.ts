import { ColumnsProps, TableRowClickEvent } from './Colmuns.interface';
import { TableItemChangeEvent, TablePageChangeEvent } from './Event.interface';
import { RowOrder, TableSortChangeEvent } from './Sortable.interface';

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
  sort?: Array<RowOrder>;
}

/**
 * Proppeties Compoent Table
 */
export interface TableProps {
  /**
   * Components properties Table
   */
  children: React.ReactElement<ColumnsProps> | React.ReactElement<ColumnsProps>[];
  /**
   * Sets a class of the Table DOM element.
   */
  className?: string;
  /**
   * Sets the data of the Table ([see example]({% slug paging_Table %})). If you use paging, the `data` option has to contain only the items for the current page.
   */
  data?: unknown[] | DataResult | null;
  /**
   * Specifies the name of the field that indicates the state of the row to edit
   */
  editName?: string;
  /**
   * Show selected columns
   */
  isSelectRow?: boolean;
  /**
   * Shows the loading of the data in the table
   */
  loadingData?: boolean;
  /**
   * Event which returns the edited value of the field when performing the `onChange`
   */
  onItemRowChangue?: (event: TableItemChangeEvent) => void;
  /**
   * Fires when the page of the Table is changed, You have to handle the event yourself and page the data
   */
  onPageChange?: (event: TablePageChangeEvent) => void;
  /**
   * Fires when the user clicks a row.
   */
  onRowClick?: (event: TableRowClickEvent) => void;
  /**
   * It is activated when you want to change the order of the data in the table. This event is to perform the ordering of the data in the table yourself according to the column used.
   */
  onSortChange?: (event: TableSortChangeEvent) => void;
  /**
   * Thead class css
   */
  theadClassName?: string;
  /**
   * @hidden
   */
  style?: React.CSSProperties;
  /**
   * Defines the number of records that will be skipped by the pager
   */
  skip?: number;
  /**
   * The properties by which the data is sorted. Applies the sort styles and buttons to the affected column.
   */
  sort?: RowOrder;
  /**
   * Enable column sorting
   */
  sortable?: boolean;
  /**
   * Page number displayed in the table
   */
  take?: number;
  /**
   * Defines the total number of data items in all pages
   */
  total?: number;
}
