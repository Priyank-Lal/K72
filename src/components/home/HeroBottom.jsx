import React from "react";
import { Link } from "react-router-dom";

const HeroBottom = () => {
  return (
    <>
      <div className="font-[LA-500] flex items-center justify-center gap-4 ">
        <div className="border-3 h-23 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center px-9 border-white rounded-full uppercase">
          <Link className="text-[6vw] mt-6" to="/projects">
            Projects
          </Link>
        </div>
        <div className="border-3 h-23 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center px-9 border-white rounded-full uppercase">
          <Link className="text-[6vw] mt-6" to="/agence">
            Agence
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroBottom;
