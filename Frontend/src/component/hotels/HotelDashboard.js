import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import ApiServices from "../services/ApiServices";
import {toast} from "react-toastify"

export default function HotelDashboard(){
  const [data,setData]=useState({})
  useEffect(()=>{
    let data={
        hotelId:sessionStorage.getItem("hotelId"),
        userId:sessionStorage.getItem("userId")
    }
      ApiServices.hotelDashboard(data).then((res)=>{
          setData(res.data)
          console.log(res.data.totalBooking);
      }).catch((err)=>{
          toast.error("Something went Wrong.Try again later!")
      })
  },[])
    return(
      <>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header" style={{height:"60vh"}}>
          <div className="container py-5">
            <div className="row justify-content-center py-5">
              <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-3 text-white animated slideInDown">
                  Dashboard
                </h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <Link to="/admin">Home</Link>
                    </li>
                
                    <li
                      className="breadcrumb-item text-white active"
                      aria-current="page"
                    >
                      Dashboard
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-center text-primary px-3">
                Welcome {sessionStorage.getItem("name")}
              </h6>
            </div>
            <div className="row gy-5 gx-4 justify-content-center">
              <div
                className="col-lg-6 col-sm-6 text-center pt-4 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="position-relative border border-primary pt-5 pb-4 px-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                    style={{ width: 100, height: 100 }}
                  >
                    <i className="fa fa-globe fa-3x text-white" />
                  </div>
                  <h5 className="mt-4">Rooms Added</h5>
                  <hr className="w-25 mx-auto bg-primary mb-1" />
                  <hr className="w-50 mx-auto bg-primary mt-0" />
                  <h1 className="mb-0">
                   {data.totalRooms}
                  </h1>
                </div>
              </div>
              <div
                className="col-lg-6 col-sm-6 text-center pt-4 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="position-relative border border-primary pt-5 pb-4 px-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                    style={{ width: 100, height: 100 }}
                  >
                    <i className="fa fa-dollar-sign fa-3x text-white" />
                  </div>
                  <h5 className="mt-4">Bookings</h5>
                  <hr className="w-25 mx-auto bg-primary mb-1" />
                  <hr className="w-50 mx-auto bg-primary mt-0" />
                  <h1 className="mb-0">
                    {data.totalBooking} 
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}