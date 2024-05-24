import React from 'react';


const BlogCard = ({ title, content, date, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover mb-4 rounded-lg" />
      <h2 className="text-[20px] font-bold mb-4">{title}</h2>
      <p className="text-gray-700 mb-4">{content}</p>
      <p className="text-gray-500 text-sm">{date}</p>
    </div>
  );
};

export default BlogCard;