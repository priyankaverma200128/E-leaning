import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import ApiServices from './Apiservices'; 
import { toast } from 'react-toastify';
import Apiservices from "../layout/Apiservices"
import { Link } from 'react-router-dom';
import Courses from '../Courses';
import { RingLoader } from "react-spinners"

export default function UpdateBranch() {
  const [coursesdata, setCoursesdata] = useState([]);
  const [coursename, setcoursename] = useState('');
  const [load, setLoad] = useState(false)
  const obj = {
    position: "absolute",
    top: "300px",
    left: "50%",
    zIndex: 1,
  }
  // const [SingleBranchName,setSingleBranchName] = useState('')
  const params = useParams();
  const branchId = params.branchId
  const courseId = params.courseId
  // console.log(courseId)
  const [name, setName] = useState('');
  
  const [image, setImage] = useState('');
  const [previousImage,setPreviousImage]=useState("")
  const changeImage = (e) => {
  
    // console.log(e.target.files[0])
    setImage(e.target.files[0])

  }
  useEffect(
    () => {
      Apiservices.ShowCourses()
        .then((res) => {
          // console.log(res.data.data);
          setCoursesdata(res.data.data);
        })
        .catch((error) => {
          console.log("Error fetching courses:", error);
        })
    }, []
  )
  const nav = useNavigate()


  const formSubmit = async (e) => {
    setLoad(true)
    e.preventDefault();
    // console.log(coursename);
    let data = new FormData()
    data.append("_id", branchId)
    data.append("name", name)
    data.append("courseId",courseId)
    console.log("FormData:", data);
    if (!!image) {
      data.append("attachment", image)
    }
    Apiservices.UpdateBranch(data)
      .then((res) => {
        setLoad(true)
        toast.success(res.data.message)
        nav("/admin/Showbranches")
      })
      .catch((err) => {
        setLoad(false)
        toast.error(err.message)
      })
  };
  useEffect(
    ()=>{
      const data ={
        _id:courseId
      }
      Apiservices.SingleCourse(data).then(
        (res)=>{
          // console.log(res.data.data)
          setcoursename(res.data?.data?.courseName)
        }
      )
    },[]
  )
  useEffect(
    ()=>{
      const data={
        _id:branchId
      }
      Apiservices.SingleBranch(data)
      .then((res)=>{
        console.log(res.data.data)
        setName(res.data.data.name)
        setPreviousImage(res.data.data.image)
        
      })
      .catch((err)=>{
        toast.error(err.message)
      })
    },[]
  )


  return (
    <>
    <RingLoader size={100} loading={load} cssOverride={obj} /> 
       <div className={load == true ? "disable-screen " : " "}>
      {/* Heading starts here */}
      <div className="my-4 mt-4" style={{ backgroundColor: "#0a0f18", color: "white", height: "80px", paddingTop: "10px" }}>
        <h1>Update Branch</h1>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className="row">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-4">Select Course</h3>
              <div className="col-md-6 mb-4">

                <div className="form-outline">
                  <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option defaultValue="Category">{coursename}</option>
                    {coursesdata?.map((e, index) => {
                  return <option value={e._id} key={index} >{e.courseName}</option>

                })}
                  </select>
                </div>

              </div>
            </div>
           
            <form onSubmit={formSubmit}>
            Name :
          <input
            type='text'
            className='form-control form-control-lg'
            placeholder='Enter branch name'
            style={{width:"300px"}}
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
          />
          <br />
          <label>Image</label>
              <input type="file" onChange={changeImage} />
          <br />
         
          <td>
             
              <button className='btn btn-primary btn-lg my-4' >Update</button>
             
            </td>
        </form>

            


          </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
