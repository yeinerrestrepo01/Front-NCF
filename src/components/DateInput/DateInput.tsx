import { useField } from 'formik';
import React, { ChangeEvent, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './DateInput.module.scss';

interface DateInputProps {
  label?: string;
  name: string;
  required?: boolean;
}

const DateInput: React.FC<DateInputProps> = ({ name, label, required }) => {
  const [value, setValue] = useState<string>('');
  const [field, meta, helpers] = useField({
    name,
  });

  const error = meta?.touched && typeof meta?.error === 'string';

  const handleDate = (event: ChangeEvent<HTMLInputElement>) => {
    const dateSelect = event.target?.value;
    if (dateSelect === '') {
      helpers.setValue(undefined);
    } else {
      const dateSplit = dateSelect.split('-');
      const newDate = new Date(
        Number(dateSplit[0]),
        Number(dateSplit[1]) - 1,
        Number(dateSplit[2])
      );

      setValue(dateSelect);
      helpers.setValue(newDate);
      helpers.setTouched(true);
    }
  };

  useEffect(() => {
    if (field?.value && value === '') {
      const dateMod = new Date(field?.value);
      setValue(
        `${dateMod.getFullYear()}-${dateMod.getMonth() + 1 < 10 ? '0' : ''}${
          dateMod.getMonth() + 1
        }-${dateMod.getDate() < 10 ? '0' : ''}${dateMod.getDate()}`
      );
    }
  }, [field?.value, value]);

  useEffect(() => {
    if (!meta.touched && (!field?.value || field?.value === undefined) && value !== '') {
      setValue('');
    }
  }, [field?.value, meta.touched, value]);

  return (
    <div className={styles.content}>
      {label && (
        <label
          htmlFor={name}
          className={` ${styles.label} ${error ? styles.error : ''}`}
        >{`${label} ${required ? ' *' : ''}`}</label>
      )}
      <input
        className={`${error ? styles.hasError : ''} form-control`}
        id={name}
        name={name}
        onChange={handleDate}
        type="date"
        value={value}
      />
    </div>
  );
};

DateInput.defaultProps = {
  label: null,
};

DateInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default DateInput;
