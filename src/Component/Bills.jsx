import React, { useEffect, useState } from "react";
import axios from "axios";
import '../Style/Bills.css'
function Bills() {
  const [bills, setBills] = useState([]);
  useEffect(() => {
    fetchbills();
  }, []);
  const fetchbills = async () => {
    try {
      const response = await axios.get(
        "https://hospital-management-backend-zfz1.onrender.com/api/getbills",
      );
      setBills(response.data.bills);
    } catch (error) {
      console.log(error.message);
    }
  };
  const totalAmount = bills.reduce((total, bill) => {
    return total + bill.amount;
  }, 0);
  return (
    <div className="Bills">
      <h2>All Bills</h2>
      <div className="con">
        {bills.map((bll, index) => (
          <div key={index} className="bill">
            <h2>Bill: {index+1}</h2>
            <p>PatientId: {bll.patientId}</p>
            <p>Amount: ₹{bll.amount}/-</p>
            <p>Payment Status: {bll.paymentStatus}</p>
          </div>
        ))}
      </div>
      <div className="total">
        <h2>Total Amount : ₹{totalAmount}/-</h2>
      </div>
    </div>
  );
}

export default Bills;
