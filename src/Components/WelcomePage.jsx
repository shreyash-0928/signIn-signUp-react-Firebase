import React from "react";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../style.css";

const WelcomePage = () => {
  const navigate = useNavigate();

  const logOut = async () => {
    await signOut(auth);
    navigate("/signin"); // Redirect to SignIn after logging out
  };

  return (
    <div className="auth-container">
      <h1>Welcome!</h1>
      <p>You are logged in as {auth.currentUser?.email}</p>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default WelcomePage;
