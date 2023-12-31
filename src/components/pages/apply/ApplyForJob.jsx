import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const ApplyForJob = () => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    fullName: "",
    experience: "",
    qualification: "",
    location: "",
    description: "",
  });

  const handleChangingData = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddJobFrom = (e) => {
    e.preventDefault();

    if (
      inputData.fullName.trim() === "" ||
      inputData.experience.trim() === "" ||
      inputData.qualification.trim() === "" ||
      inputData.location.trim() === "" ||
      inputData.description.trim() === ""
    ) {
      return Swal.fire({
        title: "Enter Valid Details",
        icon: "warning",
      });
    } else {
      navigate(-1);
      return Swal.fire({
        title: "Your application submited successfully",
        icon: "success",
      });
    }
  };

  return (
    <div className="mainAddJobDiv">
      <form onSubmit={handleAddJobFrom}>
        <h1 style={{ textAlign: "center", margin: "10px" }}>
          Apply For This Job
        </h1>
        <div>
          <label>Full Name: </label>
          <input
            value={inputData.fullName}
            onChange={handleChangingData}
            type="text"
            name="fullName"
          />
        </div>
        <div>
          <label>Experience: </label>
          <input
            value={inputData.experience}
            onChange={handleChangingData}
            type="text"
            name="experience"
          />
        </div>
        <div>
          <label>Qualification: </label>
          <input
            value={inputData.qualification}
            onChange={handleChangingData}
            type="text"
            name="qualification"
          />
        </div>
        <div>
          <label>Location: </label>
          <input
            value={inputData.location}
            onChange={handleChangingData}
            type="text"
            name="location"
          />
        </div>
        <div>
          <label>Description: </label>
          <input
            value={inputData.description}
            onChange={handleChangingData}
            type="text"
            name="description"
          />
        </div>
        <div>
          <button>Sumbit</button>
        </div>
      </form>
    </div>
  );
};

export default ApplyForJob;
