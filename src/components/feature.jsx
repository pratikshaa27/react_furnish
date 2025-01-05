import React, { useState } from "react";

const VerticalCardSection = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track the active card

  const cards = [
    {
      id: 1,
      image: "https://via.placeholder.com/400x250",
      title: "Step 1",
      description: "Description for Step 1",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400x250",
      title: "Step 2",
      description: "Description for Step 2",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/400x250",
      title: "Step 3",
      description: "Description for Step 3",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/400x250",
      title: "Step 4",
      description: "Description for Step 4",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/400x250",
      title: "After-Sales Support and Maintenance",
      description:
        "Our commitment to your satisfaction extends beyond the final installation. We conduct a thorough final walkthrough to ensure your satisfaction and offer comprehensive after-sales support for warranty claims, maintenance, and care instructions.",
    },
  ];

  return (
    <div className="bg-[#f8f5f0] p-6 md:p-12 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        How We <span className="text-green-600">Simplify</span> Your Furnishing Experience
      </h2>
      <div className="relative">
        {cards.map((card, index) => (
          <div
            key={card.id}
            onClick={() => setActiveIndex(index)} // Set active card on click
            onMouseEnter={() => activeIndex === null && setActiveIndex(index)} // Highlight on hover only if no card is active
            onMouseLeave={() => activeIndex === null && setActiveIndex(null)} // Reset hover effect
            className={`absolute top-[${index * 30}px] left-0 right-0 mx-auto w-full max-w-md h-80 rounded-lg transition-all duration-500 cursor-pointer shadow-lg ${
              activeIndex === index
                ? "z-10 scale-105 translate-y-0 opacity-100"
                : "z-0 translate-y-[30%] opacity-50"
            }`}
          >
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-6 rounded-lg">
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="text-sm mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalCardSection;
