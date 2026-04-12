import React from "react";
import { Link } from "react-router-dom";
import { Mail, Linkedin, Twitter, Facebook } from "lucide-react";

const footerSections = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/#pricing" },
      { label: "For Candidates", href: "/#candidates" },
      { label: "Browse Jobs", to: "/jobs" },
      { label: "Company Dashboard", to: "/company/dashboard" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "Register", to: "/register" },
      { label: "Sign In", to: "/login" },
      { label: "Resources", href: "/#resources" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", to: "/contact" },
      { label: "Documentation", href: "/#features" },
      { label: "API Reference", to: "/contact" },
      { label: "Status Page", href: "#system-status" },
      { label: "Community", to: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/register" },
      { label: "Terms of Service", to: "/register" },
      { label: "Cookie Policy", to: "/contact" },
      { label: "GDPR", to: "/contact" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

const socialLinks = [
  { label: "Twitter", href: "/", icon: Twitter },
  { label: "LinkedIn", href: "/", icon: Linkedin },
  { label: "Facebook", href: "/", icon: Facebook },
];

const utilityLinks = [
  { label: "System Status", href: "#system-status" },
  { label: "Report Bug", to: "/contact" },
  { label: "Request Feature", to: "/contact" },
];

const FooterLink = ({ item }) => {
  const baseClass = "text-slate-400 transition-colors hover:text-white";

  if (item.to) {
    return (
      <Link to={item.to} className={baseClass}>
        {item.label}
      </Link>
    );
  }

  return (
    <a href={item.href} className={baseClass}>
      {item.label}
    </a>
  );
};

const ProfessionalFooter = () => {
  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-12 md:grid-cols-5">
          <div className="md:col-span-1">
            <Link to="/" className="mb-4 flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 text-sm font-bold text-white">
                CC
              </div>
              <span className="text-lg font-bold text-white">CareerConnect</span>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-slate-400">
              A cleaner hiring experience for solo recruiters, growing teams, and job seekers.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} aria-label={label} className="text-slate-400 transition-colors hover:text-white">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 font-semibold text-white">{section.title}</h3>
              <ul className="space-y-3 text-sm">
                {section.links.map((item) => (
                  <li key={item.label}>
                    <FooterLink item={item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-2">
              <p className="text-sm text-slate-400">� 2026 CareerConnect. All rights reserved.</p>
              <p className="text-xs text-slate-500">
                Built for companies and candidates who want a simpler workflow.
              </p>
            </div>

            <div className="flex items-end justify-start md:justify-end">
              <a
                href="mailto:support@careerconnect.local?subject=CareerConnect%20Newsletter"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700"
              >
                <Mail size={16} />
                Subscribe to Newsletter
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="system-status" className="border-t border-slate-800 bg-slate-950 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between space-y-4 text-xs text-slate-500 sm:flex-row sm:space-y-0">
          <p>Version 1.0.0 � Status: Operational</p>
          <div className="flex gap-6">
            {utilityLinks.map((item) =>
              item.to ? (
                <Link key={item.label} to={item.to} className="transition-colors hover:text-slate-300">
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href} className="transition-colors hover:text-slate-300">
                  {item.label}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ProfessionalFooter;
