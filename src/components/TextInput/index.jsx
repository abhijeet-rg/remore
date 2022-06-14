import { TextField } from "@mui/material";
import { TextInputWrapper } from "./TextInput.style";

function TextInput({ name, value, label, config, handleChange }) {
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
        {...config}
        onChange={handleChange}
      />
    </TextInputWrapper>
  );
}

export default TextInput;
