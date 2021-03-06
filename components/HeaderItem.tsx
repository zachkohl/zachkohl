import React, { useState } from "react";
import Link from "next/link";
import styles from "./home.module.css";
function HeaderItem(props) {
  const [myStyle, setMyStyle] = useState(styles.nonHighlightedHeader);
  function onEnterHandler() {
    setMyStyle(styles.highlightedHeader);
  }
  function onLeaveHandler() {
    setMyStyle(styles.nonHighlightedHeader);
  }

  return (
    <span onMouseEnter={onEnterHandler} onMouseLeave={onLeaveHandler}>
      <a target="blank" href={props.url}>
        <img src={props.image} className={myStyle} />
      </a>
    </span>
  );
}
export default HeaderItem;
