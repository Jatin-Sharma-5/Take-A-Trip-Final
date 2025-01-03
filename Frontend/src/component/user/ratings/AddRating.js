import { useEffect, useState } from "react"
import ApiServices from "../../services/ApiServices"
import {useParams,useNavigate, Navigate} from "react-router-dom"
import {toast} from "react-toastify"
export default function AddRating(){
    const userId=sessionStorage.getItem("userId")
    const [load,setLoad]=useState(true)
    const [rating,setRating]=useState("")
    const [review,setReview]=useState("")
    const param=useParams()
    const bookingId=param.id
    const [data,setdata]=useState({})
    useEffect(()=>{
        let data={
            _id:bookingId
        }
        ApiServices.singleBooking(data).then((res)=>{
            setdata(res.data.data)
            setTimeout(()=>{setLoad(false)},1000)
        }).catch((err)=>{
            toast.error("Something went wrong!!")
            setTimeout(()=>{setLoad(false)},1000)
        })
    },[])
    const nav=useNavigate()
    const handleForm=(e)=>{
        e.preventDefault();
        setLoad(true)
        let data1={
            userId:sessionStorage.getItem("userId"),
            packageId:data?.packageId?._id,
            rating:rating,
            review:review,
        }
            ApiServices.addRating(data1).then((res)=>{
                setLoad(true)
                if(res.data.success){
                    toast.success(res.data.message)
                    setTimeout(()=>{nav("/view-rating")},1000)
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
                    <h1 className="display-3 text-white animated slideInDown">Ratings</h1>
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
                            Rating
                        </li>
                        </ol>
                    </nav>
                    </div>
                </div>
                </div>
            </div>
            {/* Navbar & Hero End */}
            
            {/* Rating Start */}
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">
                    Rate your experience
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
                                {data.packageId?.name}
                            </small>
                            <small className="flex-fill text-center border-end py-2">
                                <i className="fa fa-calendar-alt text-primary me-2" />{data.packageId?.duration}
                            </small>
                            
                            </div>
                            <div className="text-center p-4">
                            <h2>{data.packageId?.name}</h2>
                            <h3 className="mb-0">&#8377; {data.packageId?.roomId?.price}</h3>
                            
                            <p>
                                {data.packageId?.description}
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
                        <h6 className="text-white text-uppercase">Rate Us</h6>
                    
                        <form onSubmit={handleForm}>
                        <div className="row g-3">
                            <div className="col-md-12">
                            <div className="form-floating">
                                <input required
                                type="number"
                                className="form-control bg-transparent"
                                id="name"
                                placeholder="Your Rating from 1-10" value={rating}
                                min={1}
                                onChange={(e)=>{setRating(e.target.value)}}
                                />
                                <label htmlFor="name">Your Ratings</label>
                            </div>
                            </div>
                            <div className="col-md-12">
                            <div className="form-floating">
                                <textarea required
                                type="text"
                                min={1}
                                max={10}
                                className="form-control bg-transparent"
                                id="guest"
                                placeholder="Detailed Review"
                                value={review}
                                onChange={(e)=>{setReview(e.target.value)}}
                                />
                                <label htmlFor="email">Detailed Review</label>
                            </div>
                            </div>
                            <div className="col-12">
                            <button
                                className="btn btn-outline-light w-100 py-3"
                                type="submit"
                            >
                            Save
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