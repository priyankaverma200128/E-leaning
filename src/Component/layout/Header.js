import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
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
                        <Link to="/login" className="btn btn-primary pt-2" style={{width:"130px",height:"50px",marginTop:"10px",textAlign:"center"}}>Login</Link>


                    </div>
                </div>
            </nav>

        </>
    )
}