import React from "react";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";

import PricingCard from "./PricingCard.jsx";

const Plans = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#00040F] to-[#000211] text-white px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Choose Your Plan
      </h1>
      <div>
        <div className="bg-[#0A0E1B] min-h-screen flex flex-col items-center justify-center py-20 px-4">
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <PricingCard plan="essential" />
            <PricingCard plan="premium" />
            <PricingCard plan="ultimate" />
          </div>
        </div>
      </div>

      {/* Card Images */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
        {/* <img src={card1} alt="Essential Plan" className="w-[320px] md:w-[360px]"/> */}
        {/* <img src={card2} alt="Ultimate Plan" className="w-[320px] md:w-[360px] mt-8 md:mt-12"/> */}
        {/* <img src={card3} alt="Premium Plan" className="w-[320px] md:w-[360px]"/> */}
      </div>
    </div>
  );
};

export default Plans;
