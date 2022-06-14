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

export const FeedbackWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 25px 0;
  display: flex;
  background-color: #ffffff;
  background-image: linear-gradient(315deg, #ffffff 0%, #bcaaa4 74%);

  & > div {
    box-sizing: border-box;
    width: 90%;
    max-width: 500px;
    padding: 15px 20px;
    border-radius: 10px;
    margin: 0 auto;
    box-shadow: 0 0 10px 1px #5d4037;
    background-color: #fff;
    text-align: center;

    figure {
      width: 100%;

      img {
        width: 110px;
      }
    }
  }

  section {
    padding: 1px 0 5px;
    position: relative;

    &::after {
      content: " ";
      box-sizing: border-box;
      width: 50%;
      height: 2px;
      border-bottom: 2px solid #4e342e88;
      border-radius: 50%;
      position: absolute;
      bottom: 0;
      transform: translate(-50%, -50%);
    }
  }
`;

export const FeedBackHeading = styled.div`
  padding: 10px 20px;
  border-radius: 8px;
  margin: 15px 0 20px;
  background-color: #d7ccc877;
  box-shadow: 0 0 5px 1px #bcaaa499;

  h2 {
    color: #263238;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
  }
  P {
    width: 70%;
    margin: 5px auto;
    color: #455a64;
    font-family: "Noto Sans", sans-serif;
    font-size: 12px;
  }
`;

export const ToogleButtonContainer = styled.div`
  margin: 20px 0;

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

export const FormActionContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .powered-by {
    display: flex;
    align-items: center;
    img {
      width: 18px;
      border-radius: 50%;
      margin-right: 3px;
      opacity: 0.7;
    }
    h6 {
      color: #90a4ae;
      font-family: "Open Sans", sans-serif;
      font-weight: 500;
      font-size: 11px;

      span {
        font-weight: 600;
      }
    }
  }
`;
