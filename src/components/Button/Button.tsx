import React from 'react';
import PropTypes from 'prop-types';

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  title: string;
  type?: 'button' | 'submit' | 'reset';
  typeView?: 'primary' | 'warning' | '';
}

const Button: React.FC<ButtonProps> = ({ className, onClick, title, type, typeView }) => {
  return (
    <button
      className={`btn btn-${typeView} ${className}`}
      onClick={onClick}
      type={type}
      title={title}
    >
      {title}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  onClick: null,
  type: 'button',
  typeView: '',
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  type: PropTypes.any,
  typeView: PropTypes.any,
};

export default Button;
