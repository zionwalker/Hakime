import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DoctorAbout from './DoctorAbout';
import Feedback from './Feedback';
import SidePanel from './SidePanel';

const DoctorDetails = ({ doctorId }) => {
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tab, setTab] = useState('about'); // Initialize tab state

  useEffect(() => {
    const fetchDoctorProfile = async () => {
      try {
        const response = await axios.get(`/doctor/${doctorId}`);
        setDoctor(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch doctor profile');
        setLoading(false);
      }
    };

    fetchDoctorProfile();
  }, [doctorId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="bg-gray-50 py-10">
      <div className='max-w-[1100px] px-5 mx-auto'>
        <div className='grid md:grid-cols-3 gap-10'>
        {doctor.name}
          <div className='md:col-span-2'>
            <div className='flex items-center gap-6 p-6 bg-white shadow-lg rounded-lg'>
              <img src={`http://localhost:3000/${doctor.image}`} alt="" className="w-32 h-32 rounded-full object-cover" />
              <div>
                <span className='bg-[#CCF0F3] text-BlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>
                  {doctor.specialization}
                </span>
                <h3 className='text-headingColor text-[24px] leading-9 mt-3 font-bold'>{doctor.name}</h3>
                <div className='flex items-center gap-2 mt-1'>
                  <span className='flex items-center gap-1 text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                     {doctor.rating}
                  </span>
                  <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>
                    review
                  </span>
                </div>
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
                {tab === 'about' && <DoctorAbout doctor={doctor} />}
                {tab === 'feedback' && <Feedback reviews={doctor.reviews} />}
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
