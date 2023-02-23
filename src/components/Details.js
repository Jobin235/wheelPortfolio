import React from "react";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from 'react-alert-template-basic'

import AboutContainer from "../components/AboutContainer";
import ContactContainer from "../components/ContactContainer";

function Details(props) {
  return (
    <>
      <div id="current-weapon" className="backlit">
        <div id="current-weapon-info">
          <h1 id="current-weapon-name">{props.currentMenu}</h1>
          {props.currentMenu === "About" ? (
            <AboutContainer></AboutContainer>
          ) : null}
          {props.currentMenu === "Contact" ? (
            <AlertProvider
            template={AlertTemplate}
            position={positions.TOP_RIGHT}
            timeout={5000}
            offset="30px"
            transition={transitions.SCALE}
          >
            <ContactContainer></ContactContainer>
          </AlertProvider>
            
          ) : null}
        </div>
      </div>

      <button
        id="weapon-selector-button"
        className="menuButton"
        onClick={() => props.setIsMenuActive(true)}
      >
        Menu
      </button>
    </>
  );
}

export default Details;
