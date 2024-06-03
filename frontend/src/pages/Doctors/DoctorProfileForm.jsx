import React, { useState, useEffect } from "react";
import axios from "axios";

const DoctorProfileCompletion = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      setUserId(decodedToken.userId);
    }

    const savedFormData = localStorage.getItem("formData");
    const savedStep = localStorage.getItem("step");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
    if (savedStep) {
      setStep(Number(savedStep));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
    localStorage.setItem("step", step.toString());
  }, [formData, step]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const name = e.target.name;

    if (name === "image" || name === "Id_Image") {
      setFormData({ ...formData, [name]: file });
    } else if (name === "certificate" || name === "cv") {
      if (file.type === "application/pdf") {
        setFormData({ ...formData, [name]: file });
      } else {
        console.error("Invalid file type. Please upload a PDF file.");
      }
    } else {
      console.error("Invalid input name:", name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataObj = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataObj.append(key, formData[key]);
      });
      formDataObj.append("userId", userId);
      const response = await axios.post(
        `http://localhost:3000/doctor/completeProfile/${step}`,
        formDataObj,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setSuccessMessage(response.data.message);
      setError(null);
      if (step < 4) {
        setStep(step + 1);
      }
    } catch (error) {
      setError(error.response.data.message);
      setSuccessMessage(null);
    }
  };

  const handleNextStep = () => {
    setStep(step + 1);
    setSuccessMessage(null);
    setError(null);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
    setSuccessMessage(null);
    setError(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">
        Complete Profile - Step {step}
      </h2>
      <hr className="mb-10"/>
      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 && (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="date_of_birth" className="block font-semibold">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="date_of_birth"
                  id="date_of_birth"
                  value={formData.date_of_birth || ""}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
              </div>
              <div>
                <label htmlFor="gender" className="block font-semibold">
                  Gender
                </label>
                <input
                  type="text"
                  name="gender"
                  id="gender"
                  placeholder="Gender"
                  value={formData.gender || ""}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
              </div>
              <div>
                <label htmlFor="nationality" className="block font-semibold">
                  Nationality
                </label>
                <input
                  type="text"
                  name="nationality"
                  id="nationality"
                  placeholder="Nationality"
                  value={formData.nationality || ""}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
              </div>
              <div>
                <label htmlFor="address" className="block font-semibold">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Address"
                  value={formData.address || ""}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
              </div>
            </div>
            <div>
              <label htmlFor="Bio" className="block font-semibold">
                Bio
              </label>
              <textarea
                name="Bio"
                id="Bio"
                placeholder="Bio"
                value={formData.Bio || ""}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div className="flex items-center justify-center flex-col">
              <label
                htmlFor="image"
                className="block font-semibold text-center cursor-pointer"
              >
                <span className="relative">
                  <span className="inline-block bg-gray-200 rounded-full p-2">
                    <svg
                      className="w-8 h-8 text-gray-600"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 5v14m0-14V3a2 2 0 0 1 2 2h5a2 2 0 0 1-4 0V5h0z"></path>
                    </svg>
                  </span>
                  <span className="ml-3">Upload Profile Image</span>
                </span>
                <input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              {formData.image && (
                <div className="mt-2">
                  <img
                    src={URL.createObjectURL(formData.image)}
                    alt="Uploaded"
                    className="w-32 h-32 object-cover rounded-md"
                  />
                </div>
              )}
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div>
              <label
                htmlFor="passport_or_national_id_no"
                className="block font-semibold"
              >
                Passport or National ID No
              </label>
              <input
                type="text"
                name="passport_or_national_id_no"
                id="passport_or_national_id_no"
                placeholder="Passport or National ID No"
                value={formData.passport_or_national_id_no || ""}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="language_spoken" className="block font-semibold">
                Language Spoken
              </label>
              <input
                type="text"
                name="language_spoken"
                id="language_spoken"
                placeholder="Language Spoken"
                value={formData.language_spoken || ""}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label
                htmlFor="proficiency_level"
                className="block font-semibold"
              >
                Proficiency Level
              </label>
              <input
                type="text"
                name="proficiency_level"
                id="proficiency_level"
                placeholder="Proficiency Level"
                value={formData.proficiency_level || ""}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div className="flex items-center justify-center flex-col">
              <label
                htmlFor="Id_Image"
                className="block font-semibold text-center cursor-pointer"
              >
                <span className="relative">
                  <span className="inline-block bg-gray-200 rounded-full p-2">
                    <svg
                      className="w-8 h-8 text-gray-600"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 5v14m0-14V3a2 2 0 0 1 2 2h5a2 2 0 0 1-4 0V5h0z"></path>
                    </svg>
                  </span>
                  <span className="ml-3">Upload ID Image</span>
                </span>
                <input
                  id="Id_Image"
                  name="Id_Image"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              {formData.Id_Image && (
                <div className="mt-2">
                  <img
                    src={URL.createObjectURL(formData.Id_Image)}
                    alt="Uploaded"
                    className="w-32 h-32 object-cover rounded-md"
                  />
                </div>
              )}
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <div>
              <label htmlFor="medical_degrees" className="block font-semibold">
                Medical Degrees
              </label>
              <input
                type="text"
                name="medical_degrees"
                id="medical_degrees"
                placeholder="Medical Degrees"
                value={formData.medical_degrees || ""}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="medical_school" className="block font-semibold">
                Medical School
              </label>
              <input
                type="text"
                name="medical_school"
                id="medical_school"
                placeholder="Medical School"
                value={formData.medical_school || ""}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="specialization" className="block font-semibold">
                Specialization
              </label>
              <input
                type="text"
                name="specialization"
                id="specialization"
                placeholder="Specialization"
                value={formData.specialization || ""}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label
                htmlFor="year_of_graduation"
                className="block font-semibold"
              >
                Year of Graduation
              </label>
              <input
                type="number"
                name="year_of_graduation"
                id="year_of_graduation"
                placeholder="Year of Graduation"
                value={formData.year_of_graduation || ""}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="certificate" className="block font-semibold">
                Certificate
              </label>
              <input
                type="file"
                name="certificate"
                id="certificate"
                accept=".pdf"
                onChange={handleFileChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
          </>
        )}
        {step === 4 && (
          <>
            <div>
              <label
                htmlFor="medical_license_number"
                className="block font-semibold"
              >
                Medical License Number
              </label>
              <input
                type="text"
                name="medical_license_number"
                id="medical_license_number"
                placeholder="Medical License Number"
                value={formData.medical_license_number || ""}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label
                htmlFor="previous_work_experience"
                className="block font-semibold"
              >
                Previous Work Experience
              </label>
              <textarea
                name="previous_work_experience"
                id="previous_work_experience"
                placeholder="Previous Work Experience"
                value={formData.previous_work_experience || ""}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="hrRate" className="block font-semibold">
                Hourly Rate
              </label>
              <input
                type="number"
                name="hrRate"
                id="hrRate"
                placeholder="Hourly Rate"
                value={formData.hrRate || ""}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="cv" className="block font-semibold">
                CV
              </label>
              <input
                type="file"
                name="cv"
                id="cv"
                accept=".pdf"
                onChange={handleFileChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
          </>
        )}
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Save
          </button>
        </div>
        {successMessage && <p className="text-green-600">{successMessage}</p>}
        {error && <p className="text-red-600">{error}</p>}
      </form>
      <div className="flex justify-between mt-4">
        {step > 1 && (
          <button
            onClick={handlePreviousStep}
            className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-md"
          >
            Back
          </button>
        )}
        {step < 4 && (
          <button
            onClick={handleNextStep}
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default DoctorProfileCompletion;
