import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import Apiservices from "../layout/Apiservices"
import { useNavigate } from "react-router-dom"
import { RingLoader } from "react-spinners"

export default function ShowCourses() {
    
    const nav = useNavigate()
    const [load,setload]=useState(true)
    const obj = {
        position: "absolute",
        top: "30%",
        left: "50%",
        zIndex: 1,
    }

    const history = useNavigate();
    
    const getData = () => {
        Apiservices.ShowCourses(data)
            .then((res) => {
                console.log(res.data.data);
                toast.success(res.data?.message)
                setData(res.data.data)
                setload(false)

            })
            .catch((err) => {
                console.error(err);
                setload(false)
                toast.error("Something went wrong!!");
            })
    }
    useEffect(
        () => {
            getData();
        }, [load]
    )
    const deleteData=(id)=>{
        setload(true)
        let data={
            _id:id
        }
        Apiservices.DeleteCourse(data).then(
            (res)=>{
                toast.success(res.data.message)
                nav("/admin/showcourses")
                setload(false)
                // window.location.reload() //but it reloads the entire page
            }
        ).catch(
            (err)=>{
                toast.error("Something went Wrong")
                setload(false)
            }
        )
    }
    return (
        <>
        { load == true && <RingLoader size={100} loading={load} cssOverride={obj} />}
            <div className={load == true ? "disable-screen " : " "}>
            {/* Heading starts here */}
            <div className="my-4 mt-4" style={{ backgroundColor: "#0a0f18", color: "white", height: "80px", paddingTop: "10px" }}>
                <h1>All Courses</h1>
            </div>

            <div className="container my-4 mt-4">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">S. No.</th>
                            <th scope="col">Course Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>


                        {data?.map((e, index) => {
                            return <tr key={e._id}>
                                <td>{index + 1}</td>
                                <td>{e?.courseName}</td>
                                <td><img src={e?.signedUrl}
                                    style={{ height: "200px", width: "200px" }} alt={e?.name}
                                /></td>
                                <td>
                                    
                                    <button className="btn btn-lg btn-outline-danger" onClick={()=>{deleteData(e?._id)}} ><i className="bi bi-trash-fill"></i></button>
                                    
                                    </td>
                                <td>
                                    <Link to={"/admin/UpdateCourses/"+ e?._id}>
                                        <button className="btn btn-lg  btn-outline-success " ><i className="bi bi-pencil-square"></i></button>
                                    </Link>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
                </div>

            </div>


        </>
    )
}