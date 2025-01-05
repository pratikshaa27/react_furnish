import React from "react";

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-[#f8f5f0] p-6 md:p-12 rounded-lg shadow-lg gap-6">
      {/* Left Section */}
      <div className="flex-1">
        <div className="bg-gradient-to-b from-[#d9c9b5] to-[#b49c86] p-8 rounded-lg text-white text-center">
          <div className="text-4xl font-bold mb-2">150+</div>
          <div className="text-lg mb-4">Furniture Suppliers</div>
          <div className="text-2xl font-semibold mb-2">15+</div>
          <div className="text-lg">Years of Industry Experience</div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Who We Are</h2>
        <p className="text-gray-600 mb-4">
          At Comptus, we understand the challenges of creating exceptional spaces that blend elegance, quality, and functionality.
        </p>
        <p className="text-gray-600">
          As Greece’s premier furniture solutions provider, we’ve made it our mission to simplify the furnishing process, ensuring that every project is executed flawlessly from initial consultation to final installation.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex-1">
        <img
          src="https://images.pexels.com/photos/27059631/pexels-photo-27059631/free-photo-of-decor-in-luxurious-apartment.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with your image URL
          alt="Team working"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default AboutSection;
