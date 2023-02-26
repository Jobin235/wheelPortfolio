import "./App.css";
import { useState } from "react";
import Typed from "react-typed";
import WeaponWheel from "./components/WeaponWheel";
import Details from "./components/Details";

function App() {
  const [isMenuActive, setIsMenuActive] = useState(true);
  const [currentMenu, setCurrentMenu] = useState("About");

  return (
    <>
      <div>
        {isMenuActive ? (
          <div
            style={{
              width: "100%",
              height: "100vh",
              overflow: "hidden",
            }}
          >
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
              <h2>I'm</h2>
              <h1 style={{ fontWeight: "bold" }}>JOBIN JOY</h1>
              <h2>
                <Typed
                  strings={[
                    "Freelancer",
                    "Full-Stack Developer",
                    "React Developer",
                    "Crypto Enthusiast",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </h2>
            </div>
            <div className="wheelSvg">
              <WeaponWheel
                currentMenu={currentMenu}
                setCurrentMenu={setCurrentMenu}
                isMenuActive={isMenuActive}
                setIsMenuActive={setIsMenuActive}
              ></WeaponWheel>
            </div>
          </div>
        ) : (
          <div
            style={{
              width: "100%",
              height: "100vh",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Details
              currentMenu={currentMenu}
              setIsMenuActive={setIsMenuActive}
            ></Details>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
