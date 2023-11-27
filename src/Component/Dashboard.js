import { useEffect,useState } from "react"
import Apiservices from "./layout/Apiservices"

export default function Dashboard(){
    const [data, setdata] = useState([]);
    

    useEffect(
        ()=>{
        Apiservices.admindashboard().then(
            (res)=>{
                console.log(res.data)
                setdata(res.data)
            }
        )
        },[]
    )

    return(
        <>

            <div className="container-fluid " id="main">
                <div className="row mt-5">
                    <div className="col main pt-5 mt-5">
                        <h1 className="display-4 d-none d-sm-block">
                            Dashboard
                        </h1>
            
                                          
            <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true"></span>
                    <span className="sr-only">Close</span>
                </button>
                <strong>Holy guacamole!</strong> It's free.. this is an example theme.
            </div>
            <div className="row mb-3">
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card bg-success text-white h-100">
                        <div className="card-body bg-success">
                            <div className="rotate">
                                <i className="fa fa-user fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Users</h6>
                            <h1 className="display-4">{data?.totalUser}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-danger h-100">
                        <div className="card-body bg-danger">
                            <div className="rotate">
                                <i className="fa fa-list fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Courses</h6>
                            <h1 className="display-4">{data?.totalCourse}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-info h-100">
                        <div className="card-body bg-info">
                            <div className="rotate">
                                <i className="fa fa-globe fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Branches</h6>
                            <h1 className="display-4">{data?.totalBranches}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-warning h-100">
                        <div className="card-body">
                            <div className="rotate">
                                <i className="fa fa-home fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Material</h6>
                            <h1 className="display-4">{data?.totalMaterials}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-success h-100">
                        <div className="card-body">
                            <div className="rotate">
                                <i className="fa fa-home fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">MaterialTypes</h6>
                            <h1 className="display-4">{data?.totalMaterialtypes}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-warning h-100">
                        <div className="card-body bg-info">
                            <div className="rotate">
                                <i className="fa fa-home fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Quiz</h6>
                            <h1 className="display-4">{data?.totalQuiz}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-warning h-100">
                        <div className="card-body bg-success">
                            <div className="rotate">
                                <i className="fa fa-home fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Quiz Questions</h6>
                            <h1 className="display-4">{data?.totalQuizquestion}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-warning h-100">
                        <div className="card-body bg-danger">
                            <div className="rotate">
                                <i className="fa fa-home fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Played Quiz</h6>
                            <h1 className="display-4">{data?.totalPlayedquiz}</h1>
                        </div>
                    </div>
                </div>
            </div>
        
            <hr/>
        
        
            <hr/>
           
           
   </div>
   </div>
   </div>
            
            
        
            

        </>
    )
}