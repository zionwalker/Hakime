import React, { useState } from 'react';
import GoogleMap from '../components/Map/GoogleMap';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
    // Add your submission logic here
  };

  return (
    <div className="container mx-auto py-12">
      <div className='text-center mb-8'>
        <h1 className="text-4xl text-blue-800 font-bold mb-6">Contact Us</h1>
        <p className='text-lg leading-7 text-gray-600 mb-4'>Feel free to drop us a message or visit our office.</p>
        <hr className="border-b-2 border-gray-300 my-4 mx-auto max-w-xs" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div className="bg-gray-100 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-lg font-semibold">Address:</p>
              <p className="text-gray-700">Arbaminch, Ethiopia,</p>
              <p className="text-gray-700">Next to Wubete</p>
            </div>
            <div>
              <p className="text-lg font-semibold">Phone Numbers:</p>
              <p className="text-gray-700">+251 948 25 1946</p>
              <p className="text-gray-700">+251 948 25 1946</p>
              <p className="text-gray-700">+251 948 25 1946</p>
            </div>
          </div>
          <p className="mt-4 text-lg font-semibold">Email:</p>
          <p className="text-gray-700">hakime@gmail.com</p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-lg">
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              rows="5"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Submit</button>
        </form>
      </div>
      <div>
        <GoogleMap />
      </div>
    </div>
  );
};

export default Contact;
