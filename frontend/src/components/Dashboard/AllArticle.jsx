import React, { useState, useEffect } from "react";

const AllArticle = () => {
  const [articles, setArticles] = useState([]);
  const [expandedArticleIndex, setExpandedArticleIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentArticle, setCurrentArticle] = useState({
    id: "",
    title: "",
    sub_title: "",
    content: "",
    image: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://hakime-mongodb-3.onrender.com/admin/getAllpost", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleExpansion = (index) => {
    setExpandedArticleIndex(expandedArticleIndex === index ? null : index);
  };

  const deleteArticle = async (id) => {
    try {
      const response = await fetch(`https://hakime-mongodb-3.onrender.com/admin/posts/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to delete article");
      }
      // Filter out the deleted article from the state
      setArticles(articles.filter((article) => article._id !== id));
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const openEditModal = (article) => {
    setCurrentArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setCurrentArticle((prevArticle) => ({
      ...prevArticle,
      [name]: value,
    }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://hakime-mongodb-3.onrender.com/admin/posts/${currentArticle._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(currentArticle),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update article");
      }
      const updatedArticle = await response.json();
      setArticles(
        articles.map((article) =>
          article._id === updatedArticle._id ? updatedArticle : article
        )
      );
      closeModal();
    } catch (error) {
      console.error("Error updating article:", error);
    }
  };

  return (
    <>
      <div className="max-w-6xl mx-auto mt-10">
        <div className="text-headingColor justify-center">
          <h3 className="text-headingColor text-center text-[30px] leading-3 font-semibold">
            Hakime Posts
          </h3>
          <hr className="mt-6 shadow-sm bg-orange-200 py-1 rounded-md w-1/6 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {articles.map((article, index) => (
            <div
              key={article._id}
              className="bg-white text-gray-900 p-4 rounded-md shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden rounded-md mb-2">
                <img
                  src={`https://hakime-mongodb-3.onrender.com/${article.image}`}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mb-1">{article.title}</h3>
              <h4 className="text-md font-semibold mb-1">{article.sub_title}</h4>
              <p
                className={`text-sm mb-2 ${
                  expandedArticleIndex === index ? "" : "line-clamp-3"
                }`}
              >
                {article.content}
              </p>
              <div className="flex justify-center space-x-2">
                <button
                  onClick={() => toggleExpansion(index)}
                  className="text-blue-500 hover:underline mb-1"
                >
                  {expandedArticleIndex === index ? "Read Less" : "Read More"}
                </button>
                <button
                  onClick={() => openEditModal(article)}
                  className="py-1 px-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteArticle(article._id)}
                  className="py-1 px-2 bg-red-500 text-white rounded hover:bg-red-700 transition-colors text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          {articles.length === 0 && (
            <p className="text-center text-gray-600">No articles available</p>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit Article</h2>
            <form onSubmit={handleEditSubmit}>
              <div className="mb-2">
                <label className="block text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={currentArticle.title}
                  onChange={handleEditChange}
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700">Subtitle</label>
                <input
                  type="text"
                  name="sub_title"
                  value={currentArticle.sub_title}
                  onChange={handleEditChange}
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700">Content</label>
                <textarea
                  name="content"
                  value={currentArticle.content}
                  onChange={handleEditChange}
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="py-1 px-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-1 px-2 bg-green-500 text-white rounded hover:bg-green-700 transition-colors"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AllArticle;
