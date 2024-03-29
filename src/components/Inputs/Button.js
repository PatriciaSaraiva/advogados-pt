import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button className={props.className} onClick={props.handleClick}>
      {props.children}
    </button>
  );
};

export default Button;
