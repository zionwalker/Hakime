import React, { useState, useRef, useEffect } from 'react';

const BlogCard = ({ title, subtitle, content, imageUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (isExpanded) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else {
      contentRef.current.style.maxHeight = '3rem'; // Height for two lines of text
    }
  }, [isExpanded]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover mb-4 rounded-lg" />
      <h2 className="text-[20px] font-bold mb-2">{title}</h2>
      <h3 className="text-[16px] text-gray-900 mb-2">{subtitle}</h3>
      <div
        ref={contentRef}
        className={`text-textColor mb-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? '' : 'max-h-[3.5rem] gradient-mask-b-2'
        }`}
      >
        {content}
      </div>
      <button
        onClick={toggleReadMore}
        className="text-blue-500 hover:underline"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

export default BlogCard;
