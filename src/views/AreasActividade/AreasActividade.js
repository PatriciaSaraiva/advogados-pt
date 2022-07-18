import React from "react";
import penPhoto from "../../assets/images/pen_photo.jpeg";
import "./AreasActividade.css";
import Button from "../../components/Inputs/Button";

const activities = [
  {
    className: "direito_empresarial",
    title: "DIREITO EMPRESARIAL",
  },
  {
    className: "insolvencia",
    title: "INSOLVÊNCIA",
  },
  {
    className: "direito_tributario",
    title: "DIREITO TRIBUTÁRIO",
  },
  {
    className: "direito_administrativo",
    title: "DIREITO ADMINISTRATIVO",
  },
];
const AreasActividade = () => {
  return (
    <div className="activity_areas">
      <h1 className="activity_title">Áreas de Actividade</h1>
      <div className="activities_areas-container">
        <ul className="activities_list">
          {activities.map((activity) => (
            <div className={`${activity.className} activity_container`}>
              <li>{activity.title}</li>
            </div>
          ))}
        </ul>
      </div>
      <img
        className="activity_area-background"
        src={penPhoto}
        alt="Background pen"
      />
      <Button className="button_services">Todos os Serviços</Button>
    </div>
  );
};

export default AreasActividade;
