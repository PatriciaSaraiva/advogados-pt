import React from "react";
import officeImg from "../../assets/images/officeImg.jpg";
import "./Home.css";
import Button from "../../components/Inputs/Button";
import Hero from "./Hero";

const Home = () => {
  const handleClick = () => alert("NOTA IMPORTANTE");
  return (
    <>
      <Button className="button_home" handleClick={handleClick}>
        Consulta Jurídica
      </Button>
      <Hero />
      <img className="backgroundOffice" src={officeImg} alt="Office Img" />
    </>
  );
};

export default Home;
