import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";
import './Home.css'
export default function Home(){
    return(
        <>
      
      <Carousel>
  {/* Slide 1 */}
  <div >
    <img src="/assets/img/carousel-1.jpg" className="img-fluid" alt="Slide 1" />
    <div className="carousel-text">
      <div className="carousel-text-content ">
        <h5 className="text-primary text-uppercase mb-3 animated slideInDown ">
          Best Online Courses
        </h5>
        <h1 className=" text-white animated slideInDown">
          The Best Online Learning Platform
        </h1>
        <p className=" fs-5 text-white mb-4 pb-2">
        E-learning, or electronic learning, refers to the use of digital technologies to deliver educational content and facilitate learning. It has become a popular and flexible alternative to traditional classroom-based education. Key aspects of e-learning include:
        </p>
        <div className="btn-container">
          <a href="/" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
            Read More
          </a>
          <a href="/" className="btn btn-light py-md-3 px-md-5 animated slideInRight">
            Join Now
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Slide 2 */}
  <div>
    <img src="/assets/img/carousel-2.jpg"  alt="Slide 2" className="img-fluid "/>
    <div className="col-lg-10">
    <div className="carousel-text">
      <div className="carousel-text-content">
        <h5 className="text-primary text-uppercase mb-3 animated slideInDown display-6">
          Best Online Courses
        </h5>
        <h1 className="display-6 text-white animated slideInDown">
          Get Educated Online From Your Home
        </h1>
        <p className="fs-5 text-white mb-4 pb-2">
        E-learning utilizes digital platforms, websites, and learning management systems (LMS) to host educational content. Learners can access these materials from anywhere with an internet connection.
        </p>
        <div className="btn-container">
          <a href="/" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
            Read More
          </a>
          <a href="/" className="btn btn-light py-md-3 px-md-5 animated slideInRight">
            Join Now
          </a>
        </div>
      </div>
    </div>
    </div>
  </div>
    </Carousel>

<div className="container-xxl py-5">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item text-center pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                            <h5 className="mb-3">Skilled Instructors</h5>
                            <p>E-learning allows learners to progress through materials at their own speed.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item text-center pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                            <h5 className="mb-3">Online Classes</h5>
                            <p>E-learning utilizes digital platforms, websites, and learning management systems (LMS) to host educational content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item text-center pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-home text-primary mb-4"></i>
                            <h5 className="mb-3">Home Projects</h5>
                            <p>E-learning allows learners to progress through materials at their own speed.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="service-item text-center pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-book-open text-primary mb-4"></i>
                            <h5 className="mb-3">Book Library</h5>
                            <p>E-learning supports continuous learning and professional development.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

        </>
    )
}