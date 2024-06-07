import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllFirstAid = () => {
    const [firstAidData, setFirstAidData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null); 
    const [showDeleteModal, setShowDeleteModal] = useState(false); 
    const [showEditModal, setShowEditModal] = useState(false); 
    const [editedTitle, setEditedTitle] = useState("");
    const [editedContent, setEditedContent] = useState(""); 
    const [editedSource, setEditedSource] = useState(""); 
    const [editedImage, setEditedImage] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/admin/getAllFirstAid');
                setFirstAidData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, []); 

    const handleEdit = async (item) => {
        setSelectedItem(item); 
        setEditedTitle(item.title);
        setEditedContent(item.content);
        setEditedSource(item.source);
        setShowEditModal(true); 
    };
    
    const handleDelete = async (id) => {
        setSelectedItem(id); 
        setShowDeleteModal(true); 
    };

    const confirmDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/admin/first_aids/${selectedItem.id}`);
            setFirstAidData(firstAidData.filter(item => item.id !== selectedItem.id));
            toast.success('Deleted successfully!');
        } catch (error) {
            console.error('Error deleting item:', error);
            toast.error('Error deleting, try again');
        } finally {
            setSelectedItem(null); 
            setShowDeleteModal(false); 
        }
    };
    

    const confirmEdit = async () => {
        try {
            const formData = new FormData();
            formData.append('title', editedTitle);
            formData.append('content', editedContent);
            formData.append('source', editedSource);
            formData.append('image', editedImage);

            const response = await axios.patch(`http://localhost:3000/admin/first_aids/${selectedItem.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Update the edited item in the state with the response data
            const updatedItem = {
                id: selectedItem.id,
                title: editedTitle,
                content: editedContent,
                source: editedSource,
                image: response.data.image, // Assuming the API returns the updated image path
            };
            setFirstAidData(firstAidData.map(item => (item.id === selectedItem.id ? updatedItem : item)));

            toast.success('Edited successfully!');
        } catch (error) {
            console.error('Error editing item:', error);
            toast.error('Error editing, try again');
        } finally {
            setSelectedItem(null);
            setShowEditModal(false);
        }
    };

    const cancelDelete = () => {
        setSelectedItem(null); 
        setShowDeleteModal(false); 
    };

    const cancelEdit = () => {
        setSelectedItem(null); 
        setShowEditModal(false); 
    };

    if (loading) {
        return <div className="text-center mt-12">Loading...</div>;
    }

    if (error) {
        return <div className="text-center mt-12 text-red-600">Error: {error.message}</div>;
    }

    return (
        <div className="max-w-4xl mx-auto mt-12 p-4">
            <div className="header">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">First Aid Information</h1>
                <p className="text-center text-sm text-gray-500">Explore and manage first aid information</p>
            </div>
            <ToastContainer />
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                {firstAidData.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src={`http://localhost:3000/${item.image}`}
                            alt={item.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h2>
                            <p className="text-gray-700 mb-4">{item.content}</p>
                            <a
                                href={item.source}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                {item.source}
                            </a>
                            <div className="mt-4 flex justify-between">
                                <button
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg"
                                    onClick={() => handleEdit(item)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg"
                                    onClick={() => handleDelete(item)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {showDeleteModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">Are you sure you want to delete this item?</h2>
                        <div className="flex justify-end">
                            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg mr-2" onClick={confirmDelete}>Yes</button>
                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg" onClick={cancelDelete}>No</button>
                        </div>
                    </div>
                </div>
            )}
            {showEditModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">Edit Content</h2>
                        <input
                            type="text"
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                            className="w-full                            p-2 border border-gray-300 rounded mb-4"
                            placeholder="Title"
                        />
                        <textarea
                            value={editedContent}
                            onChange={(e) => setEditedContent(e.target.value)}
                            className="w-full h-32 p-2 border border-gray-300 rounded mb-4"
                            placeholder="Content"
                        ></textarea>
                        <input
                            type="text"
                            value={editedSource}
                            onChange={(e) => setEditedSource(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                            placeholder="Source"
                        />
                        <input
                            type="file"
                            onChange={(e) => setEditedImage(e.target.files[0])}
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                        />
                        <div className="flex justify-end">
                            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg mr-2" onClick={confirmEdit}>Save</button>
                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg" onClick={cancelEdit}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllFirstAid;

