import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Patientlogin from "./Pages/Patientlogin";
import Doctor from "./Pages/Doctor";
import About from "./Pages/About";
import Doctorlogin from "./Pages/Doctorlogin";
import DoctorDetail from "./Component/DoctorDetail";
import PatientDetail from "./Pages/PatientDetail";
import AdminPanel from "./Pages/AdminPanel";
import AdminLogin from "./Pages/AdminLogin";
import ProtectedRoute from "./Pages/ProtectedRoute";
import AddDoctor from "./Component/AddDoctor";
import BookAppointment from "./Component/BookAppointment";

function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/admin" &&
        location.pathname !== "/admin/login" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          }
        />
        <Route path="/admin/adddoctor" element={<AddDoctor />} />
        <Route path="/patientlogin" element={<Patientlogin />} />
        <Route path="/patient/:id" element={<PatientDetail />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/doctorlogin" element={<Doctorlogin />} />
        <Route path="/doctor/:id" element={<DoctorDetail />} />
        <Route path="/bookappointment" element={<BookAppointment />} />
      </Routes>
    </div>
  );
}

export default App;
