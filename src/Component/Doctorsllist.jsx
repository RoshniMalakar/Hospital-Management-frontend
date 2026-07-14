import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Style/Doctorslist.css";
function Doctorsllist() {
  const [doctor, setDoctor] = useState([]);
  useEffect(() => {
    fetchDoctors();
  }, []);
  const fetchDoctors = async () => {
    const response = await axios.get(
      "https://hospital-management-backend-zfz1.onrender.com/api/showdoctor",
    );
    setDoctor(response.data.doctor);
  };
  return (
    <div className="doctor-list">
      {doctor.map((dc, index) => (
        <div key={dc.id} className="card">
          <div className="img">
            <img src={dc.image} alt="image" />
          </div>
          <div className="body">
            <p>
              <b>{dc.name}</b>
            </p>
            <p>Specialization: {dc.specialization}</p>
            <p>Experience: {dc.experience}years</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Doctorsllist;
