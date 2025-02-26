import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
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
                      About
                    </div>
                  }
                  body={
                    <Typography variant="body1" fontSize={18} sx={{ color: 'common.white', fontFamily: "monospace" }}>
                      We're a team of passionate developers looking to raise the bar. We pride ourselves on creating quality, maintanable software that's tailored to your needs. 
                      <br/>
                      <br/>                      
                      Based in Victoria BC, we only hire top Canadian talent.
                      <br/>
                      <br/>
                      Contact us today for a free quote!
                    </Typography>
                  }
                  image={about}>
                </MediaCard>
                <div className="selectable-option" onMouseUp={() => setOptionSelected(CONTACT)}>
                  {"Contact"}
                </div>
                <br/>
                <div className="selectable-option" style={{marginTop: 15}} onMouseUp={() => setOptionSelected(MAIN_MENU)}>
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
                  <a href="https://www.linkedin.com/company/emerging-intuition-software-inc" target="_blank">
                    {"LinkedIn"}
                  </a>
                </div>
                <div className="selectable-option" onMouseUp={() => setOptionSelected(MAIN_MENU)} style={{marginTop: 15}}>
                  {"Main Menu"}
                </div>
              </React.Fragment>
            }
            {/* Email */}
            {optionSelected === EMAIL &&
              <React.Fragment>
                <MediaCard
                  header={
                    <div className="CardHeader" color="red">
                      Email
                    </div>
                  }
                  body={
                    <Typography variant="body1" fontSize={22} sx={{ color: 'common.white', fontFamily: "monospace" }}>
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
        !backgroundLoaded &&  // display loading sequence while background image is loading
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
