import React from "react";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import { useEffect, useState } from 'react';
import axios from 'axios';
import PricingCard from "./PricingCard.jsx";

const Plans = () => {

  const [plans, setPlans] = useState([]);
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:3000/api/view-allPlans', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPlans(res.data); 
      } catch (err) {
        console.error('Failed to fetch plans:', err);
      }
    };

    fetchPlans();
  }, []);

  return (
    <div className="bg-[#0A0E1B] min-h-screen flex flex-col items-center justify-center py-20 px-4">
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {plans.map((plan) => (
          <PricingCard key={plan._id} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Plans;
