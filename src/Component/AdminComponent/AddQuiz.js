import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import ApiServices from './Apiservices'; 
import { toast } from 'react-toastify';
import Apiservices from "../layout/Apiservices"
import { Link } from 'react-router-dom';
import Courses from '../Courses';

export default function AddQuiz() {
  const [coursesdata, setCoursesdata] = useState([]);
  const [courseId, setCourseId] = useState('');
  const [branchdata,setbranchdata] = useState([]);
  const [branchId,setbranchId] = useState([]);
  const [title, setTitle] = useState('');
  const [numberofQuestion,setnumberofQuestion] = useState('');
  const [name, setName] = useState('');
  
  useEffect(
    ()=>{
      Apiservices.ShowCourses()
    .then((res) => {
        // console.log(res.data.data);
        setCoursesdata(res.data.data);
    })
    .catch((error) => {
        console.error("Error fetching courses:", error);
    });
    },[]
  )
  useEffect(
    ()=>{
      const data ={
        courseId:courseId
      }
      Apiservices.ShowBranches(data).then(
        (res)=>{
          console.log(res.data.data)
          setbranchdata(res.data.data)
        }
      )
    },[courseId]
  )
  const nav = useNavigate()

  const handleCourseId = (e) => {
    setCourseId(e.target.value);
}

const handlebranchId = (e)=>{
    setbranchId(e.target.value)
}



  const formSubmit = async (e) => {
    e.preventDefault();
    // console.log(coursename);
    const data = {
    title: title,
    numberofQuestion:numberofQuestion,
    branchId: branchId,
    courseId:courseId

    }

    
    
   
    Apiservices.AddQuiz(data)
      .then((res) => {
        toast.success(res.data.message)
        // nav("/admin/Showquiz")
      })
      .catch((err) => {
        toast.error(err.message)
      })
  };

  return (
    <>
      {/* Heading starts here */}
      <div className="my-4 mt-4" style={{ backgroundColor: "#0a0f18", color: "white", height: "80px", paddingTop: "10px" }}>
        <h1>Add Quiz</h1>
      </div>
      

      <div className='container'>
        <div className='row'>
          <div className='col'>
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
            <div className="col-md-6 md-4">
              <div className="form-outline">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-4">Select Branches</h3>
                <select required onChange={handlebranchId} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" >
                  <option value="" selected disabled>Select Branches</option>
                  {branchdata?.map((e, index) => {
                    return <option value={e?._id} key={index} >{e?.name}</option>

                  })}
                </select>
              </div>
            </div>
            <form onSubmit={formSubmit}>
          Title :{' '}
          <input
            type='text'
            className='form-control form-control-lg'
            placeholder='Enter title name'
            style={{width:"300px"}}
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
          />
          <br />
          numberofQuestion :{' '}
          <input
            type='text'
            className='form-control form-control-lg'
            placeholder='Enter numberofquestion'
            style={{width:"300px"}}
            value={numberofQuestion}
            onChange={(e)=>{setnumberofQuestion(e.target.value)}}
          />
          <br />
          
         
          <td>
             
              <button className='btn btn-primary btn-lg my-4' >Added</button>
             
            </td>
        </form>

            


          </div>
        </div>
      </div>
    </>
  );
}
