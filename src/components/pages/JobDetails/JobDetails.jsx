import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "./applyJob.css";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { HalalJibikaContext } from "../../../context/JibikaContext";

const JobDetails = () => {
  const { detailsId, setDetailsId } = useContext(HalalJibikaContext);
  console.log(detailsId);
  const [jobDetails, setJobDetails] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const data = await fetch(`http://localhost:9000/jobs/${detailsId}`);
        const toJSON = await data.json();
        setJobDetails(toJSON);
      } catch (err) {
        console.log(err);
      }
    };
    if (detailsId) {
      dataFetch();
    }
  }, []);

  return (
    <div className="applymainDiv">
      <div className="applyJobTitle">
        <h2>JOB DETAILS</h2>
      </div>

      {jobDetails && (
        <div>
          <div className="applyJobImg">
            <img src={jobDetails.logo} alt="" />
            <p className="applyCompanyName">
              Company: {jobDetails.companyName}
            </p>
          </div>

          <div className="applyJobtilePosition">
            <p className="applysingJobTitle">
              <span>Job Title:</span> {jobDetails.title}
            </p>
            <p>
              <span>Position:</span> {jobDetails.position}
            </p>
          </div>

          <div className="qualAndReq">
            <p>
              <span>Qualification:</span> {jobDetails.qualification}
            </p>
            <p>
              <span>Required Experience:</span> {jobDetails.experience}
            </p>
          </div>

          <div className="applyDesc">
            <p>{jobDetails.description}</p>
          </div>

          <div className="applyLocation">
            <FaLocationCrosshairs /> {jobDetails.location}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
