import startIcon from "../../assets/images/Star.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const DoctorCard = ({ doctor }) => {
  const {
    name,
    avgRating,
    totalRating,
    photo,
    specialty,
    totalPatients,
    hospital,
  } = doctor;
  
  return (
    <div className="p-3 lg:p-5 bg-white rounded-lg shadow-md flex flex-col justify-between">
      <div className="relative w-full h-44 lg:h-52">
        <div className="bg-gray-200 rounded-full w-28 h-28 lg:w-36 lg:h-36 absolute top-0 left-0 right-0 bottom-0 m-auto overflow-hidden">
          <img src={photo} className="object-cover w-full h-full rounded-full" alt={name} />
        </div>
      </div>
      <div className="mt-4 lg:mt-6">
        <h2 className="text-lg lg:text-xl font-semibold text-headingColor">
          {name}
        </h2>
        <span className="text-sm lg:text-base bg-primaryColor text-white py-1 px-2 lg:px-4 rounded-full mt-1 inline-block">
          {specialty}
        </span>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center">
          <img src={startIcon} alt="Star Icon" className="w-4 h-4 mr-1 lg:mr-2" />
          <span className="text-sm lg:text-base font-semibold text-headingColor">
            {avgRating}
          </span>
          <span className="text-sm lg:text-base ml-1 lg:ml-2 text-gray-600">
            ({totalRating})
          </span>
        </div>
        <div>
          <span className="text-sm lg:text-base font-semibold text-headingColor">
            +{totalPatients} patients
          </span>
          <p className="text-sm lg:text-base text-gray-600">
            At {hospital}
          </p>
        </div>
      </div>
      <Link
        to="/Doctors"
        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mt-4 hover:bg-primaryColor hover:text-white transition duration-300"
      >
        <BsArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default DoctorCard;
