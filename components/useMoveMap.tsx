import React, { useContext, useEffect } from "react";
import { MapContext } from "./Home";
import * as mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
var map;
function useMoveMap() {
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
  }, []);
  return (newCordinatesArray, newTitle) => {
    //https://docs.mapbox.com/mapbox-gl-js/example/camera-animation/
    function easeInCubic(t) {
      return t * t * t;
    }
    if (map.loaded()) {
      var animationOptions = {
        duration: 1000,
        easing: easeInCubic,
        offset: [0, 0],
        animate: "Yes",
        essential: true, // animation will happen even if user has `prefers-reduced-motion` setting on
        center: [0, 0],
      };

      var center = newCordinatesArray;
      map.getSource("center")?.setData({
        type: "Point",
        coordinates: center,
      });
      animationOptions.center = center;
      map.flyTo(animationOptions);
      map.setLayoutProperty("center", "text-field", newTitle);
    }
  };
}
export default useMoveMap;
