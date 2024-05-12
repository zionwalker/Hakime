import React, { useState } from 'react';
import BlogCard from './BlogCard';
import doctorImg07 from "../../assets/images/health7.png";
import doctorImg08 from "../../assets/images/health8.png";
import doctorImg09 from "../../assets/images/health9.png";

const Blogs = () => {
  const blogs = [
    {
      title: 'Hakime is getting more recognition',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'April 20, 2024',
      imageUrl: doctorImg09,
    },
    {
      title: 'Another Awesome Blog Post about Hakime',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'April 15, 2024',
      imageUrl: doctorImg08,
    },
    {
      title: 'Another Awesome Blog Post about Hakime',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'April 15, 2024',
      imageUrl: doctorImg08,
    },
    {
      title: 'Another Awesome Blog Post about Hakime',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'April 15, 2024',
      imageUrl: doctorImg08,
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const blogsToShow = [
    blogs[(startIndex + 0) % blogs.length],
    blogs[(startIndex + 1) % blogs.length],
    blogs[(startIndex + 2) % blogs.length]
  ];

  const handleNext = () => {
    setStartIndex((startIndex + 1) % blogs.length);
  };

  const handlePrevious = () => {
    setStartIndex((startIndex - 1 + blogs.length) % blogs.length);
  };

  return (
    <div>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
        
          <BlogCard title={blogsToShow[0].title} content={blogsToShow[0].content} date={blogsToShow[0].date} imageUrl={blogsToShow[0].imageUrl} />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
         
          <BlogCard title={blogsToShow[1].title} content={blogsToShow[1].content} date={blogsToShow[1].date} imageUrl={blogsToShow[1].imageUrl} />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
          
          <BlogCard title={blogsToShow[2].title} content={blogsToShow[2].content} date={blogsToShow[2].date} imageUrl={blogsToShow[2].imageUrl} />
        </div>
      </div>
      <div className="flex justify-center mt-4">
      
       
      </div>
    </div>
  );
};

export default Blogs;