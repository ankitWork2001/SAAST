import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex flex-col flex-1 bg-gray-400 h-screen">
        <Navbar />
        <main className="p-6 overflow-y-auto ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
