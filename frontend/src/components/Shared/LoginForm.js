import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login logic
    if (credentials.username === "mainadmin") {
      navigate("/main-admin/dashboard");
    } else if (credentials.username === "guestadmin") {
      navigate("/guest-admin/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="login-form-container">
      <h4 className="login-form-title">Login</h4>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-form-text-area">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
            className="login-form-input"
            required
          />
        </div>
        <div className="login-form-text-area">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            className="login-form-input"
            required
          />
        </div>
        <input type="submit" value="LOGIN" className="login-form-btn" />
      </form>
    </div>
  );
};

export default LoginForm;
