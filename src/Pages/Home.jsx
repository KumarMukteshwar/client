import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      const res = await axios.get("https://myblogzone-3.onrender.com/user/get/allblogs", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setBlogs(res.data);
    };
    fetchAllBlogs();
  }, []);

  return (
    <div>
      <main className="my-5">
        <div className="container shadow-lg">
          <section className="text-center">
            <h2 className="mb-5 my-3">
              <strong>Latest Posts</strong>
            </h2>
            <div className="row">
              {blogs && blogs.length > 0 ? (
                blogs.map((blog, index) => {
                  return (
                    <div className="col-lg-4 col-md-12 mb-4" key={blog._id}>
                      <div className="card">
                        <div
                          className="bg-image hover-overlay ripple"
                          data-mdb-ripple-color="light"
                        >
                          <img
                            className="img-fluid"
                            src={`https://myblogzone-3.onrender.com/${blog.thumbnail}`}
                            alt=""
                          />
                          <Link to={`/blog/${blog._id}`}>
                            <div
                              className="mask"
                              style={{
                                backgroundColor:"violet",
                                transform: "translateY(100%)",
                              }}
                            ></div>
                          </Link>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">{blog.title}</h5>
                          <p className="card-text">{blog.description}</p>
                          <Link className="btn btn-primary" to={`/blog/${blog._id}`}>Read More</Link>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h2>Loading....</h2>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
