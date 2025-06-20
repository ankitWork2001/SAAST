import React, { useState } from "react";
import { Search } from "lucide-react";
import { IoSearch } from "react-icons/io5";
import bg from "./bgImg/bg.jpg";


const HeroSupport = () => {
  // Local state to hold search text
  const [searchQuery, setSearchQuery] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Logic to handle search (e.g. filter or navigate)
  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      console.log("Searching for:", searchQuery);
      // TODO: Add your actual search/filter logic here
    }
  };

  // Trigger search on Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
    <div className="relative w-full h-screen text-white">
      {/* Background Image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Centered content area */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Title */}
        <h1 className="text-4xl font-medium mb-6 bg-[linear-gradient(270deg,_#3B3B3B_0%,_#E3E3E3_100%)] bg-clip-text text-transparent">
          Help <span className="text-transparent bg-clip-text">Center</span>
        </h1>

        {/* Search Input Box */}
        <div className="relative w-full flex justify-center">
          <div
            className="p-[1px] rounded-[15px] relative"
            style={{
              background: "linear-gradient(90.21deg, #FFFFFF 1.03%, #79B6D8 100%)",
              width: "46rem",
              height: "41px",
            }}
          >
            {/* Text Input */}
            <input
              type="text"
              placeholder="Search for articles"
              value={searchQuery}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="pl-12 pr-16 w-full h-full text-[#C7C7C7] text-xl rounded-[15px] shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              style={{
                background: "linear-gradient(90.21deg,#010B24 1.03%,#222ABE 100%)",
              }}
            />

            {/* Left Search Icon inside input */}
            <span className="absolute left-4 ml-1 top-1/2 transform -translate-y-1/2 text-[#C7C7C7]">
              <IoSearch size={20} />
            </span>

            {/* Right Search Button with colored bg */}
            <button
              onClick={handleSearch}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[46px] h-[41px] rounded-[15px] flex items-center justify-center"
              style={{ backgroundColor: "#88D7FF" }}
              >
              <Search className="text-white font-medium" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
              </>
  );
};

export default HeroSupport;
