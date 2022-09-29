import React from "react";
import lawStatus from "../../assets/images/law_status.jpeg";
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
      <div className="activities_areas-container">
        <h1 className="activity_title">Áreas de Actividade</h1>
        <ul className="activities_list">
          {activities.map((activity) => (
            <div className={`${activity.className} activity_container`}>
              <li>{activity.title}</li>
            </div>
          ))}
        </ul>
        <Button className="button_services">Todos os Serviços</Button>
      </div>
      <img className="activity_area-img" src={lawStatus} alt="Law status" />
    </div>
  );
};

export default AreasActividade;
