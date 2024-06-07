import React from 'react';
import Doctor from "../../pages/Doctors/Doctors";
import { useDoctorsData } from '../../utils/useDoctorData';

const DoctorList = () => {
  const { doctors, error } = useDoctorsData();

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!doctors || doctors.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-8 mt-8 lg:mt-12">
      {doctors.map((doctor) => (
        <Doctor key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorList;
