import React, { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import SignleJob from "./SignleJob";
import "./jobs.css";
import AddJob from "../AddJob/AddJob";
import axios from "axios";
import Swal from "sweetalert2";
import { useAuthState } from "react-firebase-hooks/auth";
import { jibikaAuth } from "../../../auth/firebase.config";

const Jobs = () => {
  const allJobs = useLoaderData();
  const [user] = useAuthState(jibikaAuth);

  const handleDeleteJob = (id) => {
    if (!user) {
      return Swal.fire({
        title: "You cannot delete data!",
        text: "Please sign in or sign up first!",
        icon: "warning",
      });
    }
    axios
      .delete(`http://localhost:9000/jobs/${id}`)
      .then(function (response) {
        console.log(response);
        return Swal.fire({
          title: "You deleted A job from data",
          text: "Please Refresh the browser!",
          icon: "info",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="jobTitle">
        <h2>Available Jobs</h2>
      </div>
      <div className="allJobs">
        {allJobs?.map((singleJob) => (
          <SignleJob
            key={singleJob.id}
            singleJob={singleJob}
            handleDeleteJob={handleDeleteJob}
          />
        ))}
      </div>
      {user && (
        <div className="addAJobPage">
          <h2>You can Add more Jobs</h2>
          <NavLink to={"/addjob"}>Add A job</NavLink>
        </div>
      )}
    </div>
  );
};

export default Jobs;
