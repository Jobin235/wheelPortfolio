import React, { useState } from "react";
import Typed from "react-typed";

function AboutContainer(props) {
  const [typed, setTyped] = useState(false);

  return (
    <div id="current-weapon" className="backlit">
      <div id="current-weapon-info">
        <h1 id="current-weapon-name">{props.currentMenu}</h1>
        <div className="aboutContainer">
          <div className="detail">
            <Typed
              strings={[
                "As a full stack web developer with over 3+ years of experience, my focus is on building high-quality and engaging digital experiences that are user-friendly and technically sound. I am passionate about tackling complex problems with innovative solutions.",
              ]}
              typeSpeed={10}
              onComplete={() => setTyped(true)}
            />
            <br />
            <br />
            {typed ? (
              <Typed
                strings={[
                  "Since 2019, I have been a self-motivated and self-taught professional, constantly learning and staying up-to-date with the latest technologies and best practices in web development. I am committed to creating cool and interactive digital experiences that meet and exceed client expectations.",
                ]}
                typeSpeed={10}
              />
            ) : null}
          </div>
          <div className="image"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutContainer;
