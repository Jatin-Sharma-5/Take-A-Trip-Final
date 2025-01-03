import { useEffect, useState } from "react"
import ApiServices, {styleObj} from "../services/ApiServices"
import {toast} from "react-toastify"
import {HashLoader} from "react-spinners"
import { Link,useParams } from "react-router-dom"
export default function Package(){
  const [data,setData]=useState([])
  const [load,setLoad]=useState(true)
  let {id}=useParams()
  useEffect(()=>{
    let data={}
    if(!!id){
      data.roomId=id
    }
      ApiServices.allPackage(data).then((res)=>{
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
            Packages
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
                Packages
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
          Packages
        </h6>
        <h1 className="mb-5">Awesome Packages</h1>
      </div>
      <div className="row g-4 justify-content-center">
        {
          data.length>0?
        data.map((el,index)=>(
        <div className="col-lg-4 text-capitalize col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
          <div className="package-item">
            <div className="d-flex border-bottom">
              <small className="flex-fill text-center border-end py-2">
                <i className="fa fa-map-marker-alt text-primary me-2" />
                {el.destinationId.name}
              </small>
              <small className="flex-fill text-center border-end py-2">
                <i className="fa fa-calendar-alt text-primary me-2" />{el.duration}
              </small>
             
            </div>
            <div className="text-center p-4">
              <h2>{el.name}</h2>
              <h3 className="mb-0">&#8377; {el.price}</h3>
             
              <p>
                {el.description}
              </p>
              <div className="d-flex justify-content-center mb-2">
               
                <Link
                 to={`/book/${el._id}`}
                  className="btn btn-sm btn-primary px-3"
                  style={{ borderRadius: "30px" }}
                >
                  Book Now
                </Link>
                <Link
                 to={`/review/${el._id}`}
                  className="btn  btn-sm btn-info ms-3 px-2"
                  style={{ borderRadius: "30px" }}
                >
                  <i className="fa fa-star text-warning pe-2"></i>Reviews
                </Link>
              </div>
            </div>
          </div>
        </div>
        ))
      :
      <h1>No Packages found for this room</h1>
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