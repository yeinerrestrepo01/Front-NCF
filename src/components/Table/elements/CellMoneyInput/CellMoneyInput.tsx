import React, { ChangeEvent, useState } from 'react';
import PropTypes from 'prop-types';
import { InputProps } from '../../../../global/types/Inputs.interface';
import styles from './CellMoneyInput.module.scss';

type CellMoneyInputProps = InputProps;

const CellMoneyInput: React.FC<CellMoneyInputProps> = ({ column, data, onChange }) => {
  const [valInput, setValInput] = useState(data[column.field]);

  const hanleChangue = (event: ChangeEvent<HTMLInputElement>) => {
    const reg = /^(\d)*(\.\d{1,2})?$/;
    if (reg.test(event.target.value)) {
      setValInput(event.target.value);
      if (onChange)
        onChange({
          dataItem: data,
          value: Number(event.target.value),
          field: column.field,
        });
    }
  };

  return (
    <>
      <input
        className={styles['cell-inputMoney']}
        type="number"
        name={column.field}
        onChange={hanleChangue}
        value={valInput}
      />
    </>
  );
};

CellMoneyInput.defaultProps = {
  onChange: null,
};

CellMoneyInput.propTypes = {
  column: PropTypes.any.isRequired,
  data: PropTypes.any.isRequired,
  onChange: PropTypes.func,
};

export default CellMoneyInput;
