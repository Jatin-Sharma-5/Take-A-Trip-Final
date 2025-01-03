import { useState } from "react"
import ApiServices, { styleObj } from "../../services/ApiServices"
import {toast} from "react-toastify"
import {HashLoader} from "react-spinners"
import { Link } from "react-router-dom"
export default function AddRooms(){
  const [name,setName]=useState("")
  const [price,setPrice]=useState("")
  const [image,setImage]=useState({})
  const [imageName,setImageName]=useState("")
  const [load,setLoad]=useState(false)
  const handleForm=(e)=>{
    e.preventDefault();
    setLoad(true)
    let data=new FormData()
    data.append("name",name)
    data.append("price",price)
    data.append("image",image)
    data.append("hotelId",sessionStorage.getItem("hotelId"))
    ApiServices.addRoom(data).then((res)=>{
        setLoad(true)
        if(res.data.success){
            toast.success(res.data.message)
            setPrice("")
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
                Add Room
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
                    Room
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
                      placeholder="Room Number or Name"
                      value={name}
                      onChange={(e)=>{setName(e.target.value)}}
                    />
                    <label htmlFor="name">Room Name/No.</label>
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
                      onChange={(e)=>{setImageName(e.target.value);setImage(e.target.files[0])}}
                    />
                    <label htmlFor="email">Image</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                    type="number"
                    min={0}
                      className="form-control"
                      placeholder="price"
                      value={price}
                      onChange={(e)=>{setPrice(e.target.value)}}
                    />
                    <label htmlFor="message">Price</label>
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
    
