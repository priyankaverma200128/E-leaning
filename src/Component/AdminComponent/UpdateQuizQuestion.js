import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Apiservices from '../layout/Apiservices';
import { toast } from 'react-toastify';

export default function UpdateQuizQuestion() {
  // const [ quizid,setquizid] = useState([])
  const [questiontitle, setQuestiontitle] = useState()
  const [ option1,setOption1] = useState([])
  const [title,setTitle] = useState('')
  const [ option2,setOption2] = useState([])
  const [ option3,setOption3] = useState([])
  const [ option4,setOption4] = useState([])
  const [ answer,setAnswer] = useState([])
  const [quizname, setquizname] = useState();
  
  
  
 
  const params = useParams();
  const _id = params._id
    // const quizid = params.quizid;
  // const data = {quizQuestion};
  const history = useNavigate();
  // useEffect(
  //   ()=>{
  //    Apiservices.ShowQuiz()
  //    .then((res)=>{
  //      setquizdata(res.data.data)
  //    })
  //    .catch((err)=>{
  //      toast.error(err.message)
  //    })
  //   },[]
  //  )
  const handleForm=(e)=>{
    e.preventDefault()
    let data={
    _id:_id,
    questiontitle:questiontitle,
    option1: option1,
    option2:option2,
    option3:option3,
    option4:option4,
    answer:answer
    }
    Apiservices.updatequizquestion(data)
    .then(
        (res)=>{
            if(res.data.success){
            toast.success(res.data.message)
            history('/admin/showquizquestion')
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
      const data = {
        _id:_id
      }
        Apiservices.singlequizquestion(data).then(
            (res)=>{
                console.log(res.data.data)
                setQuestiontitle(res.data.data?.questiontitle)
                setOption1(res.data?.data?.option1)
                setOption2(res.data?.data?.option2)
                setOption3(res.data?.data?.option3)
                setOption4(res.data?.data?.option4)
                setquizname(res.data.data?.quizid?.title)
                // setQuestiontitle()
            }
        )
    },[]
)
  return (
   <>
    {/* Heading starts here */}
    <div className="my-4 mt-4" style={{ backgroundColor: "#0a0f18", color: "white", height: "80px", paddingTop: "10px" }}>
                <h1>Update quiz question</h1>
    </div>

    <div className='container'>
    Title: <input type='name' className='form-control form-control-lg' placeholder='Enter a title'disabled value={quizname} onChange={(e)=>{setTitle(e.target.value)}}/><br/>
    QuestionTitle: <input type='name' className='form-control form-control-lg' placeholder='Enter a questiontitle' value={questiontitle} onChange={(e)=>{setQuestiontitle(e.target.value)}}/><br/>
    Option1: <input type='name' className='form-control form-control-lg' placeholder='Enter a option1' value={option1} onChange={(e)=>{setOption1(e.target.value)}}/><br />
    Option2: <input type='name' className='form-control form-control-lg' placeholder='Enter a option2' value={option2} onChange={(e)=>{setOption2(e.target.value)}}/><br />
    Option3: <input type='name' className='form-control form-control-lg' placeholder='Enter a option3' value={option3} onChange={(e)=>{setOption3(e.target.value)}}/><br />
    Option4: <input type='name' className='form-control form-control-lg' placeholder='Enter a option4' value={option4} onChange={(e)=>{setOption4(e.target.value)}}/><br />
    

<div className="row justify-content-center align-items-center h-100">
    <div className="col-md-6 md-4">
          <div className="form-outline">
            
            <select required className="form-select form-select-lg mb-3"  aria-label=".form-select-lg example" value={answer} onChange={(e)=>{setAnswer(e.target.value)}} >
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
