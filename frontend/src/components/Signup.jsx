import React from "react";
import { useNavigate } from "react-router-dom";
import './../assets/css/Signup.css'; // Use the same CSS as Signin for consistency

const Signup = () => {
    const navigate = useNavigate();

    return (
        <div className="signin-container">
            <h1 className="title">Streamify</h1>
            <div className="signin-box">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button className="signin-button">Register</button>
                <p>
                    Already have an account?{" "}
                    <span className="link" onClick={() => navigate("/signin")}>Sign In</span>
                </p>
            </div>
        </div>
    );
};

export default Signup;
