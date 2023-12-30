import { jibikaAuth } from "../../../auth/firebase.config";
import "./userProfile.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UserProfile = () => {
  const [user] = useAuthState(jibikaAuth);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(jibikaAuth);
    navigate("/");
    Swal.fire({
      title: "Signed out",
      icon: "info",
    });
  };

  return (
    <div className="userProfileMainDiv">
      <div>
        <div>
          <h2>Yout Profile informations</h2>
          <div style={{ textAlign: "center" }}>
            <img src={user?.photoURL} alt="" />
          </div>
          <p>Name: {user?.displayName}</p>
          <p>Email: {user?.email}</p>
          <p>Name: {user?.email}</p>
          <p>Last sign in time: {user?.metadata.lastSignInTime}</p>
          <p>Creation time: {user?.metadata.creationTime}</p>
        </div>
        <div>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
