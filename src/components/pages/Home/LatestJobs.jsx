// LatestJobs.jsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { jibikaAuth } from "../../../auth/firebase.config";
import Swal from "sweetalert2";

const LatestJobs = () => {
  const [latestJobs, setLatestJobs] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [user] = useAuthState(jibikaAuth);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9000/jobs");
        setLatestJobs(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const handleLatesJob = () => {
    if (!user) {
      navigate("/signin");
      return Swal.fire({
        title: "Sign in first",
        icon: "info",
      });
    }
    navigate("/jobs");
  };

  return (
    <div className="latestJobsContainer">
      <h2 className="latestJobTitle">Latest Jobs ...</h2>
      {latestJobs?.slice(0, 5).map((job) => (
        <div key={job.id} className="latestJobItem">
          <p>{job.title}</p>
        </div>
      ))}
      <div className="exploreBtnContainer">
        <button className="latestBtn" onClick={handleLatesJob}>
          Explore All Jobs <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default LatestJobs;
