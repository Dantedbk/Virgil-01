import React from "react";
import './styles/objects/_TextArea.css';

const Textarea = ({ label, name, rows, cols, ...rest }) => {
  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        className="form-control"
        id={name}
        name={name}
        rows={rows}
        cols={cols}
        {...rest}
      />
    </div>
  );
};

export default Textarea;
