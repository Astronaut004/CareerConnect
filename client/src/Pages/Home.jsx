import React, { useEffect, useState } from "react";
import { ArrowRight, Users, Briefcase, Star, TrendingUp, Shield, Zap, Clock, MapPin, Building, Search, Filter, ChevronRight, Play, CheckCircle, Award, Globe, Target, BarChart3, Calendar, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [jobCategories] = useState([
    { name: "Technology", jobs: 2847, growth: "+23%", icon: "💻" },
    { name: "Marketing", jobs: 1456, growth: "+18%", icon: "📈" },
    { name: "Design", jobs: 892, growth: "+31%", icon: "🎨" },
    { name: "Sales", jobs: 1203, growth: "+15%", icon: "💼" },
    { name: "Healthcare", jobs: 934, growth: "+27%", icon: "🏥" },
    { name: "Finance", jobs: 723, growth: "+12%", icon: "💰" }
  ]);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer at Google",
      image: "👩‍💻",
      quote: "Jobify helped me land my dream job at Google. The AI matching was incredibly accurate!"
    },
    {
      name: "Michael Rodriguez",
      role: "Marketing Director at Meta",
      image: "👨‍💼",
      quote: "The quality of candidates on Jobify is exceptional. We've hired 15 people through this platform."
    },
    {
      name: "Emily Watson",
      role: "UX Designer at Apple",
      image: "👩‍🎨",
      quote: "From application to offer in just 2 weeks. Jobify made the entire process seamless."
    }
  ];

  const companies = [
    { name: "Google", logo: "🔍" },
    { name: "Microsoft", logo: "🪟" },
    { name: "Apple", logo: "🍎" },
    { name: "Amazon", logo: "📦" },
    { name: "Meta", logo: "👥" },
    { name: "Netflix", logo: "🎬" },
    { name: "Tesla", logo: "⚡" },
    { name: "Spotify", logo: "🎵" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleWatchDemo = () => {
    console.log("Open demo video");
  };

  const handleViewSalaries = () => {
    console.log("Navigate to salary insights");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-slate-900">
              Job<span className="text-blue-600">ify</span>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#jobs" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Find Jobs</a>
              <a href="#companies" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Companies</a>
              <a href="#salaries" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Salaries</a>
              <a href="#resources" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Resources</a>
              <div className="flex items-center space-x-3">
                <Link 
                 to = "/login" 
                 className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
                  Sign In
                </Link>
                <Link 
                 to = "/register" 
                 className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  Get Started
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2">
              <div className="w-6 h-0.5 bg-slate-600 mb-1"></div>
              <div className="w-6 h-0.5 bg-slate-600 mb-1"></div>
              <div className="w-6 h-0.5 bg-slate-600"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 lg:pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Trusted by 2M+ professionals
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
                Your Next
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
                  Career Move
                </span>
                <br />
                Starts Here
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                Connect with world-class companies, access exclusive opportunities, and accelerate your career with AI-powered job matching.
              </p>

              {/* Primary CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to= "/register"
                  className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-lg"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <button
                  onClick={handleWatchDemo}
                  className="group border-2 border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center text-lg"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 text-center lg:text-left">
                <div>
                  <div className="text-2xl font-bold text-slate-900">2M+</div>
                  <div className="text-slate-600 text-sm">Active Users</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">50K+</div>
                  <div className="text-slate-600 text-sm">Companies</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">98%</div>
                  <div className="text-slate-600 text-sm">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 shadow-2xl">
                {/* Job Search Interface Mockup */}
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                      <Search className="w-5 h-5 text-slate-400" />
                      <div className="text-slate-700">Senior Software Engineer</div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                      <MapPin className="w-5 h-5 text-slate-400" />
                      <div className="text-slate-700">San Francisco, CA</div>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium">
                      Find 2,847 Jobs
                    </button>
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-xl p-4 border border-slate-100">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium text-slate-700">Jobs Today</span>
                  </div>
                  <p className="text-2xl font-bold text-slate-900">847</p>
                  <p className="text-xs text-green-600">+12% from yesterday</p>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl p-4 border border-slate-100">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium text-slate-700">Hired Today</span>
                  </div>
                  <p className="text-2xl font-bold text-slate-900">124</p>
                  <p className="text-xs text-blue-600">Across 47 companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-slate-600 font-medium">Trusted by leading companies worldwide</p>
          </div>
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{company.logo}</div>
                <div className="text-sm text-slate-600 font-medium">{company.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Categories Section */}
      <section id="jobs" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Explore Jobs by Category
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover opportunities across various industries and find your perfect match
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {jobCategories.map((category, index) => (
              <div key={index} className="group bg-white border border-slate-200 hover:border-blue-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{category.icon}</div>
                  <div className="text-sm text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full">
                    {category.growth}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{category.name}</h3>
                <p className="text-slate-600 mb-4">{category.jobs.toLocaleString()} open positions</p>
                <button className="text-blue-600 font-medium group-hover:text-blue-700 flex items-center">
                  View Jobs <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
              to = "/job"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Search className="w-5 h-5 mr-2" />
                Browse All Jobs
              </Link>
              <button
                onClick={handleViewSalaries}
                className="border border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                View Salary Insights
              </button>
            </div>
            <Link className="text-blue-600 hover:text-blue-700 font-medium">
              Create custom job alert →
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why 2M+ Professionals Choose Jobify
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with human expertise to deliver exceptional results
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="flex space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">AI-Powered Matching</h3>
                  <p className="text-slate-600">Our advanced algorithm analyzes your skills, experience, and preferences to match you with perfect opportunities.</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Verified Companies</h3>
                  <p className="text-slate-600">All companies undergo strict verification processes to ensure legitimate opportunities and fair practices.</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Fast Applications</h3>
                  <p className="text-slate-600">Apply to multiple jobs with one click using our streamlined application process and smart profile system.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Join Our Success Stories</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>Average 3.2x salary increase</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>2 weeks average time to hire</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>98% interview success rate</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>24/7 career support</span>
                  </div>
                </div>
                <Link
                  to = "/register"
                  className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your Success Story
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Precision Targeting</h3>
              <p className="text-slate-600">Get matched with jobs that align perfectly with your career goals and aspirations.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Global Opportunities</h3>
              <p className="text-slate-600">Access remote and international job opportunities from companies worldwide.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Career Growth</h3>
              <p className="text-slate-600">Get personalized career advice and skill recommendations to accelerate your growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Success Stories from Our Community
            </h2>
            <p className="text-xl text-slate-600">
              Real people, real results, real career transformations
            </p>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <div className="text-6xl mb-4">{testimonials[currentTestimonial].image}</div>
              <blockquote className="text-2xl font-medium text-slate-900 mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div>
                <div className="font-semibold text-slate-900 text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-slate-600">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Employers Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Hiring? Find Top Talent Fast
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Access a pool of pre-vetted candidates and streamline your hiring process with our enterprise solutions.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Access to 2M+ qualified candidates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Advanced screening and filtering tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Dedicated account management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Analytics and hiring insights</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to = "/jobs/create"
                  className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <Building className="w-5 h-5 mr-2" />
                  Post a Job
                </Link>
                <button className="border border-slate-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-400">50K+</div>
                  <div className="text-slate-400">Active Employers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">85%</div>
                  <div className="text-slate-400">Hiring Success</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">12</div>
                  <div className="text-slate-400">Days Avg. Hire</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400">4.9</div>
                  <div className="text-slate-400">Client Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join millions of professionals who have found their dream jobs and built successful careers with Jobify.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to = "/register"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-lg"
            >
              Create Free Account
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to = "/jobs/create"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center text-lg"
            >
              <Building className="w-5 h-5 mr-2" />
              Hire Talent
            </Link>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-blue-100 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>Free to get started</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              <span>Secure & private</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>2-minute signup</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default Home;