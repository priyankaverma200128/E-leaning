import React, { useState } from 'react'
import Apiservices from "../layout/Apiservices"
import { toast } from "react-toastify"
import { useNavigate } from 'react-router-dom'
import { RingLoader } from "react-spinners"


export default function AddCourse() {
  const [name, setName] = useState()
  const [image, setImage] = useState()
  const [load, setLoad] = useState(false)
  const obj = {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 1,
  }
  const changeImage = (e) => {
    console.log(e.target.files[0])
    setImage(e.target.files[0])

  }
  const nav = useNavigate()
  const handleForm = (e) => {
    setLoad(true)
    e.preventDefault()
    let data = new FormData()
    data.append("courseName", name)


    if (!!image) {
      data.append("attachment", image)
    }
    Apiservices.AddCourses(data)
      .then((res) => {
        if(res){
          toast.success(res.data.message)
          setLoad(false)
        }
        else{
          
          toast.error(res.data.message)
        }
        // nav("/admin/Showcourses")
      })
      .catch((err) => {
        setLoad(false)
        toast.error(err.message)
      })


  }
  return (
    <>
      <RingLoader size={100} loading={load} cssOverride={obj} />
      <div className={load == true ? "disable-screen " : " "}>
        {/* Heading starts here */}
        <div className="my-4 mt-4" style={{ backgroundColor: "#0a0f18", color: "white", height: "80px", paddingTop: "10px" }}>
          <h1>Add Course</h1>
        </div>
        <div className='container my-5 p-5'>
          <form onSubmit={handleForm}>
            Name :{' '}
            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter course name'
              style={{ width: "300px" }}
              value={name}
              onChange={(e) => { setName(e.target.value) }}
              required
            />
            <br />
            <label>Image</label>
            <input type="file" onChange={changeImage}  required/>
            <br />

            <td>

              <button className='btn btn-primary btn-lg my-4' >Added</button>

            </td>
          </form>
        </div>
      </div>

    </>
  )
}
