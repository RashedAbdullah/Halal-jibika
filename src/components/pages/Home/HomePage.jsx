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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            nostrum optio vero inventore ea, maiores eos, architecto, laborum
            voluptas beatae perferendis magni ro inventore ea, maiores eos,
            architecto, laborum voluptas beatae perferendis magni corrupti quas
            iure illum aliquid! Maiores, hic quaerat. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Placeat nostrum optio vero inventore
            ea, maiores eos, architecto, laborum volup ro inventore ea, maiores
            eos, architecto, laborum voluptas beatae perferendis magni corrupti
            quas iure illum aliquid! Maiores, hic quaerat. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Placeat nostrum optio vero
            inventore ea, maiores eos, architecto, laborum volup corrupti quas
            iure illum aliquid! Maiores, hic quaerat. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Placeat nostrum optio vero inventore
            ea, maiores eos, architecto, laborum voluptas beatae perferendis
            magni corrupti quas iure illum aliquid! Maiores, hic quaerat.
          </p>
          <p>
            Lorem ipsum dolor ro inventore ea, maiores eos, architecto, laborum
            voluptas beatae perferendis magni corrupti quas iure illum aliquid!
            Maiores, hic quaerat. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Placeat nostrum optio vero inventore ea, maiores
            eos, architecto, laborum volup ro inventore ea, maiores eos,
            architecto, laborum voluptas beatae perferendis magni corrupti quas
            iure illum aliquid! Maiores, hic quaerat. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Placeat nostrum optio vero inventore
            ea, maiores eos, architecto, laborum volup sit amet consectetur
            adipisicing elit. Placeat nostrum optio vero inventore ea, maiores
            eos, architecto, laborum voluptas beatae perferendis magni corrupti
            quas iure illum aliquid! Maiores, hic quaerat. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Placeat nostrum optio vero
            inventore ea, maiores eos, architecto, laborum voluptas beatae
            perferendis magni corrupti quas iure illum aliquid! Maiores, hic
            quaerat.
          </p>
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
