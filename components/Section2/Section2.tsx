import React, { useEffect, useRef, useState, useContext } from "react";
import homeStyles from "../home.module.css";
import styles from "./section2.module.css";
import { MapContext } from "../Home";
function Section2(props) {
  const [titleRotate, setTitleRotate] = useState(-0.25);

  // useEffect(() => {
  //   const d3thing = d3.select(d3Element.current);
  //   const update = d3thing.attr("transform", "translate(0,10)");
  // });

  var easingFunctions = {
    // start slow and gradually increase speed
    easeInCubic: function (t) {
      return t * t * t;
    },
    // start fast with a long, slow wind-down
    easeOutQuint: function (t) {
      return 1 - Math.pow(1 - t, 5);
    },
    // slow start and finish with fast middle
    easeInOutCirc: function (t) {
      return t < 0.5
        ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2
        : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2;
    },
    // fast start with a "bounce" at the end
    easeOutBounce: function (t) {
      var n1 = 7.5625;
      var d1 = 2.75;

      if (t < 1 / d1) {
        return n1 * t * t;
      } else if (t < 2 / d1) {
        return n1 * (t -= 1.5 / d1) * t + 0.75;
      } else if (t < 2.5 / d1) {
        return n1 * (t -= 2.25 / d1) * t + 0.9375;
      } else {
        return n1 * (t -= 2.625 / d1) * t + 0.984375;
      }
    },
  };

  var animationOptions = {
    duration: 10,
    easing: easingFunctions.easeInCubic,
    offset: [20, 20],
    animate: true,
    essential: true, // animation will happen even if user has `prefers-reduced-motion` setting on
  };

  useEffect(() => {
    //calculate the title location.
    if (props.currentIndex === props.index) {
      const rotateValue = props.progress - 1.25;
      console.log(rotateValue);
      if (rotateValue < -1) {
        setTitleRotate(rotateValue);
      } else {
        setTitleRotate(0);
      }
    } else {
      setTitleRotate(-0.25);
    }
  }, [props.progress]);

  function easeInCubic(t) {
    return t * t * t;
  }
  let map = useContext(MapContext);
  useEffect(() => {
    if (props.currentIndex === props.index) {
      //https://docs.mapbox.com/mapbox-gl-js/example/camera-animation/
      var offsetX = parseInt("0", 10);
      var offsetY = parseInt("0", 10);
      var easingFn = easingFunctions["easeInCubic"];

      var animationOptions = {
        duration: 1000,
        easing: easeInCubic,
        offset: [0, 0],
        animate: "Yes",
        essential: true, // animation will happen even if user has `prefers-reduced-motion` setting on
        center: [0, 0],
      };

      var center = [
        -95 + (Math.random() - 0.5) * 20,
        40 + (Math.random() - 0.5) * 20,
      ];
      map.getSource("center").setData({
        type: "Point",
        coordinates: center,
      });
      animationOptions.center = center;
      map.flyTo(animationOptions);
      map.setLayoutProperty(
        "center",
        "text-field",
        "Center: [" + center[0].toFixed(1) + ", " + center[1].toFixed(1) + "]"
      );
    }
  }, [props.currentIndex]);

  const myStyle =
    props.currentIndex === props.index ? homeStyles.red : homeStyles.blue;
  return (
    <div className={myStyle}>
      <div className={styles.title} id="AdventureInEngineering">
        Adventures in Software Engineering!
      </div>
      {props.progress}
      <style jsx={true}>
        {`
          #AdventureInEngineering {
            transform: rotate(${titleRotate}turn);
            transform-origin: bottom right;
            float: right;
          }
        `}
      </style>
    </div>
  );
}

export default Section2;
//https://medium.com/@jeffbutsch/using-d3-in-react-with-hooks-4a6c61f1d102
//https://wattenberger.com/blog/d3#dealing-with-colors
