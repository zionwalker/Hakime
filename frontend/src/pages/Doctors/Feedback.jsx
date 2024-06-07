import React from 'react';
import { formateDate } from '../../utils/formateDate';
import { AiFillStar } from 'react-icons/ai';

const Feedback = ({ reviews }) => {
  return (
    <div className="p-8 bg-gray-50 rounded-lg shadow-lg">
      <div className="mb-12">
        <h4 className="text-2xl font-bold text-headingColor mb-6">
          All reviews ({reviews.length})
        </h4>
        {reviews.map(review => (
          <div
            key={review.id}
            className="flex justify-between items-start gap-6 mb-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-start gap-4">
              {/* Display user/patient information if needed */}
              <figure className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={review.user.profilePicture}
                  alt={review.user.name}
                />
              </figure>
              <div>
                <h5 className="text-lg leading-6 text-primaryColor font-bold">
                  {review.user.name}
                </h5>
                <p className="text-sm leading-6 text-gray-500">
                  {formateDate(new Date(review.date), 'MMM dd, yyyy')}
                </p>
                <p className="text-gray-700 mt-2 font-medium text-base">
                  {review.text}
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              {[...Array(review.rating)].map((_, starIndex) => (
                <AiFillStar key={starIndex} color="#ee7700" />
              ))}
            </div>
          </div>
        ))}
        {reviews.length === 0 && (
          <div className="text-gray-500 text-center">
            No reviews available.
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
