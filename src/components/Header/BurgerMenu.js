import React from "react";
import "./BurgerMenu.css";

const BurgerMenu = (props) => {
  const handleClick = (e) => {
    e.target.classList.toggle("change");
    props.toggleMenu();
  };

  return (
    <div className="burger_menu" onClick={handleClick}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
};

export default BurgerMenu;
