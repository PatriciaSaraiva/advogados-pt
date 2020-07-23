import React from "react";

import cristinaLogo from "images/cristina-logo.png";
import dulceLogo from "images/dulce-logo.png";
import bg from "images/bg.jpg";
import "./Home.css";

export function Home() {
  return (
    <div className='home'>
      <img
        className='background'
        src={bg}
        alt='desk with a laptop and a plant'
      />
      <div className='main'>
        <div className='main-overlay' />
        <div className='logos-container'>
          <img
            className='cristina-logo'
            src={cristinaLogo}
            alt='cristina gomes logo'
          />
          <img className='dulce-logo' src={dulceLogo} alt='dulce cesar logo' />
        </div>
        <div className='info-container'>
          <h1 className='title'>Website em construção</h1>
          <h3 className='sub-title'>Actos notariais</h3>
          <h4 className='contact'>Entre em contacto connosco</h4>
          <div className='contacts-container'>
            <ul className='address-list'>
              <li>Rua Santos Bernardes,</li>
              <li>Edif. Atlantic, n.15, Loja 2</li>
              <li>2560-362 Torres Vedras</li>
            </ul>
            <ul className='contact-list'>
              <li>(+351) 261 064 229</li>
              <li>geral@ccg-advogados.pt</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
