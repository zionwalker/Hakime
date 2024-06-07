import React from 'react';
import AllDoctors from '../../pages/Doctors/AllDoctors'; 
import Testimonial from "../../components/Testimonial/Testimonial";

const FindDoctor = () => {
  return (
    <>
    <section className="bg-gray-200">
        <div className="container text-center">
          <h2 className="text-[30px] font-[600] leading-2 text-headingColor">Find a Doctor</h2>
          <div className="max-w-[540px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer bg-white placeholder:text-textColor"
              placeholder="Search for Doctor"
            />
            <button className="btn mt-0 rou-[2px]  ">Search</button>
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="container mt-[-60px]">
        <AllDoctors />
        </div>
      </section>
     <section className="py-20 bg-gradient-to-r from-blue-200 to-blue-400">
        <div className="container">
          <div className="max-w-md mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">What Our Patients Say</h2>
            <p className="text-lg mb-8">Our patients are our priority. Read what they have to say about their experience with us.</p>
          </div>
          <Testimonial />
        </div>
      </section>
      </>
  );
};

export default FindDoctor;
