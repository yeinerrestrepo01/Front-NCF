import React, { ChangeEvent, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import styles from './CheckInput.module.scss';

interface CheckInputProps {
  label?: string;
  name: string;
  required?: boolean;
}

const CheckInput: React.FC<CheckInputProps> = ({ name, label, required }) => {
  const [check, setCheck] = useState(true);
  const [field, meta, helpers] = useField({
    name,
  });

  const error = meta?.touched && typeof meta?.error === 'string';

  useEffect(() => {
    if (field?.value === 0) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  }, [field?.value]);

  const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setCheck(event.target?.checked);
    if (event.target?.checked) {
      helpers.setValue(1);
    } else {
      helpers.setValue(0);
    }
  };

  return (
    <div className={styles.content}>
      {label && (
        <label
          htmlFor={name}
          className={` ${styles.label} ${error ? styles.error : ''}`}
        >{`${label} ${required ? ' *' : ''}`}</label>
      )}
      <input
        className={`${styles.input} form-check-input`}
        type="checkbox"
        id={name}
        checked={check}
        onChange={handleCheck}
      ></input>
    </div>
  );
};

CheckInput.defaultProps = {
  label: null,
};

CheckInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default CheckInput;
