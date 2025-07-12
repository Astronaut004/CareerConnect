import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-amber-50 text-stone-800">
      <h1 className="text-7xl font-extrabold text-emerald-600 mb-4">404</h1>
      <p className="text-2xl font-semibold mb-2">Oops! Page Not Found</p>
      <p className="text-stone-600 mb-6 text-center px-4">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition"
      >
        🔙 Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
