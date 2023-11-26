import React, { useState, useEffect } from 'react';
import Apiservices from './layout/Apiservices';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function AddUserMaterial() {
  const [material, setMaterial] = useState('');
  const [courseId, setCourseId] = useState('');
  const [branchId, setBranchId] = useState('');
  const [materialtypeid, setMaterialtypeId] = useState('');
  const [coursesdata, setCoursesdata] = useState([]);
  const [branch, setBranch] = useState([]);
  const [materialtype, setMaterialtype] = useState([]);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [selectedMaterialType, setSelectedMaterialType] = useState('');


  console.log(selectedMaterialType)
  const changeImage = (e) => {
    console.log(e.target.files[0])
    setImage(e.target.files[0])

  }
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
  const nav = useNavigate()
  const handleCourseId = (e) => {
    setCourseId(e.target.value);
  }
  const handleBranchId = (e) => {
    setBranchId(e.target.value)
  }
  const handleMaterialtypeId = (e) => {
    setMaterialtypeId(e.target.value)
    const selectedMaterial = materialtype.find((mt) => mt._id === e.target.value);
    setSelectedMaterialType(selectedMaterial?.materialtypeName);
  }


  const formSubmit = (e) => {
    e.preventDefault();
    let data = new FormData()
    
    // const data = { material }; // Define the data object here
    data.append("name", name)
    data.append("courseid", courseId)
    data.append("branchid", branchId)
    data.append("materialtypeid", materialtypeid)
    data.append("title", title)
    data.append("description", description)
    data.append("attachment", image)

    Apiservices.AddMaterial(data)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
          // nav("/admin/showmaterial")
        } else {
          toast.error(res.data.message);
        }
        // setMaterial(''); // Clear the input field after submission
      })
      .catch((err) => {
        toast.error('Something went wrong!!');
      });
  }

  return (
    <>
      <div className="my-4 mt-4" style={{ backgroundColor: "#0a0f18", color: "white", height: "80px", paddingTop: "10px" }}>
        <h1>Add Material</h1>
      </div>
      <div className='container'>
        <div className="row">
          <h3 className="mb-4 pb-2 pb-md-0 mb-md-4">Select Course</h3>
          <div className="col-md-6 mb-4">

            <div className="form-outline">
              <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" value={courseId} onChange={handleCourseId}>
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
            <select required className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={handleBranchId} >
              <option value="" selected disabled>Select Branches</option>
              {branch?.map((e, index) => {
                return <option value={e?._id} key={index} >{e?.name}</option>

              })}
            </select>
          </div>
        </div>
        <div className="col-md-6 md-4">
          <div className="form-outline">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-4">Select MaterialType</h3>
            <select required className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={handleMaterialtypeId} >
              <option value="" selected disabled>Select materialtype</option>
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
          <label>Upload File</label>
          <input
            type="file"
            onChange={changeImage}
            accept={
              selectedMaterialType === "pdf"
                ? ".pdf"
                : selectedMaterialType === "image"
                  ? "image/*"
                  : selectedMaterialType === "video"
                    ? "video/*"
                    : ""
            }
          />
          <br />

          <td>

            <button className='btn btn-primary btn-lg my-4' >Added</button>

          </td>
        </form>
      </div>
    </>
  );
}
