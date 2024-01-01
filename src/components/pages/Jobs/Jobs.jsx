import React, { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import SignleJob from "./SignleJob";
import "./jobs.css";
import AddJob from "../AddJob/AddJob";
import axios from "axios";
import Swal from "sweetalert2";
import { useAuthState } from "react-firebase-hooks/auth";
import { jibikaAuth } from "../../../auth/firebase.config";
import { favoriteDataFunc } from "./../../../localStorage/localStorage";
import { FaPlus } from "react-icons/fa6";


const Jobs = () => {
  const allJobs = useLoaderData();

  const [user] = useAuthState(jibikaAuth);

  const [favorites, setFavorites] = useState(favoriteDataFunc());

  // useEffect(() => {
  //   localStorage.setItem("favoriteData", JSON.stringify(favorites));
  // }, [favorites]);

  const handleFavorites = (id) => {
    setFavorites([...favorites, id]);
  };

  const handleDeleteJob = (id) => {
    if (!user) {
      return Swal.fire({
        title: "You cannot delete data!",
        text: "Please sign in or sign up first!",
        icon: "warning",
      });
    }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:9000/jobs/${id}`)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="mainDivForJobs">
        {user && (
          <div className="addAJobPage">
            <NavLink to={"/addjob"}>Add A job <FaPlus /></NavLink>
          </div>
        )}
      <div className="jobTitle">
        <h2>Available Jobs</h2>
      </div>
      <div className="allJobs">
        {allJobs?.map((singleJob) => (
          <SignleJob
            key={singleJob.id}
            singleJob={singleJob}
            handleDeleteJob={handleDeleteJob}
            handleFavorites={handleFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
