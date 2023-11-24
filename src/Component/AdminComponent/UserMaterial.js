import axios from "axios";
import Apiservices from "../layout/Apiservices";
import { useState, useEffect } from "react";
import MaterialType from "../MaterialType";
import { Link } from "react-router-dom";


export default function UserMaterial() {

    const [courses, setCourses] = useState([]);
    const [courseId, setCourseId] = useState('');
    const [branch,setBranch] = useState([]);
    const [branchid,setBranchId] = useState([]);
    const [materialtype,setMaterialtype] = useState([]);
    const [title,setTitle] = useState([]);

    const allCourses = () => {
            Apiservices.ShowCourses()
            .then((res) => {
                console.log(res);
                setCourses(res.data.data);
            })
            .catch((error) => {
                console.error("Error fetching courses:", error);
            });
    }
    useEffect(
        ()=>{
            Apiservices.ShowBranches().then(
                (res)=>{
                    setBranch(res.data.data)
                }
            )
        },[] //empty dependency as category is not dependent on anything
    )
    
    const handleCourseId = (e) => {
        setCourseId(e.target.value);
    }
    const handleBrancheId =(e)=>{
        setBranchId(e.target.value);
    }
       useEffect(() => {
        allCourses();
      
    }, []); // Ensure this effect runs only once on component mount
    useEffect(
        ()=>{
            if(!!courses){  //to check if categoryId is present or not
                var data={
                    courseId:courses
                }
            }
            else{
                var data={
                }
            }
            // console.log(data)
            Apiservices.ShowBranches(data).then(
                (res)=>{
                    setBranch(res.data.data)
                }
            )
        },[courses] //as sub cat is dependent on category
    )
     useEffect(
        ()=>{
            if(!!branch){  //to check if categoryId is present or not
                var data={
                    branchId:branch
                }
            }
            else{
                var data={
                }
            }
            // console.log(data)
            Apiservices.ShowMaterialType(data).then(
                (res)=>{
                    setMaterialtype(res.data.data)
                }
            )
        },[branch] //as sub cat is dependent on category
    )

    const changeCourse=(e)=>{
        setCourses(e.target.value)
    }
    const functionname =()=>{

    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                    <div className="row">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-4">Select Course</h3>
                                                    <div className="col-md-6 mb-4">

                                                        <div className="form-outline">
                                                            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={handleCourseId}>
                                                                <option defaultValue="Category">Select Course</option>
                                                                {courses?.map((e, index) => {
                                                                    return <option value={e._id} key={index} >{e.courseName}</option>

                                                                })}
                                                            </select>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="col-md-6 md-4">
                                                <div className="form-outline">
                                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-4">Add Branches</h3>
                                                <select required className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" >
                                                                <option value="" selected disabled>Select Branches</option>
                                                                {branch?.map((e, index) => {
                                                                    return <option value={e?._id} key={index} >{e?.name}</option>

                                                                })}
                                                </select>
                                                </div>
                                                    </div>
                                                    <div className="col-md-6 md-4">
                                                <div className="form-outline">
                                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-4">MaterialType</h3>
                                                <select required className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" >
                                                                <option value="" selected disabled>Select MaterialType</option>
                                                                {materialtype?.map((e, index) => {
                                                                    return <option value={e?._id} key={index} >{e?.materialtypeName}</option>

                                                                })}
                                                </select>
                                                </div>
                                                    </div>
                                                    <td>
                            <Link to ={"/admin/MaterialContent"}>
                                <button onClick={functionname}>Show Material</button>
                            </Link>
                        </td>

                        
                    </div>
                </div>
            </div>
        </>
    );
}
