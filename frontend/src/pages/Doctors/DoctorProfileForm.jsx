import React, { useState } from 'react';
import axios from 'axios';

const DoctorProfileCompletion = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, [e.target.name]: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/doctors/completeProfile/${step}`, formData);
      setSuccessMessage(response.data.message);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleNextStep = () => {
    setStep(step + 1);
    setSuccessMessage(null);
    setError(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Complete Doctor Profile - Step {step}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="date_of_birth" className="block font-semibold">Date of Birth</label>
            <input type="date" name="date_of_birth" id="date_of_birth" onChange={handleInputChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
          </div>
          <div>
            <label htmlFor="gender" className="block font-semibold">Gender</label>
            <input type="text" name="gender" id="gender" placeholder="Gender" onChange={handleInputChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
          </div>
        </div>
        {step === 1 && (
          <div>
            <label htmlFor="photo" className="block font-semibold">Photo</label>
            <input type="file" name="photo" id="photo" onChange={handleFileChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
          </div>
        )}
        {step === 2 && (
          <div>
            <label htmlFor="medical_degrees" className="block font-semibold">Medical Degrees</label>
            <input type="text" name="medical_degrees" id="medical_degrees" placeholder="Medical Degrees" onChange={handleInputChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
          </div>
        )}
        {step === 3 && (
          <div>
            <label htmlFor="medical_license_number" className="block font-semibold">Medical License Number</label>
            <input type="text" name="medical_license_number" id="medical_license_number" placeholder="Medical License Number" onChange={handleInputChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
          </div>
        )}
        <div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Save</button>
        </div>
        {successMessage && <p className="text-green-600">{successMessage}</p>}
        {error && <p className="text-red-600">{error}</p>}
      </form>
      <button onClick={handleNextStep} className="mt-4 bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-md" disabled={step === 3}>Next Step</button>
    </div>
  );
};

export default DoctorProfileCompletion;
