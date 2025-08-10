import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../store/userstore";

const Login = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
const setUser = useUserStore((state) => state.setUser);
const clearUser = useUserStore((state) => state.clearUser);

  const authVerify = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const payload = {
      email: mail,
      password: pass,
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error("Failed to login");
      }
      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
    setUser(data.user.id, data.token);
 
      console.log("Login successful", JSON.stringify(data.user));
      navigate("/dashboard");
    } catch (err) {
      console.log(`Login failed: ${err}`);
      setErrorMsg("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50">
      <div className="bg-amber-100 p-8 rounded-xl shadow-xl w-full max-w-md">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-emerald-700 mb-4">
          👋 Welcome Back
        </h2>
        <p className="text-center text-stone-600 mb-6">
          Login to your Jobify account
        </p>

        {/* Error Message */}
        {errorMsg && (
          <p className="text-red-600 text-center mb-4 font-medium">{errorMsg}</p>
        )}

        {/* Form */}
        <form onSubmit={authVerify}>
          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-stone-700 font-semibold mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-stone-700 font-semibold mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="********"
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg font-semibold shadow-md transition"
          >
            ✅ Login
          </button>
        </form>

        {/* Divider */}
        <div className="mt-6 text-center">
          <span className="text-stone-600">Don’t have an account?</span>{" "}
          <Link
            to="/register"
            className="text-amber-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
