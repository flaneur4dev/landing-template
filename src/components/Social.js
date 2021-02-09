import { memo } from "react";
import pic1 from '../images/social/fb.svg';
import pic2 from '../images/social/twt.svg';
import pic3 from '../images/social/glg.svg';
import pic4 from '../images/social/ball.svg';

function Social() {
  return (
    <ul className="social">
      <li>
        <a href="https://www.facebook.com" target="_blank">
          <img src={pic1} className="social__image" alt="Facebook" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/" target="_blank">
          <img src={pic2} className="social__image" alt="twitter" />
        </a>
      </li>
      <li>
        <a href="https://www.google.com" target="_blank">
          <img src={pic3} className="social__image" alt="google" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com" target="_blank">
          <img src={pic4} className="social__image" alt="ball" />
        </a>
      </li>
    </ul>
  )
}

export default memo(Social)
