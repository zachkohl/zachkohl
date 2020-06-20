import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import "intersection-observer";
import scrollama from "scrollama";
import ChangeColor from "./ChangeColor";
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
          offset: 0.5,
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

  return (
    <div>
      {" "}
      <section id="scrolly">
        <article>
          <div className="step" data-step="1">
            <Section1 />
          </div>
          <div className="step" data-step="2"></div>
          <Section2
            currentIndex={props.currentIndex}
            index={2}
            progress={progress}
          />

          <div className="step" style={{ height: "100vh" }} data-step="3"></div>
          <ChangeColor currentIndex={props.currentIndex} index={2} />
          <p>STEP 3</p>

          <div className="step" style={{ height: "100vh" }} data-step="4">
            <ChangeColor currentIndex={props.currentIndex} index={3} />
            <p>STEP 4</p>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Scrolly;
