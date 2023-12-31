import "./navigations.css";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { jibikaAuth } from "./../../auth/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";

const Navigations = () => {
  const [user] = useAuthState(jibikaAuth);

  return (
    <div>
      <div className="headerBox">
        <header>
          <div className="logo">
            <p>HALAL JIBIKA</p>
          </div>

          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox" className="icons">
            <i id="menu-icon">
              {" "}
              <TiThMenu />{" "}
            </i>
            <i id="close-icon">
              {" "}
              <IoMdClose />{" "}
            </i>
          </label>

          <nav className="navbar">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to={"/jobs"}>Jobs</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/favorite">Favorites</NavLink>
              </li>
              <li>
                {user ? (
                  <NavLink
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                    to={"/userProfile"}
                  >
                    <span style={{ color: "aqua" }}>{user?.displayName}</span>
                    <img
                      style={{
                        height: "30px",
                        width: "30px",
                        borderRadius: "50%",
                      }}
                      src={user?.photoURL}
                      alt=""
                    />
                  </NavLink>
                ) : (
                  <NavLink to="/signin" style={{ fontSize: "25px" }}>
                    <FaSignInAlt />
                  </NavLink>
                )}
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navigations;
