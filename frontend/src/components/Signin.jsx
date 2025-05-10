import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './../assets/css/Signin.css';

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);  // For loading state
  const [errorMessage, setErrorMessage] = useState("");  // For error message

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);  // Show loading indicator
    setErrorMessage("");  // Clear previous error message

    try {
      const res = await fetch("http://localhost:4570/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }

      const data = await res.json();

      // ✅ Store token, email, and role in sessionStorage
      sessionStorage.setItem('token', data.token);
      sessionStorage.setItem('email', data.email);
      sessionStorage.setItem('role', data.role);

      // Redirect based on role
      if (data.role === 1) {
        navigate("/admin/addVideo");  // Default to the 'addVideo' section
      } else {
        navigate("/UserDashboard");
      }

    } catch (error) {
      setErrorMessage(error.message);  // Display error message
      console.error(error);
    } finally {
      setIsLoading(false);  // Hide loading indicator
    }
  };

  return (
    <div className="container">
      <h1 className="title">Streamify</h1>
      <div className="form-box">
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}  {/* Display error message */}

        <div className="links">
          <a href="#">Forgot password?</a> <br />
          <span className="link" onClick={() => navigate("/Signup")}>Sign Up</span>
        </div>
      </div>
    </div>
  );
};

export default Signin;
