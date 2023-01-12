import React, { ChangeEvent, useState } from 'react';
import PropTypes from 'prop-types';
import { InputProps } from '../../../../global/types/Inputs.interface';
import styles from './CellNumberInput.module.scss';

type CellNumberInputProps = InputProps;

const CellNumberInput: React.FC<CellNumberInputProps> = ({ column, data, onChange }) => {
  const [valInput, setValInput] = useState(data[column.field]);

  const hanleChangue = (event: ChangeEvent<HTMLInputElement>) => {
    setValInput(event.target.value);
    if (onChange)
      onChange({
        dataItem: data,
        value: Number(event.target.value),
        field: column.field,
      });
  };

  return (
    <>
      <input
        className={styles['cell-inputNumber']}
        type="number"
        name={column.field}
        onChange={hanleChangue}
        value={valInput}
      />
    </>
  );
};

CellNumberInput.defaultProps = {
  onChange: null,
};

CellNumberInput.propTypes = {
  column: PropTypes.any.isRequired,
  data: PropTypes.any.isRequired,
  onChange: PropTypes.func,
};

export default CellNumberInput;
