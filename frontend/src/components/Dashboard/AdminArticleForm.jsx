import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ArticleForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    sub_title: "",
    content: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/admin/getAllpost",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const sortedPosts = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        const recentPosts = sortedPosts.slice(0, 3);
        setRecentPosts(recentPosts);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchRecentPosts();
  }, []);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("sub_title", formData.sub_title);
      formDataToSend.append("content", formData.content);
      formDataToSend.append("image", formData.image);

      await axios.post("http://localhost:3000/admin/posts", formDataToSend, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      toast.success("Article posted successfully!");
      // Clear form fields after successful submission
      setFormData({
        title: "",
        sub_title: "",
        content: "",
        image: null,
      });
      setImagePreview(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block font-semibold text text-headingColor text-[20px]"
            >
              Title
            </label>
            <div className="mt-1">
              <input
                id="title"
                name="title"
                type="text"
                required
                value={formData.title}
                onChange={handleInputChange}
                className="block w-full shadow-md sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md px-4 py-3"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="sub_title"
              className="block font-semibold text text-headingColor text-[16px]"
            >
              Subtitle
            </label>
            <div className="mt-1">
              <input
                id="sub_title"
                name="sub_title"
                type="text"
                required
                value={formData.sub_title}
                onChange={handleInputChange}
                className="block w-full shadow-md sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md px-4 py-3"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="content"
              className="block font-semibold text text-headingColor text-[16px]"
            >
              Content
            </label>
            <div className="mt-1">
              <textarea
                id="content"
                name="content"
                rows="6"
                required
                value={formData.content}
                onChange={handleInputChange}
                className="block w-full shadow-md sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md px-4 py-3"
              ></textarea>
            </div>
          </div>
          <div>
            <label
              htmlFor="image"
              className="w-1/5 py-3 flex justify-center border border-transparent rounded-md bg-gray-600 text-sm font-semibold text-white mb-1 cursor-pointer"
            >
              Upload Image
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
            <div className="mt-1 flex items-center">
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="ml-2 h-32 w-32 object-cover rounded-md border border-gray-300"
                />
              )}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/3 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Post Article
            </button>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
      <div className="md:col-span-1">
        <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
        {recentPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden mb-4 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="p-4">
              <a href="#" className="text-indigo-600 hover:text-indigo-800">
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              </a>
              <p className="text-gray-600">{post.sub_title}</p>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ArticleForm;
