import React, { useEffect, useState } from 'react'
import Apiservices from "../layout/Apiservices"
import { toast } from "react-toastify"
import { useNavigate, useParams } from 'react-router-dom';
import { RingLoader } from "react-spinners"



export default function AddBranch() {
    const [courseId,setCourseId] = useState();
    const [coursesdata,setCoursesdata] = useState([]);
    
    const [name, setName] = useState('');
  const [image, setImage] = useState('');
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

    
    useEffect(
        ()=>{
            Apiservices.ShowCourses()
            .then((res)=>{
                console.log(res.data.data);
                setCoursesdata(res.data.data);
            })
            .catch((error)=>{
                console.log("Error fetching courses:", error);
            })
        },[]
    )
    const nav = useNavigate()
    const handleCourseId =(e)=>{
        setCourseId(e.target.value);
    }
    const formSubmit = (e)=>{
      setLoad(true)
        e.preventDefault();
        let data = new FormData()
        data.append("name", name)
        data.append("courseId",courseId)

        if (!!image) {
            data.append("attachment", image)
          }
          Apiservices.AddBranch(data)
            .then((res) => {
              setLoad(false)
              toast.success(res.data.message)
              // nav("/admin/Showbranches")
            })
            .catch((err) => {
              setLoad(false)
              toast.error(err.message)
            })
        };
      

    
  return (
    <>
    <RingLoader size={100} loading={load} cssOverride={obj} /> 
       <div className={load == true ? "disable-screen " : " "}>
    {/* Heading starts here */}
    <div className="my-4 mt-4" style={{ backgroundColor: "#0a0f18", color: "white", height: "80px", paddingTop: "10px" }}>
        <h1>Add Branch</h1>
      </div>
    <div className='container'>
        <div className="row">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-4">Select Course</h3>
              <div className="col-md-6 mb-4">

                <div className="form-outline">
                  <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={handleCourseId}>
                    <option defaultValue="Category">Select Course</option>
                    {coursesdata?.map((e, index) => {
                      return <option value={e._id} key={index} >{e.courseName}</option>

                    })}
                  </select>
                </div>

              </div>
            </div>
            <form onSubmit={formSubmit}>
          Name :{' '}
          <input
            type='text'
            className='form-control form-control-lg'
            placeholder='Enter branch name'
            style={{width:"300px"}}
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            required
          />
          <br />
          <label>Image</label>
              <input type="file" onChange={changeImage} required/>
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
