import { useState } from 'react';
import { RowOrder } from '../../components/Table/types/Sortable.interface';

function useOrderBy<T>(): [(d: T[], o: RowOrder) => T[], T[]] {
  const [list, setList] = useState<T[]>([]);

  const hanleOrderBy = (items: T[], order: RowOrder): T[] => {
    if (order.dir === 'desc') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const listData = items.sort(function (a: any, b: any) {
        if (a[order.field] > b[order.field]) {
          return 1;
        }
        if (a[order.field] < b[order.field]) {
          return -1;
        }
        return 0;
      });
      setList(listData);
      return listData;
    } else if (order.dir === 'asc') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const listData = items.sort(function (a: any, b: any) {
        if (a[order.field] < b[order.field]) {
          return 1;
        }
        if (a[order.field] > b[order.field]) {
          return -1;
        }
        return 0;
      });
      setList(listData);
      return listData;
    }
    setList(items);
    return items;
  };

  return [hanleOrderBy, list];
}

export default useOrderBy;
