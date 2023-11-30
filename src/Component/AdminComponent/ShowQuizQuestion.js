import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Apiservices from '../layout/Apiservices';
import { toast } from 'react-toastify';
import { RingLoader } from "react-spinners"

export default function ShowQuizQuestion() {
    const nav = useNavigate();
    const [isBtn, setIsBtn] = useState(false)
    const [load, setload] = useState(true)
    const obj = {
        position: "absolute",
        top: "30%",
        left: "50%",
        zIndex: 1,
    }

    const [ data, setData] = useState([])
    const [ quiz, setQuiz] = useState([])
    const [ quizId,setquizId] = useState([])
    const[title,settitle]=useState('')
    const getData = ()=>{
        Apiservices.ShowQuiz()
        .then((res)=>{
            console.log(res.data.data);
                toast.success(res.data?.message)
                setData(res.data.data)
                console.log(quizId)
                    
        })
        .catch((err)=>{
            // console.error(err);
                toast.error("Something went wrong!!");
        })
    }
    useEffect(
        ()=>{
            getData();
        },[]
    )
    useEffect(
        ()=>{
            if(quiz){
                var data={
                    quiz:quizId
                }
               
            }
            else{
                var data={}
            }
            Apiservices.ShowQuizQuestion()
            .then((res)=>{
                setData(res.data.data)
                setload(false)
            })
            .catch((err)=>{
                // console.error(err);
                toast.error("Something went wrong!!");
                setload(false)

            })
        },[quizId]
    )
    const deleteData = (id) => {
        setIsBtn(true)
        let data = {
            _id: id
        }
        Apiservices.DeleteQuizQuestion(data).then(
            (res) => {
                toast.success(res.data.message)
                nav("/admin/showquizquestion")
            }
        ).catch(
            (err) => {
                toast.error("Something went Wrong")
                setIsBtn(false)
            }
        )
    }
    
  return (
    <>
    { load == true && <RingLoader size={100} loading={load} cssOverride={obj} />}
            <div className={load == true ? "disable-screen " : " "}>
     {/* Heading starts here */}
     <div className="my-4 mt-4" style={{ backgroundColor: "#0a0f18", color: "white", height: "80px", paddingTop: "10px" }}>
                <h1>All QuizQuestion</h1>
    </div>
    <div className='container table-responsive my-4 mt-4'>
        <table className='table table-striped table-hover'>
            <thead>
            <tr className="table-dark">
                            <th scope="col">S. No.</th>
                            <th scope="col">Quiz Title</th>
                            <th scope="col">Question Title</th>
                            <th scope="col">Option1</th>
                            <th scope="col">Option2</th>
                            <th scope="col">Option3</th>
                            <th scope="col">Option4</th>
                            <th scope="col">Answers</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Edit</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((e,index)=>{
                    return<tr key ={e._id}>
                        <td>{index + 1}</td>
                        <td>{e?.quizid?.title}</td>
                        <td>{e?.questiontitle}</td>
                        <td>{e?.option1}</td>
                        <td>{e?.option2}</td>
                        <td>{e?.option3}</td>
                        <td>{e?.option4}</td>
                        <td>{e?.answer}</td>
                        <td>
                                    <Link to={"/admin/deletequizquestion/"+e?._id}>
                                        <button className="btn btn-lg btn-outline-danger" onClick={() => deleteData(e?._id) } ><i className="bi bi-trash-fill"></i></button>
                                    </Link>
                                </td>

                        <td>
                                    <Link to={"/admin/Updatequizquestion/"+e?._id}>
                                        <button className="btn btn-lg  btn-outline-success"><i className="bi bi-pencil-square"></i></button>
                                    </Link>
                                </td>
                    </tr>
                })}
            </tbody>
        </table>
        </div>
    </div>

    
    </>
)
}