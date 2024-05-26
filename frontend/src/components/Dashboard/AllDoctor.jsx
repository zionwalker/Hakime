import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
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
    navigate(`${doctorId}/DocctorDetail`); 
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
            <TableRow key={doctor.id}>
              <TableCell>{doctor.id}</TableCell>
              <TableCell>{doctor.User.name}</TableCell>
              <TableCell>{doctor.User.email}</TableCell>
              <TableCell>{doctor.address || 'not yet'}</TableCell>
              <TableCell>{doctor.status}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" onClick={() => viewProfile(doctor.id)}>View Profile</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllDoctor;
