import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as qs from 'qs';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import Apiservices from '../layout/Apiservices';
import { RingLoader } from "react-spinners"
export default function Login() {
  const [email, setEmail] = useState();
  const [pass, setPassword] = useState();
  const history = useNavigate();
  const [load, setLoad] = useState(false)
  const obj = {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 1,
  }
  const handleForm = (e) => {
    e.preventDefault()
    console.log("Form Submitted")
    let data = {
      email: email,
      password: pass
    }
    Apiservices.login(data)
      .then((res) => {
        console.log(res.data.data)

        if (res.data?.success && res.data.data.userType === 1) {
          setLoad(true)
          setTimeout(() => {
            setLoad(false)
            sessionStorage.setItem("token", res.data.token)
            sessionStorage.setItem("userData", JSON.stringify(res.data.data))
            history('/admin')
            toast.success(res.data.message)
          }, 2000);



        } else if (res.data?.success && res.data.data.userType === 2) {
          setLoad(true)
          setTimeout(() => {
            setLoad(false)
            sessionStorage.setItem("userData", JSON.stringify(res.data.data))
            sessionStorage.setItem("token", res.data.token)
            history('/user')
            toast.success(res.data.message ? res.data.message : "User logged in successfully")
          }, 2000);
        }
        else {
          toast.warn(res.data.message)
        }

      })
      .catch((err) => {
        toast.error(err.data.message)
      })
  }
  return (
    <>
      <RingLoader size={100} loading={load} cssOverride={obj} /> 
       <div className={load == true ? "disable-screen " : " "}>
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 className="m-0 text-primary"><i className="fa fa-book me-3"></i>eLEARNING</h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="about" className="nav-item nav-link">About</Link>
                <Link to="/courses" className="nav-item nav-link">Courses</Link>
                         
            
            </div>
            <Link to="/login" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Login<i className="fa fa-arrow-right ms-3"></i></Link>
        </div>
    </nav>

<div className="h-100 gradient-form" style={{"background-color": "#eee"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">

                <div className="text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    style={{"width": "185px", "alt":"logo"}}/>
                  <h4 className="mt-1 mb-5 pb-1">Wecome to Login Page</h4>
                </div>

                <form onSubmit={handleForm}>
            Email: <input type='' className='form-control form-control-lg' placeholder='Enter a valid email address' onChange={(e) => { setEmail(e.target.value) }} /><br />
            Password: <input type="password" className='form-control form-control-lg' placeholder='Enter your password' onChange={(e) => { setPassword(e.target.value) }} /><br />
            <button className='btn btn-primary btn-lg'>Login</button><br/>
            <h5>Don't have an account?</h5>
            <Link to="/register" className="text-primary" href="#!">Register</Link><br/>
            <Link to="/" className="text-primary" href="#!">Go back to home</Link>
          </form>

                

              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                  <img src='https://i.pinimg.com/736x/bf/be/10/bfbe10a424c11c26405080efbf52e939.jpg'
                className='img-fluid'  style={{"width": "450px",height:"500px", "alt":"logo",paddingRight:"10px"}}/>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>

</div>

    </>
  )
}
