import React from "react";

const NoteInput = ({ label, value, onChange, placeholder }) => (
  <div className="option-group">
    <label>{label}</label>
    <textarea value={value} onChange={onChange} placeholder={placeholder} />
  </div>
);

export default NoteInput;
