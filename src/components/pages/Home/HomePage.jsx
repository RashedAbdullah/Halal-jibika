// HomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { jibikaAuth } from "../../../auth/firebase.config";
import Swal from "sweetalert2";
import "./HomePage.css";
import { FaArrowRight } from "react-icons/fa";
import LatestJobs from "./LatestJobs";

const HomePage = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(jibikaAuth);

  const handleExploreBtn = () => {
    if (!user) {
      Swal.fire({
        title: "Sign in first",
        icon: "info",
      });
      return navigate("/signin");
    } else {
      navigate("/jobs");
    }
  };

  return (
    <div className="homePageMainDiv">
      <div className="demoTextAndLatestJobs">
        <div className="demoTexts">
          <h2 className="fade-in">
            Welcome to <span>Halal-Jibika</span>
          </h2>
          <p className="homeUnderHead fade-in">
            Discover Meaningful Opportunities Aligned with Your Values
          </p>
          <div className="demoTextDesc fade-in">
            <p>
              Ready to embark on a professional journey that aligns with your
              ethical and Halal principles?
            </p>
            <p>
              Welcome to <span>Halal-Jibika</span>, where we connect talented
              individuals with employers who share their commitment to ethical
              and Islamic business practices.
            </p>
            <p>
              <br />
              <span>Halal-Jibika</span>, where we connect talented individuals
              with employers who share their commitment to ethical and Islamic
              business practices, where we connect talented individuals with
              employers who share their commitment to ethical and Islamic
              business practices
            </p>
          </div>
          <div className="parentExploreBtn fade-in">
            <button onClick={handleExploreBtn}>
              Explore Now <FaArrowRight />
            </button>
          </div>
        </div>
        <LatestJobs />
      </div>
    </div>
  );
};

export default HomePage;
