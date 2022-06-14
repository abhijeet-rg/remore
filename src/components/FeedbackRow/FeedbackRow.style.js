import styled from "styled-components";

export const FeedbackRowWrapper = styled.div`
  margin: 20px 0;
  h3 {
    color: #37474f;
    font-family: "Open Sans", sans-serif;
    font-size: 15px;
    font-weight: 500;
  }
`;

export const RatingWrapper = styled.div`
  padding-bottom: 15px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StarContainer = styled.div`
  width: calc(100% / 5);
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  svg {
    transition: 0.2s ease-in-out;
  }

  h6 {
    width: 100%;
    position: absolute;
    bottom: -14px;
    color: #78909c;
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
    font-size: 11px;
  }
`;
