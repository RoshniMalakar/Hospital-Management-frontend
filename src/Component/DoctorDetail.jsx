import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../Style/DoctorDetail.css";
import Appointment from "./Appointment";

function DoctorDetail() {
  const { id } = useParams();
  useEffect(() => {
    finddoctor();
  }, [id]);
  const [doctor, setDoctor] = useState(null);
  const [appoint, setAppoint] = useState([]);
  const finddoctor = async () => {
    try {
      const response = await axios.get(
        "https://hospital-management-backend-zfz1.onrender.com/api/showdoctor",
      );
      const selectedDoctor = response.data.doctor.find((doc) => doc.id == id);
      setDoctor(selectedDoctor);
      const responses = await axios.get(
        "https://hospital-management-backend-zfz1.onrender.com/api/getappointment",
      );
      const doctorAppointments = responses.data.appoinment.filter(
        (app) => app.doctorId == id,
      );
      setAppoint(doctorAppointments);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="doctor-detail">
      {doctor && (
        <div className="doctor">
          <img src={doctor.image} alt={doctor.name} width="200" />
          <div className="detail">
            <h2>{doctor.name}</h2>
            <p>Specialization: {doctor.specialization}</p>
            <p>Experience: {doctor.experience} years</p>
          </div>
        </div>
      )}

      <div className="appointments">
        <h2>Appointments</h2>
        <div className="appoint">
          {appoint.map((app, index) => (
            <div key={index} className="card">
              <h4 style={{ textAlign: "center", padding: "5px" }}>
                Appoinment: {index + 1}
              </h4>
              <p>PatientID: {app.patientId}</p>
              <p>Date: {app.date}</p>
              <p>Time: {app.time}</p>
              <p>Status: {app.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DoctorDetail;
