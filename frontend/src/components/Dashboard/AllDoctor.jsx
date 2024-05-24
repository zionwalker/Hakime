import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';

const AllDoctor = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://localhost:3000/Admin/getAllDoctor', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch doctors');
        }
        const data = await response.json();

        // Log the fetched data to see its structure
        console.log('Fetched data:', data);

        // Assuming the fetched data is an array of doctors
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
    // Implement your logic for viewing the profile
    console.log(`Viewing profile for doctor ID: ${doctorId}`);
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
              <TableCell>{doctor.address ? doctor.address : 'not yet'}</TableCell>
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
