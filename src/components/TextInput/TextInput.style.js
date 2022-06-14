import styled from "styled-components";

export const TextInputWrapper = styled.div`
  margin: 20px 0;

  .MuiFormLabel-root {
    font-size: 15px;
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
  }

  .MuiFilledInput-root {
    background-color: #3e272309;
    color: #455a64;
    font-size: 14px;

    &:hover {
      background-color: #3e272315;
    }

    &.Mui-focused {
      background-color: #3e27230f;
    }
  }
`;
