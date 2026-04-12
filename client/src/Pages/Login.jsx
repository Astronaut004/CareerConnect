import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useUserStore } from "../store/userstore";
import { designSystem } from "../config/designSystem";

const Login = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);

  const authVerify = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setIsLoading(true);

    const payload = { email: mail, password: pass };

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Failed to login");
      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
      setUser(data.user.id, data.token);
      navigate("/dashboard");
    } catch (err) {
      setErrorMsg("Invalid credentials. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 flex items-center justify-center relative overflow-hidden">
      <div className={`w-full max-w-md ${designSystem.cards.elevated} p-8`}>
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className={`${designSystem.typography.h2} mb-2`}>Welcome Back 👋</h2>
          <p className={designSystem.typography.body}>Login to your Jobify account</p>
        </div>

        {/* Error Message */}
        {errorMsg && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm font-medium">
            {errorMsg}
          </div>
        )}

        {/* Form */}
        <form onSubmit={authVerify} className="space-y-6">
          {/* Email */}
          <div>
            <label className="text-sm font-semibold text-slate-900 mb-2 block">Email Address</label>
            <div className="relative">
              <Mail className="absolute top-3.5 left-4 w-5 h-5 text-slate-400" />
              <input
                type="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                placeholder="you@example.com"
                className={`${designSystem.inputs.base} pl-12`}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-semibold text-slate-900 mb-2 block">Password</label>
            <div className="relative">
              <Lock className="absolute top-3.5 left-4 w-5 h-5 text-slate-400" />
              <input
                type={showPassword ? "text" : "password"}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="••••••••"
                className={`${designSystem.inputs.base} pl-12 pr-12`}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-3.5 right-4 text-slate-400 hover:text-slate-600 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full ${designSystem.buttons.primaryLg} flex items-center justify-center ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <>
                Login
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="text-center mt-8 pt-6 border-t border-slate-200">
          <p className={designSystem.typography.body}>
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
