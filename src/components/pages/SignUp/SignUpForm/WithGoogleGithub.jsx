import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { jibikaAuth } from "./../../../../auth/firebase.config";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoadingPage from "../../loading/LoadingPage";

const WithGoogleGithub = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(jibikaAuth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(jibikaAuth);
  const navigate = useNavigate();

  if (googleLoading || githubLoading) {
    <LoadingPage />;
  }

  useEffect(() => {
    const googleGithbErr = () => {
      if (googleError || githubError) {
        return Swal.fire({
          title: `${googleError} ${githubError}`,
          icon: "error",
        });
      }
    };
    googleGithbErr();
  }, [googleError, githubError]);

  useEffect(() => {
    const googleGithubData = () => {
      if (googleUser || githubUser) {
        Swal.fire({
          text: "Successfully Signed in",
          icon: "success",
        });
        navigate("/");
      }
    };
    googleGithubData();
  }, [googleUser, githubUser, navigate]);

  return (
    <div style={{ textAlign: "center", color: "#fff" }}>
      <p>Sign in with goole or github</p>
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            fontSize: "30px",
            backgroundColor: "transparent",
            border: "none",
          }}
          onClick={() => signInWithGoogle()}
        >
          <FaGoogle />
        </button>
        <button
          style={{
            fontSize: "30px",
            backgroundColor: "transparent",
            border: "none",
          }}
          onClick={() => signInWithGithub()}
        >
          <FaGithub />
        </button>
      </div>
    </div>
  );
};

export default WithGoogleGithub;
