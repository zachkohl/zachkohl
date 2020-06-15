import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";

function Section2(props) {
  return (
    <div
      style={{
        margin: "50vh 0",
        border: "1px solid gray",
        opacity: props.currentStepIndex === 2 ? 1 : 0.2,
      }}
    >
      content area 2
    </div>
  );
}

export default Section2;
