import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [ReviewTexts, setReviewText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Feedback submitted:', { rating, ReviewTexts });
  };

  const handleRatingClick = (rate) => {
    setRating(rate);
  };

  const handleMouseEnter = (rate) => {
    setHoverRating(rate);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className="p-8 bg-gray-50 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="font-semibold text-headingColor mb-6">How would you rate the overall experience?</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
            Rating
          </label>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((rate) => (
              <span
                key={rate}
                className="cursor-pointer"
                onClick={() => handleRatingClick(rate)}
                onMouseEnter={() => handleMouseEnter(rate)}
                onMouseLeave={handleMouseLeave}
              >
                {rate <= (hoverRating || rating) ? <AiFillStar color="#FFD700" size={24} /> : <AiOutlineStar color="#FFD700" size={24} />}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ReviewTexts">
            Comments
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            id="ReviewTexts"
            placeholder="Your comments"
            value={ReviewTexts}
            onChange={(e) => setReviewText(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
