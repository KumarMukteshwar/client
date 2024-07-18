import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
    description: "",
    category: "",
  });
  const [categories, setCategories] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/user/get/category",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setCategories(response.data);
      } catch (error) {
        alert(error.message);
      }
    };
    fetchAllCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleAddBlog = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", input.title);
      formData.append("description", input.description);
      formData.append("category", input.category);
      formData.append("thumbnail", file);

      const res = await axios.post(
        "http://localhost:9000/user/post/addblog",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(res.data.msg);
      navigate("/");
    } catch (error) {
      alert(error.response ? error.response.data.msg : "Something went wrong");
    }
  };

  return (
    <div>
      <div className="container shadow">
        <h2 className="text-center my-3">Add a New Blog</h2>
        <div className="col-xl-12 my-3 d-flex items-center justify-content-center">
          <div className="row">
            <form onSubmit={handleAddBlog}>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={input.title}
                  onChange={handleChange}
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Blog-Title"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select
                  className="form-control"
                  name="category"
                  value={input.category}
                  onChange={handleChange}
                >
                  <option disabled>Select Category</option>
                  {categories &&
                    categories.map((item) => {
                      return (
                        <option key={item._id} value={item._id}>
                          {item.title}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                  Description
                </label>
                <textarea
                  name="description"
                  value={input.description}
                  onChange={handleChange}
                  placeholder="Blog Description"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Thumbnail
                </label>
                <input
                  name="thumbnail"
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="select Thumbnail"
                />
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary">
                  Add Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
