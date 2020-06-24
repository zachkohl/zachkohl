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
  //     moveMap([-117.0126, 46.7288], "The place I took a lot of math classes");
  //   }
  // }, [props.currentIndex]);

  return (
    <div>
      <div className={styles.title}>Adventures in Engineering!</div>
      <p>
        While writing was pretty cool, I had this nagging feeling that I was
        still incomplete as a problem solver. Like I could write about problems,
        show them to people, but I was not really in a place to solve them. I
        wanted to be a problem solver, not just a problem talk abouter.
        Fortunately, when I got out of the Army, I was awarded a fairly
        significant scholarship, which I used to return to undergrad, this time
        to study engineering. I started out in civil, but soon switched to
        mechanical. Then I quickly realized that all the projects and classes I
        was interested in where much more circuit oriented, so I switched to
        electrical.
      </p>
      <p>
        I loved electrical engineering, and I especially found that I really
        loved computer programming. It was during my internship with the local
        power corporation that I really started to see about transitioning. I
        was able, during the internship, to build a program for them that would
        calculate arc flash and produce industry valid safety labels. I was
        hooked. Computers and programming where the way to go.
      </p>
      <p>
        Another fun adventure in engineering school was working with my
        brothers, who were also learning engineering, on an Internet of Things
        project. We built a working prototype of our water flow sensor that
        would transmit through cell phone networks and run off of solar power.
        The idea was to solve regulatory compliance issues for rural well
        owners. But then the laws changed, fundamentally effecting our business
        model. But I had a lot of fun learning how to build an IoT sensor from
        the ground up. We learned how to do surface mount soldering in a toaster
        oven and also how to program microcontrollers in C.
      </p>
      <p>
        However, I found that I really liked building the cloud components.
        Which is how I got into serious JavaScript programming.
      </p>
      <p>
        JavaScript is very performant. Some local engineers at F5 really got me
        excited about using the language in a serous way. Now with TypeScript, I
        feel that JavaScript is ready to shine as the major work horse engine of
        the future. The ecosystem is getting mature and that means that problems
        can be solved faster.
      </p>
      <p>
        I kept playing with JavaScript and pretty soon found myself contracting
        out as a full stack developer. I built a couple of interesting projects,
        including a full educational platform to help with a federal research
        project and also a tariff calculation tool for a custom house brokerage.
      </p>
      <img
        src="\Capture.PNG"
        alt="IOT sensor"
        height="200px"
        className="rotate"
      />
      {/* <style jsx={true}>
        {`
          #s6 {
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
