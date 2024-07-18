import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SingleBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchSingleBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/user/get/blog/${id}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setBlog(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSingleBlog();
  }, [id]);

  return (
    <>
      <div className="container shadow my-3">
        <div className="col-md-12 d-flex items-center justify-content-center bg-dark">
          <div className="row">
            <h1 className="my-3">
              {blog.title || 'Loading...'}
            </h1>
            {/* <p className='my-3'> Published Date:</p> */}
            {blog.thumbnail && (
              <img
                className='img img-responsive img-rounded my-3'
                src={`http://localhost:9000/${blog.thumbnail}`}
                alt={blog.title}
              />
            )}
            <p className='my-3'>{blog.description || 'Loading...'}</p>
          </div>
        </div>
        <button onClick={() => navigate("/")} className="btn btn-primary">
          Back to Post
        </button>
      </div>
    </>
  );
};

export default SingleBlog;
