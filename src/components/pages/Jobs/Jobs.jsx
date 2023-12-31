import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SignleJob from "./SignleJob";
import "./jobs.css";

const Jobs = () => {
  const allJobs = useLoaderData();

  const [updatedJobs, setUpdatedJobs] = useState([]);

  const handleDeleteJob = (id) => {
    const filteredJobs = allJobs.filter((singleJob) => singleJob.id !== id);
    setUpdatedJobs(filteredJobs);
  };
  console.log(updatedJobs);

  return (
    <div>
      <div className="jobTitle">
        <h2>Available Jobs</h2>
      </div>
      <div className="allJobs">
        {updatedJobs.length > 0
          ? updatedJobs?.map((singleJob) => (
              <SignleJob
                key={singleJob.id}
                singleJob={singleJob}
                handleDeleteJob={handleDeleteJob}
              />
            ))
          : allJobs?.map((singleJob) => (
              <SignleJob
                key={singleJob.id}
                singleJob={singleJob}
                handleDeleteJob={handleDeleteJob}
              />
            ))}
      </div>
    </div>
  );
};

export default Jobs;
