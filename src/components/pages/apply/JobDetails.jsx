import React from "react";
import { useLoaderData } from "react-router-dom";
import "./applyJob.css";
import { FaLocationCrosshairs } from "react-icons/fa6";

const JobDetails = () => {
  const singleJobData = useLoaderData();

  return (
    <div className="applymainDiv">
      <div className="applyJobTitle">
        <h2>JOB DETAILS</h2>
      </div>

      <div>
        <div className="applyJobImg">
          <img src={singleJobData.logo} alt="" />
          <p className="applyCompanyName">Company: {singleJobData.companyName}</p>
        </div>

        <div className="applyJobtilePosition">
          <p className="applysingJobTitle"><span>Job Title:</span> {singleJobData.title}</p>
          <p><span>Position:</span> {singleJobData.position}</p>
        </div>

        <div className="qualAndReq">
          <p><span>Qualification:</span> {singleJobData.qualification}</p>
          <p><span>Required Experience:</span> {singleJobData.experience}</p>
        </div>

        <div className="applyDesc">
          <p>{singleJobData.description}</p>
        </div>

        <div className="applyLocation">
          <FaLocationCrosshairs /> {singleJobData.location}
        </div>
      </div>

    </div>
  );
};

export default JobDetails;
