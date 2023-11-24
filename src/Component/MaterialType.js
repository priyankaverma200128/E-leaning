import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import Apiservices from "../Component/layout/Apiservices"
import { useNavigate } from "react-router-dom"


export default function MaterialType(){
    const history = useNavigate();
    
  const [data, setData] = useState([])
  const getData = () => {
    Apiservices.ShowUserMaterialType()
        .then((res) => {
            console.log(res.data.data);
            
            toast.success(res.data?.message)
            setData(res.data.data)

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
                <h6 className="section-title bg-white text-center text-primary px-3">MaterialType</h6>
                <h1 className="mb-5">All Types</h1>
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
                                <Link to={"/user/branches/"+e?._id}  className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{"border-radius": "0 30px 30px 0"}}>Show Branches</Link>
                            </div>
                        </div>
                        <div className="text-center p-4 pb-0">
                           
                            
                            <h1 className="mb-4">{e?.materialtypeName}</h1>
                        </div>
                        <div className="d-flex border-top">
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2"></i>John Doe</small>
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>1.49 Hrs</small>
                            <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>30 Students</small>
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