import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // to avoid this use context or redux


  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user); // true if user exists
  }, []);

  // useEffect1

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
    <nav className="bg-amber-100 text-stone-800 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="cursor-pointer text-2xl font-extrabold text-emerald-600 hover:text-emerald-700 transition"
        >
          Jobify
        </Link>

        {/* Desktop Button */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="cursor-pointer hidden md:block bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="cursor-pointer hidden md:block bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition"
          >
            Login
          </Link>
        )}

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-emerald-600 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="w-full bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="w-full block bg-amber-500 text-white px-4 py-2 rounded-lg text-center hover:bg-amber-600 transition"
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
