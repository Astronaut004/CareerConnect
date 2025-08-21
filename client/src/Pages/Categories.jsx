import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react"; 

const Categories = () => {

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [jobCategories] = useState([
        { name: "Technology", jobs: 2847, growth: "+23%", icon: "💻" },
        { name: "Marketing", jobs: 1456, growth: "+18%", icon: "📈" },
        { name: "Design", jobs: 892, growth: "+31%", icon: "🎨" },
        { name: "Sales", jobs: 1203, growth: "+15%", icon: "💼" },
        { name: "Healthcare", jobs: 934, growth: "+27%", icon: "🏥" },
        { name: "Finance", jobs: 723, growth: "+12%", icon: "💰" },
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
      const [companies] = useState([
        { name: "Google", logo: "🔍" },
        { name: "Microsoft", logo: "🪟" },
        { name: "Apple", logo: "🍎" },
        { name: "Amazon", logo: "📦" },
        { name: "Meta", logo: "👥" },
        { name: "Netflix", logo: "🎬" },
        { name: "Tesla", logo: "⚡" },
        { name: "Spotify", logo: "🎵" },
      ]);
    return (
        <div>
             {/* Companies Section */}
                  <section className="py-12 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-6">
                      <div className="text-center mb-8">
                        <p className="text-slate-600 font-medium">
                          Trusted by leading companies worldwide
                        </p>
                      </div>
                      <div className="grid grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-70">
                        {companies.map((company, index) => (
                          <div key={index} className="text-center">
                            <div className="text-3xl mb-2">{company.logo}</div>
                            <div className="text-sm text-slate-600 font-medium">
                              {company.name}
                            </div>
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
                          Discover opportunities across various industries and find your
                          perfect match
                        </p>
                      </div>
            
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {jobCategories.map((category, index) => (
                          <div
                            key={index}
                            className="group bg-white border border-slate-200 hover:border-blue-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg cursor-pointer"
                          >
                            <div className="flex items-center justify-between mb-4">
                              <div className="text-3xl">{category.icon}</div>
                              <div className="text-sm text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full">
                                {category.growth}
                              </div>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">
                              {category.name}
                            </h3>
                            <p className="text-slate-600 mb-4">
                              {category.jobs.toLocaleString()} open positions
                            </p>
                            <button className="text-blue-600 font-medium group-hover:text-blue-700 flex items-center">
                              View Jobs <ChevronRight className="w-4 h-4 ml-1" />
                            </button>
                          </div>
                        ))}
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

        </div>
    )
}

export default Categories;