import { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import SignleJob from "./SignleJob";
import axios from "axios";
import Swal from "sweetalert2";
import { useAuthState } from "react-firebase-hooks/auth";
import { jibikaAuth } from "../../../auth/firebase.config";
import { FaPlus } from "react-icons/fa6";
import "./JobsCSS.css";

const Jobs = () => {
  const allJobs = useLoaderData();
  const [render, setRender] = useState(allJobs);

  const [user] = useAuthState(jibikaAuth);

  const func = (states, id) => {
    const trueValue = allJobs.map((data) => {
      if (data.id == id) {
        return {
          ...data,
          isFavorite: states,
        };
      }
      return data;
    });
    setRender(trueValue);
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
          .delete(`https://halal-jobs.onrender.com/jobs/${id}`)
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
        setRender(render.filter((data) => data.id !== id));
      }
    });
  };

  return (
    <div className="mainDivForJobs">
      {user && (
        <div className="addAJobPage">
          <NavLink to={"/addjob"}>
            Add A job <FaPlus />
          </NavLink>
        </div>
      )}
      <div className="jobTitle">
        <h2>Available Jobs</h2>
      </div>
      <div className="allJobs">
        {render?.map((singleJob) => (
          <SignleJob
            key={singleJob.id}
            singleJob={singleJob}
            handleDeleteJob={handleDeleteJob}
            func={func}
          />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
