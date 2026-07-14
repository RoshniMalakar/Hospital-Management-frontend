import axios from "axios";
import React, { useEffect, useState } from "react";

function Appointment() {
  const [appoint, setAppoint] = useState([]);
  useEffect(() => {
    fetchAppointent();
  }, []);
  const fetchAppointent = async () => {
    try {
      const response = await axios.get(
        "https://hospital-management-backend-zfz1.onrender.com/api/getappointment",
      );
      setAppoint(response.data.appoinment);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="appointments">
      <h2>Appointments</h2>
      <div className="appoint">
        {appoint.map((app, index) => (
          <div key={index} className="card">
            <h4 style={{ textAlign: "center", padding: "5px" }}>
              Appoinment: {index + 1}
            </h4>
            <p>PatientID: {app.patientId}</p>
            <p>DoctorID: {app.doctorId}</p>
            <p>Date: {app.date}</p>
            <p>Time: {app.time}</p>
            <p>Status: {app.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appointment;
