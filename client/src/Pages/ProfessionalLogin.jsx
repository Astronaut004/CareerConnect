import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { User, Building2, Lock, Mail, Eye, EyeOff } from "lucide-react";
import { designSystem } from "../config/designSystem";

const ProfessionalLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const userType = searchParams.get("type") || "jobseeker"; // 'company' or 'jobseeker'
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          userType,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed");
      } else {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("userType", userType);

        if (userType === "company") {
          navigate("/company/dashboard");
        } else {
          navigate("/jobs");
        }
      }
    } catch (err) {
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-20">
      <div className="max-w-md mx-auto px-4 py-10">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold">
              CC
            </div>
            <span className="text-2xl font-bold text-slate-900">CareerConnect</span>
          </Link>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Sign In</h1>
          <p className="text-slate-600">Welcome back to CareerConnect</p>
        </div>

        {/* User Type Toggle */}
        <div className="flex gap-3 mb-8">
          <Link
            to="/login?type=jobseeker"
            className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
              userType === "jobseeker"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-slate-200 text-slate-700 hover:bg-slate-300"
            }`}
          >
            <User size={18} />
            Job Seeker
          </Link>
          <Link
            to="/login?type=company"
            className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
              userType === "company"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-slate-200 text-slate-700 hover:bg-slate-300"
            }`}
          >
            <Building2 size={18} />
            Company
          </Link>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className={`${designSystem.cards.elevated} p-8`}>
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Email Input */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`${designSystem.inputs.base} pl-10`}
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={`${designSystem.inputs.base} pl-10 pr-12`}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input type="checkbox" className="w-4 h-4 rounded border-slate-300" />
              Remember me
            </label>
            <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${designSystem.buttons.primary} disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-slate-600 mt-6">
            Don't have an account?{" "}
            <Link
              to={`/register?type=${userType}`}
              className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              Create one now
            </Link>
          </p>
        </form>

        {/* Demo Credentials */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-slate-700">
          <p className="font-semibold mb-2">💡 Demo Credentials:</p>
          <p className="text-xs">Email: demo@example.com</p>
          <p className="text-xs">Password: password123</p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalLogin;
