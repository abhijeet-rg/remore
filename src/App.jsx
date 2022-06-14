import React, { useEffect, useState } from "react";
import Logo from "@unix-interiors/assets/logo_with_name.png";

import FeedBackForm from "./FeedBackForm";
import { FeedBackHeading, FeedbackWrapper } from "./App.style";
import ThankYou from "./components/ThankYou";
import PoweredBy from "./components/PoweredBy";

function App() {
  const [endStatus, setEndStatus] = useState(false);
  useEffect(() => {
    document.title = "Unix Interiors | FeedBack";
  }, []);
  return (
    <FeedbackWrapper endStatus={endStatus}>
      <div>
        <section>
          <figure>
            <img src={Logo} alt="Logo" />
          </figure>
          {!endStatus && (
            <FeedBackHeading endStatus={endStatus}>
              <h2>We value your FeedBack</h2>
              <p>
                Please complete the following form and help us to improve our
                customer experience
              </p>
            </FeedBackHeading>
          )}
        </section>
        {!endStatus && <FeedBackForm setEndStatus={setEndStatus} />}
        {endStatus && (
          <>
            <ThankYou />
            <FeedBackHeading endStatus={endStatus}>
              <h2>FeedBack is Submitted Successfully</h2>
              <p>
                We're happy to assit you. What you shared with us will help us
                to improve our services.
              </p>
            </FeedBackHeading>
            <PoweredBy />
          </>
        )}
      </div>
    </FeedbackWrapper>
  );
}

export default App;
