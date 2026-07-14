import React from "react";
import "../Style/About.css";

function About() {
  return (
    <div className="about-page">
      <section className="about-banner">
        <h1>About Our Hospital</h1>
        <p>
          Dedicated to providing quality healthcare with compassion, innovation,
          and excellence.
        </p>
      </section>
      <section className="about-section">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Welcome to our Hospital Management System. We are committed to
            delivering high-quality healthcare services while making hospital
            management simple, efficient, and reliable.
          </p>
          <p>
            Our hospital provides expert medical care through experienced
            doctors, advanced diagnostic facilities, emergency services,
            laboratories, pharmacies, and modern treatment technologies.
          </p>
          <p>
            Our mission is to improve patient care by using technology that
            simplifies appointments, medical records, billing, and healthcare
            management.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80"
            alt="Hospital"
          />
        </div>
      </section>
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-container">
          <div className="feature-card">
            <h3>👨‍⚕️ Expert Doctors</h3>
            <p>Highly qualified and experienced healthcare professionals.</p>
          </div>
          <div className="feature-card">
            <h3>🏥 Modern Facilities</h3>
            <p>Advanced medical equipment and world-class infrastructure.</p>
          </div>
          <div className="feature-card">
            <h3>🚑 Emergency Care</h3>
            <p>24x7 emergency medical services for critical patients.</p>
          </div>
          <div className="feature-card">
            <h3>💙 Patient Care</h3>
            <p>Compassionate and personalized healthcare for every patient.</p>
          </div>
        </div>
      </section>
      <section className="mission">
        <div className="mission-card">
          <h2>Our Mission</h2>
          <p>
            To provide affordable, accessible, and quality healthcare while
            ensuring patient safety and satisfaction through modern technology.
          </p>
        </div>
        <div className="mission-card">
          <h2>Our Vision</h2>
          <p>
            To become a trusted healthcare institution known for excellence,
            innovation, and compassionate patient care.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
