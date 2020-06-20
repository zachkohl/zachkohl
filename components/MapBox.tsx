//pk.eyJ1IjoiemtvaGwiLCJhIjoiY2tiaDNnbDkxMDFrODJxbHR3MDFhZ2E3YyJ9.0wJCdTUehYlotuvU7L_I4w
import * as mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import React, { useState, useEffect } from "react";

function MapBox(props) {
  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX;
    var map = new mapboxgl.Map({
      container: "mapbox",
      style: "mapbox://styles/mapbox/streets-v11",
    });
  }, []);

  return <div id="mapbox" style={{ position: "fixed" }}></div>;
}
export default MapBox;
