import { Link } from 'react-router-dom';
import ApiServices, { BASE_URL,styleObj } from '../services/ApiServices';
import { useEffect, useState } from 'react';
import {toast} from "react-toastify"
import {HashLoader} from "react-spinners"
export default function Designation(){
  const [data,setData]=useState([])
  const [load,setLoad]=useState(true)
  useEffect(()=>{
      ApiServices.allDestination().then((res)=>{
          setData(res.data.data)
          setTimeout(()=>{setLoad(false)},1000)
      }).catch((err)=>{
          toast.error("Something went Wrong.Try again later!")
      })
  },[load])
    return(
        <>
  <div className="container-fluid bg-primary py-5 mb-5 hero-header">
    <div className="container py-5">
      <div className="row justify-content-center py-5">
        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-3 text-white animated slideInDown">
            Destination
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Destination
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* Navbar & Hero End */}
  {/* Destination Start */}
  <HashLoader loading={load} cssOverride={styleObj} size={50} color={"green"}/>
  <div className={load?"d-none":""}>
    <div className="container-xxl py-5 destination">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Destination
          </h6>
          <h1 className="mb-5">Popular Destination</h1>
        </div>
        <div className="row g-3">
          {data.map((el,index)=>(
            <div className="col-lg-6 offset-md-3 col-md-6">
              <div className="row g-3">
                <div
                  className="col-lg-12 col-md-12 wow zoomIn"
                  data-wow-delay="0.1s"
                >
                  <Link to={`/userhotel/${el._id}`} className=" text-capitalize position-relative d-block overflow-hidden" href="">
                    <img className="img-fluid w-100" src={BASE_URL+el.image} alt="" style={{height:"300px"}} />
                    <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                    {el.address}
                    </div>
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                      {el.name}
                    </div>
                  
                  </Link>
                </div>
            
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  {/* Destination Start */}
</>

    )
}