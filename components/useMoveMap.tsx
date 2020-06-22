import React, { useContext } from "react";
import { MapContext } from "./Home";
function useMoveMap() {
  let map = useContext(MapContext);

  return (newCordinatesArray, newTitle) => {
    //https://docs.mapbox.com/mapbox-gl-js/example/camera-animation/

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

    var center = newCordinatesArray;
    map.getSource("center").setData({
      type: "Point",
      coordinates: center,
    });
    animationOptions.center = center;
    map.flyTo(animationOptions);
    map.setLayoutProperty("center", "text-field", newTitle);
  };
}
export default useMoveMap;
