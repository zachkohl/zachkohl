import React from "react";
import dynamic from "next/dynamic";
const Home = dynamic(() => import("../components/Home"), { ssr: false });

function HomePage(props) {
  return <Home />;
}

export default HomePage;
