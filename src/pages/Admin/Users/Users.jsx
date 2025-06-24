import React from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import "../../../App.css";

const employees = [
  {
    name: "Hitesh Odedara",
    email: "ohitesh@gmail.com",
    phone: "7567856938",
    position: "UI/UX Designer",
  },
  {
    name: "Raj Odedara",
    email: "raj003@gmail.com",
    phone: "8356497621",
    position: "Graphic Designer",
  },
  {
    name: "Keval Lakiya",
    email: "lk007@gmail.com",
    phone: "8849766123",
    position: "Web Developer",
  },
  {
    name: "Manali Jadav",
    email: "mjod7@gmail.com",
    phone: "9820760044",
    position: "Data Analysis",
  },
  {
    name: "Nitin Manek",
    email: "nitinm7@gmail.com",
    phone: "8174685298",
    position: "UI/UX Designer",
  },
  {
    name: "Utsav Karena",
    email: "ukarena@gmail.com",
    phone: "9325182612",
    position: "Backend Developer",
  },
  {
    name: "Diva Odedara",
    email: "divaodh@gmail.com",
    phone: "9558952878",
    position: "HR Executive",
  },
];

function Users() {
  return (
    <div className="text-white bg-[#101b3c] min-h-screen flex font-sans">
      {/* Sidebar */}
      <div className="w-72 bg-[#0e153a] p-5 space-y-6">
        <div className="text-2xl font-bold text-pink-500 main-logo">VaishaliTech</div>
        <nav className="space-y-4 text-sm sideBar">
          <button className="block w-full text-left px-3 py-2 rounded hover:bg-[#1d2a5c]">📊 Dashboard</button>
          <button className="block w-full text-left px-3 py-2 rounded hover:bg-[#1d2a5c]">➕ Add Employee</button>
          <button className="block w-full text-left px-3 py-2 bg-[#1d2a5c] rounded">📋 Employee Directory</button>
          <button className="block w-full text-left px-3 py-2 rounded hover:bg-[#1d2a5c]">📩 Leave Requests</button>
          <button className="block w-full text-left px-3 py-2 rounded hover:bg-[#1d2a5c]">📁 Document Tracker</button>
          <button className="block w-full text-left px-3 py-2 rounded hover:bg-[#1d2a5c]">👤 Profile View</button>
          <button className="block w-full text-left px-3 py-2 text-red-400 hover:bg-red-800">🚪 Log Out</button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 bg-[#0e1a3a]">
        <h2 className="text-3xl mb-8 font-semibold main-logo">Employee Directory</h2>

        {/* Search and Filter */}
        <div className="flex items-center gap-6 mb-8">
          <input
            type="text"
            placeholder="Search..."
            className="p-3 rounded w-96 text-black"
          />
          <select className="p-3 text-black rounded">
            <option>All</option>
            <option>UI/UX Designer</option>
            <option>Developer</option>
            <option>HR</option>
          </select>
        </div>

        {/* Table */}
        <div className="overflow-auto">
          <table className="w-full text-left border-separate border-spacing-y-3">
            <thead>
              <tr className="text-lg bg-[#1d2a5c]">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone No.</th>
                <th className="p-3">Position</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, index) => (
                <tr key={index} className="bg-[#1a2a50] rounded">
                  <td className="p-3 text-[20px]">{emp.name}</td>
                  <td className="p-3 text-[20px]">{emp.email}</td>
                  <td className="p-3 text-[20px]">{emp.phone}</td>
                  <td className="p-3 text-[20px]">{emp.position}</td>
                  <td className="p-3 flex gap-4">
                    <FaEdit className="text-yellow-400 cursor-pointer text-xl" />
                    <FaEye className="text-green-400 cursor-pointer text-xl" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
