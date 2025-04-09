import React from "react";

const SubmitButton = ({ disabled }) => {
  return (
    <button type="submit" className="order-sbutton" disabled={disabled}>
      SİPARİŞ VER
    </button>
  );
};

export default SubmitButton;
