import "./navigations.css";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/halalLogo.png"
import { NavLink } from "react-router-dom";


const Navigations = () => {
  return (
    <div>
      <div class="headerBox">
        <header>
          <div class="logo">
            <p>HALAL JIBIKA</p>
          </div>

          <input type="checkbox" id="checkbox" />
          <label for="checkbox" class="icons">
            <i id="menu-icon"> <TiThMenu /> </i>
            <i id="close-icon"> <IoMdClose /> </i>
          </label>

          <nav class="navbar">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to={"/jobs"}>
                  Jobs
                </NavLink>
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
                <NavLink to="/signup">Sign up</NavLink>
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
