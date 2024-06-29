// src/components/Doctors/LatestDoctors.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Doctor from '../../pages/Doctors/Doctors'; // Adjust the import path as necessary

const LatestDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('https://hakime-mongodb-3.onrender.com/user/getLatestDoctor');
        setDoctors(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching doctors:', error);
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
      {doctors.map((doctor) => (
        <Doctor key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};

export default LatestDoctors;
