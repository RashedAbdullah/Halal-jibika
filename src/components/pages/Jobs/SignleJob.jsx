import { FaLocationCrosshairs } from "react-icons/fa6";
import { TiDeleteOutline } from "react-icons/ti";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { HalalJibikaContext } from "../../../context/JibikaContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { jibikaAuth } from "../../../auth/firebase.config";
import Swal from "sweetalert2";
import axios from "axios";

const SignleJob = ({ singleJob, handleDeleteJob, handleFavorites }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();
  const { detailsId, setDetailsId } = useContext(HalalJibikaContext);
  const [user] = useAuthState(jibikaAuth);

  const handleSingleID = (id) => {
    if (!user) {
      navigate("/signin");
      return Swal.fire({
        title: "Sign in first for see details",
        icon: "warning",
      });
    } else {
      setDetailsId(id);
      navigate("/jobdetails");
    }
  };

  const handleApplyJob = () => {
    if (!user) {
      navigate("/signin");
      return Swal.fire({
        title: "Without signed in Cannot Apply",
        icon: "warning",
      });
    } else {
      navigate("/apply");
    }
  };

  // console.log(singleJob.isFavorite)
  const [update, setUpdate] = useState(false);
  const handleFavoriteJobs = (id) => {
    setUpdate(!update);
    const favoriteData = {
      id: singleJob.id,
      isFavorite: update ? false : true,
      title: singleJob.title,
      logo: singleJob.logo,
      companyName: singleJob.companyName,
      position: singleJob.position,
      location: singleJob.location,
      experience: singleJob.experience,
      qualification: singleJob.qualification,
      description: singleJob.description,
    };
    axios
      .put(`http://localhost:9000/jobs/${id}`, favoriteData)
      .then(function (response) {
        console.log(response.data.isFavorite);
        if (response.data.isFavorite) {
          return Swal.fire({
            title: "Added In favories",
            icon: "success",
          });
        } else {
          return Swal.fire({
            title: "Removed From favories",
            icon: "warning",
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
          <button onClick={() => handleDeleteJob(singleJob.id)}>
            <TiDeleteOutline size={"25px"} />
          </button>
          <button>
            <NavLink to={`/jobs/${singleJob.id}`}>
              <MdEditSquare size={"25px"} />
            </NavLink>
          </button>
          <button onClick={() => handleFavoriteJobs(singleJob.id)}>
            <FaRegStar size={"25px"} />
          </button>
        </div>
        <div>
          <button
            onClick={() => handleSingleID(singleJob.id)}
            className="applyNowBtn"
          >
            Details
          </button>
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
