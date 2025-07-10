import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex h-screen bg-[#010B24] text-white">
      <Sidebar />
      <div className="flex flex-col flex-1 bg-[linear-gradient(to_bottom,_#001434,_#1A1F3700)] h-screen">
        <Navbar />
        <main className="p-6 overflow-y-auto ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
