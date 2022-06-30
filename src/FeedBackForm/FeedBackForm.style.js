import styled from "styled-components";
import { createTheme } from "@mui/material";
import { brown } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: brown[800],
    },
  },
});

export const ToogleButtonContainer = styled.div`
  margin: 20px 0 2px;
  position: relative;

  h3 {
    font-family: "Open Sans", sans-serif;
    color: #37474f;
    font-size: 15px;
    font-weight: 500;
  }

  .MuiToggleButtonGroup-root {
    margin-top: 10px;

    .MuiToggleButton-root {
      font-family: "Open Sans", sans-serif;
      font-size: 13px;
      font-weight: 600;

      &.Mui-selected {
        background-color: rgba(78, 52, 46, 0.15);
      }
    }
  }
`;

export const OverallError = styled.span`
  color: #d32f2f;
  font-size: 12px;
  transform: translate(-50%, -50%);
  font-weight: 500;
  letter-spacing: 0.5px;
  opacity: ${(props) => (props.showError ? 1 : 0)};
`;

export const FormActionContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
