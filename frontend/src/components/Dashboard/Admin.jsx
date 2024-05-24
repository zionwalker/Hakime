import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import AllDoctor from './AllDoctor';
import Message from './Message';
import Patient from './Patient';
import Request from './Request';
import Balance from './Balance';
import Setting from './Setting';

const Admin = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Navbar />
        <main className="flex-grow p-2 overflow-y-auto">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/doctors" element={<AllDoctor />} />
            <Route path="/admin/messages" element={<Message />} />
            <Route path="/patients" element={<Patient />} />
            <Route path="/admin/requests" element={<Request />} />
            <Route path="/admin/balance" element={<Balance />} />
            <Route path="/admin/settings" element={<Setting />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Admin;
