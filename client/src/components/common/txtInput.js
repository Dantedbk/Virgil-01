import React from 'react';
import './styles/objects/_Input.css';

const Input = ({ label, type, placeholder, value, onChange, disabled }) => {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        className="input-field"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
