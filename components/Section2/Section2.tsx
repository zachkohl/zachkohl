import React, { useEffect, useRef, useState } from "react";
import homeStyles from "../home.module.css";
import styles from "./section2.module.css";
import * as d3 from "d3";
function Section2(props) {
  const [titleRotate, setTitleRotate] = useState(-0.25);
  const d3Element = useRef(null);

  // useEffect(() => {
  //   const d3thing = d3.select(d3Element.current);
  //   const update = d3thing.attr("transform", "translate(0,10)");
  // });

  useEffect(() => {
    //calculate the title location.
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

  const myStyle =
    props.currentIndex === props.index ? homeStyles.red : homeStyles.blue;
  console.log(myStyle);
  return (
    <div className={myStyle}>
      <div className={styles.title} id="AdventureInEngineering" ref={d3Element}>
        Adventures in Software Engineering!
      </div>
      {props.progress}
      <style jsx={true}>
        {`
          #AdventureInEngineering {
            transform: rotate(${titleRotate}turn);
            transform-origin: top right;
            margin-right: 55px;
            float: right;
          }
        `}
      </style>
    </div>
  );
}

export default Section2;
//https://medium.com/@jeffbutsch/using-d3-in-react-with-hooks-4a6c61f1d102
//https://wattenberger.com/blog/d3#dealing-with-colors
