import React from 'react';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import Booking from './Booking';
import doctorImg01 from "../../assets/images/doctor.png";


const DoctorDetails = () => {
  return <section>
      <h2 className='text-center font-bold text-4xl'>Doctor Detail</h2>
      <div className='max-w-[1170px] px-5 mx-auto'>
        <div className='grid md:grid-cols-3 gap-3'>
          <div className='col-span-2'>
            <div className='flex items-center gap-5'>
              <figure className='max-w-[200px] max-h-[200px]'>
                <img src={doctorImg01} alt='' className='w-full' style={{ maxWidth: '100%', height: 'auto', backgroundSize: 'cover' }} />
              </figure>
              <div className='gap-10' style={{ margin: '20px' }}>
                <h3 className='text-headingColor text-[16px] py-1 px-6 lg:py-2 lg:px-6 leading-9 mt-3 font-bold'>dr. Liya</h3>
                <h3 className='bg-[#CCF0F3] text-[#498AA0] py-1 px-6 lg:py-2 lg:px-6 text-[12px] lg:text-[16px] font-semibold rounded'>surgeon</h3>
                <span className='flex items-center gap-3 justify-normal'>
                  <FaStar size={25} color="gold" className='mt-3' />4.8
                </span>
                <span className='flex items-center gap-3 justify-normal'>
                  <FaMapMarkerAlt />800m
                </span>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container ">
          <div className='flex items-center justify-center'>
        <h2 className='font-[400] text-[22px] '>About</h2>
        <p className='text-gray-500 tracking-wide mt-2 w-1/2'>Dr. Liya Tadese is a renowned physician in Ethiopia known for her expertise in [insert specialty or area of focus, if available]. She has made significant contributions to the healthcare sector in Ethiopia and is highly respected for her dedication to improving the well-being of her patients. Dr. Liya Tadese is known for her compassionate care and commitment to providing high-quality medical services to those in need. Her patients speak highly of her professionalism, knowledge, and care.</p>
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className='text-blue-500'>Read more</a>
        
        <Booking  />
        </div>
        </div>
        
      </section>
      </section>
};

export default DoctorDetails;