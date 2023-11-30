import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Apiservices from "./layout/Apiservices";
import { toast } from "react-toastify";
import { RingLoader } from "react-spinners"

export default function Master() {
  const [load,setload]=useState(true)
  const obj = {
      position: "absolute",
      top: "30%",
      left: "50%",
      zIndex: 1,
  }
  const [materialtype, setMaterialtype] = useState([]);
  const [materialid, setMaterialid] = useState('');
  // const [branchid, setBranchid] = useState('');
  const params = useParams();
  const [selectedmaterialtypename, setselectedmaterialtypename] = useState();

  const branchid = params.id;
  const [data, setData] = useState([]);

  const getData = () => {
    const data={
    branchid:branchid
    }
    Apiservices.ShowUserMaterial(data)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      
        
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong!!");
        
      });
  };

  const handlemtname = (e) => {
    setselectedmaterialtypename(e.target.value);
  };
  console.log(selectedmaterialtypename);

  const Materialid = (e) => {
    setMaterialid(e.target.value);
    
  };

  useEffect(() => {
    Apiservices.ShowMaterialType(data)
      .then((res) => {
        setMaterialtype(res.data.data);
        setload(false)
      })
      .catch((err) => {
        toast.error("Something went wrong!!");
        setload(false)
      });
  }, []);

  useEffect(() => {
    getData();
  }, [selectedmaterialtypename]);
  const token = sessionStorage.getItem("token")
  if(!token|| token=="null"|| token==null){
      return <Navigate to = "/login"/>
    }
  return (
    <>
    { load == true && <RingLoader size={100} loading={load} cssOverride={obj} />}
            <div className={load == true ? "disable-screen " : " "}>
      <div className="col-md-6 md-4">
        <div
          className="form-outline"
          style={{ paddingLeft: "200px", justifyContent: "center" }}
        >
          <h3
            className="mb-4 pb-2 pb-md-0 mb-md-4"
            style={{ paddingLeft: "20px" }}
          >
            Select MaterialType
          </h3>
          <select
            required
            className="form-select form-select-lg mb-3"
            value={selectedmaterialtypename}
            onChange={handlemtname}
            aria-label=".form-select-lg example"
            style={{ width: "200px" }}
          >
            <option value="" selected disabled>
              Select materialtype
            </option>
            {materialtype?.map((e, index) => (
              <option value={e?.materialtypeName} key={index}>
                {e?.materialtypeName}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container-fluid">
          <div
            className="text-center wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h6 className="section-title bg-white text-center text-primary px-3">
              Material
            </h6>
            <h1 className="mb-5">All Materials</h1>
          </div>
          <div className="row g-4 justify-content-center">
            {data?.map((e, index) => (
              selectedmaterialtypename &&
              selectedmaterialtypename === e?.materialtypeid?.materialtypeName ? (
                <div
                  key={index}
                  className="col-lg-4 wow fadeInUp my-4 "
                  data-wow-delay="0.1s"
                >
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">{e?.title}</h5>
                    </div>
                    <div className="card-body">
                      <div className="position-relative overflow-hidden">
                        {selectedmaterialtypename === 'pdf' ? (
                          <a
                            href={e?.signedUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View PDF
                          </a>
                        ) : selectedmaterialtypename === 'notes' ? (
                          <a
                            href={e?.signedUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Text
                          </a>
                        ) : selectedmaterialtypename === 'video' ? (
                         
                            <a
                              href={e?.signedUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              >
                                 View Video
                              </a>
                        ) : selectedmaterialtypename === 'Image' ? (
                          <img
                            src={e?.signedUrl}
                            alt="Material"
                            style={{ height: '200px', width: '200px' }}
                          />
                        ) : (
                          ''
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : null
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}