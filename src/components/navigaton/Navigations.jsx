import "./navigations.css";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";

const Navigations = () => {
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
                <NavLink to="/signup" style={{ fontSize: "25px" }}>
                  <FaSignInAlt />
                </NavLink>
              </li>
              <li>
                <button>Sign out</button>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navigations;
