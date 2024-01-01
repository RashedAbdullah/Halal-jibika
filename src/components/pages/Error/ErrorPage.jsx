import React from "react";
import "./Error.css";
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigae = useNavigate();
    return (
        <div className="errorContainer">
            <div className="errorBox">
                <div className="errorIcon">⚠️</div>
                <div className="errorMessage"></div>
                <div onClick={()=>navigae("/")} className="goHome">Go Home</div>
            </div>
        </div>
    );
};

export default ErrorPage;