import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { useToggle } from 'global/hooks';
import styles from './PasswordInput.module.scss';

interface PasswordInputProps {
  label?: string;
  name: string;
  placeholder?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, name, placeholder }) => {
  const [open] = useToggle(false);
  const [field, meta] = useField({
    name,
  });

  const error = meta?.touched && typeof meta?.error === 'string';

  return (
    <div className={styles.content}>
      {label && (
        <label className={`${styles.label} ${error ? styles.error : ''}`} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className={`${styles.input} ${error ? styles.hasError : ''} form-control`}
        id={name}
        name={name}
        placeholder={placeholder}
        type={open ? 'text' : 'password'}
        {...field}
      />
    </div>
  );
};

PasswordInput.defaultProps = {
  label: null,
  placeholder: null,
};

PasswordInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default PasswordInput;
