import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "../../store/userstore.js";
import { Briefcase, Clock, Filter, ArrowLeft } from "lucide-react";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const userId = useUserStore((state) => state.userId);

  const categories = ["All", "Technology", "Healthcare", "Sales", "Marketing", "Design", "Finance"];

  const fetchJobs = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/jobs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) throw new Error("Failed to fetch jobs");
      const data = await response.json();

      const sortedJobs = data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      setJobs(sortedJobs);
      setFilteredJobs(sortedJobs);
      setLoading(false);
    } catch (error) {
      setError("Failed to load jobs. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Filter jobs by category
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredJobs(jobs);
    } else {
      setFilteredJobs(jobs.filter(job => job.category === selectedCategory));
    }
  }, [selectedCategory, jobs]);

  if (loading)
    return <div className="text-center mt-20 text-xl text-slate-500 animate-pulse">Loading jobs...</div>;
  if (error)
    return <div className="text-center mt-20 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 pt-[100px]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <aside className="md:col-span-1 bg-white rounded-2xl shadow-lg p-6 sticky top-[100px] h-fit flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Filter className="w-5 h-5 text-blue-600" /> Filter by Category
            </h3>
            <ul className="flex flex-col gap-3 mb-6">
              {categories.map((cat) => (
                <li
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`cursor-pointer px-4 py-2 rounded-lg text-slate-700 font-medium transition 
                    ${selectedCategory === cat ? "bg-blue-600 text-white shadow" : "hover:bg-blue-50"}`}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Back Button Below Filters */}
          <Link
            to="/dashboard"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-900 font-semibold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105 mt-4"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
        </aside>

        {/* Job Listings */}
        <main className="md:col-span-3">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            {selectedCategory === "All" ? "All Jobs" : `${selectedCategory} Jobs`}
          </h2>

          {filteredJobs.length === 0 ? (
            <p className="text-center text-slate-500 text-lg">No jobs found.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col justify-between hover:-translate-y-1 transform duration-300"
                >
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-blue-600" />
                      {job.position}
                    </h3>
                    <p className="text-slate-700 mb-1">
                      Company: <span className="font-medium">{job.company}</span>
                    </p>
                    <p className="text-slate-600 mb-1">
                      Status:{" "}
                      <span
                        className={`font-semibold ${
                          job.status === "pending"
                            ? "text-yellow-600"
                            : job.status === "interview"
                            ? "text-blue-600"
                            : "text-red-600"
                        }`}
                      >
                        {job.status}
                      </span>
                    </p>
                    <p className="text-slate-500 text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      Posted by:{" "}
                      {parseInt(job.createdBy) === parseInt(userId)
                        ? "You"
                        : `User ${job.createdBy}`}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      to={`/jobs/apply/${job.id}`}
                      className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition transform hover:scale-105"
                    >
                      Apply Now
                    </Link>

                    {parseInt(job.createdBy) === parseInt(userId) && (
                      <>
                        <Link
                          to={`/jobs/update/${job.id}`}
                          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
                        >
                          Update
                        </Link>
                        <Link
                          to={`/jobs/delete/${job.id}`}
                          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition"
                        >
                          Remove
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Jobs;
