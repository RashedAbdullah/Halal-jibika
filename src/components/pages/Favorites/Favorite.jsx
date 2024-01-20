import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import "./favorites.css";

const Favorite = () => {
  const [favorites, setFavorites] = useState(null);
  const [error, setError] = useState(null);
  const trueFavorites = favorites?.filter(
    (favorite) => favorite.isFavorite === true
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://halal-jobs.onrender.com/jobs");
        setFavorites(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {trueFavorites?.length > 0 ? (
        <div>
          <h2
            style={{
              textAlign: "center",
              fontSize: "40px",
              margin: "30px 0 10px 0",
            }}
          >
            Your Favorite Jobs
          </h2>
          <div className="mainFavoriteDiv">
            {trueFavorites?.map((favorite) => (
              <div className="favoriteCard" key={favorite.id}>
                <p className="">{favorite.position}</p>
                <div className="">
                  <p>{favorite.companyName}</p>
                  <img src={favorite.logo} alt="" />
                </div>
                <p className="">{favorite.title}</p>
                <p className="">
                  <span>Requered:</span> {favorite.experience}
                </p>
                <p className="">
                  <span>Qualification:</span> {favorite.qualification}
                </p>
                <div>
                  <p className="">{favorite.description}</p>
                </div>
                <p className="">
                  <FaLocationCrosshairs /> {favorite.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="noFavorite">
          <h3>No Favorite Added Yet!</h3>
        </div>
      )}
    </div>
  );
};

export default Favorite;
