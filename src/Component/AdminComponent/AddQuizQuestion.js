import { type } from '@testing-library/user-event/dist/type'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Apiservices from '../layout/Apiservices';
import { toast } from 'react-toastify';

export default function AddQuizQuestion() {
  // const [ quizid,setquizid] = useState([])
  const [ quiz, setQuiz] = useState('');
  const [quizId, setquizId] = useState('');
  const [quizdata, setquizdata] = useState([]);
  const [questiontitle, setQuestiontitle] = useState()
  const [ option1,setOption1] = useState([])
  const [title,setTitle] = useState('')
  const [ option2,setOption2] = useState([])
  const [ option3,setOption3] = useState([])
  const [ option4,setOption4] = useState([])
  const [ answer,setAnswer] = useState([])
  const handleQuizId =(e =>{
    setquizId(e.target.value)
  })
  
  const params = useParams();
  const quizid = params.quizid;
  // const data = {quizQuestion};
  const history = useNavigate();
  useEffect(
    ()=>{
     Apiservices.ShowQuiz()
     .then((res)=>{
       setquizdata(res.data.data)
     })
     .catch((err)=>{
       toast.error(err.message)
     })
    },[]
   )
  const handleForm=(e)=>{
    e.preventDefault()
    let data={
    
    questiontitle:questiontitle,
    option1: option1,
    option2:option2,
    option3:option3,
    option4:option4,
    answer:answer,
    quizid:quizId,
    }
    Apiservices.AddQuizQuestion(data)
    .then(
        (res)=>{
            if(res.data.success){
            toast.success(res.data.message)
            }else{
                toast.error(res.data.message)
            }
           
            
        }
       
    ).catch(
        (err)=>{
          
            toast.error("Something went Wrong")
        }
    )

    }
useEffect(
    ()=>{
        Apiservices.ShowQuiz().then(
            (res)=>{
                console.log(res.data.data)
            }
        )
    },[]
)
  return (
   <>
    {/* Heading starts here */}
    <div className="my-4 mt-4" style={{ backgroundColor: "#0a0f18", color: "white", height: "80px", paddingTop: "10px" }}>
                <h1>Add QuizQuestion</h1>
    </div>
    <div className='container-fluid'>

    <div className="row justify-content-center align-items-center h-100">
    <div className="col-md-6 md-4">
          <div className="form-outline">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-4" style={{paddingLeft:"100px"}}>Select Quiz</h3>
            <select required className="form-select form-select-lg mb-3"  aria-label=".form-select-lg example"  onChange={handleQuizId} value={quizId} >
              <option value="" selected disabled >Select Quiz</option>
              {quizdata?.map((e, index) => {
                return (
                <option value={e?._id} key={index} >{e.title}</option>
                )

              })}
            </select>
          </div>
        </div>
    </div>
    </div>
    <div className='container'>
    
    QuestionTitle: <input type='name' className='form-control form-control-lg' placeholder='Enter a questiontitle'onChange={(e)=>{setQuestiontitle(e.target.value)}}/><br/>
    Option1: <input type='name' className='form-control form-control-lg' placeholder='Enter a option1' onChange={(e)=>{setOption1(e.target.value)}}/><br />
    Option2: <input type='name' className='form-control form-control-lg' placeholder='Enter a option2'onChange={(e)=>{setOption2(e.target.value)}}/><br />
    Option3: <input type='name' className='form-control form-control-lg' placeholder='Enter a option3'onChange={(e)=>{setOption3(e.target.value)}}/><br />
    Option4: <input type='name' className='form-control form-control-lg' placeholder='Enter a option4'onChange={(e)=>{setOption4(e.target.value)}}/><br />
    

<div className="row justify-content-center align-items-center h-100">
    <div className="col-md-6 md-4">
          <div className="form-outline">
            
            <select required className="form-select form-select-lg mb-3"  aria-label=".form-select-lg example"  onChange={(e)=>{setAnswer(e.target.value)}} value={answer} >
              <option value="" selected disabled >Show Answer</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
             
            </select>
          </div>
        </div>
    </div>
     
    <button className='btn btn-primary btn-lg' onClick={handleForm}>Submit</button>
    </div>
    
   
   </> 
  )
}
