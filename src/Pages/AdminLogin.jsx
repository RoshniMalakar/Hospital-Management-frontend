import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Style/AdminLogin.css'

const AdminLogin = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const Login = (e) => {
    e.preventDefault();
    if (userName == "Admin" && password == "12345") {
      localStorage.setItem("Admin Token", "abcd123");
      navigate("/admin");
    } else {
      alert("Invalid UserName And Password");
    }
  };
  return (
    <div className="admin-login">
      <form action="" onSubmit={Login}>
        <h2>Admin Login</h2>
        <input
          type="text"
          placeholder="Enter Username:Admin"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password:12345"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminLogin;
