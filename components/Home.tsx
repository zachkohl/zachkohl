import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import "intersection-observer";
import scrollama from "scrollama";
import ChangeColor from "./ChangeColor";
function Home(props) {
  const [currentIndex, setCurrentIndex] = useState(null);
  useEffect(() => {
    console.log("initial mount");

    var scrolly = document.querySelector("#scrolly");
    var article = scrolly.querySelector("article");
    var step = article.querySelectorAll(".step");

    // initialize the scrollama
    var scroller = scrollama();

    // scrollama event handlers
    function handleStepEnter(response) {
      // response = { element, direction, index }
      console.log(response);
      // add to color to current step
      setCurrentIndex(response.index);
      response.element.classList.add("is-active");
    }

    function handleStepExit(response) {
      // response = { element, direction, index }
      console.log(response);
      // remove color from current step
      response.element.classList.remove("is-active");
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
        })
        .onStepEnter(handleStepEnter)
        .onStepExit(handleStepExit);

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
          <div className="step" data-step="1" style={{ position: "fixed" }}>
            <p>STEP 1</p>
            {currentIndex}
          </div>
          <div className="step" style={{ height: "100vh" }} data-step="2">
            <ChangeColor currentIndex={currentIndex} index={1} />
            <p>STEP 2</p>
          </div>
          <div className="step" style={{ height: "100vh" }} data-step="3">
            <ChangeColor currentIndex={currentIndex} index={2} />
            <p>STEP 3</p>
          </div>
          <div className="step" style={{ height: "100vh" }} data-step="4">
            <ChangeColor currentIndex={currentIndex} index={3} />
            <p>STEP 4</p>
          </div>
        </article>
      </section>
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
