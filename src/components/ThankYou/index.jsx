import React, { useEffect } from "react";
import { ThankYouWrapper } from "./ThankYou.style";

function ThankYou({ emoji }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ThankYouWrapper>
      <div className="thank-heading">
        <img src={emoji} alt="Logo" />
        <h5>Thank You</h5>
      </div>
    </ThankYouWrapper>
  );
}

export default ThankYou;
