import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle, Shield, Clock } from "lucide-react";

const Register = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const setUser = (id, token) => console.log(`Set user: ${id}, ${token}`);

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Full name is required";
    else if (name.trim().length < 2) newErrors.name = "Name must be at least 2 characters";

    if (!mail.trim()) newErrors.mail = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(mail)) newErrors.mail = "Please enter a valid email";

    if (!pass) newErrors.pass = "Password is required";
    else if (pass.length < 6) newErrors.pass = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const authHandle = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    const payload = { name, email: mail, password: pass };

    try {
      // Replace with real API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Registration successful:", payload);
      navigate("/login");
    } catch (error) {
      console.log("Registration error:", error);
      setErrors({ submit: "Registration failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation Header */}
      <nav className="absolute top-0 left-0 right-0 z-10 px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button onClick={() => navigate("/")} className="text-2xl font-bold text-slate-800">
            Job<span className="text-blue-600">ify</span>
          </button>
          <div className="flex items-center space-x-4">
            <span className="text-slate-600">Already have an account?</span>
            <button
              onClick={() => navigate("/login")}
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              Sign In
            </button>
          </div>
        </div>
      </nav>

      <div className="flex min-h-screen pt-24">
        {/* Left Side - Info */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center px-12">
          <div className="max-w-lg">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                <CheckCircle className="w-4 h-4 mr-2" />
                Join 2M+ professionals
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                Start Your
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Career Journey
                </span>
                <br />
                Today
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Create your free account and get instant access to thousands of job opportunities from top companies worldwide.
              </p>
            </div>
            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-slate-700">Free forever, no hidden costs</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-slate-700">Your data is secure and private</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-slate-700">Get matched with jobs in minutes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Registration */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-8">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-100">
              {/* Header */}
              <div className="text-center mb-8 lg:hidden">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Join Jobify Today</h2>
                <p className="text-slate-600">Create your account to get started</p>
              </div>
              <div className="hidden lg:block text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Create Account</h2>
                <p className="text-slate-600">Get started with your free account</p>
              </div>

              {/* Form */}
              <form onSubmit={authHandle} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Full Name</label>
                  <div className="relative">
                    <User className="absolute top-3.5 left-4 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => { setName(e.target.value); if (errors.name) setErrors({...errors, name: ""}); }}
                      placeholder="Enter your full name"
                      className={`w-full pl-12 pr-4 py-3.5 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                        errors.name ? "border-red-300 focus:ring-red-500" : "border-slate-300 focus:ring-blue-500 focus:border-blue-500"
                      }`}
                      required
                    />
                  </div>
                  {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute top-3.5 left-4 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      value={mail}
                      onChange={(e) => { setMail(e.target.value); if (errors.mail) setErrors({...errors, mail: ""}); }}
                      placeholder="Enter your email"
                      className={`w-full pl-12 pr-4 py-3.5 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                        errors.mail ? "border-red-300 focus:ring-red-500" : "border-slate-300 focus:ring-blue-500 focus:border-blue-500"
                      }`}
                      required
                    />
                  </div>
                  {errors.mail && <p className="text-sm text-red-600">{errors.mail}</p>}
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Password</label>
                  <div className="relative">
                    <Lock className="absolute top-3.5 left-4 w-5 h-5 text-slate-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={pass}
                      onChange={(e) => { setPass(e.target.value); if (errors.pass) setErrors({...errors, pass: ""}); }}
                      placeholder="Create a password"
                      className={`w-full pl-12 pr-12 py-3.5 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                        errors.pass ? "border-red-300 focus:ring-red-500" : "border-slate-300 focus:ring-blue-500 focus:border-blue-500"
                      }`}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-3.5 right-4 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.pass && <p className="text-sm text-red-600">{errors.pass}</p>}
                </div>

                {/* Terms */}
                <div className="flex items-start space-x-3">
                  <input type="checkbox" id="terms" className="mt-1 w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500" required />
                  <label htmlFor="terms" className="text-sm text-slate-600 leading-relaxed">
                    I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3.5 rounded-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center ${
                    isLoading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </form>

              {/* Sign In Link */}
              <div className="text-center mt-3 pt-6 border-t border-slate-200">
                <p className="text-slate-600">
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
