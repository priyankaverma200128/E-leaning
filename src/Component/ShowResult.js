import React from 'react';
import { useLocation } from 'react-router-dom';
import ResultCard from './ResultCard';

export default function Result() {
  const location = useLocation();
  const { state } = location || {}; // Provide a default value for location

  // Check if state is defined and questionsWithAnswers is defined, otherwise default to an empty array
  const { quizId, marks, totalQuestions, questionsWithAnswers = [] } = state || {};

  return (
    <div className='my-5 '>
      <h1>Quiz Results</h1>
      <p>Quiz ID: {quizId}</p>
      <p>Total Marks: {marks}</p>
      <p>Total Questions: {totalQuestions}</p>
      <p>Answer: {questionsWithAnswers}</p>

      <div className="row g-4 justify-content-center">
        {/* Check if questionsWithAnswers is an array before mapping over it */}
        {Array.isArray(questionsWithAnswers) &&
          questionsWithAnswers.map((qa, index) => (
            <ResultCard
              key={index}
              index={index}
              question={qa.question}
              options={[qa.option1, qa.option2, qa.option3, qa.option4]}
              correctAnswer={qa.correctAnswer}
              selectedAnswer={qa.selectedAnswer}
            />
          ))}
      </div>
    </div>
  );
}
