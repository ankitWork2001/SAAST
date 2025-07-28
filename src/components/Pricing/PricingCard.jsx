import React from 'react';
import { CheckCircle, Crown, Gem } from 'lucide-react';

// Icon map for different plan names
const iconMap = {
  Essential: <CheckCircle className="text-green-500" />,
  Premium: <Gem className="text-blue-400" />,
  Ultimate: <Crown className="text-yellow-400" />,
};

// Color map for background gradient
const colorMap = {
  Essential: 'from-blue-800 to-blue-900',
  Premium: 'from-indigo-900 to-gray-900',
  Ultimate: 'from-slate-700 to-slate-800',
};

const PricingCard = ({ plan, onSubscribe }) => {
  const icon = iconMap[plan?.name] || <CheckCircle className="text-green-500" />;
  const color = colorMap[plan?.name] || 'from-gray-700 to-gray-800';

  return (
    <div className={`bg-gradient-to-br ${color} rounded-3xl p-6 w-full max-w-sm shadow-xl`}>
      {/* Plan Icon */}
      <div className="flex justify-center mb-4">{icon}</div>

      {/* Plan Name */}
      <h2 className="text-white text-2xl font-bold text-center">{plan?.name}</h2>

      {/* Monthly Price */}
      <p className="text-white text-center text-xl mt-1 mb-2">
        ${plan?.priceMonthly?.toFixed(2)} <span className="text-sm">/ mo</span>
      </p>

      {/* Description */}
      <p className="text-gray-300 text-sm text-center mb-4">
        {plan?.name === 'Essential' && 'Start out strong & automate price action.'}
        {plan?.name === 'Premium' && 'Powerful tools & signals for technical traders.'}
        {plan?.name === 'Ultimate' && 'AI backtesting & pro-level tools.'}
        {!['Essential', 'Premium', 'Ultimate'].includes(plan?.name) && plan?.description}
      </p>

      {/* Feature List */}
      <ul className="text-white space-y-2 mb-6">
        {Array.isArray(plan?.features) && plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="text-green-400 w-5 h-5 mt-1 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Subscribe Button */}
      <div className="flex justify-center">
        <button
          onClick={() => onSubscribe && onSubscribe(plan)}
          className="bg-white text-black font-bold px-6 py-2 rounded-full hover:bg-gray-200 transition"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
