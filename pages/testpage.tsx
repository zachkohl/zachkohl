import React, { useEffect } from "react";
import dynamic from "next/dynamic";
const Home = dynamic(() => import("../components/Home"), { ssr: false });
import * as mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
function HomePage(props) {
  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX;
    const map = new mapboxgl.Map({
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
  return <div id="mapbox"></div>;
}

export default HomePage;
