import { useEffect, useState } from "react"
import ApiServices,{styleObj} from "../../services/ApiServices"
import {toast} from "react-toastify"
import {HashLoader} from "react-spinners"
import { Link,useParams } from "react-router-dom"
export default function ViewRatinsAdmin(){
  const [data,setData]=useState([])
  const [load,setLoad]=useState(true)
  useEffect(()=>{
   let data={
    hotelId:sessionStorage.getItem("hotelId")
   }
      ApiServices.allRating().then((res)=>{
          setData(res.data.data)
          setTimeout(()=>{setLoad(false)},1000)
      }).catch((err)=>{
          toast.error("Something went Wrong.Try again later!")
          setTimeout(()=>{setLoad(false)},1000)
      })
  },[load])
    return(
        <>
  <div className="container-fluid bg-primary py-5 mb-5 hero-header">
    <div className="container py-5">
      <div className="row justify-content-center py-5">
        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-3 text-white animated slideInDown">
             Ratings
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
                 Ratings
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* Navbar & Hero End */}
  {/* Package Start */}
  <HashLoader loading={load} cssOverride={styleObj} size={50} color={"green"}/>
      <div className={load?"d-none":""}>
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
           User Ratings
        </h6>
      </div>
      <div className="row g-4 justify-content-center">
        {
          data.length>0?
        data.map((el,index)=>(
        <div className="col-lg-8 text-capitalize col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="package-item">
            <div className="text-center p-4">
                <div className="d-flex justify-content-between px-3">
                    <h2>{el.packageId.name}</h2>
                    <div>
                        <p><i className="fa fa-user pe-2"></i>{el?.userId?.name}</p>
                        <p><i className="fa fa-envelope pe-2"></i>{el?.userId?.email}</p>
                    </div>
                </div>
              <h3 className="mb-0">
                    {el.rating}
                    <i className="fa fa-star text-warning"></i>
              </h3>
              <p>
                {el.review}
              </p>
              
             
            </div>
          </div>
        </div>
        ))
      :
      <h1>No Ratings found </h1>
      }
       
      </div>
    </div>
  </div>
  {/* Package End */}

  
  </div>
  {/* Process Start */}
</>

    )
}