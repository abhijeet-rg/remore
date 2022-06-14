import emoji from "@unix-interiors/assets/happy-emoji.png";
import { ThankYouWrapper } from "./ThankYou.style";

function ThankYou() {
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
