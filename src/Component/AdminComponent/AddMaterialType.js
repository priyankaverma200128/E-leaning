import React, { useState } from 'react'
import Apiservices from '../layout/Apiservices'
import { toast } from 'react-toastify'
// import MaterialType from '../MaterialType'

export default function AddMaterialType() {
    const [materialtypeName,setMaterialtypeName] = useState([])
    const onChange= (e)=>{
        console.log(e.target.file[0])
        
    }
    const handleForm=(e)=>{
        e.preventDefault()
        let data={
            "materialtypeName":materialtypeName,
        }
        Apiservices.AddMaterialType(data)
        .then(
            (res)=>{
                if(res.data.success){
                    toast.success(res.data.message)
                }else{
                    toast.error(res.data.message)
                }
            }
        )
        .catch((err)=>{
            toast.error("Something went wrong!!")
        })
    }
  return (
    <>
    <div className="my-4 mt-4" style={{ backgroundColor: "#0a0f18", color: "white", height: "80px", paddingTop: "10px" }}>
                <h1>Add MaterialType</h1>
            </div>
    <div className='container my-5 p-5'>
        <form onSubmit={handleForm}>
        MaterialType :{' '}
          <input
            type='text'
            className='form-control form-control-lg'
            placeholder='Enter materialtype name'
            style={{width:"300px"}}
            value={materialtypeName}
            onChange={(e)=>{setMaterialtypeName(e.target.value)}}
          />
          <br/>
          <td>
             
             <button className='btn btn-primary btn-lg my-4' >Added</button>
            
           </td>
        </form>
    </div>
    
    </>
  )
}
