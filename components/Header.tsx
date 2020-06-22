import React, { useMemo } from "react";
import Link from "next/link";
import HeaderItem from "./HeaderItem";
function Header(props) {
  const headerItems = [
    {
      url: "https://www.linkedin.com/in/zacharykohl/",
      text: "LinkedIn",
      image: "linkedin.png",
    },
    {
      url: "https://github.com/zachkohl",
      text: "Github",
      image: "/GitHub-Mark-32px.png",
    },
  ];

  const ReactList = useMemo(
    () =>
      headerItems.map((item, i) => {
        return (
          <HeaderItem
            url={item.url}
            text={item.text}
            image={item.image}
            key={i}
          />
        );
      }),
    headerItems
  );

  return <span>{ReactList}</span>;
}
export default Header;
