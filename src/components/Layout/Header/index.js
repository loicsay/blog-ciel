import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

import "./styles.scss";
import usePrevious from "../../../utils";
import { CielLogo } from "../../../images/logos";

const Header = () => {
  const [scrollUp, setScrollUp] = useState(true);
  const [scrollPourcentage, setScrollPourcentage] = useState(0);

  const prevScrollPourcentage = usePrevious(scrollPourcentage);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Scroll up/down detection for the logo
    scrollPourcentage > prevScrollPourcentage
      ? setScrollUp(false)
      : setScrollUp(true);
  }, [scrollPourcentage]);

  const handleScroll = () => {
    // Scrolling percentage for the scrolling indicator
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const newScrollPourcentage = (winScroll / height) * 100;

    setScrollPourcentage(newScrollPourcentage);
  };

  return (
    <header className="header-container">
      <div
        className="progress-bar"
        style={{ width: `${scrollPourcentage}%` }}
      />
      <div className="logo-container">
        <Link to="/">
          <CielLogo className={scrollUp ? "logo-up" : "logo-down"} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
