import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import styles from './TextInput.module.scss';

type InputType = 'email' | 'text';

interface TextInputProps {
  label?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type?: InputType;
}

const TextInput: React.FC<TextInputProps> = ({ label, name, placeholder, required, type }) => {
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
        type={type || 'text'}
        placeholder={placeholder}
        name={name}
        autoComplete={'off'}
        {...field}
      />
    </div>
  );
};

TextInput.defaultProps = {
  label: null,
  placeholder: null,
  type: null,
};

TextInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.any,
};

export default TextInput;
