import React from "react";
import styles from "../home.module.css";
function Section1(props) {
  return (
    <div className={styles.s1_welcome}>
      <h1>Welcome to my website!</h1>
      <p>
        I hope you enjoy your stay. My name is Zach and this is my personal web
        page. Let’s face it, if you work with JavaScript professionally, you are
        expected to have a webpage.
      </p>
      <p>
        I love JavaScript, but there is more to the story, this website is a way
        where you can get to know me better, in something beyond a Github
        profile.
      </p>
      <p>
        My personal adventures began on the East Coast, where I was born. From
        an early age, I had an interest in solving problems. Allegedly when four
        years old, I told my grand mother I wanted a scuba tank, “Oh Zachary, I
        did not know you could swim”, my response: “I can’t, that’s why I need
        the scuba tank.” See, early on I had a basic understanding that
        technology can be used to solve difficult problems.
      </p>
    </div>
  );
}

export default Section1;
