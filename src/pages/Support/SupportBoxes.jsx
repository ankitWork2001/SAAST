import React from "react";
import {
  FaArrowRight,
  FaUser,
  FaDollarSign,
  FaChartLine,
} from "react-icons/fa";
import frameBg from "./bgImg/Frame.png";

const supportItems = [
  {
    icon: <FaArrowRight size={40} />,
    title: "Getting Started",
    description: "Learn the basics to start trading",
  },
  {
    icon: <FaUser size={40} />,
    title: "Account",
    description: "Managing your account information",
  },
  {
    icon: <FaDollarSign size={40} />,
    title: "Deposits & Withdrawals",
    description: "How to deposit and withdraw funds",
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Trading",
    description: "Understanding trading and orders",
  },
];

const SupportBoxes = () => {
  return (
    <div
      className="w-full py-20 px-4  bg-[#192143] bg-cover bg-center"
      style={{
        backgroundImage: `url(${frameBg})`,
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap justify-evenly gap-8">
        {supportItems.map((item, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center justify-center px-4 py-6 rounded-3xl border border-white "
            style={{
              width: "257px",
              height: "350px",

              background:
                "linear-gradient(90deg, rgb(10 9 33 / 44%) 0%, rgba(10, 9, 33, 0.44) 0%, rgb(20 28 214 / 44%)",

              borderImageSlice: 1,
            }}
          >
            {/* Icon Circle */}
            <div
              className="flex items-center justify-center mb-6"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "3px solid #88D7FF",
                color: "#AEE6FF",
              }}
            >
              {item.icon}
            </div>

            {/* Title */}
            <h3
              className="text-white mb-4 "
              style={{
             
                fontWeight: 500,
                fontSize: "32px",
                lineHeight: "34px",
                letterSpacing: "-0.055em",
                textAlign: "center",
              }}
            >
              {item.title}
            </h3>

            {/* Description */}
            <p
              className="text-[#C7C7C7]"
              style={{
                              fontWeight: 400,
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: "0.01em",
                textAlign: "center",
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportBoxes;
