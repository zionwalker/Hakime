import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../pages/AuthContext";
import {
  FaTachometerAlt,
  FaUserMd,
  FaUserInjured,
  FaEnvelope,
  FaClipboardList,
  FaWallet,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      console.log("User logged out");
      navigate("/home"); 
    } catch (error) {
      console.error("Logout error:", error);
      
    }
  };

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen flex flex-col">
      <div className="p-6">
        <h2 className="text-2xl font-bold">Hakime Admin</h2>
        <hr className="border-gray-700 mt-5" />
      </div>
      <nav className="mt-8 flex-1">
        <ul className="space-y-2">
          <li className="px-4 py-2 hover:bg-gray-700 rounded transition duration-200">
            <Link to="/admin/dashboard" className="flex items-center">
              <FaTachometerAlt className="inline mr-3" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 rounded transition duration-200">
            <Link to="/admin/doctors" className="flex items-center">
              <FaUserMd className="inline mr-3" />
              <span>Doctors</span>
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 rounded transition duration-200">
            <Link to="/admin/patients" className="flex items-center">
              <FaUserInjured className="inline mr-3" />
              <span>Patients</span>
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 rounded transition duration-200">
            <Link to="/admin/chat" className="flex items-center">
              <FaEnvelope className="inline mr-3" />
              <span>Messages</span>
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 rounded transition duration-200">
            <Link to="/admin/requests" className="flex items-center">
              <FaClipboardList className="inline mr-3" />
              <span>Requests</span>
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 rounded transition duration-200">
            <Link to="/admin/balance" className="flex items-center">
              <FaWallet className="inline mr-3" />
              <span>Balance</span>
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 rounded transition duration-200">
            <Link to="/admin/settings" className="flex items-center">
              <FaCog className="inline mr-3" />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-6">
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
