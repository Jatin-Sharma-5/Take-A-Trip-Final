import { useState,useEffect } from "react"
import ApiServices, { styleObj } from "../../services/ApiServices"
import {toast} from "react-toastify"
import {HashLoader} from "react-spinners"
import {Link,useParams, useNavigate} from "react-router-dom"
export default function Updatepackages(){
  const [name,setName]=useState("")
  const [destinationId,setDestinationId]=useState("")
  const [load,setLoad]=useState(false)
  const [allDestination,setAllDestination]=useState([])
  const [allHotel,setAllHotel]=useState([])
  const [hotelId,setHotelId]=useState("")
  const [allRoom,setAllRoom]=useState([])
  const [roomId,setRoomId]=useState("")
  const [duration,setDuration]=useState("")
  const [description,setDescription]=useState("")
  const [price,setPrice]=useState("")
  const {id}=useParams()
  useEffect(()=>{
      let data={
          _id:id
      }
      ApiServices.singlePackage(data).then((res)=>{
        setHotelId(res.data.data.hotelId._id)
        setRoomId(res.data.data.roomId._id)
        setDescription(res.data.data.description)
        setDuration(res.data.data.duration)
        setPrice(res.data.data.price)
        setDestinationId(res.data.data.destinationId._id)
        setName(res.data.data.name)
          setTimeout(()=>{setLoad(false)},1000)
      }).catch((err)=>{
          toast.error("Something went Wrong. Try again Later!")
          setTimeout(()=>{setLoad(false)},1000)
      })
  },[])
  const nav=useNavigate();
  useEffect(()=>{
    ApiServices.allDestination().then((res)=>{
        setAllDestination(res.data.data)
        setTimeout(()=>{setLoad(false)},1000)
    }).catch((err)=>{
        toast.error("Something went Wrong.Try again later!")
    })
   
  
},[load])
useEffect(()=>{
  if(!!destinationId){
    let data={
      destinationId:destinationId
    }
    ApiServices.allHotel(data).then((res)=>{
      setAllHotel(res.data.data)
      setTimeout(()=>{setLoad(false)},1000)
    }).catch((err)=>{
        toast.error("Something went Wrong.Try again later!")
    })
  }
},[destinationId])
useEffect(()=>{
  if(!!hotelId){
    let data={
      hotelId:hotelId
    }
    ApiServices.allRoom(data).then((res)=>{
      setAllRoom(res.data.data)
      setTimeout(()=>{setLoad(false)},1000)
  }).catch((err)=>{
      toast.error("Something went Wrong.Try again later!")
  })
  }
},[hotelId])
  const handleForm=(e)=>{
    e.preventDefault();
    setLoad(true)
    let data={
      name:name,
      duration:duration,
      description:description,
      hotelId:hotelId,
      _id:id,
      roomId:roomId,
      price:price,
      destinationId:destinationId,
    }
    ApiServices.updatePackage(data).then((res)=>{
        setLoad(true)
        if(res.data.success){
            toast.success(res.data.message)
            setTimeout(()=>{nav("/admin/Managepackage")},1000)
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
    return(
    <>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header" style={{height:"60vh"}}>
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Update Packages
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link to={"/admin"}>Home</Link>
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
      <HashLoader loading={load} cssOverride={styleObj} size={50} color={"green"}/>
      <div className={load?"d-none":""}>
        <div className="container">
          <div className="row">
          <div className="col-lg-8 offset-md-2 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
            <form onSubmit={handleForm}>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Package Name"
                      value={name}
                      onChange={(e)=>{setName(e.target.value)}}
                    />
                    <label htmlFor="name">Package Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <select className="form-control" value={destinationId} onChange={(e)=>{setDestinationId(e.target.value)}}>
                      <option selected disabled value={""}>Choose Destination</option>
                      {allDestination?.map((el,index)=>(
                        <option value={el._id}>{el.name}</option>
                      ))}
                    </select>
                    <label htmlFor="email">Destination</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <select className="form-control" value={hotelId} onChange={(e)=>{setHotelId(e.target.value)}}>
                      <option selected disabled value={""}>Choose Hotel</option>
                      {allHotel?.map((el,index)=>(
                        <option value={el._id}>{el.name}</option>
                      ))}
                    </select>
                    <label htmlFor="email">Destination</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <select className="form-control" value={roomId} onChange={(e)=>{setRoomId(e.target.value)}}>
                      <option selected disabled value={""}>Choose Room</option>
                      {allRoom?.map((el,index)=>(
                        <option value={el._id}>{el.name}</option>
                      ))}
                    </select>
                    <label htmlFor="email">Room</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      className="form-control"
                      placeholder="Set Price"
                      id="message"
                      style={{ height: 50 }}
                      value={price}
                      onChange={(e)=>{setPrice(e.target.value)}}
                    />
                    <label htmlFor="message">Price</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      className="form-control"
                      placeholder="Duration"
                      id="message"
                      style={{ height: 100 }}
                      value={duration}
                      onChange={(e)=>{setDuration(e.target.value)}}
                    />
                    <label htmlFor="message">Duration</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="description"
                      id="message"
                      style={{ height: 100 }}
                      value={description}
                      onChange={(e)=>{setDescription(e.target.value)}}
                    />
                    <label htmlFor="message">Description</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
          </div>
        </div>
      </div>
    </>
)
}
    
