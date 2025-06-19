import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu, X, ChevronDown } from "lucide-react";

// Image imports
import toolkit from "../assets/toolkit.png";
import toolkitHover from "../assets/toolkit-hover.png";
import screener from "../assets/screener.png";
import screenerHover from "../assets/screener-hover.png";
import aibacktest from "../assets/aitest.png";
import aibacktestHover from "../assets/aitest-hover.png";

// Features dropdown data
const featuresData = [
  {
    title: "Toolkits",
    desc: "Keep it simple & use our pro workflows",
    defaultImg: toolkit,
    hoverImg: toolkitHover,
    path: "/features/toolkits",
  },
  {
    title: "Screeners",
    desc: "Scan assets using any features",
    defaultImg: screener,
    hoverImg: screenerHover,
    path: "/features/screeners",
  },
  {
    title: "AI backtesting Assistant",
    desc: "Build strategies with our AI platform",
    defaultImg: aibacktest,
    hoverImg: aibacktestHover,
    path: "/features/backtesters",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [clickedOpen, setClickedOpen] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const featureRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (featureRef.current && !featureRef.current.contains(event.target)) {
        setShowFeatures(false);
        setClickedOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-medium px-4 py-2 lg:px-20 bg-transparent">
      <div className="relative flex items-center justify-between h-[81px]">
        {/* Logo */}
        <Link to="/" className="w-[166px] h-[81px] flex items-center">
          <img
            src={logo}
            alt="TradeSpark Logo"
            className="w-full h-full object-contain"
          />
        </Link>

        {/* Center Nav */}
        <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[15px] items-center justify-around shadow-md bg-gray-500/60 w-[90vw] max-w-[400px] h-[55px]">
          {/* Features Dropdown Wrapper */}
          <div
            className="relative"
            onMouseEnter={() => !clickedOpen && setShowFeatures(true)}
            onMouseLeave={() => !clickedOpen && setShowFeatures(false)}
            ref={featureRef}
          >
            <div
              className="flex items-center justify-center gap-1 cursor-pointer"
              onClick={() => {
                setShowFeatures(!showFeatures);
                setClickedOpen(!showFeatures);
              }}
            >
              <span className="text-white text-[16px] font-medium hover:text-[#38bdf8] transition">
                Features
              </span>
              <ChevronDown
                size={16}
                className={`text-white mt-1 mr-1 transition-transform duration-300 ${
                  showFeatures ? "rotate-180 text-[#38bdf8]" : "rotate-0"
                }`}
              />
            </div>

            {/* Features Dropdown */}
            {showFeatures && (
              <div className="absolute top-[60px] left-1/2 -translate-x-1/2 flex flex-col sm:flex-row gap-4 ml-20 sm:gap-8 p-4 sm:p-8 rounded-3xl shadow-2xl bg-opacity-80 backdrop-blur-xl z-40 w-[95vw] max-w-[960px]">
                {featuresData.map((card, idx) => (
                  <Link
                    key={card.title}
                    to={card.path}
                    className="w-[350px] h-[310px] rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-105"
                    onMouseEnter={() => setHoveredCardIndex(idx)}
                    onMouseLeave={() => setHoveredCardIndex(null)}
                    onClick={() => {
                      setShowFeatures(false);
                      setClickedOpen(false);
                    }}
                  >
                    <img
                      src={
                        hoveredCardIndex === idx
                          ? card.hoverImg
                          : card.defaultImg
                      }
                      alt={card.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/pricing"
            className="text-white text-[16px] font-medium hover:text-[#38bdf8] transition"
          >
            Pricing
          </Link>
          <Link
            to="/support"
            className="text-white text-[16px] font-medium hover:text-[#38bdf8] transition"
          >
            Help
          </Link>
          <Link
            to="/about"
            className="text-white text-[16px] font-medium hover:text-[#38bdf8] transition"
          >
            About
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link
            to="/login"
            className="w-[99px] h-[37px] text-white border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="w-[99px] h-[37px] bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition"
          >
            Sign in
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="text-white" />
            ) : (
              <Menu className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-2 z-[60] rounded-md shadow-md p-4 space-y-4 text-white text-center bg-gray-800">
          <Link
            to="/features"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-400"
          >
            Features
          </Link>
          <Link
            to="/pricing"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-400"
          >
            Pricing
          </Link>
          <Link
            to="/support"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-400"
          >
            Help
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-400"
          >
            About
          </Link>
          <div className="flex flex-col gap-2 pt-2">
            <Link
              to="/login"
              className="w-full border border-white py-2 rounded-full hover:bg-white hover:text-black transition"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="w-full bg-white text-black py-2 rounded-full hover:bg-gray-300 transition"
            >
              Sign in
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
