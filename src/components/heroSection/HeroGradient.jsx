import React from "react";

const HeroGradient = () => {
  return (
    <div>
      <div className="shadow-cyanMedium absolute top-0 left-0  -z-10 animate-bounce"></div>
      <div className="shadow-orangeMedium absolute right-[10px] top-0 -z-10 animate-pulse"></div>
      <div className="shadow-cyanMedium absolute top-[300px] left-0 -z-10 opacity-30"></div>
      <div className="shadow-orangeMedium/80 absolute top-[500px] left-0 -z-10 opacity-30"></div>
    </div>
  );
};

export default HeroGradient;
