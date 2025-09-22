import React from "react";
import Video from "../components/home/Video";
import HeroBottom from "../components/home/HeroBottom";
import HeroTopText from "../components/home/HeroTopText";

const Home = () => {
  return (
    <>
      <div className="h-screen w-screen bg-gray-100 fixed">
        <Video />
      </div>
      <div className="h-screen w-scree relative">
        <HeroTopText/>
        <HeroBottom />
      </div>
    </>
  );
};

export default Home;
