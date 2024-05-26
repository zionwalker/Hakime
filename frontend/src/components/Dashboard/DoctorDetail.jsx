import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DoctorDetail = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/admin/getDoctor/${id}`);
        const doctorData = response.data;

        
        if (doctorData.image) {
          const base64String = Buffer.from(doctorData.image.data).toString('base64');
          doctorData.image = `data:image/jpeg;base64,${base64String}`;
        }

        if (doctorData.Id_Image) {
          const base64String = Buffer.from(doctorData.Id_Image.data).toString('base64');
          doctorData.Id_Image = `data:image/jpeg;base64,${base64String}`;
        }

        console.log('Fetched doctor data:', doctorData); 
        setDoctor(doctorData);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };

    fetchDoctor();
  }, [id]);

  if (!doctor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Doctor Details</h1>
      <div className="bg-white shadow-md rounded p-6 mb-4">
        <h2 className="text-xl font-semibold">Personal Information</h2>
        <p><strong>Date of Birth:</strong> {new Date(doctor.date_of_birth).toLocaleDateString()}</p>
        <p><strong>Gender:</strong> {doctor.gender}</p>
        <p><strong>Nationality:</strong> {doctor.nationality}</p>
        <p><strong>Address:</strong> {doctor.address}</p>
        {doctor.image && <img src={doctor.image} alt="Doctor" className="w-32 h-32" />}
        <p><strong>Bio:</strong> {doctor.Bio}</p>
      </div>

      <div className="bg-white shadow-md rounded p-6 mb-4">
        <h2 className="text-xl font-semibold">Professional Information</h2>
        <p><strong>Medical Degrees:</strong> {doctor.medical_degrees || 'N/A'}</p>
        <p><strong>Medical School:</strong> {doctor.medical_school || 'N/A'}</p>
        <p><strong>Year of Graduation:</strong> {doctor.year_of_graduation || 'N/A'}</p>
        <p><strong>Specialization:</strong> {doctor.specialization || 'N/A'}</p>
      </div>

      <div className="bg-white shadow-md rounded p-6 mb-4">
        <h2 className="text-xl font-semibold">Specialization Information</h2>
        <p><strong>Medical License Number:</strong> {doctor.medical_license_number || 'N/A'}</p>
        <p><strong>Hourly Rate:</strong> {doctor.hourly_rate || 'N/A'}</p>
        <p><strong>Certificate:</strong> {doctor.certificate || 'N/A'}</p>
        <p><strong>Previous Work Experience:</strong> {doctor.previous_work_experience || 'N/A'}</p>
        {doctor.cv && <a href={`data:application/pdf;base64,${doctor.cv}`} download="CV.pdf">Download CV</a>}
      </div>

      <div className="bg-white shadow-md rounded p-6 mb-4">
        <h2 className="text-xl font-semibold">Identification Documents and Language Proficiency</h2>
        <p><strong>Passport or National ID No:</strong> {doctor.passport_or_national_id_no || 'N/A'}</p>
        <p><strong>Language Spoken:</strong> {doctor.language_spoken || 'N/A'}</p>
        <p><strong>Proficiency Level:</strong> {doctor.proficiency_level || 'N/A'}</p>
        {doctor.Id_Image && <img src={doctor.Id_Image} alt="ID" className="w-32 h-32" />}
      </div>

      <div className="bg-white shadow-md rounded p-6 mb-4">
        <h2 className="text-xl font-semibold">State</h2>
        <p><strong>Status:</strong> {doctor.status}</p>
        <p><strong>Step:</strong> {doctor.step}</p>
      </div>

      <div className="bg-white shadow-md rounded p-6 mb-4">
        <h2 className="text-xl font-semibold">Schedule Information</h2>
        {doctor.Schedules.length > 0 ? doctor.Schedules.map((schedule) => (
          <p key={schedule.id}>Schedule ID: {schedule.id}</p>
        )) : <p>No schedules available.</p>}
      </div>

      <div className="bg-white shadow-md rounded p-6 mb-4">
        <h2 className="text-xl font-semibold">Reviews</h2>
        {doctor.Reviews.length > 0 ? doctor.Reviews.map((review, index) => (
          <div key={index}>
            <p><strong>Review:</strong> {review.review_text}</p>
            <p><strong>Rating:</strong> {review.rating}</p>
          </div>
        )) : <p>No reviews available.</p>}
      </div>
    </div>
  );
};

export default DoctorDetail;
