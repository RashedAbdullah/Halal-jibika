import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../SignUpForm/SignUp.css";
import WithGoogleGithub from "../SignUpForm/WithGoogleGithub";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { jibikaAuth } from "../../../../auth/firebase.config";
import Swal from "sweetalert2";
import LoadingPage from "../../loading/LoadingPage";
const SignInForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(jibikaAuth);

  useEffect(() => {
    const handleSignInEffect = async () => {
      if (loading) {
        return <LoadingPage/>;
      }

      if (error) {
        return Swal.fire({
          title: error?.message,
          icon: "error",
        });
      }
    };

    if (user) {
      Swal.fire({
        title: "Successfully Sign in done",
        icon: "success",
      }).then(() => {
        navigate(from, { replace: true });
      });
    }
    handleSignInEffect();
  }, [user, loading, error, navigate, from]);

  const handleSigninForm = async (e) => {
    e.preventDefault();
    const userName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email.trim() !== "" && password.trim() !== "") {
      await signInWithEmailAndPassword(email, password);
    } else {
      Swal.fire({
        title: "Enter valid info",
        text: "Empty input not allowed",
        icon: "info",
      });
    }
  };
  return (
    <div className="signUpOutBox">
      <div className="formBox">
        <WithGoogleGithub />
        <div className="or">
          <div className="orBorder"></div>
          <div>OR</div>
          <div className="orBorder"></div>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2 className="createAccount">Sign in</h2>
        </div>

        <div className="">
          <form className="signupForm" onSubmit={handleSigninForm}>
            <div>
              <label htmlFor="fname" className="">
                Full Name
              </label>

              <div>
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Full name"
                  className=""
                />
              </div>
            </div>
            <div style={{ marginTop: "10px" }}>
              <label htmlFor="email" className="">
                Email address
              </label>
              <div className="mt-2">
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter email"
                  className=""
                />
              </div>
            </div>

            <div style={{ marginTop: "10px" }}>
              <div>
                <label htmlFor="password" className="">
                  Password
                </label>
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  autoComplete="current-password"
                  className=""
                />
              </div>
            </div>

            <div>
              <button
                style={{ marginTop: "30px" }}
                type="submit"
                className="signUpBtn"
              >
                Sign up
              </button>
            </div>
          </form>

          <p style={{ marginTop: "10px" }} className="haveAccount">
            Havn't account?{" "}
            <NavLink
              style={{ color: "aqua" }}
              to="/signup"
              href="#"
              className=""
            >
              Create An Account
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
