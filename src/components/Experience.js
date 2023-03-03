import React from "react";
import styles from "../styles/Experience.module.css";

import work from "../images/work.svg";

const Experience = (props) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr repeat(4,2fr) 1fr" }}>
      <div className={styles.heading}>
        <h1 id="current-weapon-name" style={{textAlign:"center"}}>{props.currentMenu}</h1>
      </div>
      <div className={styles.imageDiv}>
        <img className={styles.workImage} src={work} alt="work"></img>
        <div></div>
      </div>
    </div>
  );
};

export default Experience;
