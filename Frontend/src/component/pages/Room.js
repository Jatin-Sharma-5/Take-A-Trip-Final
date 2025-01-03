import { Link,useParams } from 'react-router-dom';
import ApiServices, { BASE_URL,styleObj } from '../services/ApiServices';
import { useEffect, useState } from 'react';
import {toast} from "react-toastify"
import {HashLoader} from "react-spinners"
export default function Room(){
  const [data,setData]=useState([])
  const [hotelData,setHotelData]=useState({})
  const [load,setLoad]=useState(true)
  const {id}=useParams()
  useEffect(()=>{
    let data={}
    if(!!id){
        data.hotelId=id
    }
    let hotelfilter={
        _id:id
    }
    ApiServices.singleHotel(hotelfilter).then((res)=>{
        setHotelData(res.data.data)
        setTimeout(()=>{setLoad(false)},1000)
    }).catch((err)=>{
        toast.error("Something went Wrong.Try again later!")
    })
      ApiServices.allRoom(data).then((res)=>{
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
            Rooms
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
                Rooms
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
          Rooms
          </h6>
          <h1 className="mb-5">Hotel Room</h1>
        </div>
        <div className='row my-3 g-3'>
            <div className='col-md-8 offset-md-2'>
                <div className='card p-4'>
                    <div className='row'>
                        <div className='col-md-5'>
                            <img src={BASE_URL+hotelData.image} className='img-fluid w-100' style={{height:"250px"}}/>
                        </div>
                        <div className='col-md-7 text-capitalize text-center'>
                            <h1>{hotelData.name}</h1>
                            <p><i className='fa fa-envelope pe-2'></i>{hotelData.email}</p>
                            <p><i className='fa fa-map-marker pe-2'></i>{hotelData.address}</p>
                            <p><i className='fa fa-phone pe-2'></i>{hotelData.contact}</p>
                            <div className='d-flex justify-content-around'>
                                <Link className='btn btn-primary' to={"/destination"}>Other Location</Link>
                                <Link className='btn btn-info' to={"/userhotel"}>Other Hotel</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row g-3">
            {data.length>0?
                data.map((el,index)=>(
                    <div className="col-md-4" key={index}>
                    <div className="card g-3">
                        <div
                        className=" wow zoomIn"
                        data-wow-delay="0.1s"
                        >
                        <Link to={`/package/${el._id}`} className=" text-capitalize position-relative d-block overflow-hidden" href="">
                            <img className="img-fluid w-100" src={BASE_URL+el.image} alt="" style={{height:"300px"}} />
                            <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                            {el.name}
                            </div>
                            <Link to={`/package/${el._id}`}className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                                &#8377;{el.price}-
                                Room Price 
                            </Link>
                        </Link>
                        </div>
                    </div>
                    </div>
                ))
            :<h1>No Rooms Found</h1>}
        </div>
      </div>
    </div>
  </div>
  {/* Destination Start */}
</>

    )
}