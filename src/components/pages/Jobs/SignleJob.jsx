import { FaLocationCrosshairs } from "react-icons/fa6";
import { TiDeleteOutline } from "react-icons/ti";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { jibikaAuth } from "../../../auth/firebase.config";
import Swal from "sweetalert2";
import axios from "axios";

const SignleJob = ({ singleJob, handleDeleteJob }) => {
  const navigate = useNavigate();
  const [user] = useAuthState(jibikaAuth);
  const [isFavorite, setIsFavorite] = useState(singleJob.isFavorite);

  const handleApplyJob = () => {
    if (!user) {
      return Swal.fire({
        text: "Without signed in Cannot Apply",
        icon: "warning",
      });
    } else {
      navigate("/apply");
    }
  };

  const handleFavoriteJobs = (id) => {
    const favoriteData = {
      ...singleJob,
      isFavorite: !singleJob.isFavorite,
    };
    if (!user) {
      return Swal.fire({
        text: "Cannot add as favorite without sign in",
        icon: "warning",
      });
    }

    axios
      .put(`http://localhost:9000/jobs/${id}`, favoriteData)
      .then(function (response) {
        setIsFavorite(response.data.isFavorite);
        if (response.data.isFavorite) {
          return Swal.fire({
            position: "center",
            icon: "success",
            text: "Added As Favorite",
            showConfirmButton: false,
            timer: 1000,
          });
        } else {
          return Swal.fire({
            position: "center",
            icon: "info",
            text: "Removed From Favorite",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      })
      .catch(function (error) {
        return Swal.fire({
          title: error.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="singleJob fadeIn">
      <div>
        <p className="jobPosition">{singleJob.position}</p>
        <div className="jobImgAndLogo">
          <p>{singleJob.companyName}</p>
          <img src={singleJob.logo} alt="" />
        </div>
        <p className="singleTitle">{singleJob.title}</p>
        <p className="req">Requered: {singleJob.experience}</p>
        <p className="qualification">
          Qualification: {singleJob.qualification}
        </p>
        <div>
          <p className="jobDesc">{singleJob.description}</p>
        </div>
        <p className="jobLocation">
          <FaLocationCrosshairs /> {singleJob.location}
        </p>
      </div>

      <div className="jobBtns">
        <div className="addDeleteEdtiBtn">
          <a
            style={{ cursor: "pointer" }}
            onClick={() => handleDeleteJob(singleJob.id)}
          >
            <TiDeleteOutline size={"25px"} />
          </a>
          <NavLink to={`/jobs/${singleJob.id}`}>
            <MdEditSquare size={"25px"} />
          </NavLink>
          <a
            style={{ cursor: "pointer" }}
            onClick={() => handleFavoriteJobs(singleJob.id)}
          >
            {isFavorite ? (
              <FaStar size={"25px"} />
            ) : (
              <FaRegStar size={"25px"} />
            )}
          </a>
        </div>
        <div>
          <button onClick={handleApplyJob} className="applyNowBtn">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignleJob;
