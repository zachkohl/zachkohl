import React, { useEffect, useRef, useState, useContext } from "react";
import homeStyles from "../home.module.css";
import styles from "../home.module.css";

import useMoveMap from "../useMoveMap";
function Section2(props) {
  const [titleRotate, setTitleRotate] = useState(-0.25);

  useEffect(() => {
    //calculate the title location.
    if (props.currentIndex === props.index) {
      const rotateValue = props.progress - 1.25;
      if (rotateValue < -1) {
        setTitleRotate(rotateValue);
      } else {
        setTitleRotate(0);
      }
    } else if (props.currentIndex > props.index) {
      setTitleRotate(0);
    } else {
      setTitleRotate(-0.25);
    }
  }, [props.progress]);

  const moveMap = useMoveMap();
  useEffect(() => {
    if (props.currentIndex === props.index) {
      moveMap([-116.79253, 47.703485], "Pacific North West");
    }
  }, [props.currentIndex]);

  const myStyle =
    props.currentIndex === props.index ? homeStyles.red : homeStyles.blue;
  return (
    <div>
      <div className={styles.title} id="s2">
        Move out West
      </div>

      <p>
        Pretty early on, our family moved out to the grand Pacific Northwest.
        This is where I really grew up. It is also where I first started to get
        into programming. I remember back in high school I helped my mom out
        with her German Shepherd business. Her Christmas present one year was a
        CSS powered dropdown menu. Also, I naturally had to learn basic IT
        skills to help with my gaming habit. I started to flirt with the idea of
        going into IT, and studied hard for the A+ exam, but then I life got
        going and I started to pursue other adventures.
      </p>
      <figure className="floatMe" style={{ display: "block" }}>
        <img src="\mooseweavepolesc.jpg" alt="suba picture" width="400px" />
        <figcaption>
          <span>Some nieghbors. These things happen out this way.</span>
        </figcaption>
      </figure>
      <style jsx={true}>
        {`
          #s2 {
            transform: rotate(${titleRotate}turn);
            transform-origin: bottom right;
            float: right;
          }
          .floatMe {
            float: right;
          }
        `}
      </style>
    </div>
  );
}

export default Section2;
