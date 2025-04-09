import React from "react";

const IngredientsSelector = ({
  label,
  items,
  selectedItems,
  onChange,
  max,
}) => (
  <div className="option-group">
    <label>{label}</label>
    <p className="ingredients-info">
      En fazla {max} malzeme seçebilirsiniz. 5₺
    </p>
    <div className="checkbox-group">
      {items.map((item) => (
        <label key={item} className="checkbox-item">
          <input
            type="checkbox"
            value={item}
            onChange={() => onChange(item)}
            checked={selectedItems.includes(item)}
            disabled={
              !selectedItems.includes(item) && selectedItems.length >= max
            }
          />
          {item}
        </label>
      ))}
    </div>
  </div>
);

export default IngredientsSelector;
