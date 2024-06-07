import React from 'react';
import startIcon from "../../assets/images/Star.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Doctor = ({ doctor }) => {
  const {
    id,
    User: { name },
    specialization,
    address,
    hourly_rate,
  } = doctor;

  return (
    <div className="p-3 lg:p-5 bg-white rounded-lg shadow-md flex flex-col justify-between">
      <div className="relative w-full h-44 lg:h-52">
        <div className="bg-gray-200 rounded-full w-28 h-28 lg:w-36 lg:h-36 absolute top-0 left-0 right-0 bottom-0 m-auto overflow-hidden">
          <img src={`http://localhost:3000/${doctor.image}`} className="object-cover w-full h-full rounded-full" alt={name} />
        </div>
      </div>
      <div className="mt-4 lg:mt-6">
        <h2 className="text-lg lg:text-xl font-semibold text-headingColor">
          {name}
        </h2>
        <span className="text-sm lg:text-base bg-primaryColor text-white py-1 px-2 lg:px-4 rounded-full mt-1 inline-block">
          {specialization}
        </span>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center">
          <img src={startIcon} alt="Star Icon" className="w-4 h-4 mr-1 lg:mr-2" />
          <span className="text-sm lg:text-base font-semibold text-headingColor">
            {address}
          </span>
          <span className="text-sm lg:text-base ml-1 lg:ml-2 text-gray-600">
            ${hourly_rate} /hr
          </span>
        </div>
      </div>
      <Link
        to={`/doctors/${id}`} // Use the doctor's ID in the URL
        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mt-4 hover:bg-primaryColor hover:text-white transition duration-300"
      >
        <BsArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default Doctor;
