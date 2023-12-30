import React from "react";
import { NavLink } from "react-router-dom";
import "../SignUpForm/SignUp.css"
import WithGoogleGithub from "../SignUpForm/WithGoogleGithub";
const SignInForm = () => {
  const handleSignUpForm = () => {};
  return (
    <div className="signUpOutBox">
      <div className="formBox">
        <WithGoogleGithub />
        <div className="or">
          <div className="orBorder"></div>
          <div>OR</div>
          <div className="orBorder"></div>
        </div>
        <div style={{textAlign: "center"}}>
          <h2 className="createAccount">Sign in</h2>
        </div>

        <div className="">
          <form className="signupForm" onSubmit={handleSignUpForm}>
            <div>
              <label htmlFor="fname" className="">
                Full Name
              </label>

              <div>
              <input
                id="fname"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Full name"
                className=""
              />
              </div>

            </div>
            <div style={{marginTop: "10px"}}>
              <label htmlFor="email" className="">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter email"
                  className=""
                />
              </div>
            </div>

            <div style={{marginTop: "10px"}}>
              <div>
                <label htmlFor="password" className="">
                  Password
                </label>
              </div>
              <div >
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  autoComplete="current-password"
                  className=""
                />
              </div>
              {/* confirm password */}

            </div>

            <div>
              <button style={{marginTop: "30px"}} type="submit" className="signUpBtn">
                Sign up
              </button>
            </div>
          </form>

          <p style={{marginTop: "10px"}} className="haveAccount">
            Havn't account?{" "}
            <NavLink style={{ color: "aqua" }} to="/signup" href="#" className="">
              Create An Account
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;