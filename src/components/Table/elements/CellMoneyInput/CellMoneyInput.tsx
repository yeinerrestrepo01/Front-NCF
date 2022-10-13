import { ColumnsProps, TableItemChangeEvent } from 'components/Table/constants/Table.interface';
import React, { ChangeEvent, useState } from 'react';
import styles from './CellMoneyInput.module.scss';

interface CellMoneyInputProps {
  column: ColumnsProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  onChange?: (e: TableItemChangeEvent) => void;
}

const CellMoneyInput: React.FC<CellMoneyInputProps> = ({ column, data, onChange }) => {
  const [valInput, setValInput] = useState(data[column.field]);

  const hanleChangue = (event: ChangeEvent<HTMLInputElement>) => {
    const reg = /^(\d)*(\.\d{1,2})?$/;
    if (reg.test(event.target.value)) {
      setValInput(event.target.value);
      if (onChange)
        onChange({
          dataItem: data,
          value: event.target.value,
          field: column.field,
        });
    }
  };

  return (
    <>
      <input
        className={styles.input}
        type="number"
        name={column.field}
        onChange={hanleChangue}
        value={valInput}
      />
    </>
  );
};

export default CellMoneyInput;
