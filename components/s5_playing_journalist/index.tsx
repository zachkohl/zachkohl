import React, { useEffect, useRef, useState, useContext } from "react";
import homeStyles from "../home.module.css";
import styles from "../home.module.css";
import useMoveMap from "../useMoveMap";

function Index(props) {
  const [titleRotate, setTitleRotate] = useState(-0.25);

  // useEffect(() => {
  //   //calculate the title location.
  //   if (props.currentIndex === props.index) {
  //     const rotateValue = props.progress - 1.25;
  //     if (rotateValue < -1) {
  //       setTitleRotate(rotateValue);
  //     } else {
  //       setTitleRotate(0);
  //     }
  //   } else if (props.currentIndex > props.index) {
  //     setTitleRotate(0);
  //   } else {
  //     setTitleRotate(-0.25);
  //   }
  // }, [props.progress]);

  // const moveMap = useMoveMap();
  // useEffect(() => {
  //   if (props.currentIndex === props.index) {
  //     moveMap([-158.0627, 21.4955], "Hawaii");
  //   }
  // }, [props.currentIndex]);

  return (
    <div>
      <div className={styles.title}>Playing Journalist</div>
      <p>
        While I loved certain aspects of the Army, I never really fit in. It is
        hard to explain. I like being creative, learning new things, and
        abstract problems. While I am extremely thankful for my time in the
        Army, I also knew it was not for me in the long term. Not to mention my
        growing concern about invading countries for no reason.
      </p>
      <p>
        I started to try to find opportunities to transition to another career,
        one such opportunity came when my unit returned to Hawaii (I loved
        Hawaii, FYI…). I got to work in the base public affairs office as a
        journalist. If one wants to learn to write, writing for a real newspaper
        is definitely the way to go! I love writing, and getting to travel
        around learning about things was super cool.
      </p>
      <img
        src="\guille-pozzi-g3esK1uXCjM-unsplash.jpg"
        alt="Hawaii"
        height="300px"
        className={styles.image}
      />{" "}
      <div>
        Photo by{" "}
        <a href="https://unsplash.com/@guillepozzi?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          guille pozzi
        </a>{" "}
        on{" "}
        <a href="/s/photos/hawaii?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Unsplash
        </a>
      </div>
      {/* <style jsx={true}>
        {`
          #s5 {
            transform: rotate(${titleRotate}turn);
            transform-origin: bottom right;
            float: right;
          }
        `}
      </style> */}
    </div>
  );
}

export default Index;
