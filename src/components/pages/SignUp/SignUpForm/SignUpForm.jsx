import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import WithGoogleGithub from "./WithGoogleGithub";
import "./SignUp.css";
import { IoCaretBackCircle } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { jibikaAuth } from "../../../../auth/firebase.config";
import Swal from "sweetalert2";
import LoadingPage from "../../loading/LoadingPage";

const SignUpForm = () => {
  const initialState = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    conPassword: "",
  };

  const [formInputs, setFormInputs] = useState(initialState);
  const [notmathingErr, setNotmathingErr] = useState("");
  const [sixDisit, setSixDigit] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(jibikaAuth);
  const [updateProfile, updating] = useUpdateProfile(jibikaAuth);

  const inputChanges = (e) => {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value,
    });
  };
  console.log(user);
  useEffect(() => {
    const errFunc = () => {
      if (error) {
        if (error?.code === "auth/email-already-in-use") {
          return Swal.fire({
            text: "You have already an account with this email",
            icon: "warning",
          });
        } else {
          console.log(error.code);
        }
      }
    };
    errFunc();
  }, [error]);

  if (loading || updating) {
    <LoadingPage />;
  }

  useEffect(() => {
    if (user) {
      navigate("/");
      Swal.fire({
        title: "Successfully signed up",
        icon: "success",
      }).then(() => {});
      return navigate("/");
    }
  }, [user, navigate]);

  const handleSignUpForm = async (e) => {
    e.preventDefault();

    if (
      formInputs.fname.trim() === "" ||
      formInputs.lname.trim() === "" ||
      formInputs.email.trim() === "" ||
      formInputs.password.trim() === "" ||
      formInputs.conPassword.trim() === ""
    ) {
      return Swal.fire({
        text: "Empty inputs not valid",
        icon: "warning",
      });
    } else if (formInputs.password !== formInputs.conPassword) {
      setNotmathingErr("password doesn't match!");
    } else if (formInputs.password.length < 6) {
      setSixDigit("Password must be 6 digit or getter than");
    }
    try {
      await createUserWithEmailAndPassword(
        formInputs.email,
        formInputs.password
      );
      await updateProfile({
        displayName: `${formInputs.fname} ${formInputs.lname}`,
        photoURL:
          "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/414720608_3469179550038797_7218561405128909443_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHWhB2_66J1fAsyjc0RzTq4QjZ633H6iZFCNnrfcfqJkTHUnrtUVXeb9E39PY2L3j9TfSPQ4PP1xMC0KSATu0dA&_nc_ohc=RqlCus4fub8AX-vr870&_nc_ht=scontent.fdac14-1.fna&oh=00_AfDQBAi4g3CQCEsH_llavDWcO13zoc6if7owp53mJCNC6A&oe=659AE351",
      });
    } catch (err) {
      console.log(err);
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
          <h2 className="createAccount">Create your Accont</h2>
        </div>

        <div>
          <form className="signupForm" onSubmit={handleSignUpForm}>
            <div>
              <label htmlFor="fname">First Name</label>

              <div>
                <input
                  id="fname"
                  name="fname"
                  type="text"
                  autoComplete="fname"
                  placeholder="First name"
                  onChange={inputChanges}
                  value={formInputs.fname}
                />
              </div>

              <label htmlFor="lname">Last Name</label>

              <div>
                <input
                  id="lname"
                  name="lname"
                  type="text"
                  autoComplete="lname"
                  placeholder="Last name"
                  onChange={inputChanges}
                  value={formInputs.lname}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email">Email address</label>
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter email"
                  onChange={inputChanges}
                  value={formInputs.email}
                />
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="password">Password</label>
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  autoComplete="current-password"
                  onChange={inputChanges}
                  value={formInputs.password}
                />
                <p className="err">{sixDisit}</p>
              </div>
              {/* confirm password */}
              <div>
                <label htmlFor="conPassword">Confirm Password</label>
              </div>
              <div>
                <input
                  id="conPassword"
                  name="conPassword"
                  type="password"
                  placeholder="Confirm password"
                  autoComplete="current-password"
                  onChange={inputChanges}
                  value={formInputs.conPassword}
                />
                <p className="err">{notmathingErr}</p>
              </div>
            </div>

            <div>
              <button type="submit" className="signUpBtn">
                Sign up
              </button>
            </div>
          </form>

          <p className="haveAccount">
            Already have an account?{" "}
            <NavLink to="/signin" style={{ color: "aqua" }}>
              Sign in
            </NavLink>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            marginTop: "10px",
            fontSize: "30px",
          }}
        >
          <IoCaretBackCircle
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
          />{" "}
          <FaHome onClick={() => navigate("/")} style={{ cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
