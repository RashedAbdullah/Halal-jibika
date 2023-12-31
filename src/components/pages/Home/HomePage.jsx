import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { jibikaAuth } from "../../../auth/firebase.config";
import Swal from "sweetalert2";
import "./HomePage.css";
import { FaArrowRight } from "react-icons/fa";

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
    <div className="homePgaeMainDiv">
      <div className="demotextAndLatestJobs">
        <div className="demoTexts">
          <h2>Welcome to <span>Halal-Jibika</span> </h2>
          <p className="homeUnderHead">Discover Meaningful Opportunities Aligned with Your Values</p>
          <p className="demoTextDesc">Are you ready to embark on a professional journey that aligns with your ethical and Halal principles? Welcome to <span>Halal-Jibika</span>, where we believe in connecting talented individuals with employers who share their commitment to <span>ethical</span> and <span>Islamic business</span> practices</p>
        </div>
        <div className="">
          <div className="latestJobs">
            <h2>Latest jobs ...</h2>
            <p>Job one title is here</p>
            <p>Job one title is here</p>
            <p>Job one title is here</p>
            <p>Job one title is here</p>
            <p>Job one title is here</p>
          </div>
          <div className="parentExloreBtn">
            <button
              onClick={handleExploreBtn}
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "transparent",
                border: "1px solid white",
                color: "white",
                gap: "5px",
                justifyContent: "center",
              }}
            >
              Explore All Jobs <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="parentExloreBtn">
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            justifyContent: "center",
          }}
          onClick={handleExploreBtn}
        >
          Explore Now <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default HomePage;
