import axios from 'axios';
import { toast } from 'react-toastify'
import * as qs from 'qs'
import React, { useState } from 'react'
import Apiservices from '../layout/Apiservices';
import { useNavigate } from 'react-router-dom';
import { RingLoader } from "react-spinners"

export default function Register() {
    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState("");
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [load,setload] = useState(false);
    const history= useNavigate();
    
  const obj = {
    position: "absolute",
    top: "30%",
    left: "50%",
    zIndex: 1,
}

    const formSubmit = (e) => {
        setload(true)
        e.preventDefault()
        console.log("Form Submitted");
        let data = {
            email: email,
            password: pass,
            name: name,
            contact: contact,
            gender: gender,
            address: address

        }
        Apiservices.AddCustomer(data)
            .then((res) => {
                console.log(res.data)
                toast.success(res.data?.message)
                history('/user')
                setload(false)
            })
            .catch((err) => {
                toast.err(err.data.message)
                setload(false)
            })

    }
    return (
        <>
        { load == true && <RingLoader size={100} loading={load} cssOverride={obj} />}
            <div className={load == true ? "disable-screen" : " "}>
        <div className='container my-4 py-3'>
            <section  style={{ backgroundClip: " #eee" }}>
                <div className="container ">
                    <div className="row d-flex justify-content-center align-items-center ">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form className="mx-1 mx-md-4" onSubmit={formSubmit}>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" className="form-control" onChange={(e)=>{setName(e.target.value)}} />
                                                        <label className="form-label" for="form3Example1c">Your Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" id="form3Example3c" className="form-control" onChange={(e)=>{setEmail(e.target.value)}}/>
                                                        <label className="form-label" for="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4c" className="form-control" onChange={(e)=>{setPassword(e.target.value)}}/>
                                                        <label className="form-label" for="form3Example4c">Password</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" className="form-control" onChange={(e)=>{setContact(e.target.value)}}/>
                                                        <label className="form-label" for="form3Example1c">contact</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" className="form-control" onChange={(e)=>{setAddress(e.target.value)}} />
                                                        <label className="form-label" for="form3Example1c">Address</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        
                                                        <label>Gender</label>
                                                        <input type='radio' name='gender' onChange={(e)=>{setGender(e.target.value)}} value="M" checked={gender=="M"}/>Male
                                                        <input type='radio' name='gender' onChange={(e)=>{setGender(e.target.value)}} value="F" checked={gender=="F"}/>Female
                                                    </div>
                                                </div>


                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button  className="btn btn-primary btn-lg">Register</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="Sample image" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
            </div>
        </>
    )
}