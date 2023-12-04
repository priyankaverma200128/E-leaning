import React, { useState, useEffect } from 'react';
import Apiservices from '../layout/Apiservices';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { RingLoader } from "react-spinners"

export default function UpdateMaterial() {

  //All useStates are intialized here
  const [ SingleMaterial,setSinglematerial] = useState('');
  const [coursesdata, setCoursesdata] = useState([]);
  const [branch, setBranch] = useState([]);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [ materialtype, setMaterialtype] = useState([])
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [previousImage,setPreviousImage]=useState("")
  const [branchname,setbranchname]= useState('')
  const [coursename, setcoursename] = useState('');
  const [materialtypeName,setmaterialtypeName] = useState('');
  const [SingleBranchName,setSingleBranchName] = useState('')
  const [courseId, setCourseId] = useState('');
  const [branchId, setBranchId] = useState('');
  const [materialtypeid, setMaterialtypeId] = useState('');
  const [load, setLoad] = useState(false)
  const obj = {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 1,
  }
  
  const nav = useNavigate()


  //Ids are getting from the url
  const params = useParams();
  const materialId = params.MaterialId
  


  const changeImage = (e) => {
    // console.log(e.target.files[0])
    setImage(e.target.files[0])

  }

 
 
  //Submitting the updated details from the form
  const formSubmit = (e) => {
    setLoad(true)
    e.preventDefault();
    let data = new FormData()
    // const data = { material }; // Define the data object here
    // data.append("name", SingleBranchName)
    data.append("courseid", courseId)
    data.append("branchid", branchId)
    data.append("materialtypeid",materialtypeid)
    data.append("title", title)
    data.append("description", description)
    data.append("attachment", image)
    data.append("_id", materialId)
    
    Apiservices.UpdateMaterial(data)
      .then((res) => {
        if (res.data.success) {
          setLoad(true)
          toast.success(res.data.message);
          nav("/admin/showmaterial")
        } else {
          setLoad(false)
          toast.error(res.data.message);
        }
        // setMaterial(''); // Clear the input field after submission
      })
      .catch((err) => {
        toast.error('Something went wrong!!');
      });
  }

  //Getting material details and setting it
  useEffect(
    ()=>{
      const data={
        _id:materialId
      }
      Apiservices.SingleMaterial(data)
      .then((res)=>{
        // console.log(res)
        setSinglematerial(res.data.data.name)
        setPreviousImage(res.data.data.image)
        setTitle(res.data.data.title)
        setDescription(res.data.data.description)
        setBranchId(res.data.data.branchid)
        setCourseId(res.data.data.courseid)
        setMaterialtypeId(res.data.data.materialtypeid)
      })
      .catch((err)=>{
        toast.error(err.message)
      })
    },[]
  )
  useEffect(
    () => {
      Apiservices.ShowCourses()
        .then((res) => {
          console.log(res.data.data);
          setCoursesdata(res.data.data);
        })
        .catch((error) => {
          console.log("Error fetching courses:", error);
        })
    }, []
  )
  useEffect(
    () => {
      const data = {
        courseId: courseId
      }
      Apiservices.ShowBranches(data)
        .then((res) => {
          console.log(res.data.data);
          // toast.success(res.data?.message)
          setBranch(res.data.data);
        })
        .catch((error) => {
          console.log("Error fetching courses:", error);
        })
    }, [courseId]
  )
  useEffect(
    () => {
      const data = {
        branchId: branchId
      }
      Apiservices.ShowMaterialType(data)
        .then((res) => {
          console.log(res.data.data);
          // toast.success(res.data?.message)
          setMaterialtype(res.data.data);
        })
    }, []
  )
  //Getting material type name and setting it
  useEffect(
    ()=>{
      const data ={
        _id:materialtypeid
      }
      Apiservices.SingleMaterialtype(data).then(
        (res)=>{
          // console.log(res.data?.data?.materialtypeName ) 
          setmaterialtypeName(res.data?.data?.materialtypeName)
        }
      )
    },[]
  )

  //getting branch name and setting it
  // useEffect(
  //   () => {
  //     const data = {
  //       courseId: courseId
  //     }
  //     Apiservices.ShowBranches(data)
  //       .then((res) => {
  //         console.log(res.data.data);
  //         // toast.success(res.data?.message)
  //         setBranch(res.data.data);
  //       })
  //       .catch((error) => {
  //         console.log("Error fetching courses:", error);
  //       })
  //   }, [courseId]
  // )
  //getting coursename and setting it
  useEffect(
    ()=>{
      const data ={
        _id:courseId
      }
      Apiservices.SingleCourse(data).then(
        (res)=>{
          console.log(res.data.data)
          setcoursename(res.data?.data?.courseName)
        }
      )
    },[]
  )

  return (
    <>
    <RingLoader size={100} loading={load} cssOverride={obj} /> 
       <div className={load == true ? "disable-screen " : " "}>
      <div className="my-4 mt-4" style={{ backgroundColor: "#0a0f18", color: "white", height: "80px", paddingTop: "10px" }}>
        <h1>Update Material</h1>
      </div>
      <div className='D'>
        <div className="row">
          <h3 className="mb-4 pb-2 pb-md-0 mb-md-4">Select Course</h3>
          <div className="col-md-6 mb-4">

            <div className="form-outline">
              <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" value={courseId} onChange={(e)=>{setCourseId(e.target.value)}} >
                <option defaultValue="Category">{coursename}</option>
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
              <select required className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" value={branchId} onChange={(e)=>{setBranchId(e.target.value)}}>
                <option value="" selected disabled>Select Branch</option>
                {branch?.map((e, index) => {
                return <option value={e?._id} key={index} >{e?.name}</option>

              })}
              </select>
            </div>
          </div>
        
        <div className="col-md-6 md-4">
          <div className="form-outline">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-4">Select MaterialType</h3>
            <select required className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"  value={materialtypeid} onChange={(e)=>{setMaterialtypeId(e.target.value)}}>
              <option value="" selected disabled>{materialtypeName}</option>
              {materialtype?.map((e, index) => {
                return <option value={e?._id}  key={index} >{e?.materialtypeName}</option>

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
            style={{ width: "300px" }}
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
          />
          <br />
          Description :{' '}
          <input
            type='text'
            className='form-control form-control-lg'
            placeholder='Enter description'
            style={{ width: "300px" }}
            value={description}
            onChange={(e) => { setDescription(e.target.value) }}
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
    </>
  );
}
