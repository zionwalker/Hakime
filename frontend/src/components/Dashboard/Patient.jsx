import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, CircularProgress, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const Patient = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('https://hakime-mongodb-3.onrender.com/admin/getAllPatient', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          }
        });

        if (!response.ok) {
          const errorDetails = await response.text();
          throw new Error(`Failed to fetch patients: ${response.statusText}, Details: ${errorDetails}`);
        }

        const data = await response.json();
        console.log('Fetched data:', data);
        setPatients(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  const viewProfile = (patientId) => {
    console.log(`Viewing profile for patient ID: ${patientId}`);
  };

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><CircularProgress /></div>;
  }

  if (error) {
    return (
      <Snackbar open={true} autoHideDuration={6000}>
        <MuiAlert elevation={6} variant="filled" severity="error">
          Error: {error}
        </MuiAlert>
      </Snackbar>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((patient) => (
            <TableRow key={patient._id}>
              <TableCell>{patient._id}</TableCell>
              <TableCell>{patient.userId?.name || 'N/A'}</TableCell>
              <TableCell>{patient.userId?.email || 'N/A'}</TableCell>
              <TableCell>{patient.userId?.phone_number || 'N/A'}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" onClick={() => viewProfile(patient._id)}>View Profile</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Patient;
