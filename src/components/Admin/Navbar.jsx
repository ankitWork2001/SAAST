import { FaBell, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="bg-[linear-gradient(135deg,_rgba(1,11,36,1)_11%,_rgba(24,35,255,1)_100%)] px-6 py-4 shadow flex justify-between items-center">
      {/* Search */}
      <input
        type="text"
        placeholder="Search"
        className="px-6 py-4 rounded-full bg-white text-xl font-bold text-gray-600 placeholder:text-gray-500 w-64 focus:outline-none"
      />

      {/* Right side */}
      <div className="flex items-center gap-6">
        <FaBell className="text-3xl cursor-pointer" />
        <FaEnvelope className="text-3xl cursor-pointer" />

        <div className="flex items-center gap-3 hidden">
          <img
            src="https://tse3.mm.bing.net/th?id=OIF.rUYbmkSK1AxXimTUVaBnmA&pid=Api&P=0&h=180"
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-sm hidden">
            <p className="font-semibold">Sean Mackey</p>
            <p className="text-gray-400 text-xs">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
