import React, { useEffect, useState } from "react";
import axios from "axios";


function Subscription() {

  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:3000/api/view-allPlans", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPlans(res.data);
      } catch (error) {
        alert(error.response?.data?.message || "Failed to fetch users");
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white p-6">
      <h2 className="text-xl font-semibold mb-6">Pricing</h2>

      <div className="space-y-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-[#1E293B] rounded-lg p-5 space-y-4"
          >
            {/* Plan Name */}
            <h3 className="text-lg font-medium">{plan.name}</h3>

            {/* Price, Duration, Edit - Horizontally aligned */}
            <div className="flex flex-wrap sm:flex-nowrap gap-85">
              <input
                type="text"
                value={`$${plan.priceMonthly}`}
                readOnly
                className="bg-[#0F172A] text-white px-3 py-2 rounded-md outline-none w-32"
              />
              <select
                defaultValue={plan.duration}
                className="bg-[#0F172A] text-white px-3 py-2 rounded-md outline-none w-32"
              >
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-4 py-2 rounded-md">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subscription;
