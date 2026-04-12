import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Users, BarChart3, Shield, Globe, Briefcase, CheckCircle, Star, TrendingUp, MessageCircle } from "lucide-react";

const SaasLanding = () => {
  const features = [
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: "Smart Job Posting",
      description: "Post jobs, set requirements, and reach qualified candidates instantly",
    },
    {
      icon: <Users className="w-8 h-8 text-teal-600" />,
      title: "Candidate Management",
      description: "Track, manage, and communicate with all applicants in one place",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Advanced Analytics",
      description: "Get insights on job performance, candidate quality, and hiring metrics",
    },
    {
      icon: <Globe className="w-8 h-8 text-teal-600" />,
      title: "Multi-reach Platform",
      description: "Access thousands of qualified job seekers across industries",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Enterprise Security",
      description: "Bank-level security and data protection for your company",
    },
    {
      icon: <Zap className="w-8 h-8 text-teal-600" />,
      title: "Quick Hiring",
      description: "Speed up your hiring process by 50% with our tools",
    },
  ];

  const plans = [
    {
      name: "Startup",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams starting their hiring journey",
      features: [
        "Up to 5 active job postings",
        "Basic candidate management",
        "Email support",
        "Standard analytics",
        "Applicant tracking system",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "For growing companies with multiple hiring needs",
      features: [
        "Unlimited job postings",
        "Advanced candidate management",
        "Priority support (24/7)",
        "Advanced analytics & reports",
        "Custom career page",
        "Team collaboration tools",
        "API access",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "per month",
      description: "For large organizations with custom requirements",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security features",
        "White-label options",
        "SLA guarantee",
        "Priority feature requests",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechFlow Inc.",
      role: "HR Manager",
      image: "👩‍💼",
      quote: "CareerConnect reduced our hiring time by 60%. We found amazing talent in weeks!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "InnovateSoft",
      role: "CEO",
      image: "👨‍💼",
      quote: "The ROI is incredible. We've hired 25 people through the platform and reduced cost per hire significantly.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      company: "CreativeStudio",
      role: "Recruitment Lead",
      image: "👩‍🎨",
      quote: "Best investment for our HR team. The analytics dashboard alone has transformed our hiring strategy.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Hire the Best Talent,{" "}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Faster
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                CareerConnect is the modern hiring platform built for growing companies. Find qualified candidates, manage applications, and build your dream team effortlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register?type=company"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Start Free Trial <ArrowRight size={20} />
                </Link>
                <button className="border-2 border-slate-300 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors duration-200">
                  Watch Demo
                </button>
              </div>
              <p className="text-sm text-slate-500 mt-6">No credit card required. 14-day free trial.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl p-8 flex items-center justify-center h-96">
              <div className="text-6xl">📊</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Powerful Features for Modern Hiring</h2>
            <p className="text-xl text-slate-600">Everything you need to find and hire the right talent</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg hover:border-blue-200 transition-all duration-200"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-teal-400 mb-2">10K+</div>
            <p className="text-slate-300">Active Companies</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-teal-400 mb-2">150K+</div>
            <p className="text-slate-300">Job Seekers</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-teal-400 mb-2">500K+</div>
            <p className="text-slate-300">Successful Hires</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-teal-400 mb-2">98%</div>
            <p className="text-slate-300">Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-slate-600">Choice the perfect plan for your company</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-8 transition-all duration-200 ${
                  plan.popular
                    ? "bg-gradient-to-b from-blue-600 to-blue-700 text-white border-2 border-blue-600 shadow-2xl scale-105"
                    : "bg-white border border-slate-200 hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold w-fit mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.popular ? "text-blue-100" : "text-slate-600"}`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className={`text-sm ${plan.popular ? "text-blue-100" : "text-slate-600"}`}>
                    {plan.period}
                  </span>
                </div>
                <button
                  className={`w-full py-3 rounded-lg font-semibold mb-8 transition-colors duration-200 ${
                    plan.popular
                      ? "bg-white text-blue-600 hover:bg-blue-50"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {plan.cta}
                </button>
                <div className="space-y-4">
                  {plan.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-3">
                      <CheckCircle size={20} className={plan.popular ? "text-teal-300" : "text-teal-500"} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Companies Say About Us</h2>
            <p className="text-xl text-slate-600">Trusted by leading organizations worldwide</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg transition-all duration-200">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Hiring?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of companies hiring smarter with CareerConnect
          </p>
          <Link
            to="/register?type=company"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center gap-2"
          >
            Start Your Free Trial Today <ArrowRight size={20} />
          </Link>
          <p className="text-blue-100 text-sm mt-4">No credit card required. 14 days free.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-teal-500 w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                CC
              </div>
              <span className="font-bold">CareerConnect</span>
            </div>
            <p className="text-sm">The modern hiring platform for growing companies.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center text-sm">
          <p className="text-slate-400">© 2024 CareerConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SaasLanding;
