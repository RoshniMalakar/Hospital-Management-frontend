import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddDoctor() {
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [image, setImage] = useState("");
  const [experience, setExperience] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const add = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        "https://hospital-management-backend-zfz1.onrender.com/api/doctorsignup",
        {
          id,
          name,
          password,
          specialization,
          image,
          experience,
          phone,
          address,
        },
      );
      if (response.status === 201) {
        navigate("/admin");
        alert("Doctor Added");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form action="" onSubmit={add}>
        <input
          type="text"
          placeholder="Enter Id"
          onChange={(e) => Number(setId(e.target.value))}
        />
        <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Specialization"
          onChange={(e) => setSpecialization(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Experience in years"
          onChange={(e) => setExperience(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Phone Number"
          maxLength={10}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Create Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image"
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddDoctor;
