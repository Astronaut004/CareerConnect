import React, { useMemo, useState } from "react";
import {
  Search,
  MapPin,
  Briefcase,
  Building2,
  DollarSign,
  Clock,
  FilterX,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const filterOptions = {
  level: ["Junior", "Mid-level", "Senior"],
  type: ["Full-time", "Part-time", "Contract", "Remote"],
  salary: ["$50k - $75k", "$75k - $100k", "$100k - $150k", "$150k+"],
  location: ["Remote", "San Francisco", "New York", "Austin"],
};

const salaryBands = {
  "$50k - $75k": [50000, 75000],
  "$75k - $100k": [75000, 100000],
  "$100k - $150k": [100000, 150000],
  "$150k+": [150000, Number.POSITIVE_INFINITY],
};

const jobs = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    company: "TechFlow Inc.",
    location: "San Francisco, CA",
    salary: "$120k - $150k",
    level: "Senior",
    type: "Full-time",
    posted: "2 days ago",
    description: "Build scalable web applications with React and Node.js",
    logo: "TF",
    featured: true,
  },
  {
    id: 2,
    title: "Product Manager",
    company: "InnovateSoft",
    location: "New York, NY",
    salary: "$100k - $130k",
    level: "Mid-level",
    type: "Full-time",
    posted: "1 week ago",
    description: "Lead product strategy and vision for our SaaS platform",
    logo: "IS",
    featured: false,
  },
  {
    id: 3,
    title: "UX/UI Designer",
    company: "CreativeStudio",
    location: "Remote",
    salary: "$80k - $110k",
    level: "Mid-level",
    type: "Full-time",
    posted: "3 days ago",
    description: "Design beautiful and intuitive user experiences",
    logo: "CS",
    featured: true,
  },
  {
    id: 4,
    title: "Junior Backend Developer",
    company: "StartupXYZ",
    location: "Austin, TX",
    salary: "$70k - $90k",
    level: "Junior",
    type: "Full-time",
    posted: "5 days ago",
    description: "Start your career with modern backend technologies",
    logo: "SX",
    featured: false,
  },
];

const parseSalaryRange = (salaryText) => {
  const matches = salaryText.match(/\d+/g);
  if (!matches || matches.length === 0) {
    return [0, 0];
  }

  const min = Number(matches[0]) * 1000;
  const max = matches[1] ? Number(matches[1]) * 1000 : min;
  return [min, max];
};

