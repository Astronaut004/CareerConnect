import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user); // true if user exists
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="cursor-pointer text-3xl font-extrabold text-indigo-700 hover:text-teal-600 transition-colors"
        >
          <div className="text-2xl font-bold text-slate-900">
              Job<span className="text-blue-600">ify</span>
            </div>
        </Link>

        {/* Desktop Button */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="hidden md:block bg-indigo-600 text-white px-6 py-2 rounded-full font-medium shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-300"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="hidden md:block bg-teal-500 text-white px-6 py-2 rounded-full font-medium shadow-md hover:bg-teal-600 hover:shadow-lg transition-all duration-300"
          >
            Login
          </Link>
        )}

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-indigo-700 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-gradient-to-r from-indigo-50 to-teal-50 shadow-md rounded-b-xl animate-fadeIn">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="w-full bg-indigo-600 text-white px-6 py-2 rounded-full font-medium shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-300"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="w-full block bg-teal-500 text-white px-6 py-2 rounded-full font-medium shadow-md text-center hover:bg-teal-600 hover:shadow-lg transition-all duration-300"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
