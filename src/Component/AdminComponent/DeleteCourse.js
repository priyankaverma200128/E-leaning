import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners"
import { toast } from "react-toastify"
import { useNavigate, useParams } from "react-router-dom"
import Apiservices from "../layout/Apiservices"
import { Link} from "react-router-dom"
export default function DeleteCourse(){
    const nav = useNavigate();
    const param = useParams();
    const id = param.id
    const [data,setData]=useState()
    const [load,setLoad]=useState(true)
    const [isBtn,setIsBtn]=useState(false) 
    const obj={
        position:"absolute",
        top:"30%",
        left:"50%",
        zIndex:1 //to over ride the position of loader in stack
    }
    useEffect(
        ()=>{
            Apiservices.ShowCourses().then(
                (response)=>{
                    console.log(response.data.data  )
                    toast.success(response.data.message)
                    setData(response.data.data)
                    console.log("data is ", data)
                    setTimeout(
                        ()=>{
                            setLoad(false)
                        },2000
                    )
                }
            ).catch(
                (err)=>{
                    console.log(err)
                    toast.error("Something Went Wrong !!")
                }
            )
        },[isBtn]
    )
    
    const deleteData=(_id)=>{
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
    return(
        <>
        <div className="my-5 p-5">
        <ClipLoader loading={load} cssOverride={obj} size={100} color="aqua"/>
            <div className={load==true?"disabled":""}>
            <table className="table table-striped table-bordered">
                <tr>
                    <td>SNo</td>
                    <td>Course Name</td>
                    <td>Image</td>
                    <td>Delete</td>
                </tr>
                {data?.map(
                    (e,index)=>(
                        <tr key={index}>
                        <td>{index+1}</td>
                        <td>{e?.courseName}</td>
                        <td>{e?.image}</td>
                        <td>
                            <button className="btn btn-danger" onClick={()=>{deleteData(e?._id)}}>Delete</button>
                        </td>
                        </tr>
                    )
                )}
            </table>
            </div>
        </div>
        </>
    )
}