import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { FormControOptionslSelect } from 'global/types';
import styles from './SelectInput.module.scss';

interface SelectInputProps {
  disabled?: boolean;
  label?: string;
  name: string;
  options?: FormControOptionslSelect[];
  required?: boolean;
}

const SelectInput: React.FC<SelectInputProps> = ({ disabled, label, name, options, required }) => {
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
      <select
        disabled={disabled}
        className={`${styles.control} ${error ? styles.hasError : ''} form-select`}
        id={name}
        name={name}
        {...field}
      >
        <option value="">-- Seleccione --</option>
        {options?.map((item) => (
          <option value={item.id} key={item.id.toString()}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

SelectInput.defaultProps = {
  disabled: false,
  label: null,
  options: [],
  required: false,
};

SelectInput.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.array,
  required: PropTypes.bool,
};

export default SelectInput;
