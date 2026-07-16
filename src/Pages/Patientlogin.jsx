import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Style/Patientlogin.css";

function Patientlogin() {
  const Navigte = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://hospital-management-backend-zfz1.onrender.com/api/patientlogin",
        {
          id,
          password,
        },
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      if (response.status === 201) {
        Navigte(`/patient/${id}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="patient-login">
      <form action="" onSubmit={login}>
        <h2>For Patients</h2>
        <p>Fill Out this information to login!</p>
        <div className="id">
          <label htmlFor="">Patient's ID</label>
          <input
            type="text"
            placeholder="Enter Patient Id:102"
            onChange={(e) => setId(Number(e.target.value))}
            required
          />
        </div>

        <div className="pass">
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Enter Password:12345"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Patientlogin;
