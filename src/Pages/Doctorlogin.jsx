import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style/DoctorLogin.css";

function Doctorlogin() {
  const Navigte = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://hospital-management-backend-zfz1.onrender.com/api/doctorlogin",
        {
          id,
          password,
        },
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      if (response.status === 201) {
        Navigte(`/doctor/${id}`);
      }
    } catch (error) {
      if (error.response.status == 401) {
        alert("Invalid ID or Password");
      }
      console.log(error.message);
    }
  };
  return (
    <div className="doctor-login">
      <form action="" onSubmit={login}>
        <h2>Only for Doctors</h2>
        <p>Fill Out this information to login!</p>
        <div className="id">
          <label htmlFor="">Doctor's ID</label>
          <input
            type="text"
            placeholder="Enter Id"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="pass">
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Doctorlogin;