const JobSeeker = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    level: [],
    salary: [],
    type: [],
    location: [],
  });

  const toggleFilter = (group, value) => {
    setSelectedFilters((prev) => {
      const currentValues = prev[group];
      const nextValues = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];

      return {
        ...prev,
        [group]: nextValues,
      };
    });
  };

  const clearFilters = () => {
    setSelectedFilters({
      level: [],
      salary: [],
      type: [],
      location: [],
    });
    setSearchTerm("");
  };

  const filteredJobs = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesSearch =
        !query ||
        [job.title, job.company, job.description, job.location, job.type]
          .join(" ")
          .toLowerCase()
          .includes(query);

      const matchesLevel =
        selectedFilters.level.length === 0 || selectedFilters.level.includes(job.level);

      const matchesType =
        selectedFilters.type.length === 0 ||
        selectedFilters.type.some((type) => {
          if (type === "Remote") {
            return job.location.toLowerCase().includes("remote");
          }

          return job.type === type;
        });

      const matchesLocation =
        selectedFilters.location.length === 0 ||
        selectedFilters.location.some((location) =>
          job.location.toLowerCase().includes(location.toLowerCase())
        );

      const [jobMinSalary, jobMaxSalary] = parseSalaryRange(job.salary);
      const matchesSalary =
        selectedFilters.salary.length === 0 ||
        selectedFilters.salary.some((selectedRange) => {
          const [filterMin, filterMax] = salaryBands[selectedRange];
          return jobMaxSalary >= filterMin && jobMinSalary <= filterMax;
        });

      return (
        matchesSearch &&
        matchesLevel &&
        matchesType &&
        matchesLocation &&
        matchesSalary
      );
    });
  }, [searchTerm, selectedFilters]);

  const hasActiveFilters =
    searchTerm.trim().length > 0 ||
    Object.values(selectedFilters).some((values) => values.length > 0);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f5f7fb_0%,#eef3f8_48%,#f8fafc_100%)] pt-20">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="inline-flex items-center rounded-full border border-slate-300 bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 shadow-sm">
            Career Search
          </span>
          <h1 className="mt-4 mb-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Find Your Next Job
          </h1>
          <p className="max-w-2xl text-lg text-slate-600">
            Discover curated opportunities from credible teams with filters that actually narrow the list.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-[0_18px_45px_-28px_rgba(15,23,42,0.35)] backdrop-blur">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-950">Filters</h2>
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
                >
                  <FilterX size={16} />
                  Clear
                </button>
              </div>

              <div className="mb-6 border-b border-slate-200 pb-6">
                <h3 className="mb-3 text-sm font-semibold text-slate-900">Experience Level</h3>
                <div className="space-y-2">
                  {filterOptions.level.map((level) => (
                    <label
                      key={level}
                      className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 transition-colors hover:bg-slate-50"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFilters.level.includes(level)}
                        onChange={() => toggleFilter("level", level)}
                        className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-400"
                      />
                      <span className="text-sm text-slate-700">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6 border-b border-slate-200 pb-6">
                <h3 className="mb-3 text-sm font-semibold text-slate-900">Job Type</h3>
                <div className="space-y-2">
                  {filterOptions.type.map((type) => (
                    <label
                      key={type}
                      className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 transition-colors hover:bg-slate-50"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFilters.type.includes(type)}
                        onChange={() => toggleFilter("type", type)}
                        className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-400"
                      />
                      <span className="text-sm text-slate-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6 border-b border-slate-200 pb-6">
                <h3 className="mb-3 text-sm font-semibold text-slate-900">Salary Range</h3>
                <div className="space-y-2">
                  {filterOptions.salary.map((salary) => (
                    <label
                      key={salary}
                      className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 transition-colors hover:bg-slate-50"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFilters.salary.includes(salary)}
                        onChange={() => toggleFilter("salary", salary)}
                        className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-400"
                      />
                      <span className="text-sm text-slate-700">{salary}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-semibold text-slate-900">Location</h3>
                <div className="space-y-2">
                  {filterOptions.location.map((location) => (
                    <label
                      key={location}
                      className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 transition-colors hover:bg-slate-50"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFilters.location.includes(location)}
                        onChange={() => toggleFilter("location", location)}
                        className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-400"
                      />
                      <span className="text-sm text-slate-700">{location}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="mb-8 rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-[0_18px_45px_-28px_rgba(15,23,42,0.35)] backdrop-blur">
              <div className="relative">
                <Search
                  size={20}
                  className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  placeholder="Search by job title, company, or keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50/70 py-3 pr-4 pl-12 text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-200"
                />
              </div>
            </div>

            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <p className="font-medium text-slate-600">
                Showing <span className="text-slate-950">{filteredJobs.length}</span> jobs
              </p>
              {hasActiveFilters && (
                <div className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm text-slate-600 shadow-sm">
                  Active search applied
                </div>
              )}
            </div>

            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <Link
                  key={job.id}
                  to={`/jobs/apply/${job.id}`}
                  className="group block rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-[0_14px_38px_-30px_rgba(15,23,42,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_20px_48px_-28px_rgba(15,23,42,0.35)]"
                >
                  <div className="flex gap-6">
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-base font-semibold tracking-[0.2em] text-slate-700 shadow-inner">
                      {job.logo}
                    </div>

                    <div className="flex-grow">
                      <div className="mb-2 flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold text-slate-950 transition-colors group-hover:text-slate-700">
                            {job.title}
                          </h3>
                          <div className="mt-1 flex items-center gap-1 text-slate-600">
                            <Building2 size={16} />
                            <span className="font-medium">{job.company}</span>
                          </div>
                        </div>
                        {job.featured && (
                          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                            Featured
                          </span>
                        )}
                      </div>

                      <p className="mb-4 text-slate-600">{job.description}</p>

                      <div className="mb-4 flex flex-wrap gap-3">
                        <div className="flex items-center gap-1 text-sm text-slate-600">
                          <MapPin size={16} />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-slate-600">
                          <DollarSign size={16} />
                          {job.salary}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-slate-600">
                          <Briefcase size={16} />
                          {job.level}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-slate-600">
                          <Clock size={16} />
                          Posted {job.posted}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1 text-sm font-medium text-slate-800 transition-transform group-hover:translate-x-1">
                          View Details <ChevronRight size={16} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}

              {filteredJobs.length === 0 && (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white/80 px-6 py-12 text-center shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">No jobs match these filters</h3>
                  <p className="mt-2 text-slate-600">
                    Try widening the search or clearing a few filters to see more roles.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-10 flex items-center justify-between">
              <p className="text-slate-600">Page 1 of 5</p>
              <div className="flex gap-2">
                <button className="rounded-lg border border-slate-300 px-4 py-2 text-slate-700 transition-colors hover:bg-slate-50 disabled:opacity-50">
                  Previous
                </button>
                <button className="rounded-lg border border-slate-300 px-4 py-2 text-slate-700 transition-colors hover:bg-slate-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeeker;
