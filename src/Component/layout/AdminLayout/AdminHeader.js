import React from 'react'
import{Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'

const token = sessionStorage.getItem("token")
export default function AdminHeader() {
  const nav= useNavigate()
  const logout =()=>{
    toast.success("logout successfully")  
    nav("/login")
  }
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 className="m-0 text-primary"><i className="fa fa-book me-3"></i>eLEARNING</h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to="/admin" className="nav-item nav-link active">Home</Link>
                <div className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Courses</a>
              <ul className="dropdown-menu">
                <Link to="/admin/showcourses"><a className="nav-item nav-link">Show Course</a></Link>
                <Link to="/admin/addcourses"><a className="nav-item nav-link">Add Course</a></Link >
              </ul>
                </div>
                {/* <Link to="/admin/showCourses" className="nav-item nav-link">Courses</Link> */}
                <div className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Branches</a>
              <ul className="dropdown-menu">
                <Link to="/admin/showbranches"><a className="nav-item nav-link">Show Branches</a></Link>
                <Link to="/admin/addbranches"><a className="nav-item nav-link">Add Branches</a></Link >
              </ul>
                </div>
                <div className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">MaterialType</a>
              <ul className="dropdown-menu">
                <Link to="/admin/showmaterialtype"><a className="nav-item nav-link">Manage MaterialType</a></Link>
                <Link to="/admin/addmaterialtype"><a className="nav-item nav-link">Add MaterialType</a></Link >
                <Link to="/admin/showmaterial"><a className="nav-item nav-link">Show Materials</a></Link>
                <Link to="/admin/addmaterial"><a className="nav-item nav-link">Add Material</a></Link >
              </ul>
                </div>
                
                <div className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Quiz</a>
              <ul className="dropdown-menu">
              <Link to="/admin/showquiz"><a className="nav-item nav-link">ShowQuiz</a></Link>
              <Link to="/admin/addquiz"><a className="nav-item nav-link">AddQuiz</a></Link>
                <Link to="/admin/showquizquestion"><a className="nav-item nav-link">QuizQuestion</a></Link>
                <Link to="/admin/addquizquestion"><a className="nav-item nav-link">AddQuizQuestion</a></Link >
                <Link to="/admin/playedquiz"><a className="nav-item nav-link">PlayedQuiz</a></Link >
              </ul>
                </div>
            
            </div>
            <button  className="btn btn-primary py-3  " onClick={logout}>Logout</button>
        </div>
    </nav>
    </div>
  )
}
