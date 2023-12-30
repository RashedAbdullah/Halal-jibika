import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const WithGoogleGithub = () => {
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
        <button style={{fontSize: "30px", backgroundColor: "transparent", border: "none"}}>
          <FaGoogle />
        </button>
        <button style={{fontSize: "30px", backgroundColor: "transparent", border: "none"}}>
          <FaGithub />
        </button>
      </div>
    </div>
  );
};

export default WithGoogleGithub;
