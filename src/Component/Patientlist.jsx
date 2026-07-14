import React, { useEffect, useState } from "react";
import axios from "axios";

function Patientlist() {
  const [patientlist, setPatientlist] = useState([]);
  useEffect(() => {fetchpatient()}, []);
  const fetchpatient = async () => {
    const response = await axios.get(
      "https://hospital-management-backend-zfz1.onrender.com/api/showpatient",
    );
    setPatientlist(response.data.patient);
  };
  return (
    <div>
      {patientlist.map((ptn, index) => (
        <div key={ptn.id}>
          <p>{ptn.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Patientlist;
