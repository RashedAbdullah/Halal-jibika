import "./navigations.css";
import { TiThMenu } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { jibikaAuth } from "./../../auth/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

const Navigations = () => {
  const [user] = useAuthState(jibikaAuth);
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div>
      <div className="headerBox">
        <header>
          <div className="logo">
            <img
              style={{ height: "40px" }}
              src="https://seeklogo.com/images/H/halal-logo-150ED752BD-seeklogo.com.png"
              alt=""
            />
          </div>

          <nav className="navbar">
            <ul className="displayNone">
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
            <ul className="menuBar">
              <li className="">
                <button onClick={() => setIsMenu(!isMenu)}>
                  {isMenu ? (
                    <CgClose size={"22px"} />
                  ) : (
                    <TiThMenu size={"20px"} />
                  )}
                </button>
              </li>
            </ul>
          </nav>
        </header>
        {isMenu && (
          <nav onClick={() => setIsMenu(!isMenu)} className="smNavbar">
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
        )}
      </div>
    </div>
  );
};

export default Navigations;
