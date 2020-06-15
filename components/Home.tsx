import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import "intersection-observer";
import scrollama from "scrollama";
import ChangeColor from "./ChangeColor";
import Scrolly from "./Scrolly";
import MapBox from "./MapBox";
function Home(props) {
  const [currentIndex, setCurrentIndex] = useState(null);

  return (
    <div className={styles.home}>
      <div className={styles.header}>f</div>
      <div className={styles.contentArea}>
        <div className={styles.bigArea}>
          <Scrolly
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
        <div className={styles.rightSideBar}>
          <MapBox />
        </div>
      </div>
    </div>
  );
}

export default Home;
{
  /* 

    <div className={styles.home}>
      <div className={styles.header}>f</div>
      <div className={styles.contentArea}>
        <div className={styles.bigArea}>
          <Scrollama onStepEnter={onStepEnter} debug>
            <Step data={1} key={1}>
              <div className={styles.blue}>
                <Section1 currentStepIndex={currentStepIndex} />
              </div>
            </Step>
            <Step data={2} key={2}>
              <div className={styles.red}>
                <Section2 currentStepIndex={currentStepIndex} />
              </div>
            </Step>
          </Scrollama>
        </div>
        <div className={styles.rightSideBar}></div>
      </div>
    </div>




</div>

<div className={styles.footer}></div>
</div> */
}
