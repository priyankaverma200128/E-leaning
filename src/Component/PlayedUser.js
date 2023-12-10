import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link,Navigate } from 'react-router-dom';
import Apiservices from './layout/Apiservices';
import { RingLoader } from "react-spinners"

export default function PlayedUser() {
  const [load,setload]=useState(true)
  const obj = {
      position: "absolute",
      top: "300px",
      left: "50%",
      zIndex: 1,
  }
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
          setload(false)
        })
        .catch((err) => {
          console.error(err);
          toast.error('Something went wrong!!');
          setload(false)
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
    { load == true && <RingLoader size={100} loading={load} cssOverride={obj} />}
            <div className={load == true ? "disable-screen " : " "}>
      {/* Heading starts here */}
      <div className="my-4 mt-4" style={{ backgroundColor: '#0a0f18', color: 'white', height: '80px', paddingTop: '10px' }}>
        <h1>Played Quiz</h1>
      </div>
      <div className="container my-4 mt-4">
      <div class="table-responsive">
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
      </div>
      </div>
    </>
  );
}
