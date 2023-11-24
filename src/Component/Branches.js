import react from 'react'


import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { Link, useParams } from "react-router-dom"
import Apiservices from "../Component/layout/Apiservices"
import { useNavigate } from "react-router-dom"


export default function Branches(){
  // const [courseid,setCourseId] = useState('')
  const params = useParams()
  const courseId = params.id
  console.log(courseId)
  
  const history = useNavigate();
    
  const [data, setData] = useState([])
  const getData = () => {
    const data={
      courseId:courseId
    }
    Apiservices.ShowUserBranches(data)
        .then((res) => {
            // console.log(res.data.data);
            // toast.success(res.data?.message)

            setData(res.data.data)
            // setcourseId(res.data.data.courseId)

        })
        .catch((err) => {
            console.error(err);
            toast.error("Something went wrong!!");
        })
}
useEffect(
  () => {
      getData();
  }, []
)
    return(
        <>
      
 <div className="container-xxl py-5">
        <div className="container-fluid">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                <h1 className="mb-5">Course's Branches</h1>
            </div>
            <div  className="row g-4 justify-content-center">
           {data?.map((e,index)=>{
              return (
                <div key={index} className="col-lg-4 wow fadeInUp my-4 " data-wow-delay="0.1s">
                    <div className="course-item bg-light">
                        <div className="position-relative overflow-hidden">
                            <img src={`http://localhost:5000/${e?.attachment}`} className="img-fluid"  alt=""/>
                            <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{"border-radius": "30px 0 0 30px"}}>Read More</a>
                                <Link to={`/user/branches/${e._id}/${e.courseId}`}>
                                <Link to={"/user/material/"+e?._id}  className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{"border-radius": "0 30px 30px 0"}}>Show Material</Link></Link>

                            </div>
                        </div>
                        <div className="text-center p-4 pb-0">
                           
                           
                            <h1 className="mb-4">{e?.name}</h1>
                        </div>
                       
                    </div>
                </div>
              )
            })
            
          }
          </div>
        </div>
    </div>

        
        
        
        </>
    )
}
