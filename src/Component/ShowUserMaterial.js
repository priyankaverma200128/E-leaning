import React, { useEffect, useState } from 'react'
import Apiservices from './layout/Apiservices'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { RingLoader } from "react-spinners"

export default function ShowUserMaterial() {
    const nav = useNavigate()
    const [isBtn, setIsBtn] = useState(false)
  
    const [data, setData] = useState([]);
    const [load, setload] = useState(true)
    const obj = {
        position: "absolute",
        top: "30%",
        left: "50%",
        zIndex: 1,
    }


  
      
      

    useEffect(
        () => {

            Apiservices.ShowMaterial(data)
                .then((res) => {
                    console.log(res.data.data);
                    // toast.success(res.data?.message)
                    setData(res.data.data)
                    setload(false)

                })
                .catch((err) => {
                    console.error(err);
                    toast.error("Something went wrong!!")
                    setload(false)
                })

        }, [load]
    )
    const deleteData=(id)=>{
        setIsBtn(true)
        let data={
            _id:id
        }
        Apiservices.DeleteMaterial(data).then(
            (res)=>{
                toast.success(res.data.message)
                nav("/user/showmaterial")
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
        { load == true && <RingLoader size={100} loading={load} cssOverride={obj} />}
            <div className={load == true ? "disable-screen " : " "}>
            {/* Heading starts here */}
            <div className="my-4 mt-4" style={{ backgroundColor: "#0a0f18", color: "white", height: "80px", paddingTop: "10px" }}>
                <h1>All Materials</h1>
            </div>
          
            <div className='container my-4 mt-4'>
            <div class="table-responsive">
                <table className='table table-striped table-hover '>
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">S. No.</th>
                            <th scope="col">Course Name</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope='col'>Image</th>
                            <th scope='col'>Delete</th>       
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    {data?.map((e, index) => {
                        return <tr key={e._id}>
                            <td>{index + 1}</td>
                            <td>{e?.courseid?.courseName}</td>
                            <td>{e?.title}</td>
                            <td>{e?.description}</td>
                            <td><Link to={`http://localhost:5000/${e?.attachment}`}  style={{ height: "200px", width: "200px" }} >
                                View
                                </Link>
                            </td>
                            <td>
                                <Link to={"/admin/deleteMaterial/"+e?._id}>
                                <button className="btn btn-lg btn-outline-danger" onClick={()=>{deleteData(e?._id)}} ><i className="bi bi-trash-fill"></i></button>
                                </Link>
                            </td>

                            
                            <td>
                            <Link to={"/user/UpdateMaterial/" + e?._id}>
                                <button className="btn btn-lg  btn-outline-success " ><i className="bi bi-pencil-square"></i></button>
                            </Link>
                            </td>
                            


                        </tr>
                    })}
                </table>
                </div>
                </div>
            </div>
        </>
    )
}
