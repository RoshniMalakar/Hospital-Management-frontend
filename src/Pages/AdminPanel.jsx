import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Bills from "../Component/Bills";
import Appointment from "../Component/Appointment";
import "../Style/Admin.css";

function AdminPanel() {
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState([]);
  useEffect(() => {
    (fetchDoctors(), fetchpatient());
  }, []);
  const fetchDoctors = async () => {
    const response = await axios.get(
      "https://hospital-management-backend-zfz1.onrender.com/api/showdoctor",
    );
    setDoctor(response.data.doctor);
  };
  const [search, setSearch] = useState("");
  const searchDoctor = doctor.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase()),
  );
  const deleteDoctor = async (id) => {
    try {
      await axios.delete(
        `https://hospital-management-backend-zfz1.onrender.com/api/deletedoctor/${id}`,
      );
      fetchDoctors();
    } catch (error) {
      console.error("Delete Error:", error.message);
      alert(error.message);
    }
  };

  const [patientlist, setPatientlist] = useState([]);
  const fetchpatient = async () => {
    const response = await axios.get(
      "https://hospital-management-backend-zfz1.onrender.com/api/showpatient",
    );
    setPatientlist(response.data.patient);
  };
  const [searchP, setSearchP] = useState("");
  const searchPatient = patientlist.filter(
    (ptn) =>
      ptn.name.toLowerCase().includes(searchP.toLowerCase()) ||
      ptn.id.toString().includes(searchP),
  );
  return (
    <div className="admin-panel">
      <div className="left">
        <div className="cont">
          <h2>Admin's Dashboard</h2>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#doctor">Doctor</a>
            </li>
            <li>
              <a href="#patient">Patient</a>
            </li>
            <li>
              <a href="#bills">Bills</a>
            </li>
            <li>
              <a href="#appointments">Appointment</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="right">
        <div className="top" id="home">
          <h2>Hospital Management System</h2>
        </div>
        <hr />
        <div className="patient" id="patient">
          <div className="head">
            <h2>Patient's List</h2>
            <div className="search">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="Search by Name or ID"
                value={searchP}
                onChange={(e) => setSearchP(e.target.value)}
              />
            </div>
            <button type="button">+ Add Patient</button>
          </div>
          <table cellSpacing={0}>
            <thead>
              <tr>
                <th>Sno.</th>
                <th>ID</th>
                <th>Name</th>
                <th>Date of Admitted</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Address</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {searchPatient.length === 0 ? (
                <tr>
                  <td colSpan="8">Data not found</td>
                </tr>
              ) : (
                searchPatient.map((ptn, index) => (
                  <tr key={ptn.id}>
                    <td>{index + 1}.</td>
                    <td>{ptn.id}</td>
                    <td>{ptn.name}</td>
                    <td>{ptn.dateaddmitted}</td>
                    <td>{ptn.gender}</td>
                    <td>{ptn.dateofbirth}</td>
                    <td>{ptn.address}</td>
                    <td>
                      <button>Update</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <hr />
        <div className="doctor" id="doctor">
          <div className="head">
            <h2>Doctors Details</h2>
            <div className="search">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="Search by name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button onClick={() => navigate("/admin/adddoctor")}>
              + Add Doctors
            </button>
          </div>
          <div className="doctor-list">
            {searchDoctor.map((dc, index) => (
              <div key={dc.id} className="card">
                <div className="img">
                  <img src={dc.image} alt={dc.name} />
                </div>
                <div className="body">
                  <p style={{ textAlign: "center" }}>
                    <b>ID: {dc.id}</b>
                  </p>
                  <p>
                    <b>{dc.name}</b>
                  </p>
                  <p>Specialization: {dc.specialization}</p>
                  <p>Experience: {dc.experience} years</p>
                  <p>Phone: {dc.phone}</p>
                  <p>Address : {dc.address}</p>
                  <button onClick={() => deleteDoctor(dc.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="appointments" id="appointments">
          <Appointment />
        </div>
        <hr />
        <div className="bills" id="bills">
          <Bills />
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
