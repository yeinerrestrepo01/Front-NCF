import { ColumnsProps } from '../../components/Table/types/Colmuns.interface';
import { TableItemChangeEvent } from '../../components/Table/types/Event.interface';

export type InputProps = {
  column: ColumnsProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  onChange?: (e: TableItemChangeEvent) => void;
};
