import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

const Dashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPatients, setTotalPatients] = useState(0);
  const [totalDoctors, setTotalDoctors] = useState(0);
  const [approvedDoctors, setApprovedDoctors] = useState(0);
  const [notApprovedDoctors, setNotApprovedDoctors] = useState(0);
  const [totalRequests, setTotalRequests] = useState(0);
  const [error, setError] = useState(null);

  const doctorsChartRef = useRef(null);
  const patientsChartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const patientsResponse = await axios.get('http://localhost:3000/admin/getPatient_Count', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          }
        });
        setTotalPatients(patientsResponse.data.total);

        const doctorsResponse = await axios.get('http://localhost:3000/admin/getDoctors_Count', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          }
        });
        setTotalDoctors(doctorsResponse.data.total);
        setApprovedDoctors(doctorsResponse.data.approved);
        setNotApprovedDoctors(doctorsResponse.data.notApproved);

        setTotalUsers(totalPatients + totalDoctors);
        setTotalRequests(doctorsResponse.data.approved + doctorsResponse.data.notApproved);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching data:', error.response || error.message || error);
      }
    };

    fetchData();
  }, [totalPatients, totalDoctors]);

  useEffect(() => {
    let doctorsChartInstance;
    let patientsChartInstance;

    const doctorsChartConfig = {
      type: 'bar',
      data: {
        labels: ['Approved', 'Not Approved'],
        datasets: [
          {
            label: 'Doctors',
            data: [approvedDoctors, notApprovedDoctors],
            backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(255, 99, 132, 0.5)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1,
          },
        ],
      },
    };

    const patientsChartConfig = {
      type: 'pie',
      data: {
        labels: ['Patients', 'Others'],
        datasets: [
          {
            label: 'data',
            data: [totalPatients, totalUsers - totalPatients],
            backgroundColor: ['#36A2EB', '#FF6384'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        aspectRatio: 1,
      },
    };

    if (doctorsChartRef.current) {
      doctorsChartInstance = new Chart(doctorsChartRef.current, doctorsChartConfig);
    }

    if (patientsChartRef.current) {
      patientsChartInstance = new Chart(patientsChartRef.current, patientsChartConfig);
    }

    return () => {
      if (doctorsChartInstance) doctorsChartInstance.destroy();
      if (patientsChartInstance) patientsChartInstance.destroy();
    };
  }, [approvedDoctors, notApprovedDoctors, totalPatients, totalUsers]);

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
        {/* Cards */}
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Total Users</h3>
          <p className="text-gray-700 text-4xl">{totalUsers}</p>
        </div>
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Total Patients</h3>
          <p className="text-gray-700 text-4xl">{totalPatients}</p>
        </div>
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Total Doctors</h3>
          <p className="text-gray-700 text-4xl">{totalDoctors}</p>
        </div>
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Total Requests</h3>
          <p className="text-gray-700 text-4xl">{totalRequests}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
        <div className="bg-white p-6 shadow rounded-lg">
          <canvas ref={doctorsChartRef}></canvas>
        </div>
        <div className="bg-white p-6 shadow rounded-lg">
          <canvas ref={patientsChartRef} style={{ width: '200px', height: '200px' }}></canvas>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
