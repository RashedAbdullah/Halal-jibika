import React from "react";
import { useLoaderData } from "react-router-dom";
import SignleJob from "./SignleJob";
import "./jobs.css";

const Jobs = () => {
  const allJobs = useLoaderData();

  return (
    <div>
      <div className="jobTitle">
        <h2>Available Jobs</h2>
      </div>
      <div className="allJobs">
        {allJobs?.map((singleJob) => (
          <SignleJob key={singleJob.id} singleJob={singleJob} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
