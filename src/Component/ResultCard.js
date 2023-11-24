import React from 'react';

const ResultCard = ({ index, question, options, correctAnswer, selectedAnswer }) => {
    console.log(selectedAnswer)
return(
  <div key={index} className="col-lg-12 wow fadeInUp my-4 " data-wow-delay="0.1s">
    <div className="card course-item bg-light">
      <div className="card-header">
        <div className="card-title" style={{ paddingLeft: '20px' }}>
          {index + 1}. {question}
        </div>
      </div>
      <div className="card-body">
            <label>
              <input type="radio" value={selectedAnswer} disabled  />
              <span style={{ paddingLeft: '20px' }}>{options[0]}</span>
            </label>
            <br />
            <label>
              <input type="radio" value={selectedAnswer} disabled  />
              <span style={{ paddingLeft: '20px' }}>{options[1]}</span>
            </label>
            <br />
            <label>
              <input type="radio" value={selectedAnswer} disabled  />
              <span style={{ paddingLeft: '20px' }}>{options[2]}</span>
            </label>
            <br />
            <label>
              <input type="radio" value={selectedAnswer} disabled  />
              <span style={{ paddingLeft: '20px' }}>{options[3]}</span>
            </label>
            <br />

  
        <p>
          Correct Answer: {correctAnswer}
          <br />
          Your Answer: {selectedAnswer}
        </p>
      </div>
    </div>
  </div>
)
};

export default ResultCard;