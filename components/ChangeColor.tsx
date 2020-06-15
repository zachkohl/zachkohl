import React from "react";
import styles from "./home.module.css";
function ChangeColor(props) {
  const myStyle = props.currentIndex === props.index ? styles.red : styles.blue;
  console.log(myStyle);
  return <div className={myStyle}>asdf</div>;
}

export default ChangeColor;
