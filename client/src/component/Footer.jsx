import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaMobileAlt } from "react-icons/fa";
import { Briefcase } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              Job<span className="text-blue-600">ify</span>
            </div>
            <p className="mb-4">Connecting talent with opportunity worldwide.</p>
            <div className="flex space-x-4 text-xl">
              <a href="#" className="hover:text-blue-400 transition"><FaMobileAlt /></a>
              <a href="#" className="hover:text-blue-400 transition"><Briefcase size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
              <a href="#" className="hover:text-blue-400 transition"><FaFacebookF /></a>
              <a href="#" className="hover:text-blue-400 transition"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Job Seekers */}
          <div>
            <h3 className="text-white font-semibold mb-4">Job Seekers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Browse Jobs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career Advice</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Resume Builder</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Salary Tools</a></li>
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h3 className="text-white font-semibold mb-4">Employers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Post Jobs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Find Talent</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Jobify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
