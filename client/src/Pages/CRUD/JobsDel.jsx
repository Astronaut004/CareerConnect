import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const JobsDel = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {


const delResponse = async () => {
  try {
    const res = await fetch(`http://localhost:5000/api/jobs/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const data = await res.json(); // parse response JSON
    console.log("Delete API response ✅", data);

    if (res.status === 404) {
      alert("Job not found or not authorized");
      navigate("/jobs");
      return;
    }

    // No need to throw error if status is 200
    console.log("Job deleted successfully ✅");
    navigate("/jobs"); // 👈 Redirect back
  } catch (err) {
    console.error("Error deleting job ❌", err);
    alert("Failed to delete job. Please try again.");
    navigate("/jobs");
  }
};


    delResponse(); // 👈 Call the function!
  }, [id, navigate]);

  return (
    <div className="text-center mt-10 text-lg text-gray-700">
      Deleting job...
    </div>
  );
};

export default JobsDel;
