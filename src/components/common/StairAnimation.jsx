import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const StairAnimation = ({ children }) => {
  const stairAnimationParentRef = useRef(null);
  const AppComponentRef = useRef(null);

  const currentPath = useLocation().pathname;

  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline.to(stairAnimationParentRef.current, {
      display: "block",
    });

    timeline.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });

    timeline.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });

    timeline.to(stairAnimationParentRef.current, {
      display: "none",
    });

    timeline.to(".stair", {
      y: 0,
    });

    gsap.from(AppComponentRef.current, {
      opacity: 0,
      scale: 1.3,
      delay: 1.3,
    });
  }, [currentPath]);
  return (
    <>
      <div
        ref={stairAnimationParentRef}
        className="h-screen w-full fixed z-99"
      >
        <div className="h-full w-full flex ">
          <div className="bg-black w-1/5 h-full stair"></div>
          <div className="bg-black w-1/5 h-full stair"></div>
          <div className="bg-black w-1/5 h-full stair"></div>
          <div className="bg-black w-1/5 h-full stair"></div>
          <div className="bg-black w-1/5 h-full stair"></div>
        </div>
      </div>
      <div ref={AppComponentRef}>{children}</div>
    </>
  );
};

export default StairAnimation;
