import React, { useState } from "react";
import axios from "axios";
import "../Style/BookAppointment.css";
import { useNavigate } from "react-router-dom";
function BookAppointment() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [Disease, setDisease] = useState("");
  const add = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://hospital-management-backend-zfz1.onrender.com/api/bookappointment",
        { name, phone, Disease },
      );
      if (response.status == 201) {
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="book-appointment">
      <form action="" onSubmit={add}>
        <h2>Book Appointment</h2>
        <input
          type="text"
          placeholder="Enter Name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Phone"
          maxLength={10}
          required
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Disease"
          onChange={(e) => setDisease(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default BookAppointment;
