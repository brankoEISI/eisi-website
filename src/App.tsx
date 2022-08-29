import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import "./Clouds.css";
import "./App.css";
const background = require("./assets/neon-city.jpg");

function App() {
  const MAIN_MENU = "MAIN_MENU";
  const CONTACT = "CONTACT";
  const [optionSelected, setOptionSelected] = useState(MAIN_MENU);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  useEffect(() => { // detect when background image is loaded
    if (background != null) {
      setBackgroundLoaded(true);
    }
  }, [background])

  return (
    <React.Fragment>
      { backgroundLoaded &&
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
      }
      {
        !backgroundLoaded && // display loading sequence while background image is loading
          <div className="App">
            <BallTriangle
              height="40%"
              width="40%"
              radius={3}
              color="#de33f4"
              ariaLabel="ball-triangle-loading"
              visible={true}
              wrapperStyle={{alignItems: "center", justifyContent: "center"}}
            />
          </div>
      }
    </React.Fragment>
  );
}

export default App;
