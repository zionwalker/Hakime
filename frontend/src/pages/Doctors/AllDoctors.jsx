// src/components/Doctors/AllDoctors.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Doctor from '../Doctors/Doctors'; // Adjust the import path as necessary

const AllDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        console.log('Fetching doctors...');
        const response = await axios.get('https://hakime-mongodb-3.onrender.com/user/getAllDoctor');
        console.log('Response:', response.data);
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
      {doctors.length > 0 ? (
        doctors.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor} />
        ))
      ) : (
        <div>No doctors found.</div>
      )}
    </div>
  );
};

export default AllDoctors;
