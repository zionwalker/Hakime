import React from "react";
import { formateDate } from "../../utils/formateDate";
import { FaHospital, FaBriefcase } from "react-icons/fa"; // Import icons

const DoctorAbout = () => {
  return (
    <div className="p-8 bg-gray-50 rounded-lg shadow-lg">
      <div>
        <h3 className="text-3xl font-bold text-headingColor flex items-center gap-2">
          About
          <span className="text-yellow-500 font-bold">
            Abebayehu
          </span>
        </h3>
        <p className="text-gray-700 mt-4 leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          tenetur laboriosam provident corporis omnis consequatur eius
          voluptates pariatur ea, quia perspiciatis explicabo placeat quo
          deleniti sint odio officia facilis beatae! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          tenetur laboriosam provident corporis omnis consequatur eius
          voluptates pariatur ea, quia perspiciatis explicabo placeat quo
          deleniti sint odio officia facilis beatae!
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-headingColor mb-4">Education</h3>
        <ul>
          <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div>
              <span className="text-blue-500 text-lg font-semibold">
                {formateDate("2011-04-28")} - {formateDate("2016-05-28")}
              </span>
              <p className="text-lg font-medium text-gray-800 mt-2">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-base font-medium text-gray-600 flex items-center gap-2">
              <FaHospital className="text-yellow-500" /> Minilick hospital, Hawassa
            </p>
          </li>
          <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div>
              <span className="text-blue-500 text-lg font-semibold">
                {formateDate("2010-03-28")} - {formateDate("2013-07-28")}
              </span>
              <p className="text-lg font-medium text-gray-800 mt-2">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-base font-medium text-gray-600 flex items-center gap-2">
              <FaHospital className="text-yellow-500" /> Minilick hospital, Hawassa
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-headingColor mb-4">Experiences</h3>
        <ul className="grid sm:grid-cols-2 gap-6">
          <li className="p-6 bg-yellow-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <span className="text-yellow-500 text-lg font-semibold">
              {formateDate("2001-05-05")} - {formateDate("2002-05-05")}
            </span>
            <p className="text-lg font-medium text-gray-800 mt-2">
              Sr. Surgeon
            </p>
            <p className="text-base font-medium text-gray-600 flex items-center gap-2">
              <FaBriefcase className="text-yellow-500" /> Minilick hospital, Hawassa
            </p>
          </li>
          <li className="p-6 bg-yellow-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <span className="text-yellow-500 text-lg font-semibold">
              {formateDate("2002-06-01")} - {formateDate("2005-12-31")}
            </span>
            <p className="text-lg font-medium text-gray-800 mt-2">
              Sr. Surgeon
            </p>
            <p className="text-base font-medium text-gray-600 flex items-center gap-2">
              <FaBriefcase className="text-yellow-500" /> Minilick hospital, Hawassa
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
