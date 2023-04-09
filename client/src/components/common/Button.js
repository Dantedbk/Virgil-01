import React from 'react';
import PropTypes from 'prop-types';
import './styles/_buttons.css';

const Button = ({ children, onClick, variant, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${variant}${disabled ? ' disabled' : ''}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'primary',
  disabled: false,
};

export default Button;
