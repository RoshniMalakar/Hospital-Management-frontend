import React from "react";
import { Link } from "react-router-dom";
import "../Style/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <h2 style={{ color: "darkblue" }}>Hospital Management System</h2>
      </div>
      <div className="list">
        <p>
          <Link to="/" className="link">
            <i className="fa-regular fa-house"></i> Home
          </Link>
        </p>
        <p>
          <Link to="/patientlogin" className="link">
            <i className="fa-regular fa-user"></i> Patient
          </Link>
        </p>
        <p>
          <Link to="/doctor" className="link">
            <i className="fa-solid fa-user-doctor"></i> Doctor
          </Link>
        </p>
        <p>
          <Link to="/aboutus" className="link">
            <i className="fa-solid fa-circle-info"></i> About
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
