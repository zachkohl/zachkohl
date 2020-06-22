import React, { useEffect, useRef, useState, useContext } from "react";
import homeStyles from "../home.module.css";
import styles from "../home.module.css";
import useMoveMap from "../useMoveMap";

function Index(props) {
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
      moveMap([-84.8229, 32.3913], "Army Land");
    }
  }, [props.currentIndex]);

  return (
    <div>
      <div className={styles.title} id="s3">
        Military Service: Learning soft skills
      </div>

      <p>
        I wanted to serve my Country, so I entered ROTC at the University of
        Idaho where I would earn a commission as an Infantry Officer. The Army
        taught me a lot, things I still value in my career today. I learned
        public speaking, how to make friends with people you don’t like, and the
        rigorous methods of military planning.
      </p>
      <p>
        At Fort Benning, the training really kicked into high gear. I got to do
        some fun stuff, like jump out of an airplane and practice staying up
        really late without dinner. It was at Fort Benning that I began to learn
        what real work ethic is. This is something I have taken with me as an
        engineer, occasionally you just have to grind out work. I also learned a
        to see working hard even when no one is looking as a big part of having
        integrity.
      </p>
      <style jsx={true}>
        {`
          #s3 {
            transform: rotate(${titleRotate}turn);
            transform-origin: bottom right;
            float: right;
          }
        `}
      </style>
    </div>
  );
}

export default Index;
