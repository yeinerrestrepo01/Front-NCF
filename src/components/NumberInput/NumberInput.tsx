import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import styles from './NumberInput.module.scss';

interface NumberInputProps {
  label?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}

const NumberInput: React.FC<NumberInputProps> = ({ name, label, placeholder, required }) => {
  const [field, meta] = useField({
    name,
  });

  const error = meta?.touched && typeof meta?.error === 'string';

  return (
    <div className={styles.content}>
      {label && (
        <label
          htmlFor={name}
          className={` ${styles.label} ${error ? styles.error : ''}`}
        >{`${label} ${required ? ' *' : ''}`}</label>
      )}
      <input
        className={` ${error ? styles.hasError : ''} form-control`}
        type="number"
        placeholder={placeholder}
        name={name}
        {...field}
      />
    </div>
  );
};

NumberInput.defaultProps = {
  label: null,
  placeholder: null,
};

NumberInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default NumberInput;
