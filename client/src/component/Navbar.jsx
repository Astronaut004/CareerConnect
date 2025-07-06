import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-700/90 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">Jobify</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li className=" hover:text-xl cursor-pointer text-white">
            Home
          </li>
          <li className=" hover:text-xl cursor-pointer text-white">
            Jobs
          </li>
          <li className=" hover:text-xl cursor-pointer text-white">
            About
          </li>
          <li className=" hover:text-xl cursor-pointer text-white">
            Contact
          </li>
        </ul>

        {/* Login Button */}
        <button className="hidden md:block bg-white text-black px-4 py-2 outline-none cursor-pointer rounded hover:bg-gray-100">
          Login
        </button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-black cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-200 text-black px-4 py-2 space-y-2">
          <li className="hover:text-gray-700 cursor-pointer">Home</li>
          <li className="hover:text-gray-700 cursor-pointer">Jobs</li>
          <li className="hover:text-gray-700 cursor-pointer">About</li>
          <li className="hover:text-gray-700 cursor-pointer">Contact</li>
          <button className="w-full bg-white text-black px-4 py-2 rounded cursor-pointer hover:bg-gray-100 mt-2">
            Login
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;