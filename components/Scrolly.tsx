import React, { useState, useEffect } from "react";
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
function Scrolly(props) {
  const [progress, setProgress] = useState(null);
  useEffect(() => {
    var scrolly = document.querySelector("#scrolly");
    var article = scrolly.querySelector("article");
    var step = article.querySelectorAll(".step");

    // initialize the scrollama
    var scroller = scrollama();

    // scrollama event handlers
    function handleStepEnter(response) {
      // response = { element, direction, index }

      // add to color to current step
      props.setCurrentIndex(response.index);
      console.log(response.index);
    }

    function handleStepProgress(response) {
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
          debug: true,
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
  const vh = "50vh";
  return (
    <div>
      {" "}
      <section id="scrolly">
        <article>
          <div className="step" data-step="1">
            <S1_welcome
              currentIndex={props.currentIndex}
              index={1}
              progress={progress}
              title="welcome"
            />
          </div>
          <div className="step" data-step="2"></div>
          <S2_move_out_west
            currentIndex={props.currentIndex}
            index={2}
            progress={progress}
            title="welcome"
          />

          <div className="step" style={{ height: "100vh" }} data-step="3"></div>
          <S3_military_service
            currentIndex={props.currentIndex}
            index={3}
            progress={progress}
          />
          <div className="step" style={{ height: "100vh" }} data-step="4"></div>
          <S4_afghanistan
            currentIndex={props.currentIndex}
            index={4}
            progress={progress}
          />
          <div className="step" style={{ height: "100vh" }} data-step="5"></div>
          <S5_playing_jounalist
            currentIndex={props.currentIndex}
            index={5}
            progress={progress}
          />
          <div className="step" style={{ height: "100vh" }} data-step="6"></div>
          <S6_adventures_in_engineering
            currentIndex={props.currentIndex}
            index={6}
            progress={progress}
          />

          <div className="step" style={{ height: "100vh" }} data-step="7"></div>
          <S7_expeditors
            currentIndex={props.currentIndex}
            index={7}
            progress={progress}
          />
          <div className="step" style={{ height: "30vh" }} data-step="8"></div>
        </article>
      </section>
    </div>
  );
}

export default Scrolly;
