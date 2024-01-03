import { useContext, useState } from "react";
import "./addJob.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    company: "",
    title: "",
    position: "",
    experience: "",
    qualification: "",
    location: "",
    description: "",
    url: "",
  });

  const handleChangingData = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const postData = () => {
    const serverData = {
      id: Date.now(),
      title: inputData.title,
      logo: inputData.url,
      companyName: inputData.company,
      position: inputData.position,
      location: inputData.location,
      experience: inputData.experience,
      qualification: inputData.qualification,
      description: inputData.description,
    };
    if (
      inputData.title.trim() === "" ||
      inputData.url.trim() === "" ||
      inputData.company.trim() === "" ||
      inputData.position.trim() === "" ||
      inputData.location.trim() === "" ||
      inputData.experience.trim() === "" ||
      inputData.qualification.trim() === "" ||
      inputData.description.trim() === ""
    ) {
      return Swal.fire({
        title: "Enter All Informations",
        icon: "warning",
      });
    }
    axios
      .post("http://localhost:9000/jobs", serverData)
      .then(function (response) {
        navigate("/jobs");
        console.log(response);
        return Swal.fire({
          title: "Successfully added ned job",
          icon: "success",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleAddJobFrom = (e) => {
    e.preventDefault();
    console.log(inputData);
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
          <input onChange={handleChangingData} type="text" name="description" />
        </div>
        <div>
          <label>Logo URL: </label>
          <input onChange={handleChangingData} type="text" name="url" />
        </div>
        <div>
          <button>Sumbit</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
