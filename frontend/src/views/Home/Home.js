import React, { useState } from "react";
import officeImg from "../../assets/images/officeImg.jpg";
import Popup from "./popup";
import "./Home.css";
import Hero from "./Hero";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Hero />
      <input
        className="button_home"
        type="button"
        value="Consulta Jurídica"
        onClick={togglePopup}
      ></input>
      {isOpen && (
        <Popup
          content={
            <div className="popup-card">
              <h4 className="popup-title">NOTA IMPORTANTE</h4>
              <p className="popup-description">
                Nos termos do Estatuto da Ordem dos Advogados, este serviço só
                pode ser pedido por quem não tiver advogado mandatado. Para
                prosseguir por favor confirme em baixo que não tem advogado
                mandatado.
              </p>
              <div className="checkbox-container">
                <input className="popup-checkbox" type="checkbox" />
                <p className="popup-checkbox-description ">
                  Confirmo que não tenho advogado mandatado
                </p>
              </div>
            </div>
          }
          handleClose={togglePopup}
        />
      )}

      <img className="backgroundOffice" src={officeImg} alt="Office Img" />
    </>
  );
};

export default Home;
