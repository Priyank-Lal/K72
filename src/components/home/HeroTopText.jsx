import React from "react";
import Video from "./Video";

const HeroTopText = () => {
  return (
    <>
      <div className="font-[LA-300] !pt-5 text-center">
        <div className="text-[9.5vw] flex justify-center items-center uppercase leading-[8vw]">
          L'étincelle
        </div>
        <div className="text-[9.5vw] flex justify-center items-center uppercase leading-[8vw]">
          qui
          <div className="h-[7vw] w-[16vw] rounded-full overflow-hidden -mt-5">
            <Video  />
          </div>
          génère
        </div>
        <div className="text-[9.5vw] flex justify-center items-center uppercase leading-[8vw]">
          la créativité
        </div>
      </div>
    </>
  );
};

export default HeroTopText;
