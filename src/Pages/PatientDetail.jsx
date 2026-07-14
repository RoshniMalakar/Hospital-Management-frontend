import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../Style/PatientDetail.css";
import Bills from "../Component/Bills";
function PatientDetail() {
  const { id } = useParams();
  const [bills, setBills] = useState([]);
  useEffect(() => {
    fetchDetail();
  }, []);
  const [patient, setPatient] = useState([]);
  const fetchDetail = async () => {
    try {
      const response = await axios.get(
        `https://hospital-management-backend-zfz1.onrender.com/api/patient/${id}`,
      );
      setPatient([response.data.detail]);
      const responses = await axios.get(
        "https://hospital-management-backend-zfz1.onrender.com/api/getbills",
      );
      const patientBills = responses.data.bills.filter(
        (bill) => bill.patientId === response.data.detail.id,
      );
      setBills(patientBills);
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };
  const totalAmount = bills.reduce((total, bill) => {
    return total + bill.amount;
  }, 0);
  return (
    <div className="patient-detail">
      <div className="detail">
        {patient.map((ptn, index) => (
          <div key={ptn.id} className="patient">
            <h2>Name: {ptn.name}</h2>
            <p>Date of Birth: {ptn.dateofbirth}</p>
            <p>Gender: {ptn.gender}</p>
            <p>Phone: {ptn.phone}</p>
            <p>Address: {ptn.address}</p>
            <p>Date of Admitted: {ptn.dateaddmitted}</p>
          </div>
        ))}
      </div>
      <h2>Patient's Bills</h2>
      <div className="bills">
        {bills.map((bll, index) => (
          <div key={index} className="bill">
            <h4 style={{ textAlign: "center", padding: "5px" }}>
              Bill: {index + 1}
            </h4>
            <p>PatientId: {bll.patientId}</p>
            <p>Amount: {bll.amount}/-</p>
            <p>Payment Status: {bll.paymentStatus}</p>
          </div>
        ))}
      </div>
      <div className="total">Total Amount: ₹{totalAmount}/-</div>
    </div>
  );
}

export default PatientDetail;
