import React from "react";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";

import {
  ErrorMessage,
  FeedbackRowWrapper,
  RatingWrapper,
  StarContainer,
} from "./FeedbackRow.style";
import { map } from "lodash";

const ratingConfig = [
  {
    text: "Worst",
    size: "34px",
  },
  {
    text: "Bad",
    size: "32px",
  },
  {
    text: "Average",
    size: "30px",
  },
  {
    text: "Good",
    size: "32px",
  },
  {
    text: "Best",
    size: "34px",
  },
];

function FeedbackRow({ name, heading, data, setData, showError }) {
  function clickHandle(value) {
    setData((obj) => ({
      ...obj,
      [name]: value,
    }));
  }

  return (
    <FeedbackRowWrapper>
      <h3>{heading}</h3>
      <RatingWrapper name={name}>
        {map(ratingConfig, ({ text, size }, i) => {
          if (i + 1 === data[name])
            return (
              <StarContainer key={i} onClick={() => clickHandle(i + 1)}>
                <StarRoundedIcon
                  sx={{ fontSize: "38px", fill: "#faaf00" }}
                  focusable={true}
                />
                <h6>{text}</h6>
              </StarContainer>
            );
          if (i < data[name])
            return (
              <StarContainer key={i} onClick={() => clickHandle(i + 1)}>
                <StarRoundedIcon
                  sx={{
                    fontSize: size,
                    fill: "#faaf00",
                  }}
                  focusable={true}
                />
                <h6>{text}</h6>
              </StarContainer>
            );
          else
            return (
              <StarContainer key={i} onClick={() => clickHandle(i + 1)}>
                <StarBorderRoundedIcon
                  sx={{ fontSize: size, fill: "#455a64" }}
                  focusable={true}
                />
                <h6>{text}</h6>
              </StarContainer>
            );
        })}
      </RatingWrapper>
      {showError && <ErrorMessage>Please select the Star</ErrorMessage>}
    </FeedbackRowWrapper>
  );
}

export default FeedbackRow;
