import React, { useEffect, useState } from "react";
import "./Header.css";
import cristinaLogo from "../../assets/logos/cristina-logo2.png";
import dulceLogo from "../../assets/logos/dulce-logo2.png";
import NavBar from "./NavBar";

const Header = () => {
  const [width, setWidth] = useState();

  const breakpoint = 849;

  useEffect(() => {
    const handleWidth = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleWidth);

    handleWidth();

    return () => window.removeEventListener("resize", handleWidth);
  }, []);

  return (
    <header className="header">
      <div className="logos_container">
        {width > breakpoint ? (
          <>
            <img
              className="logo_cristina"
              src={cristinaLogo}
              alt="Cristina logo"
            />
            <img className="logo_dulce" src={dulceLogo} alt="Dulce logo" />
          </>
        ) : null}
      </div>
      <NavBar width={width} />
    </header>
  );
};

export default Header;
