import React from 'react';

const TextArea = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="textarea-container">
      <label>{label}</label>
      <textarea placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default TextArea;
