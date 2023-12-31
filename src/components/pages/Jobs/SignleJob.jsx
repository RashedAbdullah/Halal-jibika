import { FaLocationCrosshairs } from "react-icons/fa6";
import { TiDeleteOutline } from "react-icons/ti";
import { VscStarEmpty } from "react-icons/vsc";
import { MdEditSquare } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { HalalJibikaContext } from "../../../context/JibikaContext";

const SignleJob = ({ singleJob, handleDeleteJob }) => {
  const navigate = useNavigate();

  const {detailsId, setDetailsId} = useContext(HalalJibikaContext)

  const handleSingleID = (id) => {
    setDetailsId(id);
    navigate("/jobdetails");
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
          <button>
            <VscStarEmpty size={"25px"} />
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
          <button onClick={() => navigate("/apply")} className="applyNowBtn">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignleJob;
