import React from "react";

const DBInput = ({ type, name, value, placeholder }) => {
  return (
    <div className="custom__input">
      <input type={type} name={name} value={value} placeholder={placeholder} />
    </div>
  );
};

export default DBInput;
