import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const navigate = useNavigate();
    const [input,setInput] = useState({
        username: "",
        email: "",
        password: "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://myblogzone-3.onrender.com/user/register", input);
            alert("User registrated  successfully");
            navigate("/login")
        } catch (error) {
            alert(error.response.data.message);
        
        }
    }

  return (
    <div>
      <div className="conatiner shadow">
        <h2 className="text-center my-3">Sign Up Here</h2>
        <div className="col-md-12 my-3 d-flex items-center justify-content-center">
          <div className="row">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="formGroupName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="username"
                  value={input.username}
                  onChange={(e)=>setInput({...input, [e.target.name]: e.target.value})}
                  className="form-control"
                  id="formGroupName"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="text"
                  name="email"
                  value={input.email}
                  onChange={(e)=>setInput({...input, [e.target.name]: e.target.value})}
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={input.password}
                  onChange={(e)=>setInput({...input, [e.target.name]: e.target.value})}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary btn-block">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
