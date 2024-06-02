import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/admin/getallpost', {
          headers: {
          'Content-Type': 'multipart/form-data',
         
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          
        },
      });
        
      console.log(response.data);
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap -mx-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
            <BlogCard title={blog.title} subtitle={blog.sub_title} content={blog.content}  imageUrl={`http://localhost:3000/${blog.image}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
