import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import ApiServices from './Apiservices'; 
import { toast } from 'react-toastify';
import Apiservices from "../layout/Apiservices"
import { Link} from 'react-router-dom';
import { RingLoader } from "react-spinners"

export default function UpdateCourse() {  

  const [courseName, setCourseName] = useState('');
  const [image, setImage] = useState('');
  const [load, setLoad] = useState(false)
  const obj = {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 1,
  }
  const onChange= (e)=>{
    console.log(e.target.file[0])
    
}
  const changeImage=(e)=>{
    console.log(e.target.files[0])
    setImage(e.target.files[0])
    
}
const nav = useNavigate();
  const param = useParams();
  const courseId = param.courseId;
  console.log(courseId)
  


  const formSubmit = async (e) => {
    setLoad(true)
    e.preventDefault();
    // console.log(coursName);
    let data=new FormData()
    data.append("courseName", courseName)
    data.append("_id",courseId)
    data.append("attachment",image)
    
    Apiservices.UpdateCourses(data)
    .then((res)=>{
      setLoad(true)
      toast.success(res.data.message)
      nav("/admin/showcourses")
    })
    .catch((err)=>{
      setLoad(false)
      toast.error(err.message)
    })
  };
  useEffect(
    ()=>{
      const data={
        _id:courseId
      }
      Apiservices.SingleCourse(data)
      .then((res)=>{
        console.log(res);
        setCourseName(res.data?.data?.courseName)
      })
      .catch((err)=>{

      })
    },[]
  )

  return (
    <>
    <RingLoader size={100} loading={load} cssOverride={obj} /> 
       <div className={load == true ? "disable-screen " : " "}>
      {/* Heading starts here */}
      <div className="my-4 mt-4" style={{ backgroundColor: "#0a0f18", color: "white", height: "80px", paddingTop: "10px" }}>
                <h1>Update Course</h1>
            </div>

      <div className='col-md-8 clo-md-12 col-xl-4 offset-xl-1'>
        <form onSubmit={formSubmit}>
          CourseName:{' '}
          <input
            type='name'
            className='form-control form-control-lg'
            placeholder='Enter a valid course name'
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
          <br />
          <label>Image</label>
              <input type="file" onChange={changeImage} />
          <br />
          <button className='btn btn-primary btn-lg my-4 py-2' >Update</button>
        </form>
      </div>
      </div>
    </>
  );
}
