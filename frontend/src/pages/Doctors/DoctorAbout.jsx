// DoctorAbout.jsx
import React from 'react';

const DoctorAbout = ({ doctor }) => {
  return (
    <div className="p-8 bg-gray-50 rounded-lg shadow-lg">
      <div>
        <h3 className="text-3xl font-bold text-headingColor flex items-center gap-2">
          About
          <span className="text-yellow-500 font-bold">
            {doctor.name}
          </span>
        </h3>
        <p className="text-gray-700 mt-4 leading-relaxed">
          {doctor.bio}
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-headingColor mb-4">Education</h3>
        <ul>
          {/* Render education information if needed */}
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-headingColor mb-4">Experiences</h3>
        <ul className="grid sm:grid-cols-2 gap-6">
          {/* Render experiences information if needed */}
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
