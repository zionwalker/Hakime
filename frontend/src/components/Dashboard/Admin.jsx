import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import AllDoctor from './AllDoctor';
import Chat from './Chat';
import Patient from './Patient';
import NotApprovedDoctors from './NotApprovedDoctors';
import Balance from './Balance';
import Setting from './Setting';
import DoctorDetail from './DoctorDetail';
import AdminArticleForm from './AdminArticleForm';
import AllArticle from './AllArticle';

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
            <Route path="/chat" element={<Chat />} />
            <Route path="/patients" element={<Patient />} />
            <Route path="/requests" element={<NotApprovedDoctors />} />
            <Route path="/balance" element={<Balance />} />
            <Route path="/settings" element={<Setting />} />
            <Route path="/article" element={<AdminArticleForm />}/>
            <Route path="/doctors/:id" element={<DoctorDetail />} />
            <Route path="/allarticle" element={<AllArticle />}/>
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Admin;
