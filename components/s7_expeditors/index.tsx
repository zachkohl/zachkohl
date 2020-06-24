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
  //     moveMap([-117.5933, 47.6446], "Where I work now");
  //   }
  // }, [props.currentIndex]);

  return (
    <div>
      <div className={styles.title}>Disaster Recovery at Expeditors</div>
      <p>
        While I consider myself very self-motivated, I do like working with a
        team. And fortunately, after graduating with my EE degree, I was given
        the opportunity to join the amazing team at Disaster Recovery Site 1 for
        Expeditors International; where I work currently. My job is to do full
        stack development on a series of tools to help with auditing and
        recovery orchestration in the event that something happens to our main
        facility in Seattle. A lot of America’s international trade goes through
        that office, and making sure that that trade is disaster proof is a
        mission I take very seriously.
      </p>
      <p>
        Another great thing about working at Expeditors has been the ability to
        seriously upgrade my React skills. I am all about solving problems, and
        React helps do that. I have also become a huge fan of ES6 and
        typescript.
      </p>
      <p>
        That’s a bit of my story, feel free to reach out if you wanna talk more.
      </p>
      <figure className="floatMe">
        <img src="\future.PNG" alt="javascript" width="500px" />
        <figcaption>Now I write a lot of javaScript</figcaption>
      </figure>
      {/* <style jsx={true}>
        {`
          #s7 {
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
