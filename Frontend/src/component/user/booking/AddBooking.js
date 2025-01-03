import { useEffect, useState } from "react"
import ApiServices from "../../services/ApiServices"
import {useParams,useNavigate, Navigate} from "react-router-dom"
import {toast} from "react-toastify"
export default function AddBooking(){
const [name,setName]=useState(JSON.parse(sessionStorage.getItem("userData"))?.name)
const [guest,setGuest]=useState(1)
const [emergencyContact,setEmergencyContact]=useState("")
const [idProof,setIdProof]=useState({})
const [idProofName,setIdProofName]=useState("")
const [bookingDate,setBookingDate]=useState("")
const [packageData,setPackageData]=useState({})

const [load,setLoad]=useState(true)
const param=useParams()
const packageId=param.id
useEffect(()=>{
    let data={
        _id:packageId
    }
    ApiServices.singlePackage(data).then((res)=>{
        setPackageData(res.data.data)
        setTimeout(()=>{setLoad(false)},1000)
    }).catch((err)=>{
        toast.error("Something went wrong!!")
        setTimeout(()=>{setLoad(false)},1000)
    })
},[])

const nav=useNavigate()
const handleForm=(e)=>{
    e.preventDefault();
    const currentDate = new Date();
    const givenDate = new Date(bookingDate);
    if(givenDate <= currentDate){
        toast.error("Booking Date must be of future")
        return;
    }
    setLoad(true)
    let data=new FormData()
        data.append("userId",sessionStorage.getItem("userId"))
        data.append("packageId",packageId)
        data.append("bookingName",name)
        data.append("emergencyContact",emergencyContact)
        data.append("guestCount",guest)
        data.append("bookingDate",bookingDate)
        data.append("idProof",idProof)
        data.append("price",packageData?.price)
        
        

        
    
    ApiServices.addBooking(data).then((res)=>{
        setLoad(true)
        if(res.data.success){
            toast.success(res.data.message)
            setTimeout(()=>{nav("/view-booking")},1000)
        }
        else{
            toast.error(res.data.message)
        }
        setTimeout(()=>{setLoad(false)},1000)
    }).catch((err)=>{
        toast.error("Something went Wrong. Try again Later!")
        setTimeout(()=>{setLoad(false)},1000)
    })
}
const token=sessionStorage.getItem("token")
if(!token){
    toast.error("Please Login")
    return <Navigate to="/login"/>
}
    return(

        <>
  <div className="container-fluid bg-primary py-5 mb-5 hero-header">
    <div className="container py-5">
      <div className="row justify-content-center py-5">
        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-3 text-white animated slideInDown">Booking</h1>
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
                Booking
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* Navbar & Hero End */}
  
  {/* Booking Start */}
  <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Packages
        </h6>
        {/* <h1 className="mb-5">Book Packages</h1> */}
      </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 offset-md-3 text-capitalize col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="package-item">
                <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    {packageData?.destinationId?.name}
                </small>
                <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-calendar-alt text-primary me-2" />{packageData?.duration}
                </small>
                
                </div>
                <div className="text-center p-4">
                <h2>{packageData?.name}</h2>
                <h3 className="mb-0">&#8377; {packageData.price}</h3>
                
                <p>
                    {packageData?.description}
                </p>
                
                </div>
            </div>
            </div>
        </div>
    </div>
    <div className="container">
      <div className="booking p-5">
        <div className="row g-5 align-items-center">
          <div className="col-md-8 offset-md-2 text-white">
            <h6 className="text-white text-uppercase">Booking</h6>
         
            <h1 className="text-white mb-4">Book A Tour</h1>
            <form onSubmit={handleForm}>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input required
                      type="text"
                      className="form-control bg-transparent"
                      id="name"
                      placeholder="Your Name" value={name}
                      onChange={(e)=>{setName(e.target.value)}}
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input required
                      type="number"
                      min={1}
                      className="form-control bg-transparent"
                      id="guest"
                      placeholder="No. Of Guest"
                      value={guest}
                      onChange={(e)=>{setGuest(e.target.value)}}
                    />
                    <label htmlFor="email">No. Of Guest</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="form-floating date"
                    id="date3"
                    data-target-input="nearest"
                  >
                    <input required
                      type="date"
                      className="form-control bg-transparent "
                      id="datetime"
                      placeholder="Date"
                      
                      value={bookingDate}
                      onChange={(e)=>{setBookingDate(e.target.value)}}
                    />
                    <label htmlFor="datetime">Date </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="form-floating "
                   
                    data-target-input="nearest"
                  >
                    <input required
                      type="number"
                      min={0}
                      className="form-control text-white bg-transparent "
                      id="contact"
                      placeholder="Enter Emergency Contact"
                      value={emergencyContact}
                      onChange={(e)=>{setEmergencyContact(e.target.value)}}
                    />
                    <label htmlFor="datetime">Emergency Contact</label>
                  </div>
                </div>
                <div className="col-md-12">
                <label htmlFor="idProof">Id Proof</label>

                  
                    <input required
                      type="file"
                      className="form-control bg-transparent "
                      id="contact"
                      placeholder="Enter Id Proof"
                      value={idProofName}
                      onChange={(e)=>{setIdProofName(e.target.value);setIdProof(e.target.files[0])}}
                    />
                </div>
                
                <div className="col-12">
                  <button
                    className="btn btn-outline-light w-100 py-3"
                    type="submit"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Booking Start */}
</>

    )
}