import { TextField } from "@mui/material";
import React from "react";
import { TextInputWrapper } from "./TextInput.style";

function TextInput({ name, value, label, config, handleChange, showError }) {
  return (
    <TextInputWrapper>
      <TextField
        label={label}
        name={name}
        value={value}
        size="small"
        fullWidth
        color="primary"
        variant="filled"
        error={showError}
        onChange={handleChange}
        {...config}
      />
    </TextInputWrapper>
  );
}

export default TextInput;
