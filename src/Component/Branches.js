import react from 'react'


import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { Link, useParams } from "react-router-dom"
import Apiservices from "../Component/layout/Apiservices"
import { useNavigate } from "react-router-dom"
import { RingLoader } from "react-spinners"


export default function Branches(){
    const [load,setload]=useState(true)
    const obj = {
        position: "absolute",
        top: "300px",
        left: "50%",
        zIndex: 1,
    }
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
            setload(false)

        })
        .catch((err) => {
            console.error(err);
            toast.error("Something went wrong!!");
            setload(false)
        })
}
useEffect(
  () => {
      getData();
  }, [load]
)
    return(
        <>
        { load == true && <RingLoader size={100} loading={load} cssOverride={obj} />}
            <div className={load == true ? "disable-screen " : " "}>
      
 <div className="container-xxl py-5">
        <div className="container-fluid">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                <h1 className="mb-5"style={{ fontWeight: "bold", fontSize: "80px" }}>Course's Branches</h1>
            </div>
            <div  className="row g-4 justify-content-center">
           {data?.map((e,index)=>{
              return (
                <div key={index} className="col-lg-4 wow fadeInUp my-4 " data-wow-delay="0.1s">
                    <div className="course-item bg-light">
                        <div className="position-relative overflow-hidden">
                            <img src={e?.signedUrl} className="img-fluid"  alt="" style={{height:"300px",width:"400px",border: "2px solid #070808",borderRadius: "10px"}}/>
                            <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">

                                <Link to={`/user/branches/${e._id}/${e.courseId}`}>
                                <Link to={"/user/courses/"}  className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{"border-radius": "30px 0 0 30px "}}>Show Courses</Link>
                                <Link to={"/user/material/"+e?._id}  className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{"border-radius": "0 30px 30px 0"}}>Show Material</Link></Link>

                            </div>
                        </div>
                        <div className="text-center p-4 pb-0">
                           
                           
                            <h1 className="mb-4"style={{ fontWeight: "bold", fontSize: "60px" }}>{e?.name}</h1>
                        </div>
                       
                    </div>
                </div>
              )
            })
            
          }
          </div>
        </div>
    </div>
    </div>

        
        
        
        </>
    )
}
