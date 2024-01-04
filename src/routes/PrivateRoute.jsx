import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { jibikaAuth } from "../auth/firebase.config";
import { useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";
import LoadingPage from "../components/pages/loading/LoadingPage";

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(jibikaAuth);
  const location = useLocation();

  useEffect(() => {
    if (!user && !loading) {
      Swal.fire({
        title: "Plese sign in first",
        icon: "warning",
      });
    }
  }, [user, loading]);

  if (loading) {
    return <LoadingPage />;
  }

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
