import React, { ChangeEvent, useState } from 'react';
import PropTypes from 'prop-types';
import { InputProps } from '../../../../global/types/Inputs.interface';
import styles from './CellDateInput.module.scss';

type CellDateInputProps = InputProps;

const CellDateInput: React.FC<CellDateInputProps> = ({ column, data, onChange }) => {
  const [valInput, setValInput] = useState<number>(data[column.field]);

  const getDateTime = (date: string) => {
    const year = date.split('-')[0];
    const month = date.split('-')[1];
    const day = date.split('-')[2];

    return new Date(Number(year), Number(month) - 1, Number(day)).getTime();
  };

  const hanleChangue = (event: ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value;
    if (newDate === '') {
      setValInput(null);
    } else {
      setValInput(getDateTime(newDate));
    }

    if (onChange)
      onChange({
        dataItem: data,
        value: newDate === '' ? null : getDateTime(newDate),
        field: column.field,
      });
  };

  const handleDate = (v: number) => {
    const dateInput = new Date(v);
    const day = dateInput.getDate();
    const month = dateInput.getMonth() + 1;
    const year = dateInput.getFullYear();

    return `${year}-${month > 10 ? month : '0' + month}-${day > 10 ? day : '0' + day}`;
  };

  return (
    <>
      <input
        className={styles['cell-inputDate']}
        onChange={hanleChangue}
        placeholder="dd-mm-yyyy"
        type={'date'}
        value={handleDate(valInput)}
      />
    </>
  );
};

CellDateInput.defaultProps = {
  onChange: null,
};

CellDateInput.propTypes = {
  column: PropTypes.any.isRequired,
  data: PropTypes.any.isRequired,
  onChange: PropTypes.func,
};

export default CellDateInput;
