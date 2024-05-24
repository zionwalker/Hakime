import React from 'react';
import Booking from './Booking';

const SidePanel = () => {
  return (
    <div className='shadow-lg p-3 lg:p-5 rounded-md bg-white'>
      <div className='flex items-center justify-between'>
        <p className='text_para text-[16px] mt-0 font-bold'>Booking Price</p>
        <span className='text-[16px] leading-7 lg:text-[20px] lg:leading-9 text-headingColor font-bold'>
          500 Birr
        </span>
      </div>

      <div className='mt-[30px]'>
        <p className='text_para mt-0 font-semibold text-headingColor'>
          Available Time
        </p>
        <ul className='mt-3'>
          <li className='flex items-center justify-between mb-2'>
            <p className='text-[15px] leading-6 font-semibold text-textColor'>
              Sunday
            </p>
            <p className='text-[15px] leading-6 font-semibold text-textColor'>
              4:00 PM - 5:00 PM
            </p>
          </li>
          <li className='flex items-center justify-between mb-2'>
            <p className='text-[15px] leading-6 font-semibold text-textColor'>
              Thursday
            </p>
            <p className='text-[15px] leading-6 font-semibold text-textColor'>
              1:00 AM - 2:00 AM
            </p>
          </li>
          <li className='flex items-center justify-between mb-2'>
            <p className='text-[15px] leading-6 font-semibold text-textColor'>
              Friday
            </p>
            <p className='text-[15px] leading-6 font-semibold text-textColor'>
              10:00 PM - 11:00 PM
            </p>
          </li>
        </ul>
      </div>

      <div className='mt-8'>
        <Booking/>
      </div>
    </div>
  );
};

export default SidePanel;
