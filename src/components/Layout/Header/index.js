import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

import "./styles.scss";
import usePrevious from "../../../utils";
import { CielLogo } from "../../../images/logos";

const Header = () => {
  const [scrollUp, setScrollUp] = useState(true);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const prevScrollPercentage = usePrevious(scrollPercentage);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Scroll up/down detection for the logo
    scrollPercentage > prevScrollPercentage &&
    // Handles the rebound effect on Safari
    scrollPercentage > 0
      ? setScrollUp(false)
      : scrollPercentage < 100 && setScrollUp(true);
  }, [scrollPercentage, prevScrollPercentage]);

  const handleScroll = () => {
    // Scrolling percentage of the scroll indicator
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const newScrollPercentage = (winScroll / height) * 100;

    setScrollPercentage(newScrollPercentage);
  };

  return (
    <header className="header-container">
      <div className="progress-bar" style={{ width: `${scrollPercentage}%` }} />
      <div className="logo-container">
        <Link to="/">
          <CielLogo className={scrollUp ? "logo-up" : "logo-down"} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
