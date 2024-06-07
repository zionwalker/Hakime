import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AllDoctor = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://localhost:3000/admin/getAllDoctor', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch doctors');
        }
        const data = await response.json();

        console.log('Fetched data:', data);

        setDoctors(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const viewProfile = (doctorId) => {
    navigate(`${doctorId}`);
  };

  const deactivateDoctor = async (doctorId) => {
    try {
      const response = await fetch(`http://localhost:3000/admin/deactivateDoctor/${doctorId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      });
      if (!response.ok) {
        throw new Error('Failed to deactivate doctor');
      }
      setDoctors(doctors.map(doc => doc.id === doctorId ? { ...doc, status: 'Deactivated' } : doc));
    } catch (err) {
      console.error('Error deactivating doctor:', err);
    }
  };

  const disapproveDoctor = async (doctorId) => {
    try {
      const response = await fetch(`http://localhost:3000/admin/dis-approveDoctor/${doctorId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      });
      if (!response.ok) {
        throw new Error('Failed to disapprove doctor');
      }
      setDoctors(doctors.map(doc => doc.id === doctorId ? { ...doc, status: 'Disapproved' } : doc));
    } catch (err) {
      console.error('Error disapproving doctor:', err);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white shadow-md rounded">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{doctor.id}</td>
              <td className="py-2 px-4 border-b">{doctor.User.name}</td>
              <td className="py-2 px-4 border-b">{doctor.User.email}</td>
              <td className="py-2 px-4 border-b">{doctor.address}</td>
              <td className="py-2 px-4 border-b">{doctor.status}</td>
              <td className="py-2 px-4 border-b flex space-x-2">
                <button 
                  className="bg-blue-500 text-white py-1 px-3 rounded transition duration-300 ease-in-out hover:bg-blue-600 transform hover:-translate-y-1"
                  onClick={() => viewProfile(doctor.id)}
                >
                  View Profile
                </button>
                
                <button 
                  className="bg-yellow-500 text-white py-1 px-3 rounded transition duration-300 ease-in-out hover:bg-yellow-600 transform hover:-translate-y-1"
                  onClick={() => disapproveDoctor(doctor.id)}
                >
                  Dis-Approve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllDoctor;
