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
      <div className={styles.title}>Professional Software Engineer</div>
      <p>
        While I consider myself very self-motivated, I do like working with a
        team. And fortunately, after graduating with my EE degree, I was given
        the opportunity to join the amazing team at Disaster Recovery Site 1 for
        Expeditors International. My job was to do full stack development on a
        series of tools to help with auditing and recovery orchestration in the
        event that something happens to our main facility in Seattle. I left
        after about a year to continue to grow as an engineer at other
        companies.
      </p>
      <p>
        I've really enjoyed my opportunity to grow as an egineer working for
        publically traded, big corporations. I've met some great people develop
        some cool skills (database design, front-end, etc.). At this point in my
        career, I am super happy that I choose to focus on software and solving
        problems.
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
