import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FirstAidForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        source: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('title', formData.title);
        data.append('content', formData.content);
        data.append('source', formData.source);
        data.append('image', formData.image);

        try {
            const response = await axios.post('https://hakime-mongodb-3.onrender.com/admin/first_aids', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            });
            console.log(response.data);
            toast.success('Posted successfully!');
            // Clear form fields after successful submission
            setFormData({
                title: '',
                content: '',
                source: '',
                image: null
            });
        } catch (error) {
            console.error(error);
            toast.error('Oops! Something went wrong.');
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
            <ToastContainer /> {/* Add ToastContainer here */}
            <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Post First Aid Info</h1>
            <hr className="mt-6 shadow-sm bg-orange-200 py-1 rounded-md w-1/3 mx-auto" />
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="title"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="content">
                        Content
                    </label>
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="content"
                        rows="5"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="source">
                        Source
                    </label>
                    <input
                        type="text"
                        name="source"
                        value={formData.source}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="source"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="image">
                        Image
                    </label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleImageChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="image"
                        required
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FirstAidForm;
