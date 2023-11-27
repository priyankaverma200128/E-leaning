// import { Link } from "react-router-dom"

export default function About(){
    return(
        <>
            <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-10 text-center">
                    <h1 className="display-3 text-white animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
                </div>
        <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{"min-height": "400px"}}>
                    <div className="position-relative h-100">
                        <img className="img-fluid position-absolute w-100 h-100" src="/assets/img/about.jpg" alt="" style={{"object-fit": "cover"}}/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                    <h1 className="mb-4">Welcome to eLEARNING</h1>
                    <p className="mb-4">E-learning transcends geographical boundaries, enabling individuals from around the world to access educational resources. This global reach contributes to the democratization of education.</p>
                    <p className="mb-4"> E-learning content can be updated easily to reflect changes in the subject matter or to incorporate the latest educational methodologies and technologies.</p>
                    <div className="row gy-2 gx-4 mb-4">
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Online Classes</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>International Certificate</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Online Classes</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>International Certificate</p>
                        </div>
                    </div>
                    <a className="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
                </div>
            </div>
        </div>
    </div>

    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Instructors</h6>
                <h1 className="mb-5">Expert Instructors</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item bg-light">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="/assets/img/team-1.jpg" alt=""/>
                        </div>
                        <div className="position-relative d-flex justify-content-center" style={{"margin-top": "-23px"}}>
                            <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">Instructor Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item bg-light">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="/assets/img/team-2.jpg" alt=""/>
                        </div>
                        <div className="position-relative d-flex justify-content-center" style={{"margin-top": "-23px"}}>
                            <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">Instructor Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item bg-light">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="/assets/img/team-3.jpg" alt=""/>
                        </div>
                        <div className="position-relative d-flex justify-content-center" style={{"margin-top": "-23px"}}>
                            <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">Instructor Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item bg-light">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="/assets/img/team-4.jpg" alt=""/>
                        </div>
                        <div className="position-relative d-flex justify-content-center" style={{"margin-top": "-23px"}}>
                            <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">Instructor Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        
        </>
    )
}