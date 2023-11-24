import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Apiservices from "../layout/Apiservices";
import { Link } from 'react-router-dom';

export default function UpdateQuiz() {
  const [coursesdata, setCoursesdata] = useState([]);
  const [title, setTitle] = useState('');
  const [numberofQuestion, setNumberofQuestion] = useState('');
  const [singleQuiz, setSingleQuiz] = useState('');
  const [name, setName] = useState('');
  const [coursename, setCoursename] = useState('');
  const [branchname, setBranchname] = useState('');

  const params = useParams();
  const courseId = params.courseId;
  const branchId = params.branchId;
  const quizId = params.quizId;

  useEffect(() => {
    const data = { _id: courseId };
    Apiservices.SingleCourse(data)
    .then((res) => {
      const courseData = res.data?.data;
      if (courseData) {
        setCoursename(courseData.courseName);
      } else {
        console.error("Course data is undefined");
      }
    });
  }, [courseId]);

  useEffect(() => {
    const data = { _id: branchId };
    Apiservices.SingleBranch(data).then((res) => {
      const branchData = res.data?.data;
      if (branchData) {
        setBranchname(branchData.name);
      } else {
        console.error("Branch data is undefined");
      }
    });
  }, [branchId]);

  useEffect(() => {
    const data = { _id: quizId };
    Apiservices.SingleQuiz(data)
      .then((res) => {
        const quizData = res.data?.data;
        if (quizData) {
          setSingleQuiz(quizData.name);
          setTitle(quizData.title);
          setNumberofQuestion(quizData.numberofQuestion);
        } else {
          console.error("Quiz data is undefined");
        }
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [quizId]);

  const nav = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault();
    const data = {
      _id:quizId,
      name: name,
      title: title,
      courseid: courseId,
      branchid: branchId,
      numberofQuestion: numberofQuestion,
    };

    Apiservices.updatequiz(data)
      .then((res) => {
        toast.success(res.data.message);
        nav("/admin/Showquiz");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <>
      <div className="my-4 mt-4" style={{ backgroundColor: "#0a0f18", color: "white", height: "80px", paddingTop: "10px" }}>
        <h1>Update Quiz</h1>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className="row">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-4">Select Course</h3>
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option defaultValue="Category">{coursename}</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-6 md-4">
              <div className="form-outline">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-4">Select Branches</h3>
                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option value="" selected disabled>{branchname}</option>
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
              Number of Questions :{' '}
              <input
                type='text'
                className='form-control form-control-lg'
                placeholder='Enter number of questions'
                style={{ width: "300px" }}
                value={numberofQuestion}
                onChange={(e) => { setNumberofQuestion(e.target.value) }}
              />
              <br />
              <button className='btn btn-primary btn-lg my-4'>Update</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
