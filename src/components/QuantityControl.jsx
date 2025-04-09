import React from "react";

const QuantityControl = ({ quantity, setQuantity }) => {
  return (
    <div className="quantity">
      <button
        type="button"
        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
      >
        -
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={() => setQuantity((q) => q + 1)}>
        +
      </button>
    </div>
  );
};

export default QuantityControl;
