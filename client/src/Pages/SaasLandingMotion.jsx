import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Users,
  BarChart3,
  Shield,
  Globe,
  Briefcase,
  CheckCircle,
  Star,
  TrendingUp,
  Sparkles,
  Clock3,
  FileText,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const SaasLandingMotion = () => {
  const features = [
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: "Smart Job Posting",
      description: "Publish roles quickly, define hiring requirements, and keep every opening organized.",
    },
    {
      icon: <Users className="w-8 h-8 text-teal-600" />,
      title: "Candidate Management",
      description: "Review applicants, track stages, and keep recruiter notes in one shared workspace.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Hiring Analytics",
      description: "Measure conversion, shortlist quality, and time-to-hire across every position.",
    },
    {
      icon: <Globe className="w-8 h-8 text-teal-600" />,
      title: "Talent Reach",
      description: "Connect roles with candidates across industries, locations, and work preferences.",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Secure Workflows",
      description: "Protect hiring data with controlled access, safer collaboration, and audit-friendly records.",
    },
    {
      icon: <Zap className="w-8 h-8 text-teal-600" />,
      title: "Faster Decisions",
      description: "Move from application to interview faster with simpler screening and status tracking.",
    },
  ];

  const workflows = [
    {
      icon: <Sparkles className="w-6 h-6 text-blue-600" />,
      title: "Launch hiring in minutes",
      description: "Create branded job posts, add screening rules, and start collecting applicants from one place.",
    },
    {
      icon: <Clock3 className="w-6 h-6 text-teal-600" />,
      title: "Review candidates faster",
      description: "Shortlist applicants, compare talent, and keep interview feedback aligned across the team.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      title: "Improve every opening",
      description: "See where candidates convert best and improve your hiring funnel with real performance data.",
    },
  ];

  const candidateBenefits = [
    "Build one profile and use it to apply across multiple jobs",
    "Track every application, interview step, and employer update in one dashboard",
    "Showcase resume details, skills, and experience without repetitive forms",
    "Find roles matched to experience level, work mode, and preferred location",
  ];

  const plans = [
    {
      name: "Solo",
      price: "$12",
      period: "/month",
      description: "For one recruiter, founder, or freelancer who needs a clean hiring workspace without extra overhead.",
      features: [
        "1 user seat included",
        "Up to 3 active job posts",
        "Basic applicant tracking",
        "Candidate notes and status updates",
        "Email support within 48 hours",
      ],
      cta: "Start Solo",
      popular: false,
    },
    {
      name: "Team",
      price: "$39",
      period: "/month",
      description: "For small teams hiring regularly and needing collaboration, faster review, and better visibility.",
      features: [
        "Up to 5 team seats",
        "Up to 15 active job posts",
        "Shared candidate pipeline",
        "Interview tracking and team feedback",
        "Basic analytics and reporting",
        "Priority email support",
      ],
      cta: "Choose Team",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For larger companies that need custom workflows, permissions, integrations, and procurement support.",
      features: [
        "Unlimited seats",
        "Custom approval and hiring workflows",
        "Custom integrations",
        "Advanced security controls",
        "Dedicated onboarding",
        "Priority support and SLA",
        "Custom billing and invoicing",
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
      image: "SJ",
      quote: "CareerConnect cut our hiring cycle dramatically and made applicant follow-up much easier.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "InnovateSoft",
      role: "CEO",
      image: "MC",
      quote: "We finally have one platform for open roles, candidate review, and hiring visibility.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      company: "CreativeStudio",
      role: "Recruitment Lead",
      image: "ED",
      quote: "The application tracking flow feels polished for both our recruiters and our candidates.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(20,184,166,0.16),_transparent_35%),linear-gradient(to_bottom,_#f8fbff,_#ffffff)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm mb-6">
                <Sparkles size={16} />
                Recruiting software for teams and candidates
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Run hiring like a
                <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  modern SaaS platform
                </span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-slate-600 mb-8 leading-relaxed">
                CareerConnect gives companies a clean recruiting workspace and gives candidates a fast way to discover roles, apply, and follow every application from one account.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register?type=company"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Start Free Trial <ArrowRight size={20} />
                </Link>
                <Link
                  to="/jobs"
                  className="border-2 border-slate-300 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors duration-200 inline-flex items-center justify-center"
                >
                  Browse Jobs
                </Link>
              </motion.div>
              <motion.p variants={fadeUp} className="text-sm text-slate-500 mt-6">
                No credit card required. 14-day free trial.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 36, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-2xl shadow-blue-100"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-2xl bg-slate-950 p-6 text-white"
              >
                <div className="flex items-center justify-between mb-6 gap-4">
                  <div>
                    <p className="text-sm text-slate-400">Pipeline overview</p>
                    <h3 className="text-2xl font-semibold mt-1">Senior Product Designer</h3>
                  </div>
                  <div className="rounded-xl bg-white/10 px-4 py-2 text-right">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Time to hire</p>
                    <p className="text-2xl font-bold">12 days</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Applicants</p>
                    <p className="text-3xl font-bold mt-2">148</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Shortlisted</p>
                    <p className="text-3xl font-bold mt-2">19</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Interviews</p>
                    <p className="text-3xl font-bold mt-2">7</p>
                  </div>
                </div>
                <div className="rounded-2xl bg-gradient-to-r from-blue-500/20 to-teal-500/20 p-5">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-medium">Candidate experience</p>
                    <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs text-emerald-300">
                      Live applications
                    </span>
                  </div>
                  <div className="space-y-3 text-sm text-slate-200">
                    <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                      <span>Portfolio submitted</span>
                      <span>43 candidates</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                      <span>Interview slots booked</span>
                      <span>11 today</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                      <span>Offer-ready finalists</span>
                      <span>3 profiles</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.h2 variants={fadeUp} className="text-4xl font-bold text-slate-900 mb-4">
                Built like a recruiting operating system
              </motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-slate-600 mb-8">
                More than a jobs board, CareerConnect helps teams manage demand, review talent, and move candidates from application to offer without losing context.
              </motion.p>
              <motion.div variants={stagger} className="grid md:grid-cols-3 gap-5">
                {workflows.map((workflow, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    whileHover={{ y: -6 }}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                  >
                    <div className="mb-4">{workflow.icon}</div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{workflow.title}</h3>
                    <p className="text-slate-600 text-sm leading-6">{workflow.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-4">Why teams switch</p>
              <div className="space-y-5">
                <motion.div whileHover={{ x: 6 }} className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-3xl font-bold text-slate-900">58%</p>
                  <p className="text-slate-600 mt-2">faster shortlist creation with one shared candidate pipeline.</p>
                </motion.div>
                <motion.div whileHover={{ x: 6 }} className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-3xl font-bold text-slate-900">3x</p>
                  <p className="text-slate-600 mt-2">more visibility into candidate progress, bottlenecks, and response speed.</p>
                </motion.div>
                <motion.div whileHover={{ x: 6 }} className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-3xl font-bold text-slate-900">1 hub</p>
                  <p className="text-slate-600 mt-2">for jobs, applications, team collaboration, and candidate updates.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Powerful features for modern hiring</h2>
              <p className="text-xl text-slate-600">Everything you need to attract talent and manage applications cleanly.</p>
            </motion.div>
            <motion.div variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg hover:border-blue-200 transition-all duration-200"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="candidates" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-teal-700 border border-teal-100 mb-6">
              <FileText size={16} />
              Candidate applications
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold text-slate-900 mb-4">
              A dedicated space for candidates to apply to jobs
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-slate-600 mb-8">
              Job seekers can browse openings, submit applications quickly, and keep track of every role they have applied to without juggling emails or spreadsheets.
            </motion.p>
            <motion.div variants={stagger} className="space-y-4">
              {candidateBenefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-3 rounded-2xl bg-white p-4 border border-slate-200"
                >
                  <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5" />
                  <p className="text-slate-700">{benefit}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                to="/jobs"
                className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                Explore Jobs <ArrowRight size={18} />
              </Link>
              <Link
                to="/register?type=jobseeker"
                className="border-2 border-slate-300 text-slate-900 px-6 py-4 rounded-lg font-semibold hover:border-teal-600 hover:text-teal-700 transition-colors inline-flex items-center justify-center"
              >
                Create Candidate Profile
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60"
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-2xl bg-slate-50 p-6 border border-slate-200"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-slate-500">Candidate dashboard</p>
                  <h3 className="text-2xl font-semibold text-slate-900 mt-1">Application tracker</h3>
                </div>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">6 active</span>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl bg-white border border-slate-200 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-slate-900">Frontend Engineer</p>
                      <p className="text-sm text-slate-500">Northstar Labs • Remote</p>
                    </div>
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">Interview</span>
                  </div>
                </div>
                <div className="rounded-2xl bg-white border border-slate-200 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-slate-900">Product Designer</p>
                      <p className="text-sm text-slate-500">Brightlane • Hybrid</p>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Applied</span>
                  </div>
                </div>
                <div className="rounded-2xl bg-white border border-slate-200 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-slate-900">Growth Analyst</p>
                      <p className="text-sm text-slate-500">Orbit People • On-site</p>
                    </div>
                    <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">Reviewing</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-2xl bg-slate-900 p-5 text-white">
                <p className="text-sm text-slate-300">Candidate tools</p>
                <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
                  <div className="rounded-xl bg-white/5 p-3">Resume-ready profile</div>
                  <div className="rounded-xl bg-white/5 p-3">Status notifications</div>
                  <div className="rounded-xl bg-white/5 p-3">Saved searches</div>
                  <div className="rounded-xl bg-white/5 p-3">Application history</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

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

      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Pricing that makes sense</h2>
              <p className="mx-auto max-w-3xl text-xl text-slate-600">
                Clear plans for solo users, small teams, and larger companies. Candidates can browse jobs and apply for free.
              </p>
            </motion.div>
            <motion.div variants={stagger} className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ y: -10 }}
                  className={`rounded-2xl p-8 transition-all duration-200 ${
                    plan.popular
                      ? "bg-gradient-to-b from-blue-600 to-blue-700 text-white border-2 border-blue-600 shadow-2xl scale-105"
                      : "bg-white border border-slate-200 hover:shadow-lg"
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold w-fit mb-4">
                      Best for small teams
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`text-sm mb-6 ${plan.popular ? "text-blue-100" : "text-slate-600"}`}>
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className={`ml-1 text-sm ${plan.popular ? "text-blue-100" : "text-slate-600"}`}>
                      {plan.period}
                    </span>
                  </div>
                  <div className={`mb-6 rounded-xl px-4 py-3 text-sm ${plan.popular ? "bg-white/10 text-blue-50" : "bg-slate-50 text-slate-600"}`}>
                    {plan.name === "Solo" && "Good if you are the only person managing jobs and applicants."}
                    {plan.name === "Team" && "Good if multiple people review candidates and need shared hiring visibility."}
                    {plan.name === "Enterprise" && "Talk to sales if you need procurement, security review, or custom integration work."}
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
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="mt-8 rounded-2xl border border-slate-200 bg-white px-6 py-5 text-sm text-slate-600 shadow-sm"
            >
              No vague credits, no usage-based surprises in these plans. If you are just applying to jobs as an individual candidate, you do not need a paid plan.
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="resources" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">What teams say after switching</h2>
              <p className="text-xl text-slate-600">Trusted by recruiters, hiring managers, and fast-moving candidates.</p>
            </motion.div>
            <motion.div variants={stagger} className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold">
                      {testimonial.image}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.name}</p>
                      <p className="text-sm text-slate-600">{testimonial.role}</p>
                      <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to transform your hiring?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join companies that want better recruiting workflows and candidates that want a smoother way to apply.
          </p>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-flex">
            <Link
              to="/register?type=company"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center gap-2"
            >
              Start Your Free Trial Today <ArrowRight size={20} />
            </Link>
          </motion.div>
          <p className="text-blue-100 text-sm mt-4">No credit card required. 14 days free.</p>
        </motion.div>
      </section>
    </div>
  );
};

export default SaasLandingMotion;
