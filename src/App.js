import React from 'react';

import cristinaLogo from './images/cristina-logo.png'
import dulceLogo from './images/dulce-logo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="background"/>
          <div className="main">
            <div className="main-overlay"/>
              <div className="logos-container">
                <img className="cristina-logo" src={cristinaLogo}/>
                <img className="dulce-logo" src={dulceLogo}/>
              </div>
              <div className="info-container">
                <h1 className="title">Website em construção</h1>
                <h4 className="subtitle">Entre em contacto connosco</h4>
                <div className="contacts-container">
                <ul className="address-list">
                  <li>Rua Santos Bernardes,</li>
                  <li>Edif. Atlantic, n.15, Loja 2</li>
                  <li>2560-362 Torres Vedras</li>
                </ul>
                <ul className="contact-list">
                  <li>(+351) 261 064 229</li> 
                  <li>cristina.gomes@ccg-advogados.pt</li>
                  <li>dulcecesar.3194@gmail.com</li>
                </ul>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
