import React from 'react';
import PropTypes from 'prop-types';
import './styles/objects/Checkbox.css';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        className="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label className="checkbox-label">{label}</label>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
