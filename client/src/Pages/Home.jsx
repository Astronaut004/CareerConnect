import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/dashboard"); // ✅ Redirect if logged in
    }
  }, [navigate]);

  return (
    <div className="w-full h-screen bg-amber-50 overflow-x-hidden flex">
      {/* Left Side */}
      <div className="h-full w-1/2 flex justify-center items-center">
        <div className="w-3/4">
          <img
            src="/images/1.png"
            alt="Job Search"
            className="rounded-lg shadow-xl mb-6"
          />
          <h1 className="text-5xl font-extrabold text-stone-800 drop-shadow-sm leading-tight">
            Apply now to get your{" "}
            <span className="text-emerald-600">Dream Job</span>
          </h1>
        </div>
      </div>

      {/* Right Side */}
      <div className="bg-amber-100 h-full w-1/2 flex flex-col justify-center items-center text-center space-y-6">
        <h1 className="text-4xl font-bold text-emerald-700 drop-shadow-sm">
          Welcome to <span className="text-amber-600">Jobify</span>
        </h1>
        <p className="text-lg text-stone-700 opacity-90 px-6">
          Find your dream job or hire the best talents with us.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <Link
            to="/login"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold shadow-md transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-amber-400 hover:bg-amber-500 text-white px-6 py-2 rounded-full font-semibold shadow-md transition duration-300"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
