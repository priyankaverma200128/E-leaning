import React, { useEffect, useState } from 'react'
import Apiservices from '../layout/Apiservices'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { RingLoader } from "react-spinners"

export default function ShowMaterial() {
    const nav = useNavigate()
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

            Apiservices.ShowMaterial()
                .then((res) => {
                    setTimeout(() => {
                        console.log(res.data.data);
                        // toast.success(res.data?.message)
                        setData(res.data.data)
                        setload(false)

                    }, 1500);
                })
                .catch((err) => {
                    console.error(err);
                    setload(false)
                    toast.error("Something went wrong!!")
                })

        }, [load]
    )
    const deleteData = (id) => {
        setload(true)
        let data = {
            _id: id
        }
        Apiservices.DeleteMaterial(data).then(
            (res) => {
                setTimeout(() => {
                    toast.success(res.data.message)
                    nav("/admin/showmaterial")
                    setload(false)
                }, 1500);
            }
        ).catch(
            (err) => {
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
                    <h1>All Materials</h1>
                </div>

                <div className='container my-4 mt-4'>

                    <table className='table table-striped table-hover'>
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">S. No.</th>
                                <th scope="col">Course Name</th>
                                <th scope='col'>Branch Name</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope='col'>Image</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Edit</th>
                            </tr>
                        </thead>
                        {data?.map((e, index) => {
                            return <tr key={e._id}>
                                <td>{index + 1}</td>
                                <td>{e?.courseid?.courseName}</td>
                                <td>{e?.branchid?.name}</td>
                                <td>{e?.title}</td>
                                <td>{e?.description}</td>
                                <td>
                                    <Link to={e?.signedUrl} target='_blank' style={{ width: "200px", height: "200px" }} >
                                        View
                                    </Link>
                                </td>


                                <td>

                                <button className="btn btn-lg btn-outline-danger" onClick={()=>{deleteData(e?._id)}} ><i className="bi bi-trash-fill"></i></button>
                                    

                                </td>

                                <td>
                                    <Link to={"/admin/UpdateMaterial/" + e?._id + "/" + e?.courseid?._id + "/" + e?.branchid?._id + "/" + e?.materialtypeid?._id}>
                                        <button className="btn btn-lg  btn-outline-success " ><i className="bi bi-pencil-square"></i></button>
                                    </Link>
                                </td>



                            </tr>
                        })}
                    </table>
                </div>
            </div>
        </>
    )
}
