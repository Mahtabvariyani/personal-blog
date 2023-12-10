"use client";
import Lottie from "lottie-react";
import React from "react";
import joght from "@/public/joght.json";
import fourth from "@/public/fourth.json";
import fun from "@/public/fun.json";

const lottieIcons = [
  {
    data: joght,
  },
  {
    data: fourth,
  },
  {
    data: fun,
  },
];

const Lottiee = () => {
  return (
    <div className="flex flex-col mt-8 md:flex-row md:items-center bg-white">
      {lottieIcons.map((icon, index) => (
        <div
        
          key={index}
          className="mb-4 flex-shrink-0 md:mb-0 md:mr-4 lg:w-[350px] md:w-[300px] xs:w-full xs:flex"
        >
          <Lottie animationData={icon.data} />
        </div>
      ))}
    </div>
  );
};

export default Lottiee;
