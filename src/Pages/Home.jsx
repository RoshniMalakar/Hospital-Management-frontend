import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Hospital Management System</h1>
          <p>
            Providing quality healthcare with modern technology. Manage
            patients, doctors, appointments, and medical records efficiently.
          </p>

          <div className="hero-buttons">
            <button
              className="btn"
              onClick={() => navigate("/bookappointment")}
            >
              Book Appointment
            </button>
            <button
              className="btn btn-outline"
              onClick={() => navigate("/aboutus")}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
      <section className="services">
        <h2>Our Services</h2>

        <div className="service-container">
          <div className="card" onClick={() => navigate("/doctor")}>
            <h3>🩺 Doctors</h3>
            <p>
              Experienced specialists providing quality healthcare for all
              patients.
            </p>
          </div>

          <div className="card" onClick={() => navigate("/bookappointment")}>
            <h3>📅 Appointments</h3>
            <p>Easily book, update, or cancel appointments with our doctors.</p>
          </div>

          <div className="card">
            <h3>💊 Pharmacy</h3>
            <p>Get prescribed medicines quickly from our hospital pharmacy.</p>
          </div>
        </div>
      </section>
      <section className="about">
        <h2>About Our Hospital</h2>

        <p>
          Our Hospital Management System simplifies healthcare services by
          managing patient records, doctor schedules, appointments, laboratory
          reports, and billing in one place.
        </p>
      </section>
      <footer className="footer">
        <p>© 2026 Hospital Management System | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Home;
