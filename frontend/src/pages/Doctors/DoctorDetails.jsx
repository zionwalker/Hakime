import React, { useState } from 'react';
import doctorImg01 from "../../assets/images/doctor.png";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from './DoctorAbout';
import Feedback from './Feedback';
import SidePanel from './SidePanel';

const DoctorDetails = () => {
  const [tab, setTab] = useState('about');

  return (
    <section className="bg-gray-50 py-10">
      <div className='max-w-[1100px] px-5 mx-auto'>
        <div className='grid md:grid-cols-3 gap-10'>
          <div className='md:col-span-2'>
            <div className='flex items-center gap-6 p-6 bg-white shadow-lg rounded-lg'>
              <figure className='w-32 h-32 rounded-full overflow-hidden'>
                <img src={doctorImg01} alt='Doctor' className='w-full h-full object-cover' />
              </figure>
              <div>
                <span className='bg-[#CCF0F3] text-BlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>
                  Surgeon
                </span>
                <h3 className='text-headingColor text-[24px] leading-9 mt-3 font-bold'>Dr. Liya</h3>
                <div className='flex items-center gap-2 mt-1'>
                  <span className='flex items-center gap-1 text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                    <img src={starIcon} alt='Star' className="w-4 h-4" /> 4.8
                  </span>
                  <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>
                    (200 reviews)
                  </span>
                </div>
                <p className='text-gray-600 text-[15px] leading-6 lg:text-[15px] lg:leading-6 mt-2 lg:max-w-[390px]'>
                  Hello Zedo, how are you? I am fine and good. What are you working on these days?
                </p>
              </div>
            </div>

            <div className='mt-8'>
              <div className='border-b border-gray-300'>
                <button
                  onClick={() => setTab('about')}
                  className={`py-2 px-5 mr-5 text-[16px] leading-7 font-semibold transition-colors duration-300 ${tab === 'about' ? 'border-b-2 border-primaryColor text-primaryColor' : 'text-gray-500 hover:text-primaryColor'}`}
                >
                  About
                </button>
                <button
                  onClick={() => setTab('feedback')}
                  className={`py-2 px-5 mr-5 text-[16px] leading-7 font-semibold transition-colors duration-300 ${tab === 'feedback' ? 'border-b-2 border-primaryColor text-primaryColor' : 'text-gray-500 hover:text-primaryColor'}`}
                >
                  Feedback
                </button>
              </div>

              <div className='mt-8'>
                {tab === 'about' && <DoctorAbout />}
                {tab === 'feedback' && <Feedback />}
              </div>
            </div>
          </div>
          <div>
            <SidePanel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
