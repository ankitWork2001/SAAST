import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaChartLine,
  FaUsers,
  FaDollarSign,
  FaStar,
  FaCog,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navLinks = [
  { to: "/admin", label: "Dashboard", icon: <FaChartLine />, end: true },
  { to: "/admin/users", label: "Users", icon: <FaUsers /> },
  { to: "/admin/subscription", label: "Subscription", icon: <FaDollarSign /> },
  { to: "/admin/review", label: "Review", icon: <FaStar /> },
  { to: "/admin/settings", label: "Settings", icon: <FaCog /> },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const baseStyles = "flex items-center font-bold gap-3 px-10 py-4 mb-5 rounded-xl transition-all";
  const activeStyles = "bg-[#0594BB]/40 text-white";
  const inactiveStyles = "text-gray-300 hover:bg-gray-700 hover:text-white";

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-[#D9D9D9] p-2 rounded text-white"
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
      >
        <FaBars size={22} />
      </button>

      {/* Sidebar for desktop */}
      <aside className="w-86 bg-[#121b32] p-2 min-h-screen hidden md:block">
        <div className="flex flex-col justify-center items-center m-auto mt-10">
          <div className="text-white text-2xl font-bold h-35">
            <img src="logo.png" alt=""  />
          </div>
          <div className="flex flex-col h-auto mb-10">
            <div className="bg-white w-30 h-30 rounded-[50%] ">
            </div>
            <span className="text-center text-xl mt-2 font-medium">UserName</span>
          </div>
          <nav className="space-y-2 ">
            {navLinks.map(({ to, label, icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `${baseStyles} ${isActive ? activeStyles : inactiveStyles}`
                }

              >
                <span className="text-2xl p-2 rounded-xl">{icon}</span>
                <span className="text-2xl">{label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      {/* Sidebar for mobile */}
      {open && (
        <div className="fixed inset-0 z-40 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40"
            onClick={() => setOpen(false)}
          ></div>
          {/* Sidebar */}
          <aside className="relative w-64 bg-gray-800 p-4 min-h-screen z-50">
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setOpen(false)}
              aria-label="Close sidebar"
            >
              <FaTimes size={22} />
            </button>
            <div className="text-white text-2xl font-bold mb-8 mt-2">TradeSpark</div>
            <nav className="space-y-2">
              {navLinks.map(({ to, label, icon, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `${baseStyles} ${isActive ? activeStyles : inactiveStyles}`
                  }
                  onClick={() => setOpen(false)}
                >
                  <span className="text-lg">{icon}</span>
                  <span>{label}</span>
                </NavLink>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
