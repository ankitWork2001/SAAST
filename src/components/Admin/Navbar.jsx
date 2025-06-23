import { FaBell, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] px-6 py-4 shadow flex justify-between items-center">
      {/* Search */}
      <input
        type="text"
        placeholder="Search"
        className="px-4 py-2 rounded-full bg-gray-700 text-white placeholder:text-gray-300 w-64 focus:outline-none"
      />

      {/* Right side */}
      <div className="flex items-center gap-6">
        <FaBell className="text-xl cursor-pointer" />
        <FaEnvelope className="text-xl cursor-pointer" />

        <div className="flex items-center gap-3">
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-sm">
            <p className="font-semibold">Sean Mackey</p>
            <p className="text-gray-400 text-xs">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
