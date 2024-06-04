import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const NotApprovedDoctorDetail = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const token = localStorage.getItem('token'); 

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/admin/getnot_ApprovedDoctor/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        const doctorData = response.data;

        console.log('Fetched doctor data:', doctorData); 
        setDoctor(doctorData);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };

    fetchDoctor();
  }, [id, token]); 

  if (!doctor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h1 className="text-3xl font-semibold text-gray-800">Doctor Details</h1>
        </div>
        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Personal Information</h2>
          <p>Date of Birth: {new Date(doctor.date_of_birth).toLocaleDateString()}</p>
          <p>Gender: {doctor.gender}</p>
          <p>Nationality: {doctor.nationality}</p>
          <p>Address: {doctor.address}</p>
          {doctor.image && <img src={doctor.image} alt="Doctor" className="mt-4 rounded-lg" />}
          <p className="mt-4">Bio: {doctor.Bio}</p>
        </div>
        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Professional Information</h2>
          <p>Medical Degrees: {doctor.medical_degrees}</p>
          <p>Medical School: {doctor.medical_school}</p>
          <p>Year of Graduation: {doctor.year_of_graduation}</p>
          <p>Specialization: {doctor.specialization}</p>
        </div>
        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Specialization Information</h2>
          <p>Medical License Number: {doctor.medical_license_number}</p>
          <p>Hourly Rate: {doctor.hourly_rate}</p>
          <p>Previous Work Experience: {doctor.previous_work_experience}</p>
          {doctor.cv && <a href={`data:application/pdf;base64,${doctor.cv}`} download="CV.pdf" className="text-blue-500 hover:underline">Download CV</a>}
        </div>
        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Identification Documents and Language Proficiency</h2>
          <p>Passport or National ID No: {doctor.passport_or_national_id_no}</p>
          <p>Language Spoken: {doctor.language_spoken}</p>
          <p>Proficiency Level: {doctor.proficiency_level}</p>
          {doctor.Id_Image && <img src={doctor.Id_Image} alt="ID" className="mt-4 rounded-lg" />}
        </div>
        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">State</h2>
          <p>Status: {doctor.status}</p>
          <p>Step: {doctor.step}</p>
        </div>
      </div>
    </div>
  );
};

export default NotApprovedDoctorDetail;
