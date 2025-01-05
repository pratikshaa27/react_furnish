import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-semibold text-gray-800">
          <span className="text-amber-600">Compatto</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-600 hover:text-amber-600">
            Who We Are
          </a>
          <a href="#challenges" className="text-gray-600 hover:text-amber-600">
            The Challenges
          </a>
          <a href="#process" className="text-gray-600 hover:text-amber-600">
            Our Process
          </a>
          <a href="#why-us" className="text-gray-600 hover:text-amber-600">
            Why Choose Us
          </a>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-amber-600 text-white px-4 py-2 rounded-lg shadow hover:bg-amber-500 transition"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-amber-600 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
