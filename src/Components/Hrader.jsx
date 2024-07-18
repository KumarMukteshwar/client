import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Hrader = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("LogOut Successfully");
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <Link className="navbar-brand text-white mx-3" to="/">
          <img style={{width:'50ps', height:"50px"}} src="logo3.png" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <Link className="nav-link text-white" to="/">
                {" "}
                Home{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/add blog">
                {" "}
                Add Blog{" "}
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link text-white" to="/add category">
                {" "}
                Add Category{" "}
              </Link>
            </li>
          </ul>
          <div className="div-inline mx-auto my-2 my-lg-0">
            {token && token !== null ? (
              <>
                <button className="m-2 btn btn-primary">
                  {" "}
                  Welcome to Our Blog{" "}
                </button>
                <button className="btn btn-primary" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to={"/login"}>
                  <button className="btn h-2  mx-1 btn-primary">Login</button>
                </Link>
                <Link to={"/register"}>
                  <button className="btn mx-3 btn-primary">Register</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Hrader;
