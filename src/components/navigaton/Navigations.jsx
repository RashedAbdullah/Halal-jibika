import "./navigations.css";
import { TiThMenu } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { FaSignInAlt, FaUserAstronaut } from "react-icons/fa";
import { jibikaAuth } from "./../../auth/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { CgClose } from "react-icons/cg";
import { useContext, useEffect, useState } from "react";
import { HalalJibikaContext } from "../../context/JibikaContext";
import { MdNightlight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Navigations = () => {
  const { handleLightDark, isLight } = useContext(HalalJibikaContext);
  const [user] = useAuthState(jibikaAuth);
  const [isMenu, setIsMenu] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolledUp(scrollTop <= 0 || scrollTop < lastScrollTop);
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };
    let lastScrollTop = 0;
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="emptyHeight"></div>
      <div className={`headerBox ${isScrolledUp ? "visible" : "hidden"}`}>
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
                <a onClick={handleLightDark}>
                  {isLight ? <MdNightlight /> : <MdOutlineLightMode />}
                </a>
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
                    <span
                      style={{ color: isLight ? "black" : "rgb(0,225,225)" }}
                    >
                      {user?.displayName}
                    </span>
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
          <nav
            style={{
              background: isLight
                ? "linear-gradient(to right, #9dEEEE, #adEEEE)"
                : "linear-gradient(to right, #004d4d, #003131)",
            }}
            onClick={() => setIsMenu(!isMenu)}
            className="smNavbar"
          >
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
                <a onClick={handleLightDark}>
                  {isLight ? <MdNightlight /> : <MdOutlineLightMode />}
                </a>
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
                    <span
                      style={{ color: isLight ? "black" : "rgb(0,225,225)" }}
                    >
                      {user?.displayName}
                    </span>
                    {user?.photoURL ? (
                      <img
                        style={{
                          height: "30px",
                          width: "30px",
                          borderRadius: "50%",
                        }}
                        src={user?.photoURL}
                        alt="User profile"
                      />
                    ) : (
                      <FaUserAstronaut size="25px" />
                    )}
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
