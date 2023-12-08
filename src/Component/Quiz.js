import { Link, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

import Apiservices from "../Component/layout/Apiservices"
import { useNavigate } from "react-router-dom"
import { RingLoader } from "react-spinners"


export default function Quiz(){
    const [load,setload]=useState(true)
  const obj = {
      position: "absolute",
      top: "30%",
      left: "50%",
      zIndex: 1,
  }
  const history = useNavigate();
    
  const [data, setData] = useState([])
  const getData = () => {
    Apiservices.ShowUserQuiz()
        .then((res) => {
            console.log(res.data.data);
            toast.success(res.data?.message)
            setData(res.data.data)
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
const token = sessionStorage.getItem("token")
if(!token|| token=="null"|| token==null){
    return <Navigate to = "/login"/>
  }

    return(
        <>
        { load == true && <RingLoader size={100} loading={load} cssOverride={obj} />}
            <div className={load == true ? "disable-screen " : " "}>
         <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-10 text-center">
                    <h1 className="display-3 text-white animated slideInDown">Welcome To Quiz</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                         
                            
                            {/* <li className="breadcrumb-item"><Link to="/user/quizquestion">Quiz Questions</Link></li> */}
                            <li className="breadcrumb-item"><Link to="/user/playedquiz">PlayedQuiz</Link></li>

                        </ol>
                    </nav>
                </div>
            </div>

        </div>
                </div>
                

    
                <div className="container-xxl py-5">
        <div className="container-fluid">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Quizquestion</h6>
                <h1 className="mb-5">All Quiz</h1>
            </div>
            <div  className="row g-4 justify-content-center">
           {data?.map((e,index)=>{
              return (
                <div key={index} className="col-lg-4 wow fadeInUp my-4 " data-wow-delay="0.1s">
                    <Link to={"/user/quizquestion/"+e?._id}>
                    <div className="course-item bg-light">
                        <div className="position-relative overflow-hidden">
                            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNfOEexeVFbQ4nRMmk7whlVS6n_PoGnNutw&usqp=CAU"} style={{width:"500px"}} className="img-fluid"  alt=""/>
                            <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                {/* <Link to={"/user/quizquestion/"+e?._id}  className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{"border-radius": "0 30px 30px 0"}}>Show quizquestion</Link> */}
                            </div>
                        </div>
                        <div className="text-center p-4 pb-0">
                            
                            
                            <h1 className="mb-4">{e?.title}</h1>
                        </div>
                        
                    </div>
                    </Link>
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
        
        
       
    
