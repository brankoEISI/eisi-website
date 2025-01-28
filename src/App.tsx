import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import "./Clouds.css";
import "./App.css";
import MediaCard from "./MediaCard";
import { Typography } from "@mui/material";
const background = require("./assets/emerging.png");
const about = require("./assets/about.jpg");
const email = require("./assets/email.jpg");

function App() {
  const MAIN_MENU = "MAIN_MENU";
  const CONTACT = "CONTACT";
  const ABOUT = "ABOUT";
  const EMAIL = "EMAIL";
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

          <div className="Top">
          </div>

          <div className="Header">
            Emerging Intuition Software Inc.
          </div>

          <div className="Body">
            {/* Main Menu */}
            {optionSelected === MAIN_MENU &&
              <React.Fragment>
                <div className="selectable-option" onMouseUp={() => setOptionSelected(ABOUT)}>
                  {"About"}
                </div>
                <br/>
                <div className="selectable-option" onMouseUp={() => setOptionSelected(CONTACT)}>
                  {"Contact"}
                </div>
              </React.Fragment>
            }

            {/* About */}
            {optionSelected === ABOUT &&
              <React.Fragment>
                <MediaCard
                  header={
                    <div className="CardHeader" color="red">
                      About Us
                    </div>
                  }
                  body={
                    <Typography variant="body1" sx={{ color: 'common.white' }}>
                      We're a team of passionate developers looking to change how software projects are approached. We pride ourselves on creating quality, maintanable software that's tailored to your needs.
                      <br/>
                      Contact us for a free quote!
                    </Typography>
                  }
                  image={about}>
                </MediaCard>
                <div className="selectable-option" onMouseUp={() => setOptionSelected(MAIN_MENU)}>
                  {"Main Menu"}
                </div>
              </React.Fragment>
            }

            {/* Contact */}
            {optionSelected === CONTACT &&
              <React.Fragment>
                <div className="selectable-option" onMouseUp={() => setOptionSelected(EMAIL)}>
                    {"Email"}
                </div>
                <br/>
                <div className="selectable-option">
                  <a href="https://github.com/brankoEISI" target="_blank">
                    {"GitHub"}
                  </a>
                </div>
                <br/>
                <div className="selectable-option">
                  <a href="https://www.linkedin.com/in/branko-bajic/" target="_blank">
                    {"LinkedIn"}
                  </a>
                </div>
                <div className="selectable-option" onMouseUp={() => setOptionSelected(MAIN_MENU)} style={{marginTop: 15}}>
                  {"Main Menu"}
                </div>
              </React.Fragment>
            }
            {/* About */}
            {optionSelected === EMAIL &&
              <React.Fragment>
                <MediaCard
                  header={
                    <div className="CardHeader" color="red">
                      Email Us
                    </div>
                  }
                  body={
                    <Typography variant="body1" sx={{ color: 'common.white' }}>
                      eisoftware@mailfence.com
                    </Typography>
                  }
                  image={email}>
                </MediaCard>
                <div className="selectable-option" onMouseUp={() => setOptionSelected(MAIN_MENU)}>
                  {"Main Menu"}
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
              color="#474646"
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
