import React, { useState } from 'react';

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    // Logic for booking appointment
    console.log("Booking appointment:", selectedDate, selectedTime);
  };

  return (
    <div className="timings w-full flex flex-col items-center justify-between mt-8">
      <div className="dates w-full flex  gap-8">
        
        <input type="radio" name="date"   className="hidden"  checked={selectedDate === 'MON'}
          onChange={() => handleDateChange('MON')}
          disabled={selectedDate !== null} />
        <label htmlFor="d1" className="dates-item   w-12 h-400 bg-white text-center flex items-center justify-center flex-col p-2  cursor-pointer   hover:bg-blue-600 border border-gray-500 rounded-lg">
          <div className="day text-sm">MON</div>
          <div className="date">12</div>
        </label>
        
        <input type="radio" name="date" id="d1" className="hidden" checked={selectedDate === 'MON'}
          onChange={() => handleDateChange('tue')}
          disabled={selectedDate !== null}/>
        <label htmlFor="d1" className="dates-item w-12 h-400 bg-white text-center flex items-center justify-center flex-col p-2  cursor-pointer border  hover:bg-blue-600 border-gray-500 rounded-lg">
          <div className="day text-sm">TUE</div>
          <div className="date">13</div>
        </label>
        
        <input type="radio" name="date" id="d1" defaultChecked className="hidden" checked={selectedDate === 'MON'}
          onChange={() => handleDateChange('won')}
          disabled={selectedDate !== null} />
        <label htmlFor="d1" className="dates-item w-12 h-400 bg-white text-center flex items-center justify-center flex-col p-2  cursor-pointer border hover:bg-blue-600 border-gray-500 rounded-lg">
          <div className="day text-sm">WON</div>
          <div className="date">14</div>
        </label>
        
        <input type="radio" name="date" id="d1" defaultChecked className="hidden"checked={selectedDate === 'MON'}
          onChange={() => handleDateChange('thu')}
          disabled={selectedDate !== null} />
        <label htmlFor="d1" className="dates-item w-12 h-400 bg-white text-center flex items-center justify-center flex-col p-2  cursor-pointer border  hover:bg-blue-600 border-gray-500 rounded-lg">
          <div className="day text-sm">THU</div>
          <div className="date">14</div>
        </label>
        
        <input type="radio" name="date" id="d1" defaultChecked className="hidden" checked={selectedDate === 'MON'}
          onChange={() => handleDateChange('fri')}
          disabled={selectedDate !== null} />
        <label htmlFor="d1" className="dates-item w-12 h-400 bg-white text-center flex items-center justify-center flex-col p-2  cursor-pointer border  hover:bg-blue-600 border-gray-500 rounded-lg">
          <div className="day text-sm">FRI</div>
          <div className="date">15</div>
        </label>
        
        <input type="radio" name="date" id="d1" defaultChecked className="hidden" checked={selectedDate === 'MON'}
          onChange={() => handleDateChange('sat')}
          disabled={selectedDate !== null} />
        <label htmlFor="d1" className="dates-item w-12 h-400 bg-white text-center flex items-center justify-center flex-col p-2  cursor-pointer border  hover:bg-blue-600 border-gray-500 rounded-lg">
          <div className="day text-sm">SAT</div>
          <div className="date">16</div>
        </label>
        
        
        
        
        {/* Repeat the same structure for other dates */}
      </div>
      <div className="times w-full flex justify-between mt-4">
        <div className='flex flex-col gap-10'>
          <div className='flex gap-x-10'>
        <input type="radio" name="time" id="t1" defaultChecked className="hidden" onChange={() => handleTimeChange('11:00AM')}
              disabled={selectedTime !== null} />
        <label htmlFor="t1" className="time text-sm w-fit p-2 bg-white rounded:lg cursor-pointer border hover:bg-blue-600 border-gray-500 rounded-lg">
          11:00AM
        </label>
        <input type="radio" name="time" id="t1" defaultChecked className="hidden" onChange={() => handleTimeChange('11:00AM')}
              disabled={selectedTime !== null} />
        <label htmlFor="t1" className="time text-sm w-fit p-2 bg-white rounded:lg cursor-pointer  hover:bg-blue-600 border  border-gray-500 rounded-lg">
          11:00AM
        </label>
        <input type="radio" name="time" id="t1" defaultChecked className="hidden" onChange={() => handleTimeChange('11:00AM')}
              disabled={selectedTime !== null} />
        <label htmlFor="t1" className="time text-sm w-fit p-2 bg-white rounded:lg cursor-pointer border  hover:bg-blue-600 border-gray-500 rounded-lg">
          11:00AM
        </label>
        </div >
        <div className='flex gap-x-10'>
        <input type="radio" name="time" id="t1" defaultChecked className="hidden" onChange={() => handleTimeChange('11:00AM')}
              disabled={selectedTime !== null} />
        <label htmlFor="t1" className="time text-sm w-fit p-2 bg-white rounded:lg cursor-pointer  hover:bg-blue-600 border border-gray-500 rounded-lg">
          11:00AM
        </label>
        <input type="radio" name="time" id="t1" defaultChecked className="hidden" onChange={() => handleTimeChange('11:00AM')}
              disabled={selectedTime !== null} />
        <label htmlFor="t1" className="time text-sm w-fit p-2 bg-white rounded:lg cursor-pointer border  hover:bg-blue-600 border-gray-500 rounded-lg">
          11:00AM
        </label>
        <input type="radio" name="time" id="t1" defaultChecked className="hidden" onChange={() => handleTimeChange('11:00AM')}
              disabled={selectedTime !== null}/>
        <label htmlFor="t1" className="time text-sm w-fit p-2 bg-white rounded:lg cursor-pointer  hover:bg-blue-600 border border-gray-500 rounded-lg">
          11:00AM
        </label>
        </div>
       
        <div className='flex gap-x-10'>
        <input type="radio" name="time" id="t1" defaultChecked className="hidden" onChange={() => handleTimeChange('11:00AM')}
              disabled={selectedTime !== null} />
        <label htmlFor="t1" className="time text-sm w-fit p-2 bg-white rounded:lg cursor-pointer  hover:bg-blue-600 border border-gray-500 rounded-lg">
          11:00AM
        </label>
        <input type="radio" name="time" id="t1" defaultChecked className="hidden" onChange={() => handleTimeChange('11:00AM')}
              disabled={selectedTime !== null} />
        <label htmlFor="t1" className="time text-sm w-fit p-2 bg-white rounded:lg cursor-pointer border  hover:bg-blue-600 border-gray-500 rounded-lg">
          11:00AM
        </label>
        <input type="radio" name="time" id="t1" defaultChecked className="hidden" onChange={() => handleTimeChange('11:00AM')}
              disabled={selectedTime !== null}/>
        <label htmlFor="t1" className="time text-sm w-fit p-2 bg-white rounded:lg cursor-pointer  hover:bg-blue-600 border border-gray-500 rounded-lg">
          11:00AM
        </label>
        
      
    
      </div>
      <div style={{ margin: '10px' }}>
        <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
        onClick={handleBooking}
        disabled={selectedDate === null || selectedTime === null}>
          Book Appointment
        </button>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;