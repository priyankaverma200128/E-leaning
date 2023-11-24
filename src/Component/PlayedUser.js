import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link,Navigate } from 'react-router-dom';
import Apiservices from './layout/Apiservices';

export default function PlayedUser() {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState(null);

 

  const getData = () => {
         const storedUserData = sessionStorage.getItem('userData');
        let userData=JSON.parse(storedUserData);
        let requestData={
            userid:userData._id
        }

      Apiservices.ShowplayedUserQuiz(requestData)
        .then((res) => {
          console.log(res.data.data);
          toast.success(res.data?.message);
          setData(res.data.data);
        })
        .catch((err) => {
          console.error(err);
          toast.error('Something went wrong!!');
        });
    }
  

  useEffect(() => {
    getData();
  }, [userData]);
  const token = sessionStorage.getItem("token")
if(!token|| token=="null"|| token==null){
    return <Navigate to = "/login"/>
  }

  return (
    <>
      {/* Heading starts here */}
      <div className="my-4 mt-4" style={{ backgroundColor: '#0a0f18', color: 'white', height: '80px', paddingTop: '10px' }}>
        <h1>Played Quiz</h1>
      </div>
      <div className="container my-4 mt-4">
        <table className="table table-striped table-hover">
          <thead>
            <tr className="table-dark">
              <th scope="col">S. No.</th>
              <th scope="col">User Name</th>
              <th scope="col">Quiz</th>
              <th scope="col">Correct</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((e, index) => {
              return (
                <tr key={e._id}>
                  <td>{index + 1}</td>
                  <td>{e?.userid?.name}</td>
                  <td>{e?.quizid?.title}</td>
                  <td>{e?.correct}</td>
                  <td>{e?.total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
