import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

import logo from "../../assets/images/logo/logo-NJW.webp";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/" },
  { Social: <FaTwitter />, link: "https://twitter.com/" },
];

const FooterTwo = () => {
  return (
    <div className="footer-style-2">

      <div
        className=" ptb--30 bg_image bg_image--35"
        data-black-overlay="6"
      >
        <div className="wrapper plr--50 plr_sm--20">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="inner">
                <div className="logo text-center text-sm-left mb_sm--20">
                  <a href="/home-one">
                    <img src={logo} alt="Logo images" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="inner text-center">
                <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                  {SocialShare.map((val, i) => (
                    <li key={i}>
                      <a href={`${val.link}`}>{val.Social}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="bg_color--4">
        <div className="text-center ptb--10 mt_md--20 mt_sm--20">
          <div className="text">
            <p>Copyright © 2024 Not Just Website. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterTwo;
