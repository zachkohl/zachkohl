import React, { useState, useEffect } from "react";
import styles from "./home.module.css";

function TitleAnimator(props) {
  const [titleRotate, setTitleRotate] = useState(-0.25);

  useEffect(() => {
    if (props.currentIndex === props.index) {
      const rotateValue = props.progress - 1.25;
      console.log(rotateValue);
      if (rotateValue < -1) {
        setTitleRotate(rotateValue);
      } else {
        setTitleRotate(0);
      }
    } else {
      setTitleRotate(-0.25);
    }
  }, [props.progress]);

  return (
    <div>
      <div className={styles.title} id="AdventureInEngineering">
        {props.title}
      </div>
      {props.progress}
      <style jsx={true}>
        {`
          #AdventureInEngineering {
            transform: rotate(${titleRotate}turn);
            transform-origin: bottom right;
            float: right;
          }
        `}
      </style>
    </div>
  );
}

export default TitleAnimator;
