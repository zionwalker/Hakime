import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const NotApprovedDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotApprovedDoctors = async () => {
      try {
        const response = await fetch('https://hakime-mongodb-3.onrender.com/admin/get_notApprovedDoctor', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch not approved doctors');
        }
        const data = await response.json();
        console.log('Fetched data:', data);

        // Check the structure of the fetched data
        if (Array.isArray(data) && data.length > 0) {
          console.log('Sample doctor data:', data[0]);
        }

        setDoctors(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNotApprovedDoctors();
  }, []);

  const viewProfile = (doctorId) => {
    navigate(`/admin/doctors/${doctorId}`);
  };

  const approveDoctor = async (doctorId) => {
    try {
      const response = await fetch(`https://hakime-mongodb-3.onrender.com/admin/approveDoctor/${doctorId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to approve doctor: ${errorData.message}`);
      }
      const updatedDoctor = await response.json();
      setDoctors(doctors.map(doc => doc._id === doctorId ? { ...doc, status: 'Approved' } : doc));
    } catch (err) {
      console.error('Error approving doctor:', err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {doctors.map((doctor) => (
            <TableRow key={doctor._id}>
              <TableCell>{doctor._id}</TableCell>
              <TableCell>{doctor.userId?.name || 'N/A'}</TableCell>
              <TableCell>{doctor.userId?.email || 'N/A'}</TableCell>
              <TableCell>{doctor.address || 'N/A'}</TableCell>
              <TableCell>{doctor.status}</TableCell>
              <TableCell>
                <button 
                  className="bg-blue-500 text-white py-1 px-3 rounded transition duration-300 ease-in-out hover:bg-blue-600 transform hover:-translate-y-1"
                  onClick={() => viewProfile(doctor._id)}
                >
                  View Profile
                </button>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  onClick={() => approveDoctor(doctor._id)}
                  style={{ marginLeft: '10px' }}
                >
                  Approve
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NotApprovedDoctors;
