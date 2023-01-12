import React, { ChangeEvent, useState } from 'react';
import PropTypes from 'prop-types';
import { InputProps } from 'global/types/Inputs.interface';
import styles from './CellCheckInput.module.scss';

const CellCheckInput: React.FC<InputProps> = ({ column, data, onChange }) => {
  const [valInput, setValInput] = useState<boolean>(data[column.field]);

  const hanleChangue = (event: ChangeEvent<HTMLInputElement>) => {
    setValInput(event.target.value === 'true' ? false : true);
    if (onChange)
      onChange({
        dataItem: data,
        value: event.target.value === 'true' ? false : true,
        field: column.field,
      });
  };

  return (
    <>
      <input
        className={styles['cell-inputCheck']}
        type="checkbox"
        name={column.field}
        onChange={hanleChangue}
        checked={valInput}
        value={`${valInput}`}
      />
    </>
  );
};

CellCheckInput.defaultProps = {
  onChange: null,
};

CellCheckInput.propTypes = {
  column: PropTypes.any.isRequired,
  data: PropTypes.any.isRequired,
  onChange: PropTypes.func,
};

export default CellCheckInput;
