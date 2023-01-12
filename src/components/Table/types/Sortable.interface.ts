import { SortableDir } from '../../../global/types/Types.interface';
import { TableEvent } from './Event.interface';

export type RowOrder = {
  dir: SortableDir;
  field: string;
};

export interface TableSortChangeEvent extends TableEvent {
  sort: RowOrder;
}
