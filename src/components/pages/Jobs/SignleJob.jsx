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
import { favoriteDataFunc } from "../../../localStorage/localStorage";

const SignleJob = ({ singleJob, handleDeleteJob }) => {
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

  const [favorite, setFavorite] = useState(favoriteDataFunc());
  const [isFavorite, setIsFavorite] = useState(false);
  console.log(favorite);
  const handleFavorite = (id) => {
    if (!isFavorite) {
      setFavorite([...favorite, singleJob]);
    } else {
      if(id === singleJob.id){
        
      }
    }
    // setFavorite([]);
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    localStorage.setItem("favoriteData", JSON.stringify(favorite));
  }, [favorite]);

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

  return (
    <div className="singleJob">
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
          <button onClick={() => handleFavorite(singleJob.id)}>
            {isFavorite ? (
              <FaStar size={"25px"} />
            ) : (
              <FaRegStar size={"25px"} />
            )}
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
