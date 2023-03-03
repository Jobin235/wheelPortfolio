import React, { useState } from "react";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import AboutContainer from "../components/AboutContainer";
import ContactContainer from "../components/ContactContainer";
import Portfolio from "../components/Portfolio";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Clients from "../components/Clients";
import Library from "../components/Library";

function Details(props) {
  const [menuHover, setMenuHover] = useState(false);

  return (
    <>
      {/* About Page */}
      {props.currentMenu === "About" ? (
        <AboutContainer currentMenu={props.currentMenu}></AboutContainer>
      ) : null}

      {/* Experience Page */}
      {props.currentMenu === "Work Experience" ? (
        <Experience currentMenu={props.currentMenu}></Experience>
      ) : null}

      {/* Portfolio Page */}
      {props.currentMenu === "Portfolio" ? (
        <Portfolio currentMenu={props.currentMenu}></Portfolio>
      ) : null}

      {/* Skills Page */}
      {props.currentMenu === "Skills" ? (
        <Skills currentMenu={props.currentMenu}></Skills>
      ) : null}

      {/* Education Page */}
      {props.currentMenu === "Education Timeline" ? (
        <Education currentMenu={props.currentMenu}></Education>
      ) : null}

      {/* Clients Page */}
      {props.currentMenu === "Client Testimonials" ? (
        <Clients currentMenu={props.currentMenu}></Clients>
      ) : null}

      {/* Library Page */}
      {props.currentMenu === "Libraries Used" ? (
        <Library currentMenu={props.currentMenu}></Library>
      ) : null}

      {/* Contact Page */}
      {props.currentMenu === "Contact" ? (
        <AlertProvider
          template={AlertTemplate}
          position={positions.TOP_RIGHT}
          timeout={5000}
          offset="30px"
          transition={transitions.SCALE}
        >
          <ContactContainer currentMenu={props.currentMenu}></ContactContainer>
        </AlertProvider>
      ) : null}

      {/* Back to Menu button */}
      <button
        id="weapon-selector-button"
        className={menuHover ? "menuButton buttonBacklit" : "menuButton"}
        onClick={() => props.setIsMenuActive(true)}
        onMouseEnter={() => setMenuHover(true)}
        onMouseLeave={() => setMenuHover(false)}
      >
        Menu
      </button>
    </>
  );
}

export default Details;
