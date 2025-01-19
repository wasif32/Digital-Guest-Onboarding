import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        credentials
      );

      if (response.data.success) {
        // Store token and user data in localStorage
        const { token, user } = response.data.data;
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("user", JSON.stringify(user)); // Store whole user data, including role

        // Redirect based on the role stored in user data
        const { role } = user; // Directly accessing the role from user data

        if (role === "mainAdmin") {
          navigate("/main-admin/dashboard");
        } else if (role === "guestAdmin") {
          navigate("/guest-admin/dashboard");
        }
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid username or password!");
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
