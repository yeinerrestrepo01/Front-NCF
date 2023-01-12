import React from 'react';
import { useCallback } from 'react';
import {
  CellCheckInput,
  CellDateInput,
  CellMoneyInput,
  CellNumberInput,
  CellTextInput,
} from '../../components/Table/elements';
import { ColumnsProps } from '../../components/Table/types/Colmuns.interface';
import { TableItemChangeEvent } from '../../components/Table/types/Event.interface';

function useCellInputs(): [
  (d: unknown, c: ColumnsProps, onItemRowChangue: (e: TableItemChangeEvent) => void) => JSX.Element,
  (d: unknown, r: ColumnsProps) => JSX.Element
] {
  const cellInput = useCallback(
    (
      dataField: unknown,
      col: ColumnsProps,
      onItemRowChangue: (e: TableItemChangeEvent) => void
    ) => {
      switch (col.typeInput) {
        case 'number':
          return <CellNumberInput column={col} data={dataField} onChange={onItemRowChangue} />;
        case 'money':
          return <CellMoneyInput column={col} data={dataField} onChange={onItemRowChangue} />;
        case 'text':
          return <CellTextInput column={col} data={dataField} onChange={onItemRowChangue} />;
        case 'date':
          return <CellDateInput column={col} data={dataField} onChange={onItemRowChangue} />;
        case 'check':
          return <CellCheckInput column={col} data={dataField} onChange={onItemRowChangue} />;
        default:
          return null;
      }
    },
    []
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getCellTable = useCallback((dataField: any, reg: ColumnsProps) => {
    return (
      <td className={reg.className} key={`td_${reg.field}`} role="gridcell">
        {!!reg.cell ? <reg.cell dataItem={dataField} field={reg.field} /> : dataField[reg.field]}
      </td>
    );
  }, []);

  return [cellInput, getCellTable];
}

export default useCellInputs;
