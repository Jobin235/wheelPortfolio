import React, { useState } from "react";

import gunClick from "../sounds/gunClick.mp3";

const audio = new Audio(gunClick);

const WeaponWheel = (props) => {

  const [hoveredMenu, setHoveredMenu] = useState('SELECT AN OPTION');

  const handleMouseEnter = (menu) => {
    setHoveredMenu(menu);
    audio.muted = false;
    audio.play();
  };

  const handleMouseLeave = () => {
    setHoveredMenu('SELECT AN OPTION');
    audio.muted = true;
  };

  const handleMenuSelection = (menu) => {
    props.setCurrentMenu(menu);
    props.setIsMenuActive(false);
  }

  return (
    <React.Fragment>
      <svg height="620" width="620" viewBox="0 0 620 620">
        <text
          textAnchor="middle"
          alignmentBaseline="middle"
          id="hovered-weapon-name"
          x="175"
          y="400"
          fontSize="18"
          stroke="none"
        >
        {hoveredMenu}
        </text>
        <g
          onClickCapture={() => handleMenuSelection("Skills")}
          onMouseEnter={() => handleMouseEnter("Skills")}
          onMouseLeave={handleMouseLeave}
          data-weapon="Skills"
          data-image="https://www.freeiconspng.com/uploads/brain-education-gears-idea-knowledge-power-solution-icon-22.png"
          className={props.currentMenu === 'Skills' ? 'active-weapon' : ''}
        >
          <path
            d="M 610 310 A 300 300 0 0 1 522.1320343559643 522.1320343559643  L 451.4213562373095 451.4213562373095 A 200 200 0 0 0 510 310  z"
            fill="rgba(255,255,255,0.3)"
          />
          <image
            href="https://www.freeiconspng.com/uploads/brain-education-gears-idea-knowledge-power-solution-icon-22.png"
            x="320"
            y="535"
            height="70px"
            width="70px"
          />
        </g>

        <g
          onClickCapture={() => handleMenuSelection("About")}
          onMouseEnter={() => handleMouseEnter("About")}
          onMouseLeave={handleMouseLeave}
          data-weapon="About"
          data-image="https://www.freeiconspng.com/uploads/user-icon-png-person-user-profile-icon-20.png"
          className={props.currentMenu === 'About' ? 'active-weapon' : ''}
        >
          <path
            d="M 522.1320343559643 522.1320343559643 A 300 300 0 0 1 310 610  L 310 510 A 200 200 0 0 0 451.4213562373095 451.4213562373095  z"
            fill="rgba(255,255,255,0.3)"
          />
          <image
            href="https://www.freeiconspng.com/uploads/user-icon-png-person-user-profile-icon-20.png"
            x="140"
            y="620"
            height="60px"
            width="60px"
          />
        </g>

        <g
          onClickCapture={() => handleMenuSelection("Work Experience")}
          onMouseEnter={() => handleMouseEnter("Work Experience")}
          onMouseLeave={handleMouseLeave}
          data-weapon="Work Experience"
          data-image="https://www.freeiconspng.com/uploads/computer-user-icon-3.png"
          className={props.currentMenu === 'Work Experience' ? 'active-weapon' : ''}
        >
          <path
            d="M 310 610 A 300 300 0 0 1 97.86796564403576 522.1320343559643  L 168.57864376269052 451.4213562373095 A 200 200 0 0 0 310 510  z"
            fill="rgba(255,255,255,0.3)"
          />
          <image
            href="https://www.freeiconspng.com/uploads/computer-user-icon-3.png"
            x="-50"
            y="540"
            height="80px"
            width="80px"
          />
        </g>

        <g
          onClickCapture={() => handleMenuSelection("Portfolio")}
          onMouseEnter={() => handleMouseEnter("Portfolio")}
          onMouseLeave={handleMouseLeave}
          data-weapon="Portfolio"
          data-image="https://www.freeiconspng.com/uploads/project-icon-30.png"
          className={props.currentMenu === 'Portfolio' ? 'active-weapon' : ''}
        >
          <path
            d="M 97.86796564403576 522.1320343559643 A 300 300 0 0 1 10 310.00000000000006  L 110 310 A 200 200 0 0 0 168.57864376269052 451.4213562373095  z"
            fill="rgba(255,255,255,0.3)"
          />
          <image
            href="https://www.freeiconspng.com/uploads/project-icon-30.png"
            x="-120"
            y="360"
            height="80px"
            width="80px"
          />
        </g>

        <g
          onClickCapture={() => handleMenuSelection("Education Timeline")}
          onMouseEnter={() => handleMouseEnter("Education Timeline")}
          onMouseLeave={handleMouseLeave}
          data-weapon="Education Timeline"
          data-image="https://www.freeiconspng.com/uploads/school-student-icon-16.png"
          className={props.currentMenu === 'Education Timeline' ? 'active-weapon' : ''}
        >
          <path
            d="M 10 310.00000000000006 A 300 300 0 0 1 97.8679656440357 97.86796564403576  L 168.57864376269046 168.57864376269052 A 200 200 0 0 0 110 310  z"
            fill="rgba(255,255,255,0.3)"
          />
          <image
            href="https://www.freeiconspng.com/uploads/school-student-icon-16.png"
            x="-45"
            y="200"
            height="70px"
            width="70px"
          />
        </g>

        <g
          onClickCapture={() => handleMenuSelection("Client Testimonials")}
          onMouseEnter={() => handleMouseEnter("Client Testimonials")}
          onMouseLeave={handleMouseLeave}
          data-weapon="Client Testimonials"
          data-image="https://www.freeiconspng.com/uploads/business-meeting-icon-buy-this-icon-for--0-99-1.png"
          className={props.currentMenu === 'Client Testimonials' ? 'active-weapon' : ''}
        >
          <path
            d="M 97.8679656440357 97.86796564403576 A 300 300 0 0 1 309.99999999999994 10  L 309.99999999999994 110 A 200 200 0 0 0 168.57864376269046 168.57864376269052  z"
            fill="rgba(255,255,255,0.3)"
          />
          <image
            href="https://www.freeiconspng.com/uploads/business-meeting-icon-buy-this-icon-for--0-99-1.png"
            x="130"
            y="105"
            height="100px"
            width="90px"
          />
        </g>

        <g
          onClickCapture={() => handleMenuSelection("Libraries Used")}
          onMouseEnter={() => handleMouseEnter("Libraries Used")}
          onMouseLeave={handleMouseLeave}
          data-weapon="Libraries Used"
          data-image="https://www.freeiconspng.com/uploads/study-icon-4.png"
          className={props.currentMenu === 'Libraries Used' ? 'active-weapon' : ''}
        >
          <path
            d="M 309.99999999999994 10 A 300 300 0 0 1 522.1320343559642 97.8679656440357  L 451.4213562373095 168.57864376269046 A 200 200 0 0 0 309.99999999999994 110  z"
            fill="rgba(255,255,255,0.3)"
          />
          <image
            href="https://www.freeiconspng.com/uploads/study-icon-4.png"
            x="310"
            y="190"
            height="80px"
            width="80px"
          />
        </g>

        <g
          onClickCapture={() => handleMenuSelection("Contact")}
          onMouseEnter={() => handleMouseEnter("Contact")}
          onMouseLeave={handleMouseLeave}
          data-weapon="Contact"
          data-image="https://www.freeiconspng.com/uploads/chat-message-mobile-phone-sms-talk-icon-1.png"
          className={props.currentMenu === 'Contact' ? 'active-weapon' : ''}
        >
          <path
            d="M 522.1320343559642 97.8679656440357 A 300 300 0 0 1 610 309.99999999999994  L 510 309.99999999999994 A 200 200 0 0 0 451.4213562373095 168.57864376269046  z"
            fill="rgba(255,255,255,0.3)"
          />
          <image
            href="https://www.freeiconspng.com/uploads/chat-message-mobile-phone-sms-talk-icon-1.png"
            x="395"
            y="370"
            height="60px"
            width="60px"
          />
        </g>
      </svg>
    </React.Fragment>
  );
};

export default WeaponWheel;
