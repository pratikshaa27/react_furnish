import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url('https://images.pexels.com/photos/8583629/pexels-photo-8583629.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bringing Simplicity In The Furnishing Market
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Compatto simplifies the complex process of furnishing all-inclusive spaces.
        </p>
        <a
          href="#start"
          className="bg-amber-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-amber-500 transition"
        >
          Start Your Furnishing Journey
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
