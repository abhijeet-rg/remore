import React from "react";
import Alogo from "@unix-interiors/assets/A-logo.jpg";
import { PoweredByWrapper } from "./PoweredBy.style";

function PoweredBy() {
  return (
    <PoweredByWrapper>
      <img src={Alogo} alt="A-logo" />
      <h6>
        Powered by <span>Abhijeet RG</span>
      </h6>
    </PoweredByWrapper>
  );
}

export default PoweredBy;
