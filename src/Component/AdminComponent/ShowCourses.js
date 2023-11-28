import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import Apiservices from "../layout/Apiservices"
import { useNavigate } from "react-router-dom"

export default function ShowCourses() {
    
    const nav = useNavigate()
    const [load,setLoad]=useState(true)
    const [isBtn,setIsBtn]=useState(false) 

    const history = useNavigate();
    
    const [data, setData] = useState([])
    const getData = () => {
        Apiservices.ShowCourses(data)
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
    const deleteData=(id)=>{
        setIsBtn(true)
        let data={
            _id:id
        }
        Apiservices.DeleteCourse(data).then(
            (res)=>{
                toast.success(res.data.message)
                nav("/admin/showcourses")
                setIsBtn(false)
                // window.location.reload() //but it reloads the entire page
            }
        ).catch(
            (err)=>{
                toast.error("Something went Wrong")
                setIsBtn(false)
            }
        )
    }
    return (
        <>
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
                                    <Link to={"/admin/deleteCourse/" +e?._id}>
                                    <button className="btn btn-lg btn-outline-danger" onClick={()=>{deleteData(e?._id)}} ><i className="bi bi-trash-fill"></i></button>
                                    </Link>
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


        </>
    )
}