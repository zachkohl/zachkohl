import React, { useEffect, useRef, useState, useContext } from "react";
import homeStyles from "../home.module.css";
import styles from "../home.module.css";
import useMoveMap from "../useMoveMap";

function Index(props) {
  const [titleRotate, setTitleRotate] = useState(-0.25);

  useEffect(() => {
    //calculate the title location.
    if (props.currentIndex === props.index) {
      const rotateValue = props.progress - 1.25;
      if (rotateValue < -1) {
        setTitleRotate(rotateValue);
      } else {
        setTitleRotate(0);
      }
    } else if (props.currentIndex > props.index) {
      setTitleRotate(0);
    } else {
      setTitleRotate(-0.25);
    }
  }, [props.progress]);

  const moveMap = useMoveMap();
  useEffect(() => {
    if (props.currentIndex === props.index) {
      moveMap([-158.0627, 21.4955], "Hawaii");
    }
  }, [props.currentIndex]);

  return (
    <div>
      <div className={styles.title} id="s5">
        Playing Journalist
      </div>
      <p>
        I did get the honor of visiting Afghanistan. That country changed my
        view of the world. Fortunately, I was gifted to be deployed as part of
        an amazing unit with great leadership that understood the importance of
        actually talking with people, of learning as much about a situation
        before making rash decisions as possible, and when necessary, acting
        decisively. It turned out that many of the previous units had never
        taken the time to really get to know the locals, to learn their customs
        and show them hospitality. We did, and we used this knowledge to start
        to build an intelligence diagram that showed what was really going on.
      </p>
      <p>
        This process also started to re-kindle my fire for working with
        technology. We used a web-based map overlay hooked up to a geospatial
        database that allowed us to store facts about the area as we learned
        them. As we learned what was going on, what the patterns of life where,
        we learned the real issues. Turned out it was not, at least in our area,
        a struggle for ideological purity, but instead feud about water
        resources. This was a major revelation, one we used to our advantage. We
        really just wanted the place to be peaceful so we could leave, as such,
        we build wells and negated with different local leaders to find an end
        to the violence. The results of this approach were miraculous, the local
        Taliban commander actually switched sides! There was more to it than
        this short paragraph can describe, but when I got to shake that man’s
        hand, the man who had killed Americans whose funerals I personally
        attended, it was a major experience in my life. It taught me a lot about
        the power of listening, and also got me wondering what other problems
        could be solved by efficiently applying information technology.
      </p>
      <style jsx={true}>
        {`
          #s5 {
            transform: rotate(${titleRotate}turn);
            transform-origin: bottom right;
            float: right;
          }
        `}
      </style>
    </div>
  );
}

export default Index;
