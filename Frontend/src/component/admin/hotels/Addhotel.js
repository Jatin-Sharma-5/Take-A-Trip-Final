import { useState,useEffect } from "react"
import ApiServices, { styleObj } from "../../services/ApiServices"
import {toast} from "react-toastify"
import {HashLoader} from "react-spinners"
import { Link } from "react-router-dom"
export default function Addhotel(){
  const [name,setName]=useState("")
  const [address,setAddress]=useState("")
  const [contact,setContact]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [destinationId,setDestinationId]=useState("")
  const [image,setImage]=useState({})
  const [imageName,setImageName]=useState("")
  const [load,setLoad]=useState(false)
  const [allDestination,setAllDestination]=useState([])
  useEffect(()=>{
    ApiServices.allDestination().then((res)=>{
        setAllDestination(res.data.data)
        setTimeout(()=>{setLoad(false)},1000)
    }).catch((err)=>{
        toast.error("Something went Wrong.Try again later!")
    })
},[load])
  const handleForm=(e)=>{
    e.preventDefault();
    setLoad(true)
    let data=new FormData()
    data.append("name",name)
    data.append("address",address)
    data.append("image",image)
    data.append("email",email)
    data.append("password",password)
    data.append("contact",contact)
    data.append("destinationId",destinationId)
    ApiServices.addHotel(data).then((res)=>{
        setLoad(true)
        if(res.data.success){
            toast.success(res.data.message)
            setAddress("")
            setEmail("")
            setPassword("")
            setContact("")
            setDestinationId("")
            setName("")
            setImage({})
            setImageName("")
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
                Add Hotel
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
                    Hotel
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
                      placeholder="Hotel Name"
                      value={name}
                      onChange={(e)=>{setName(e.target.value)}}
                    />
                    <label htmlFor="name">Hotel Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="file"
                      className="form-control"
                      id="image"
                      placeholder="Image"
                      value={imageName}
                      onChange={(e)=>{setImage(e.target?.files[0]);setImageName(e.target.value);}}
                    />
                    <label htmlFor="email">Image</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="name"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    <label htmlFor="name">Email</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <label htmlFor="email">Password</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="number"
                      min={0}
                      className="form-control"
                      id="contact"
                      placeholder="Enter Contact"
                      value={contact}
                      onChange={(e)=>{setContact(e.target.value)}}
                    />
                    <label htmlFor="name">Contact</label>
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
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Address"
                      id="message"
                      style={{ height: 100 }}
                      value={address}
                      onChange={(e)=>{setAddress(e.target.value)}}
                    />
                    <label htmlFor="message">Address</label>
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
    
