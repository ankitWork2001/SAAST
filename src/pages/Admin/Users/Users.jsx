import React from "react";
import { FaSearch } from "react-icons/fa";

const users = [
  {
    name: "Jane Smith",
    email: "jane.smith@gmail.com",
    joined: "May 23, 2025",
    status: "Active",
    subscription: "Premium",
    plan: "Monthly",
  },
  {
    name: "Michael Johnson",
    email: "michel.j@gmail.com",
    joined: "Jan 12, 2025",
    status: "Active",
    subscription: "Ultimate",
    plan: "Monthly",
  },
  {
    name: "Emily Brown",
    email: "emilybrown@gmail.com",
    joined: "Feb 23, 2025",
    status: "Expired",
    subscription: "Essential",
    plan: "Yearly",
  },
  {
    name: "Daniel Wilson",
    email: "wilson.d@gmail.com",
    joined: "Apr 07, 2025",
    status: "Active",
    subscription: "Premium",
    plan: "Monthly",
  },
  {
    name: "Olivia Taylor",
    email: "olivia.t7@gmail.com",
    joined: "Dec 25, 2025",
    status: "Active",
    subscription: "Premium",
    plan: "Monthly",
  },
<<<<<<< HEAD
  
=======
>>>>>>> admin/plan
  {
    name: "Olivia Taylor",
    email: "olivia.t7@gmail.com",
    joined: "Dec 25, 2025",
    status: "Expired",
    subscription: "Ultimate",
    plan: "Monthly",
  },
  {
    name: "Olivia Taylor",
    email: "olivia.t7@gmail.com",
    joined: "Dec 25, 2025",
    status: "Active",
    subscription: "Essential",
    plan: "Monthly",
  },
  {
    name: "Olivia Taylor",
    email: "olivia.t7@gmail.com",
    joined: "Dec 25, 2025",
    status: "Expired",
    subscription: "Ultimate",
    plan: "Monthly",
  },
];

function Users() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Users</h2>
        <div className="flex items-center bg-[#1E293B] rounded-lg overflow-hidden px-2">
          <input
            type="text"
            placeholder="Search User"
            className="bg-transparent text-white px-3 py-2 outline-none"
          />
          <FaSearch className="text-cyan-400" />
        </div>
      </div>

      <div className="bg-[#1E293B] rounded-lg overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-[#1E293B] text-gray-300">
              <th className="px-4 py-3">Users Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Joined</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Subscription</th>
              <th className="px-4 py-3">Plan</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-[#0F172A]" : "bg-[#1E293B]"}
              >
                <td className="px-4 py-3">{u.name}</td>
                <td className="px-4 py-3">{u.email}</td>
                <td className="px-4 py-3">{u.joined}</td>
                <td className={`px-4 py-3 ${u.status === "Active" ? "text-green-400" : "text-red-400"}`}>
                  {u.status}
                </td>
                <td className="px-4 py-3 text-yellow-400">{u.subscription}</td>
                <td className="px-4 py-3">{u.plan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
