// Result.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Result() {
  const location = useLocation();
  const { state } = location || {};
  const { quizId, marks, totalQuestions } = state || {};

  return (
    <div className="row g-4 justify-content-center">
      {/* <div className="text-center"style={{paddingTop:"50px"}}>
        <h1>Quiz Result</h1>
        <p>Quiz ID: {quizId}</p>
        <p>Total Marks: {marks}</p>
        <p>Total Questions: {totalQuestions}</p>
      </div> */}

      <div className="d-flex justify-content-center mt-4">
        <Link to={"/user/showresult"}>
          <button className="btn btn-success" style={{ width: "200px", minHeight: "80px", marginRight: "10px" }}>
            Check Your Result
          </button>
        </Link>
        <Link to={"/user/quizquestion/" + quizId}>
          <button className="btn btn-primary" style={{ width: "200px", minHeight: "80px", marginRight: "10px" }}>
            Try Again
          </button>
        </Link>
        <Link to={"/user/quiz"}>
          <button className="btn btn-success" style={{ width: "200px", minHeight: "80px" }}>
            Back To Quizzes
          </button>
        </Link>
      </div>
    </div>
  );
}
