import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function UserHeader() {
  const nav = useNavigate();

  const logout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");

    if (confirmLogout) {
      toast.success("Logout successful");
      nav("/login");
    } else {
    }
  }
  const handleNavbarCollapse = () => {
    // Close the navbar collapse when a navigation link is clicked
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  };

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow sticky-top p-0">
        <div className="container-fluid">
          <Link onClick={handleNavbarCollapse} to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 className="m-0 text-primary"><i className="fa fa-book me-3"></i>eLEARNING</h2>
          </Link>
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto p-4 p-lg-0">
              <li className="nav-item">
                <Link onClick={handleNavbarCollapse} to="/user" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link onClick={handleNavbarCollapse} to="/user/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link onClick={handleNavbarCollapse} to="/user/courses" className="nav-link">Courses</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Material</a>
                <ul className="dropdown-menu">
                  <li><Link onClick={handleNavbarCollapse} to="/user/showmaterial" className="dropdown-item">Show Material</Link></li>
                  <li><Link onClick={handleNavbarCollapse} to="/user/addusermaterial" className="dropdown-item">Add Material</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link onClick={handleNavbarCollapse} to="/user/Quiz" className="nav-link">Quiz</Link>
              </li>
              <li className="nav-item">
                <Link onClick={handleNavbarCollapse} to="/user/playedquiz" className="nav-link">PlayedQuiz</Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-person-fill"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  
                </ul>
              </li> */}
              
              <button className='btn btn-primary' style={{width:"150px"}} onClick={logout}>Logout</button><br/>

              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}