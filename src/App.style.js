import styled from "styled-components";

export const FeedbackWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: ${(props) => (props.endStatus ? "100vh" : "100%")};
  padding: 25px 0;
  display: flex;
  background-color: #ffffff;
  background-image: linear-gradient(315deg, #ffffff 0%, #bcaaa4 74%);

  & > div {
    box-sizing: border-box;
    width: 90%;
    height: fit-content;
    max-width: 500px;
    padding: 15px 20px;
    border-radius: 10px;
    margin: 0 auto;
    box-shadow: 0 0 10px 1px #5d4037;
    background-color: #fff;
    text-align: center;

    figure {
      width: 100%;
      margin-bottom: ${(props) => (props.endStatus ? "15px" : "0")};

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
