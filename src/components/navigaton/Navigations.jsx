import "./navigations.css";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/halalLogo.png"


const Navigations = () => {
  return (
    <div>
      <div class="headerBox">
        <header>
          <div class="logo">
            <p>Halal Jibika</p>
          </div>

          <input type="checkbox" id="checkbox" />
          <label for="checkbox" class="icons">
            <i id="menu-icon"> <TiThMenu /> </i>
            <i id="close-icon"> <IoMdClose /> </i>
          </label>

          <nav class="navbar">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a >
                  Jobs
                </a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Favorite</a>
              </li>
              <li>
                <a href="">Sign up</a>
              </li>
              <li>
                <a href="">Sign out</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navigations;
