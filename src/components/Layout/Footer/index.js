import React from "react";

import "./styles.scss";
import SocialMediaList from "./components/SocialMediaList";

const Footer = () => (
  <footer className="footer-container">
    <div className="content">
      <div className="motto">
        <div className="line">Discovery,</div>
        <div className="line">Photography</div>
        <div className="line">& Lifestyle.</div>
        <div className="copyright">
          {"Clarisse & Loïc © 2019 | built with ♥️ and "}
          <a
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GatsbyJS
          </a>
        </div>
      </div>
      <div className="infos-container">
        <SocialMediaList
          name="Clarisse"
          instagramLink="https://www.instagram.com/clarissedmn/"
          flickrLink=""
          linkedinLink="https://www.linkedin.com/in/clarisse-damon/"
          githubLink=""
        />
        <SocialMediaList
          name="Loïc"
          instagramLink="https://www.instagram.com/lowgram/"
          flickrLink="https://flic.kr/ps/3bDTAj"
          linkedinLink="https://www.linkedin.com/in/loic-say/"
          githubLink="https://github.com/loicsay"
        />
      </div>
    </div>
  </footer>
);

export default Footer;
