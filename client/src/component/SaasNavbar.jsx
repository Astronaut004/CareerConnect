import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const SaasNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null); // 'company' or 'jobseeker'
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    const type = localStorage.getItem("userType");
    setIsLoggedIn(!!user);
    setUserType(type);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    setIsLoggedIn(false);
    setUserType(null);
    navigate("/");
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold">
              CC
            </div>
            <span className="text-xl font-bold text-slate-900">CareerConnect</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {!isLoggedIn ? (
              <>
                <a href="/#features" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                  Features
                </a>
                <a href="/#pricing" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                  Pricing
                </a>
                <a href="/#candidates" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                  Candidates
                </a>
                <a href="/#resources" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                  Resources
                </a>
                <div className="flex items-center space-x-3 border-l border-slate-200 pl-6">
                  <Link
                    to="/login"
                    className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Start Free
                  </Link>
                </div>
              </>
            ) : (
              <>
                {userType === "company" && (
                  <>
                    <Link to="/company/dashboard" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                      Dashboard
                    </Link>
                    <Link to="/company/jobs" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                      My Jobs
                    </Link>
                  </>
                )}
                {userType === "jobseeker" && (
                  <>
                    <Link to="/jobs" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                      Browse Jobs
                    </Link>
                    <Link to="/applications" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                      Applications
                    </Link>
                  </>
                )}
                <Link to="/profile" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-200 py-4 space-y-3">
            {!isLoggedIn ? (
              <>
                <a href="/#features" className="block text-slate-600 hover:text-blue-600 font-medium py-2">
                  Features
                </a>
                <a href="/#pricing" className="block text-slate-600 hover:text-blue-600 font-medium py-2">
                  Pricing
                </a>
                <a href="/#candidates" className="block text-slate-600 hover:text-blue-600 font-medium py-2">
                  Candidates
                </a>
                <div className="space-y-2 pt-2 border-t border-slate-200">
                  <Link to="/login" className="block text-center text-slate-700 font-medium py-2">
                    Sign In
                  </Link>
                  <Link to="/register" className="block text-center bg-blue-600 text-white font-medium py-2 rounded-lg">
                    Start Free
                  </Link>
                </div>
              </>
            ) : (
              <>
                {userType === "company" && (
                  <>
                    <Link to="/company/dashboard" className="block text-slate-600 font-medium py-2">
                      Dashboard
                    </Link>
                    <Link to="/company/jobs" className="block text-slate-600 font-medium py-2">
                      My Jobs
                    </Link>
                  </>
                )}
                {userType === "jobseeker" && (
                  <>
                    <Link to="/jobs" className="block text-slate-600 font-medium py-2">
                      Browse Jobs
                    </Link>
                    <Link to="/applications" className="block text-slate-600 font-medium py-2">
                      Applications
                    </Link>
                  </>
                )}
                <button onClick={handleLogout} className="w-full text-center bg-red-600 text-white font-medium py-2 rounded-lg">
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default SaasNavbar;
