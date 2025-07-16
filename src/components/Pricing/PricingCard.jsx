import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CheckCircle, Crown, Gem } from 'lucide-react';

const features = {
  essential: {
    title: 'Essential',
    price: '$39.99',
    description: 'Start out strong & automate price action, the most essential part of your charts.',
    items: [
      'Price Action Concepts toolkit + screener',
      'Community access w/ price action alerts',
      'Custom Alert Creator for PAC toolkit',
      'Alert Scripting for Price Action Concepts',
      '24/7 support & active toolkit updates',
    ],
    icon: <CheckCircle className="text-green-500" />,
    color: 'from-blue-800 to-blue-900',
  },
  premium: {
    title: 'Premium',
    price: '$67.99',
    description: 'The most powerful set of tools & signals ever created for technical traders.',
    items: [
      'Signals & Overlays toolkit + screener',
      'Oscillator Matrix toolkit + screener',
      'Full scanner alerts & user strategies',
      'Custom Alert Creator for all 3 toolkits',
      'Alert Scripting functionality for all 3 toolkits',
    ],
    icon: <Gem className="text-blue-400" />,
    color: 'from-indigo-900 to-gray-900',
  },
  ultimate: {
    title: 'Ultimate',
    price: '$199.99',
    description: 'For data-driven traders who want professional backtesting with AI.',
    items: [
      'AI Backtesting Assistant platform access',
      'Oscillator Matrix toolkit + screener',
      'Full scanner alerts & user strategies',
      'Custom Alert Creator for all 3 toolkits',
      'Alert Scripting functionality for 3 toolkits',
    ],
    icon: <Crown className="text-yellow-400" />,
    color: 'from-slate-700 to-slate-800',
  },
};

const PricingCard = ({ plan }) => {
  const data = features[plan];

  const [daata,setDaata]=useState([]);

  useEffect(()=>{
      try {

        const res = async()=>{
          const d = await axios.get("http://localhost:3000/api/view-allPlans",{})
        }
      } catch (error) {
        
      }
  },[])

  return (
    <div className={`bg-gradient-to-br ${data.color} rounded-3xl p-6 w-full max-w-sm shadow-xl`}>
      <div className="flex justify-center mb-4">{data.icon}</div>
      <h2 className="text-white text-2xl font-bold text-center">{data.title}</h2>
      <p className="text-white text-center text-xl mt-1 mb-2">{data.price} <span className="text-sm">/ mo</span></p>
      <p className="text-gray-300 text-sm text-center mb-4">{data.description}</p>
      <ul className="text-white space-y-2 mb-6">
        {data.items.map((item, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="text-green-400 w-5 h-5 mt-1 mr-2" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <button className="bg-white text-black font-bold px-6 py-2 rounded-full hover:bg-gray-200 transition">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
