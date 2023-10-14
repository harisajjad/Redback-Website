import React from "react";
import "./HomeStyles.css";

import Logo from "./img/Logo.png";
import LinkedinLogo from "./img/LinkedinLogo.png";
import InstagramLogo from "./img/instagramLogo.png";
import TwitterLogo from "./img/twitterLogo.png";

export default function HomePageFooter() {
  const linkedinUrl = "https://www.linkedin.com/in/redback-operations-722150239/";
  const instagramUrl = "https://www.instagram.com/redbackoperationsdeakin/";
  const twitterUrl = "https://twitter.com/Deakin";

  return (
    <footer className="footer-container">
      <div className="footer-grid">
        <img src={Logo} alt="Redback Logo" className="footer-logo" />

        <a
          href={linkedinUrl}
          className="socials-logo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={LinkedinLogo}
            alt="Redback LinkedIn"
            className="social-logo-img"
          />
          <p className="social-label">LinkedIn</p>
        </a>

        <a
          href={instagramUrl}
          className="socials-logo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={InstagramLogo}
            alt="Redback Instagram"
            className="social-logo-img"
          />
          <p className="social-label">Instagram</p>
        </a>

        <a
          href={twitterUrl}
          className="socials-logo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={TwitterLogo}
            alt="Redback Twitter"
            className="social-logo-img"
          />
          <p className="social-label">Twitter</p>
        </a>
      </div>
      <p className="footer-msg">
        Join us today and enjoy a fully immersive experience where you will
        enjoy individual exercise routines all the time while receiving
        real-time feedback and tips on how to improve their performance. Share
        your exercise with our community and engage with other users both
        casually and competitively.
        <br />
        <br /> Act now and be the best person you can be.
      </p>
    </footer>
  );
}
