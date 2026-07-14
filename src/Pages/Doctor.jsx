import React from "react";
import { useNavigate } from "react-router-dom";
import Doctorsllist from "../Component/Doctorsllist";

function Doctor() {
  const navigate = useNavigate();
  const gotopage = () => {
    navigate("/doctorlogin");
  };
  return (
    <div style={{backgroundColor:"aliceblue"}}>
      <div
        className="head"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <h1
          style={{
            margin: "0px",
            color: "cornflowerblue",
            textDecoration: "underline",
          }}
        >
          Our Warriers
        </h1>
        <button
          style={{
            padding: "8px 10px",
            backgroundColor: "blue",
            border: "none",
            color: "white",
          }}
          onClick={gotopage}
        >
          Login <i className="fa-solid fa-arrow-right-to-bracket"></i>
        </button>
      </div>
      <Doctorsllist />
    </div>
  );
}

export default Doctor;
