import React, { useState } from 'react';

const availableTimes = {
  Monday: ['1:00 PM - 2:00 PM', '2:00 PM - 3:00 PM', '3:00 PM - 4:00 PM'],
  Thursday: ['2:00 PM - 3:00 PM', '3:00 PM - 4:00 PM', '4:00 PM - 5:00 PM'],
  Friday: ['3:00 PM - 4:00 PM', '4:00 PM - 5:00 PM', '5:00 PM - 6:00 PM']
};

const Booking = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedDay('');
    setSelectedTime('');
  };

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
    setSelectedTime('');
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Selected Time:', selectedDay, selectedTime);
    // Handle the booking logic here
    handleCloseModal();
  };

  return (
    <div>
      <button
        className="btn w-full py-2 rounded-md"
        onClick={handleOpenModal}
      >
        Book Now
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-semibold mb-4">Select Your Preferred Time</h3>

            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="day">
              Day
            </label>
            <select
              id="day"
              className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-3 mb-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={selectedDay}
              onChange={handleDayChange}
            >
              <option value="">Select a day</option>
              {Object.keys(availableTimes).map((day) => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>

            {selectedDay && (
              <>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
                  Time
                </label>
                <select
                  id="time"
                  className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-3 mb-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  value={selectedTime}
                  onChange={handleTimeChange}
                >
                  <option value="">Select a time</option>
                  {availableTimes[selectedDay].map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </>
            )}

            <div className="flex justify-end">
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSubmit}
                disabled={!selectedTime}
              >
                Book
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
