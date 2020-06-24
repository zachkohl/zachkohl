import React, { useState, useEffect, useRef } from "react";
import styles from "./home.module.css";
import Section1 from "./s1_welcome";
import Section2 from "./Section2/Section2";
import "intersection-observer";
import scrollama from "scrollama";
import ChangeColor from "./ChangeColor";
import TitleAnimator from "./TitleAnimator";
import S1_welcome from "./s1_welcome";
import S2_move_out_west from "./s2_move_out_west";
import S3_military_service from "./s3_military_service";
import S4_afghanistan from "./s4_afghanistan";
import S5_playing_jounalist from "./s5_playing_journalist";
import S6_adventures_in_engineering from "./s6_adventures_in_engineering";
import S7_expeditors from "./s7_expeditors";
import MapMover from "./MapMover";
import useMoveMap from "./useMoveMap";
function Scrolly(props) {
  const scrollRef = useRef({
    currentIndex: 0,
    progress: 0,
  });
  const [progress, setProgress] = useState(null);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [titleRotate, setTitleRotate] = useState(-0.25);
  const moveMap = useMoveMap();
  useEffect(() => {
    var scrolly = document.querySelector("#scrolly");
    var article = scrolly.querySelector("article");
    var step = article.querySelectorAll(".step");

    // initialize the scrollama
    var scroller = scrollama();

    // scrollama event handlers
    function handleStepEnter(response) {
      // response = { element, direction, index }
      console.log(response);
      if (response.index === 1 && response.direction === "up") {
        console.log("philly");
        moveMap([-75.165222, 39.952583], "Philadelphia");
      }
      if (
        (response.index === 1 && response.direction === "down") ||
        (response.index === 2 && response.direction === "up")
      ) {
        console.log("northwest");
        moveMap([-116.79253, 47.703485], "Pacific North West");
      }
      if (
        (response.index === 2 && response.direction === "down") ||
        (response.index === 3 && response.direction === "up")
      ) {
        moveMap([-84.8229, 32.3913], "Army Land");
      }
      if (
        (response.index === 3 && response.direction === "down") ||
        (response.index === 4 && response.direction === "up")
      ) {
        moveMap([70.4578, 34.4284], "Afghanistan");
      }
      if (
        (response.index === 4 && response.direction === "down") ||
        (response.index === 5 && response.direction === "up")
      ) {
        moveMap([-158.0627, 21.4955], "Hawaii");
      }
      if (
        (response.index === 5 && response.direction === "down") ||
        (response.index === 6 && response.direction === "up")
      ) {
        moveMap([-117.0126, 46.7288], "The place I took a lot of math classes");
      }
      if (response.index === 6 && response.direction === "down") {
        moveMap([-117.5933, 47.6446], "Where I work now");
      }

      // add to color to current step
      props.setCurrentIndex(response.index);
      scrollRef.current.currentIndex = response.index;
      console.log(response.index);
    }

    function handleStepProgress(response) {
      scrollRef.current.progress = response.progress;
      setProgress(response.progress);
    }

    function handleStepExit(response) {
      // response = { element, direction, index }
    }

    function init() {
      // set random padding for different step heights (not required)
      // step.forEach(function (step) {
      //   var v = 100 + Math.floor((Math.random() * window.innerHeight) / 4);
      //   step.style.padding = v + "px 0px";
      // });

      // 1. setup the scroller with the bare-bones options
      // 		this will also initialize trigger observations
      // 2. bind scrollama event handlers (this can be chained like below)
      scroller
        .setup({
          step: "#scrolly article .step",
          debug: false,
          offset: 0.9,
          progress: true,
        })
        .onStepEnter(handleStepEnter)
        .onStepExit(handleStepExit)
        .onStepProgress(handleStepProgress);

      // 3. setup resize event
      window.addEventListener("resize", scroller.resize);
    }

    // kick things off
    init();

    return function clearnUp() {
      console.log("clean up activated");
      window.removeEventListener("resize", scroller.resize);
    };
  }, []);

  // useEffect(() => {
  //   if (props.currentIndex === 0) {
  //     moveMap([-75.165222, 39.952583], "Philadelphia");
  //   }
  //   if (props.currentIndex === 1) {
  //     moveMap([-116.79253, 47.703485], "Pacific North West");
  //   }
  //   if (props.currentIndex === 3) {
  //     moveMap([-84.8229, 32.3913], "Army Land");
  //   }
  //   if (props.currentIndex === 4) {
  //     moveMap([70.4578, 34.4284], "Afghanistan");
  //   }
  //   if (props.currentIndex === 5) {
  //     moveMap([-158.0627, 21.4955], "Hawaii");
  //   }
  //   if (props.currentIndex === 6) {
  //     moveMap([-117.0126, 46.7288], "The place I took a lot of math classes");
  //   }
  //   if (props.currentIndex === 7) {
  //     moveMap([-117.5933, 47.6446], "Where I work now");
  //   }
  // }, [props.currentIndex]);

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

  return (
    <div>
      {" "}
      <section id="scrolly">
        <article>
          <div className="step" data-step="1"></div>
          <div style={{ minHeight: "100vh", backgroundColor: "white" }}>
            <S1_welcome
              currentIndex={scrollRef.current.currentIndex}
              index={1}
              progress={progress}
            />
          </div>{" "}
          <div className="step" data-step="2"></div>
          <div style={{ minHeight: "100vh", backgroundColor: "white" }}>
            <S2_move_out_west
              currentIndex={scrollRef.current.currentIndex}
              index={2}
              progress={progress}
            />
          </div>
          <div className="step" data-step="3"></div>
          <div style={{ minHeight: "100vh", backgroundColor: "white" }}>
            <S3_military_service
              currentIndex={scrollRef.current.currentIndex}
              index={3}
              progress={progress}
            />
          </div>
          <div className="step" data-step="4"></div>
          <div style={{ minHeight: "100vh", backgroundColor: "white" }}>
            <S4_afghanistan
              currentIndex={scrollRef.current.currentIndex}
              index={5}
              progress={progress}
            />
          </div>
          <div className="step" data-step="5"></div>
          <div style={{ minHeight: "100vh", backgroundColor: "white" }}>
            <S5_playing_jounalist
              currentIndex={scrollRef.current.currentIndex}
              index={7}
              progress={progress}
            />
          </div>
          <div className="step" data-step="6"></div>
          <div style={{ minHeight: "100vh", backgroundColor: "white" }}>
            <S6_adventures_in_engineering
              currentIndex={scrollRef.current.currentIndex}
              index={7}
              progress={progress}
            />
          </div>
          <div className="step" data-step="7"></div>
          <div style={{ minHeight: "100vh", backgroundColor: "white" }}>
            <S7_expeditors
              currentIndex={scrollRef.current.currentIndex}
              index={8}
              progress={progress}
            />
          </div>
        </article>
      </section>
    </div>
  );
}

export default Scrolly;
