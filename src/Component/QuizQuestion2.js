import React, { useEffect, useId, useState } from 'react';
import Apiservices from './layout/Apiservices';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { RingLoader } from "react-spinners"

export default function QuizQuestion2()  {
  const [load,setload]=useState(true)
  const obj = {
      position: "absolute",
      top: "30%",
      left: "50%",
      zIndex: 1,
  }
  const location = useLocation();
  const { state } = location || {};
  const [totalQuestions,setTotalQuestions]=useState(0)
  const [quiz,setquiz] = useState('')
  const [userid,setUserid] = useState('')
  const params = useParams();
  const quizId = params.id;
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [marks, setMarks] = useState(0);
  const [isResultClick,setIsResultClick]=useState(false)

  const getData = () => {
    const requestData = {
      quizid: quizId,
    }
    const quizData = {
      _id: quizId,
    }
    
        Apiservices.SingleQuiz(quizData).then(
          (res)=>{
            console.log(res.data.data)
            setquiz(res.data?.data)
          }
        )
     
    
    Apiservices.ShowUserQuizQuestion(requestData)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
        setload(false)
      })
      .catch((err) => {
        console.error(err);
        toast.error('Something went wrong!!');
        setload(false)
      });
  };
 
 
  const checkAnswer = (selectedoption, id) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: selectedoption,
    }));
  };

  const getResult = () =>{ 
    const totalQuestions = data.length;
    setTotalQuestions(totalQuestions)
    let totalMarks = 0;

    data.forEach((question) => {
      const questionId = question._id;
      const selectedAnswer = selectedAnswers[questionId];
      console.log(selectedAnswer)
      console.log(question)
      if (selectedAnswer === question.answer) {
        totalMarks += 1;
      }
    });

    setMarks(totalMarks);
    setIsResultClick(true)
    const storedUserData = sessionStorage.getItem('userData');
    let userData=JSON.parse(storedUserData);
    const data1={
      userid:userData._id,
      quizid:quizId,
      correct:totalMarks,
      total:totalQuestions,
      
    }
    Apiservices.AddplayedUserQuiz(data1)
      .then((res)=>{
        toast.success("Data added")
    })

    
  } 
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='container' >
      { load == true && <RingLoader size={100} loading={load} cssOverride={obj} />}
            <div className={load == true ? "disable-screen " : " "}>
      <div className="row g-4 justify-content-center "style={{paddingTop:"50px"}}>
        {data?.map((e, index) => (
          <div key={index} className="col-lg-12 wow fadeInUp my-4 " data-wow-delay="0.1s" style={{paddingLeft:"50px", paddingRight:"50px"}} >
            <div className="card course-item bg-light " >
              <div className="card-header">
                <div className="card-title" style={{ paddingLeft: '20px' }}>
                  {index + 1}. {e?.questiontitle}
                </div>
              </div>
              <div className="card-body">
                <input
                  type="radio"
                  name={`question_${index}`}
                  value={e._id}
                  onChange={() => checkAnswer('1', e._id)}
                />
                <label style={{ paddingLeft: '20px' }}>{e?.option1}</label>
                <br />

                <input
                  type="radio"
                  name={`question_${index}`}
                  value={e._id}
                  onChange={() => checkAnswer('2', e._id)}
                />
                <label style={{ paddingLeft: '20px' }}>{e?.option2}</label>
                <br />

                <input
                  type="radio"
                  name={`question_${index}`}
                  value={e._id}
                  onChange={() => checkAnswer('3', e._id)}
                />
                <label style={{ paddingLeft: '20px' }}>{e?.option3}</label>
                <br />

                <input
                  type="radio"
                  name={`question_${index}`}
                  value={e._id}
                  onChange={() => checkAnswer('4', e._id)}
                />
                <label style={{ paddingLeft: '20px' }}>{e?.option4}</label>
                <br />
                {/* {e.answer} */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button onClick={getResult}>Get Result</button>
      </div>
      {!!isResultClick  ?
      <>
      <div className="text-center"style={{paddingTop:"50px"}}>
        <h1>Quiz Result</h1>
        <p>Quiz ID: {quiz?.title}</p>
        <p>Total Marks: {marks}</p>
        <p>Total Questions: {totalQuestions}</p>
      </div>
      <div className="d-flex justify-content-center mt-4">
        {/* <Link to={"/user/showresult"}>
          <button className="btn btn-success" style={{ width: "200px", minHeight: "80px", marginRight: "10px" }}>
            Check Your Result
          </button>
        </Link> */}
        
          <button className="btn btn-primary" style={{ width: "200px", minHeight: "80px", marginRight: "10px" }} onClick={()=>{window.location.reload()}}>
            Try Again
          </button>
     
        <Link to={"/user/quiz"}>
          <button className="btn btn-success" style={{ width: "200px", minHeight: "80px" }}>
            Back To Quizzes
          </button>
        </Link>
      </div>
      </>
      :""
      }
      </div>
    </div>

          
  );
};


