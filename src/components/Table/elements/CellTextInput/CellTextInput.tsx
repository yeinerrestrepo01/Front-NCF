import React, { ChangeEvent, useState } from 'react';
import PropTypes from 'prop-types';
import { ColumnsProps, TableItemChangeEvent } from 'components/Table/constants/Table.interface';
import styles from './CellTextInput.module.scss';

interface CellTextInputProps {
  column: ColumnsProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  onChange?: (e: TableItemChangeEvent) => void;
}

const CellTextInput: React.FC<CellTextInputProps> = ({ column, data, onChange }) => {
  const [valInput, setValInput] = useState(data[column.field]);

  const hanleChangue = (event: ChangeEvent<HTMLInputElement>) => {
    setValInput(event.target.value);
    if (onChange)
      onChange({
        dataItem: data,
        value: event.target.value,
        field: column.field,
      });
  };

  return (
    <>
      <input
        className={styles.input}
        type="text"
        name={column.field}
        onChange={hanleChangue}
        value={valInput}
      />
    </>
  );
};

CellTextInput.defaultProps = {
  onChange: null,
};

CellTextInput.propTypes = {
  column: PropTypes.any.isRequired,
  data: PropTypes.any.isRequired,
  onChange: PropTypes.func,
};

export default CellTextInput;
