import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import Register from '../pages/Register';
import Login from '../pages/Login';
import DoctorDetails from '../pages/Doctors/DoctorDetails';
import DashboardPage from '../pages/Dashboard';
import Admin from '../components/Dashboard/Admin';
import DoctorProfileCompletion from '../pages/Doctors/DoctorProfileForm';
import FindDoctor from '../pages/Doctors/FindDoctors';
import NotApprovedDoctorDetail from '../components/Dashboard/NotApprovedDoctorsDetail';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/FindDoctors" element={<FindDoctor />}/>
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/doctors/completeprofile" element= {<DoctorProfileCompletion />}/> 
      <Route path="/dashboard/*" element={<DashboardPage />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/not-approved-doctor/:id" element={<NotApprovedDoctorDetail />}/>
      
    </Routes>
  );
};

export default Routers;
