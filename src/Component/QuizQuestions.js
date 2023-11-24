import React, { useEffect, useState } from 'react';
import Apiservices from './layout/Apiservices';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

export default function QuizQuestions() {
  const params = useParams();
  const quizId = params.id;
  const [data, setData] = useState([]);
  const [marks, setMarks] = useState(0);
  const [correctAns,setCorrectAns]=useState(0)
 const [reset, setResetPage]=useState(false)
 const [form,setForm]=useState(false)
 const [result,setResult]=useState(false)
 const [quiz,setQuiz]=useState()
 let arr_of_ques=[]
const nav=useNavigate()
  const getData = () => {
    const requestData = {
      quizid: quizId,
    };
    Apiservices.ShowUserQuizQuestion(requestData)
      .then((res) => {
        // console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.error(err);
        toast.error('Something went wrong!!');
      });
  };
  useEffect(()=>{
    let data_id={
      _id:quizId
  }
  Apiservices.SingleQuiz(data_id).then(
      (data)=>{
          if(data.data.success){
              setQuiz(data.data.data)
              console.log(data.data.data.numberofQuestion)
          }
          else{
              toast.error(data.data.message)
          }
      }
  )
  },[])


//   useEffect(()=>{
//     nav("/play_quiz/"+ quizId)
//     for(let i=0;i<document.getElementsByTagName('input').length;i++){
//         document.getElementsByTagName('input')[i].disabled=false
//     }
//     setResetPage(false)
// },[reset])
  const checkAnswer=(opt, ans,id, name)=>{
    // console.log(opt, ans, "name is ", name)
    if(arr_of_ques.includes(id)){
       setCorrectAns(correctAns-1)
    //    console.log(correctAns ,'dec')
    }
    else{
        arr_of_ques.push(id)
        console.log(arr_of_ques)
    }
    if(opt==ans){
        // console.log("Answer correct")
        setCorrectAns(correctAns+1)
        // console.log(correctAns)
    }
    for(let i=0;i<=3;i++){
        // if(document.getElementsByName(name)[i].value!=opt){
            document.getElementsByName(name)[i].disabled=true
        // }
    }
 }
 const resetPage=()=>{
  setCorrectAns(0)
  setResetPage(true)
  setResult(false)
  setForm(false)
}
const formSubmitted=()=>{
       
  setForm(true)
}
const showResult=()=>{
  setResult(true)
}



  useEffect(() => {
    getData();
  }, []);
  const handleForm=(e)=>{
    e.preventDefault()
    let userData=JSON.parse(sessionStorage.getItem("userData"))
    let data={
        total:quiz.numberofQuestion,
        userid:userData?._id,
        quizid:quizId,
        correct:correctAns
    }
    console.log(data)
    Apiservices.submitQuiz(data).then((data)=>{
        if(data.data.success){
            toast.success(data.data.message);
            formSubmitted()
        }
        else{
            toast.error(data.data.message)
        }
    }).catch((error)=>{
        toast.error("Something went Wrong!!")
    })
}
  return (
    <>
      <div className="row g-4 justify-content-center">
      {data!=""?
        <form onSubmit={handleForm}>
        {data?.map((el, index) => (
          <div key={index} className="col-lg-12 wow fadeInUp my-4 " data-wow-delay="0.1s">
            <div className="card course-item bg-light text-center"style={{paddingRight:'100px'}}>
              <div className="card-header">
                <div className="card-title" style={{ paddingLeft: '20px' }}>
                  {index + 1}. {el?.questiontitle}
                </div>
              </div>
              <div className="card-body">
                <input
                  type="radio"
                  name={el._id}
                  value={1}
                  onBlur={(e)=>{checkAnswer(e.target.value, el?.answer,el?._id, e.target.name)}}
                />
                <label style={{ paddingLeft: '20px' }}>{el?.option1}</label>
                <br />

                <input
                  type="radio"
                  name={el._id}
                  value={2}
                  onBlur={(e)=>{checkAnswer(e.target.value, el?.answer,el?._id, e.target.name)}}
                />
                <label style={{ paddingLeft: '20px' }}>{el?.option2}</label>
                <br />

                <input
                  type="radio"
                  name={el._id}
                  value={3}
                  onBlur={(e)=>{checkAnswer(e.target.value, el?.answer,el?._id, e.target.name)}}
                />
                <label style={{ paddingLeft: '20px' }}>{el?.option3}</label>
                <br />

                <input
                  type="radio"
                  name={el._id}
                  value={4}
                  onBlur={(e)=>{checkAnswer(e.target.value, el?.answer,el?._id, e.target.name)}}
                />
                <label style={{ paddingLeft: '20px' }}>{el?.option4}</label>
                <br />
              {el.answer}
              </div>
            </div>
          </div>
          
        ))}
          <div className="d-flex justify-content-center">
            <button className="btn btn-danger w-25 me-3" onClick={resetPage} type="reset">Reset</button>
            <button className="btn btn-primary w-25" >Submit</button>
          </div>
      </form>
    
   
      
    :<h1>No Data Present</h1>}
      </div>
      <hr/>

      {form?
      <div className="d-flex justify-content-center">
      <button className="btn btn-success" onClick={showResult}>View Result</button>
      </div>:""}
      {result?
      <div className="d-flex justify-content-center my-3">
      <div className="card p-5">
          <h1>Total Questions: {quiz?.totalQuestions}</h1>
          <h1>Correct Answer: {correctAns}</h1>
      </div>
      </div>
      :""}
      </>

  );
}