import React from 'react';

import backgroundImage from "./images/bg.jpg"
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <img src={backgroundImage} id="bg" alt="office furniture"></img> */}
      <div className="background">
        <div className="container">
          <div className="logos-container">
            <h4>Cristina</h4>
            <h4>Dulce</h4>  
          </div>
          <h1>Em construção</h1>
          <ul className="emails-list"> 
            <li>cristina.gomes@ccg-advogados.pt</li>
            <li>dulcecesar.3194@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
