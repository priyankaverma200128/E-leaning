import React, { useState } from 'react'
import Apiservices from '../layout/Apiservices'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { RingLoader } from "react-spinners"

export default function ShowBranches() {
    const nav = useNavigate()
    const [load, setload] = useState(true)
    const obj = {
        position: "absolute",
        top: "300px",
        left: "50%",
        zIndex: 1,
    }
    const history = useNavigate();
    const functionname = () => {
        history('/admin/UpdateBranch')
    }
    const [data, setData] = useState([])
    const getData = () => {
        Apiservices.ShowBranches()
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
    const deleteData=(id)=>{
        setload(true)
        let data={
            _id:id
        }
        Apiservices.DeleteBranch(data).then(
            (res)=>{
                toast.success(res.data.message)
                nav("/admin/showbranches")
                setload(false)
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
                <h1>Show Branches</h1>
            </div>

            <div className="container my-4 mt-4">
            <div class="table-responsive">
                <table className="table table-striped table-hover table-bordered">
                    <thead>
                    <tr className="table-dark">
                            <th scope="col">S. No.</th>
                            <th scope="col">Course Name</th>
                            <th scope="col">Branch Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((e, index) => {
                            return <tr key={e._id}>
                                <td>{index + 1}</td>
                                <td>{e?.courseId?.courseName}</td>
                                <td>{e?.name}</td>
                                <td><img src={e?.signedUrl}
                                    style={{ height: "200px", width: "200px" }} alt={e?.name}
                                /></td>

                                <td>
                                <i className="btn btn-lg text-danger bi bi-trash-fill" style={{ fontWeight: 'bold',fontSize: "40px",alignItems:'start',justifyContent:'start' }} onClick={()=>{deleteData(e?._id)}} ></i>
                                </td>
                                
                                <td>

                                    <Link to={"/admin/UpdateBranch/"+e?._id+"/"+e?.courseId?._id}>
                                    <i  className="fa fa-edit text-success fa-2x" style={{'alignItems':'start','justifyContent':'start'}}></i>
                                    </Link>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
                </div>
                </div>

            </div>

        </>
    )
}
