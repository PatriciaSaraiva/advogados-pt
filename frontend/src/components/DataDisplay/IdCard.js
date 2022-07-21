import React from "react";

const IdCard = (props) => {
  return (
    <div className="id_card">
      {props.img}
      <p className="id_description">{props.description}</p>
    </div>
  );
};
export default IdCard;
