import { useState } from "react";
import "./editJob.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const EdtiJob = () => {
  const {
    id,
    title,
    logo,
    companyName,
    position,
    location,
    experience,
    qualification,
    description,
  } = useLoaderData();

  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    company: companyName,
    title: title,
    position: position,
    experience: experience,
    qualification: qualification,
    location: location,
    description: description,
    logo: logo,
  });

  const handleChangingData = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const postData = () => {
    if (
      inputData.title.trim() === "" ||
      inputData.company.trim() === "" ||
      inputData.position.trim() === "" ||
      inputData.experience.trim() === "" ||
      inputData.qualification.trim() === "" ||
      inputData.location.trim() === "" ||
      inputData.description.trim() === "" ||
      inputData.logo.trim() === ""
    ) {
      return Swal.fire({
        text: "Enter valid info!",
        icon: "warning",
      });
    }
    const serverData = {
      id: id,
      title: inputData.title,
      companyName: inputData.company,
      position: inputData.position,
      location: inputData.location,
      experience: inputData.experience,
      qualification: inputData.qualification,
      description: inputData.description,
      logo: inputData.logo,
    };
    axios
      .put(`http://localhost:9000/jobs/${id}`, serverData)
      .then(function (response) {
        console.log(response.data);
        navigate(-1);
        return Swal.fire({
          title: "Successfully Updated jon info",
          icon: "success",
        });
      })
      .catch(function (error) {
        return Swal.fire({
          title: error.message,
          icon: "error",
        });
      });
  };

  const handleAddJobFrom = (e) => {
    e.preventDefault();
    postData();
  };

  return (
    <div className="mainAddJobDiv">
      <form onSubmit={handleAddJobFrom}>
        <h1 style={{ textAlign: "center", margin: "10px" }}>
          Enter Job Details
        </h1>
        <div>
          <label>Company: </label>
          <input
            value={inputData.company}
            onChange={handleChangingData}
            type="text"
            name="company"
          />
        </div>
        <div>
          <label>Job Title: </label>
          <input
            value={inputData.title}
            onChange={handleChangingData}
            type="text"
            name="title"
          />
        </div>
        <div>
          <label>Position</label>
          <input
            value={inputData.position}
            onChange={handleChangingData}
            type="text"
            name="position"
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
          <label>Logo: </label>
          <input
            value={inputData.logo}
            onChange={handleChangingData}
            type="text"
            name="logo"
          />
        </div>
        <div>
          <button>Sumbit</button>
        </div>
      </form>
    </div>
  );
};

export default EdtiJob;
