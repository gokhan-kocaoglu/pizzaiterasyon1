import React from "react";

const DoughSelector = ({ label, value, onChange, options }) => (
  <div className="option-group">
    <label>
      {label}
      <span className="required"> *</span>
    </label>
    <select onChange={onChange} value={value}>
      <option value="" disabled>
        {label}
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default DoughSelector;
