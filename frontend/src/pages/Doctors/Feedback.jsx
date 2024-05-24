import { useState } from "react";
import { formateDate } from "../../utils/formateDate";
import Patientp from "../../assets/images/icon03.png";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";
const Feedback = () => {
  const [ShowFeedbackForm, setShowFeedbackForm] = useState(false);
  return (
    <div className="p-8 bg-gray-50 rounded-lg shadow-lg">
      <div className="mb-12">
        <h4 className="text-2xl font-bold text-headingColor mb-6">
          All reviews (272)
        </h4>

        {[1].map((_, index) => (
          <div
            className="flex justify-between items-start gap-6 mb-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            key={index}
          >
            <div className="flex items-start gap-4">
              <figure className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={Patientp}
                  alt="Patient"
                />
              </figure>

              <div>
                <h5 className="text-lg leading-6 text-primaryColor font-bold">
                  Ali Ahmed
                </h5>
                <p className="text-sm leading-6 text-gray-500">
                  {formateDate("2023-02-14")}
                </p>
                <p className="text-gray-700 mt-2 font-medium text-base">
                  Good services, strongly recommended!
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, starIndex) => (
                <AiFillStar key={starIndex} color="#ee7700" />
              ))}
            </div>
          </div>
        ))}
        {!ShowFeedbackForm && (
          <div className="text-center">
            <button className="btn" onClick={() => setShowFeedbackForm(true)}>
              Give Feedback
            </button>
          </div>
        )}
        {ShowFeedbackForm && <FeedbackForm />}
      </div>
    </div>
  );
};

export default Feedback;
