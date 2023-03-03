import React from 'react'
import styles from "../styles/Portfolio.module.css";

const Portfolio = (props) => {
  return (
    <div>
        <h1 id="current-weapon-name" >{props.currentMenu}</h1>
    </div>
  )
}

export default Portfolio