import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import Section1 from "./s1_welcome";
import Section2 from "./Section2/Section2";
import "intersection-observer";
import scrollama from "scrollama";
import ChangeColor from "./ChangeColor";
import Scrolly from "./Scrolly";
import Header from "./Header";
import * as mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
//import mapStyles from "./mapStyle.module.css";
var map;
export const MapContext = React.createContext(map);

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

function Home(props) {
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX;
    map = new mapboxgl.Map({
      container: "mapbox",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-75, 39],
      zoom: 3,
    });
    map.on("load", function () {
      // add a layer to display the map's center point
      map.addSource("center", {
        type: "geojson",
        data: {
          type: "Point",
          coordinates: [-75.165222, 39.952583],
        },
      });
      map.addLayer({
        id: "center",
        type: "symbol",
        source: "center",
        layout: {
          "icon-image": "marker-15",
          "text-field": "Philadelphia",
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0, 0.6],
          "text-anchor": "top",
        },
      });
    });
    //   map.flyTo(animationOptions);
    // var center = [
    //   -95 + (Math.random() - 0.5) * 20,
    //   40 + (Math.random() - 0.5) * 20,
    // ];
    // map.getSource("center").setData({
    //   type: "Point",
    //   coordinates: center,
    // });
    // map.setLayoutProperty(
    //   "center",
    //   "text-field",
    //   "Center: [" + center[0].toFixed(1) + ", " + center[1].toFixed(1) + "]"
    // );
  }, []);

  function onClickHandler(e) {
    var offsetX = parseInt("0", 10);
    var offsetY = parseInt("0", 10);
    var easingFn = easingFunctions["easeInCubic"];
    function easeInCubic(t) {
      return t * t * t;
    }

    var animationOptions = {
      duration: 1000,
      easing: easeInCubic,
      offset: [0, 0],
      animate: "Yes",
      essential: true, // animation will happen even if user has `prefers-reduced-motion` setting on
      center: [0, 0],
    };

    var center = [39.9526, -75.1652];
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

  return (
    <MapContext.Provider value={map}>
      <div className={styles.header}>
        <Header />
      </div>
      <div>
        <div className={styles.home}>
          <div className={styles.contentArea}>
            <div className={styles.bigArea}>
              <Scrolly
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
              />
            </div>
            <div className={styles.rightSideBar}>
              <div className={styles.mapWrapper}>
                {" "}
                <div id="mapbox" className={styles.mapCss}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MapContext.Provider>
  );
}

export default Home;
