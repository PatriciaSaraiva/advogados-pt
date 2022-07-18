import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import "./NavBar.css";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const breakpoint = 600;
  const smallScreen = props.width < breakpoint;

  return (
    <>
      <ul
        className={`${isOpen ? "nav_bar_menu" : "nav_bar"} ${
          isOpen ? "show_menu" : ""
        } ${smallScreen ? "hide" : ""}`}
      >
        <li className="nav_bar-item">
          <a href="#">Home</a>
        </li>
        <li className="nav_bar-item">
          <a href="#">Quem Somos</a>
        </li>
        <li className="nav_bar-item">
          <a href="#">Areas de Actividade</a>
        </li>
        <li className="nav_bar-item">
          <a href="#">Contactos</a>
        </li>
      </ul>
      {smallScreen && <BurgerMenu toggleMenu={toggleMenu} />}
    </>
  );
};

export default NavBar;
