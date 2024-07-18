import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const[input,setInput]= useState({
        email:"",
        password:"",
    })
    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:9000/user/login', input);
            alert(res.data.msg)
            console.log(res.data)
            localStorage.setItem('token', res.data.token);
            window.location.href = '/dashboard';
            navigate("/")
        } catch (error) {
           alert(error.response.data.msg);
        }
    }
  return (
    <div>
      <div>
      <div className="conatiner shadow">
        <h2 className="text-center my-3">Login Your Account</h2>
        <div className="col-md-12 my-3 d-flex items-center justify-content-center">
          <div className="row">
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="text"
                  name='email'
                  value={input.email}
                  onChange={(e) => setInput({...input, [e.target.name]: e.target.value})}
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter your email address"
                />
                 {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name='password'
                  value={input.password}
                  onChange={(e) => setInput({...input, [e.target.name]: e.target.value})}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter your password"
                />
                {/* <div id="emailHelp" className="form-text">We'll never share your password with anyone else.</div> */}
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
