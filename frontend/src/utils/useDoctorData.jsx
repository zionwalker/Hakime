import axios from 'axios';
import { useState, useEffect } from 'react';

export const useDoctorsData = () => {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:3000/User/getAllDoctor');
        setDoctors(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchDoctors();
  }, []);

  return { doctors, error };
};
