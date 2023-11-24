import React, { useEffect, useState } from 'react'
import Apiservices from '../layout/Apiservices'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function ShowMaterialType() {
    const nav = useNavigate()
    const [isBtn, setIsBtn] = useState(false)
    const history = useNavigate();
    const functionname = ()=>{
        history('/admin/UpdateMaterialType')
    }
    const [data,setData] = useState([])
    const getData =()=>{
        Apiservices.ShowMaterialType(data)
        .then((res)=>{
            console.log(res.data.data);
            // toast.success(res.data?.message)
            setData(res.data.data)
        })
        .catch((err)=>{
            console.error(err);
            toast.error("Something went wrong!!")
        })
    }
    useEffect(
        ()=>{
            getData();
        },[]
    )
    const deleteData=(id)=>{
        setIsBtn(true)
        let data={
            _id:id
        }
        Apiservices.DeleteMaterialtype(data).then(
            (res)=>{
                toast.success(res.data.message)
                nav("/admin/showmaterialtype")
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
                <h1>All MaterialType</h1>
            </div>
    <div className=''>
        <div className='container my-4 mt-4'>
        <table className='table table-striped table-hover'>
            <thead>
            <tr className="table-dark">
                            <th scope="col">S. No.</th>
                            <th scope="col">MaterialType Name</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Edit</th>
                        </tr>
            </thead>
            {data?.map((e,index)=>{
                return <tr key={e._id}>
                    <td>{index + 1}</td>
                    <td>{ e?.materialtypeName}</td>
                    <td>
                                    <Link to={"/admin/deleteMaterialtype/" +e?._id}>
                                    <button className="btn btn-lg btn-outline-danger" onClick={()=>{deleteData(e?._id)}} ><i class="bi bi-trash-fill"></i></button>
                                    </Link>
                    </td>
                                
                                
                    <td>
                            <Link to={"/admin/UpdateMaterialtype/" + e?._id}>
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
