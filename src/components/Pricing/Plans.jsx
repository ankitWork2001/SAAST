import React, { useEffect, useState } from "react";
import axios from "axios";
import PricingCard from "./PricingCard.jsx";

const Plans = () => {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState({ userId: "", name: "", role: "" });
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState("");

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:3000/api/view-allPlans", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPlans(res.data);
      } catch (err) {
        console.error("Failed to fetch plans:", err);
      }
    };

    fetchPlans();

    const userId = localStorage.getItem("userId");
    const name = localStorage.getItem("userName");
    const role = localStorage.getItem("role");
    setUser({ userId, name, role });
  }, []);

  const handleOpenModal = async (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:3000/api/admin/products", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(res.data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
    setSelectedProductId("");
  };

  const handleConfirmSubscribe = async () => {
    const startDate = new Date();
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 1);

    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:3000/api/user/add-plan", {
        userId: user.userId,
        planId: selectedPlan._id,
        productId: selectedProductId,
        startDate,
        endDate,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("✅ Subscription successful!");
      handleCloseModal();
    } catch (err) {
      alert("❌ Subscription failed!");
      console.error(err);
    }
  };

  return (
    <div className="bg-[#0A0E1B] min-h-screen flex flex-col items-center justify-center py-20 px-4">
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {plans.map((plan) => (
          <PricingCard key={plan._id} plan={plan} onSubscribe={handleOpenModal} />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedPlan && (
        <div className="fixed inset-0 z-50 bg-gray-800/50 bg-opacity-60 flex justify-center items-center px-4">
          <div className="bg-[#0A0E1B] px-36 py-18 rounded-lg md:w-[60vw] md:h-[60vh]">
            <h2 className="text-4xl text-center text-white font-bold mb-12">Confirm Plan Subscription</h2>

            <div className="mb-3 text-2xl text-white">
              <p><strong>Name:</strong> {user.name}</p>
            </div>

            <div className="mb-3 text-2xl text-white flex gap-16">
              <p><strong>Plan:</strong> {selectedPlan.name}</p>
              <p><strong>Price:</strong> ${selectedPlan.priceMonthly?.toFixed(2)}</p>
            </div>

            <div className="mb-4 text-white text-xl">
              <label className="font-semibold">Select Product:</label>
              <select
                className="w-full border border-gray-300 p-2 mt-1 uppercase bg-[#0A0E1B] rounded"
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
              >
                <option value="">-- Select Product --</option>
                {products.map((product) => (
                  <option key={product._id} value={product._id}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-end space-x-2">
              <button onClick={handleCloseModal} className="px-4 py-2 bg-gray-300 rounded">
                Cancel
              </button>
              <button
                onClick={handleConfirmSubscribe}
                disabled={!selectedProductId}
                className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
              >
                Confirm Subscription
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Plans;
