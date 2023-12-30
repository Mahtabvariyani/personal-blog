"use client";
import Lottie from "lottie-react";
import React from "react";
import finding from "@/public/finding.json";

const Calculator = () => {
  return (
    <div className="pt-20 -mb-10">
      <Lottie animationData={finding} className="h-[20rem]" />
    </div>
  );
};

export default Calculator;
