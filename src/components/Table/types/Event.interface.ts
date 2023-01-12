import * as React from 'react';
import { BaseEvent } from '../../../global/types/events/BaseEvent';
import { Page } from './Pager.interface';
import { TableProps } from './Table.interface';

export type TableEvent = BaseEvent<React.Component<TableProps>>;

/**
 * Represents the object of the `onItemRowChangue` Grid event.
 */
export interface TableItemChangeEvent {
  /**
   * The data object that represents the current row.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataItem: any;
  /**
   * The field to which the cell is bound.
   */
  field?: string;
  /**
   * The value of the item.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
}

export type TablePageChangeEvent = {
  page: Page;
};
