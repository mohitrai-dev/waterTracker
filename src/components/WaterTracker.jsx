import React, { useState, useEffect } from "react";
import congrats from "../assets/img/achievement.gif";
const WaterTracker = () => {
  const [filledCups, setFilledCups] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const handleCupClick = (cupIndex) => {
    if (cupIndex === 7 && filledCups === 8) return;
    setFilledCups(cupIndex + 1);
  };

  const totalCups = 8;
  const fullCups = filledCups;
  const percentage = (fullCups / totalCups) * 100;
  const remainingLiters = (2 - fullCups * 0.25).toFixed(2);

  useEffect(() => {
    if (percentage === 100) {
      setShowSuccess(true);
    } else {
      setShowSuccess(false);
    }
  }, [percentage]);

  return (
    <div className="min-h-screen flex flex-col  justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <h1 className="text-3xl font-bold text-black mt-10">Drink Water</h1>
      <h3 className="text-xl text-black mt-0">Goal: 2 liters</h3>
      <div className="flex justify-center items-center gap-10">
        <div className="cup relative bg-white w-40 h-80 rounded-t-3xl mt-0flex items-end justify-center overflow-hidden shadow-xl border-4 border-[#144fc6]">
          <div
            className="remained absolute top-0 w-full text-center text-[#144fc6] p-2"
            id="remained"
          >
            <span id="liters" className="text-xl font-bold">
              {remainingLiters}L
            </span>
            <small className="text-xs">Remained</small>
          </div>

          <div
            className="percentage absolute bottom-0 left-0 w-full flex justify-center items-center text-2xl font-bold bg-[#6ab3f8] transition-all"
            id="percentage"
            style={{ height: `${percentage}%` }}
          >
            {fullCups > 0 && `${Math.round(percentage)}%`}
          </div>
        </div>
        {showSuccess && (
          <p className="text-black mt-2 text-xl">
            Goal Reached!
            <img src={congrats} alt="congrats" />
          </p>
        )}
      </div>

      <p className="mt-2 text-center text-black">
        Select how many glasses of water you’ve drunk
      </p>

      <div className="cups flex flex-wrap gap-2 mt-2 space-x-1">
        {Array.from({ length: totalCups }).map((_, cupIndex) => (
          <div
            key={cupIndex}
            className={`cup-small w-12 h-16 bg-white mx-1 cursor-pointer rounded-md flex justify-center items-center text-xs border border-1px transition-all duration-300 
            ${
              cupIndex < filledCups
                ? "bg-[#6ab3f8] text-black"
                : "bg-[#ffffff] text-[#144fc6]"
            }`}
            onClick={() => handleCupClick(cupIndex)}
          >
            250 ml
          </div>
        ))}
      </div>
    </div>
  );
};

export default WaterTracker;
