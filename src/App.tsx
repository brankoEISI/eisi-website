import React, { useState } from "react";
import "./Clouds.css";
import "./App.css";
const background = require("./assets/neon-city.jpg");

function App() {
  const MAIN_MENU = 0;
  const PROJECTS = 1;
  const CONTACT = 2;
  const [optionSelected, setOptionSelected] = useState(MAIN_MENU);
  return (
    <div className="App" style={{ backgroundImage: `url(${background})`}}>
      <div className="Clouds-Section">

        {/* Shadowed Cloud */}
        <div className="shadowed-cloud-container">
          <div className="shadowed-cloud-sprite"/>
        </div>

        {/* Regular Cloud */}
        <div className="cloud-container">
          <div className="cloud-sprite"/>
        </div>

        {/* Small Cloud */}
        <div className="small-cloud-container">
          <div className="small-cloud-sprite"/>
        </div>
      </div>
      <div className="Header">
        Emerging Intuition Software Inc.
      </div>
      <div className="Body">

        {/* Main Menu */}
        {optionSelected === MAIN_MENU &&
          <React.Fragment>
            <div className="selectable-option" onMouseUp={() => setOptionSelected(CONTACT)}>
              {"> Contact <"}
            </div>
          </React.Fragment>
        }

        {/* Contact */}
        {optionSelected === CONTACT &&
          <React.Fragment>
            <div className="selectable-option">
              <a href="https://github.com/brankoEISI" target="_blank">
                {"> GitHub <"}
              </a>
            </div>
            <br/>
            <div className="selectable-option">
              <a href="https://www.linkedin.com/in/branko-bajic/" target="_blank">
                {"> LinkedIn <"}
              </a>
            </div>
            <br/>
            <br/>
            <div className="selectable-option" onMouseUp={() => setOptionSelected(MAIN_MENU)}>
              {"> Main Menu <"}
            </div>
          </React.Fragment>
        }
      </div>
      <div className="Footer" />
    </div>
  );
}

export default App;
