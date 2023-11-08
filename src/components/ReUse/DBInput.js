import { TextField } from "@mui/material";
import React from "react";

export const DBInput = ({ label, className, type }) => {
  return (
    <div className="custom__input">
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

export const DBInputError = ({ label, className, type }) => {
  return (
    <div className="custom__input red">
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

export const DBInputFocus = ({ label, className, type }) => {
  return (
    <div className="custom__input focus">
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


export const DBInputValid = ({ label, className, type }) => {
  return (
    <div className="custom__input valid">
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