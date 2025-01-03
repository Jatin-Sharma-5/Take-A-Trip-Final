import { useState,useEffect} from "react"
import ApiServices, { BASE_URL, styleObj } from "../../services/ApiServices"
import {toast} from "react-toastify"
import {HashLoader} from "react-spinners"
import { Link,useParams,useNavigate } from "react-router-dom"
export default function Editdestination(){
  const [name,setName]=useState("")
  const [address,setAddress]=useState("")
  const [image,setImage]=useState({})
  const [previousImage,setPreviousImage]=useState("")
  const [imageName,setImageName]=useState("")
  const [load,setLoad]=useState(true)
  const {id}=useParams()
  useEffect(()=>{
      let data={
          _id:id
      }
      ApiServices.singleDestination(data).then((res)=>{
          setName(res.data.data.name)
          setAddress(res.data.data.address)
          setPreviousImage(res.data.data.image)
          setTimeout(()=>{setLoad(false)},1000)
      }).catch((err)=>{
          toast.error("Something went Wrong. Try again Later!")
          setTimeout(()=>{setLoad(false)},1000)
      })
  },[])
  const nav=useNavigate();
  const handleForm=(e)=>{
    e.preventDefault();
    setLoad(true)
    let data=new FormData()
    data.append("name",name)
    data.append("address",address)
    if(!!imageName){
    data.append("image",image)
    }
    data.append("_id",id)
    ApiServices.updateDestination(data).then((res)=>{
        setLoad(true)
        if(res.data.success){
            toast.success(res.data.message)
            setTimeout(()=>{nav("/admin/managedestination")},1000)
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
          <div className="row  justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Update Destination
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
                    Destination
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
          <div className="row my-3 justify-content-center">
            <div className="col-md-6">
              <img src={BASE_URL+previousImage} style={{height:"250px"}}/>
            </div>
          </div>
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
                      placeholder="Destination Name"
                      value={name}
                      onChange={(e)=>{setName(e.target.value)}}
                    />
                    <label htmlFor="name">Destination Name</label>
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
    
