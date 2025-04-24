import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import './../assets/css/Signin.css'; // Adjust the path as needed


const Signin = () => {
  const navigate = useNavigate();  // Initialize useNavigate

  return (
    <div className="container">
      <h1 className="title">Streamify</h1>
      <div className="form-box">
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign In</button>
        </form>
        <div className="links">
          <a href="#">Forgot password?</a> <br />
          <span className="link" onClick={() => navigate("/Signup")}>Sign Up</span>
        </div>
      </div>
    </div>
  );
};

export default Signin;
