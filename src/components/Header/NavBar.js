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
          <a href="/Home">Home</a>
        </li>
        <li className="nav_bar-item">
          <a href="/Quem-Somos">Quem Somos</a>
        </li>
        <li className="nav_bar-item">
          <a href="/Experience">Experiência</a>
        </li>
        <li className="nav_bar-item">
          <a href="/Actividade">Actividade</a>
        </li>
        <li className="nav_bar-item">
          <a href="/Contactos">Contactos</a>
        </li>
      </ul>
      {smallScreen && <BurgerMenu toggleMenu={toggleMenu} />}
    </>
  );
};

export default NavBar;
