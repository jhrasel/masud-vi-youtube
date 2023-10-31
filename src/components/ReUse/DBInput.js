import { TextField } from "@mui/material";
import React from "react";

const DBInput = ({ type, label, className }) => {
  return (
    <div className="custom__input">
      {/* <input type={type} name={name} value={value} placeholder={placeholder} /> */}
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        className={className}
        type={type}
      />
    </div>
  );
};

export default DBInput;
