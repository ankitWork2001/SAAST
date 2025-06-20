import React, { useState } from 'react';

// Accordion Question Component
const Question = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-blue-900 rounded-md shadow-[0px_10px_20px_0px_#00000040] mb-4 w-full">
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-white font-semibold"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`answer-${question.id}`}
      >
        {question.title}
        <svg
          className={`w-5 h-5 text-white transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div id={`answer-${question.id}`} className="py-4 px-6 text-gray-300">
          {question.answer}
        </div>
      )}
    </div>
  );
};

// FAQ Section Wrapper
const FaqSection = () => {
  const faqData = [
    { id: 1, title: 'How does it work?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Which plan should I choose?', answer: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, title: 'What markets are supported?', answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
    { id: 4, title: 'Does it work on MetaTrader 4/5?', answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { id: 5, title: 'Can I win every trade using this?', answer: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 6, title: 'How do discounts work?', answer: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
    { id: 7, title: 'Is this friendly for beginners?', answer: 'Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.' },
    { id: 8, title: 'Can I change my plan anytime?', answer: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.' },
  ];

  return (
    <div className="bg-[#0C0C0C] min-h-screen flex flex-col items-center justify-start px-4 py-12 sm:py-20">
      {/* Gradient Text Heading */}
      <h1 className="text-center font-bold font-inter leading-[100%] tracking-[0.01em] text-transparent bg-gradient-to-r from-white via-white to-[#0594BB] bg-clip-text mix-blend-hard-light mb-8 w-full sm:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] text-[28px] sm:text-[36px] md:text-[40px]">
        Plans for every style of trading
      </h1>

      {/* Accordion FAQ Cards */}
      <div className="w-full max-w-[1013px]">
        {faqData.map((question) => (
          <Question key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
