import { useEffect, useState } from "react"
import ApiServices, {styleObj} from "../services/ApiServices"
import {toast} from "react-toastify"
import {HashLoader} from "react-spinners"
import { Link } from "react-router-dom"
export default function Index(){
  const [data,setData]=useState([])
  const [load,setLoad]=useState(true)
  useEffect(()=>{
      ApiServices.allPackage().then((res)=>{
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
          <h1 className="display-3 text-white mb-3 animated slideInDown">
          "Take a Break, Take a Trip!"
          </h1>
        </div>
      </div>
    </div>
  </div>
  {/* Navbar & Hero End */}
  {/* About Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5">
        <div
          className="col-lg-6 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ minHeight: 400 }}
        >
          <div className="position-relative h-100">
            <img
              className="img-fluid position-absolute w-100 h-100"
              src="/assets/img/about.jpg"
              alt=""
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
          <h6 className="section-title bg-white text-start text-primary pe-3">
            About Us
          </h6>
          <h1 className="mb-4">
            Welcome to <span className="text-primary">TravelBook</span>
          </h1>
          <p className="mb-4">
            Get personalized packages with your choice of destination
          </p>
          <p className="mb-4">
          Get personalized packages with your choice of destination
          </p>
          <div className="row gy-2 gx-4 mb-4">
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Five Star Hotels
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Handpicked Hotels
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />5 Star
                Accommodations
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Trendy Destination
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                150 Premium City Tours
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                24/7 Service
              </p>
            </div>
          </div>
          {/* <a className="btn btn-primary py-3 px-5 mt-2" href="">
            Read More
          </a> */}
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Service Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Services
        </h6>
        <h1 className="mb-5">Our Services</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item rounded pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-globe text-primary mb-4" />
              <h5>WorldWide Tours</h5>
              <p>
                Get tour of multiple cities worldwide
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item rounded pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-hotel text-primary mb-4" />
              <h5>Hotel Reservation</h5>
              <p>
                Reserve hotel at same time
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item rounded pt-3">
            <div className="p-4">
              <i class=" fa fa-3x text-primary  mb-4 bi bi-geo-alt"/>
              <h5>Best Destinations</h5>
              <p>
                Get multiple places to visit
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="service-item rounded pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-cog text-primary mb-4" />
              <h5>Event Management</h5>
              <p>
                Manage your whole event
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}
  {/* Destination Start */}
  <div className="container-xxl py-5 destination">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Destination
        </h6>
        <h1 className="mb-5">Popular Destination</h1>
      </div>
      <div className="row g-3">
        <div className="col-lg-7 col-md-6">
          <div className="row g-3">
            <div
              className="col-lg-12 col-md-12 wow zoomIn"
              data-wow-delay="0.1s"
            >
              <Link className="position-relative d-block overflow-hidden" to="/destination">
                <img className="img-fluid" src="/assets/img/Munnar.jpg" alt="" />
                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                  30% OFF
                </div>
                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                  Munnar, Kerala
                </div>
              </Link>
            </div>
            <div
              className="col-lg-6 col-md-12 wow zoomIn"
              data-wow-delay="0.3s"
            >
              <Link className="position-relative d-block overflow-hidden" to="/destination">
                <img className="img-fluid" src="/assets/img/Goa 2.jpg" alt="" />
                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                  25% OFF
                </div>
                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                  Goa
                </div>
              </Link>
            </div>
            <div
              className="col-lg-6 col-md-12 wow zoomIn"
              data-wow-delay="0.5s"
            >
              <Link className="position-relative d-block overflow-hidden" to="/destination">
                <img className="img-fluid" src="/assets/img/destination-3.jpg" alt="" />
                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                  35% OFF
                </div>
                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                Palolem Beach, Goa
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="col-lg-5 col-md-6 wow zoomIn"
          data-wow-delay="0.7s"
          style={{ minHeight: 350 }}
        >
          <Link
            className="position-relative d-block h-100 overflow-hidden"
            to="/destination"
          >
            <img
              className="img-fluid position-absolute w-100 h-100"
              src="/assets/img/Jaipur.jpg"
              alt=""
              style={{ objectFit: "cover" }}
            />
            <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
              20% OFF
            </div>
            <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
             Jaipur , Rajasthan
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* Destination Start */}
  {/* Package Start */}
  <div className="container">
  <div className="row g-4 justify-content-center">
        {data.slice(0,3).map((el,index)=>(
        <div className="col-lg-4 text-capitalize col-md-6 wow fadeInUp" data-wow-delay="0.1s">
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
              <h3 className="mb-0">&#8377; {el.roomId.price}</h3>
             
              <p>
                {el.description}
              </p>
              <div className="d-flex justify-content-center mb-2">
                <Link
                  to={`/view-room/${el.roomId._id}`}
                  className="btn btn-sm btn-primary px-3 border-end"
                  style={{ borderRadius: "30px 0 0 30px" }}
                >
                  View Room
                </Link>
                <Link
                 to={`/book/${el._id}`}
                  className="btn btn-sm btn-primary px-3"
                  style={{ borderRadius: "0 30px 30px 0" }}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        ))}
      
      
      </div>
        <div className="row justify-content-center">
          <div className="col-md-2 ">
          <Link to={"/package"} className="w-100 btn btn-primary my-3 ">View All</Link >
          </div>
        </div>
        </div>
  {/* Package End */}

  {/* Process Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Process
        </h6>
        <h1 className="mb-5">3 Easy Steps</h1>
      </div>
      <div className="row gy-5 gx-4 justify-content-center">
        <div
          className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="position-relative border border-primary pt-5 pb-4 px-4">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
              style={{ width: 100, height: 100 }}
            >
              <i className="fa fa-globe fa-3x text-white" />
            </div>
            <h5 className="mt-4">Choose A Destination</h5>
            <hr className="w-25 mx-auto bg-primary mb-1" />
            <hr className="w-50 mx-auto bg-primary mt-0" />
              <p className="mb-0">
                Research and identify potential
                travel destinations based on interests, budget, and travel dates.
              </p>
          </div>
        </div>
        <div
          className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="position-relative border border-primary pt-5 pb-4 px-4">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
              style={{ width: 100, height: 100 }}
            >
             <i class="bi bi-building fa-3x text-white"></i>
            </div>
            <h5 className="mt-4">Best Hotels</h5>
            <hr className="w-25 mx-auto bg-primary mb-1" />
            <hr className="w-50 mx-auto bg-primary mt-0" />
            <p className="mb-0">
             Search for hotels in your chosen destination, comparing prices, amenities, and reviews.

            </p>
          </div>
        </div>
        <div
          className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="position-relative border border-primary pt-5 pb-4 px-4">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
              style={{ width: 100, height: 100 }}
            >
              <i className="bi bi-ui-checks-grid fa-3x text-white" />
            
            </div>
            <h5 className="mt-4">Best Rooms</h5>
            <hr className="w-25 mx-auto bg-primary mb-1" />
            <hr className="w-50 mx-auto bg-primary mt-0" />
            <p className="mb-0">
             Determine room requirements, including  amenities, and budget, then research available options.

            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Process Start */}
  {/* Team Start */}
  {/* <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Travel Guide
        </h6>
        <h1 className="mb-5">Meet Our Guide</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src="/assets/img/team-1.jpg" alt="" />
            </div>
            <div
              className="position-relative d-flex justify-content-center"
              style={{ marginTop: "-19px" }}
            >
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-instagram" />
              </a>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src="/assets/img/team-2.jpg" alt="" />
            </div>
            <div
              className="position-relative d-flex justify-content-center"
              style={{ marginTop: "-19px" }}
            >
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-instagram" />
              </a>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src="/assets/img/team-3.jpg" alt="" />
            </div>
            <div
              className="position-relative d-flex justify-content-center"
              style={{ marginTop: "-19px" }}
            >
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-instagram" />
              </a>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="team-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src="/assets/img/team-4.jpg" alt="" />
            </div>
            <div
              className="position-relative d-flex justify-content-center"
              style={{ marginTop: "-19px" }}
            >
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-instagram" />
              </a>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
 
  
</>

    )
}