import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import ApiServices,{styleObj} from '../services/ApiServices'
import {HashLoader} from "react-spinners"
export default function Register(){
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [load,setLoad]=useState(false)
    const nav = useNavigate()
    const handleForm = (e) => {
            e.preventDefault();
            let data = {
                name: name,
                email: email,
                password: password,
              contact:contact
            }

            ApiServices.register(data).then((res)=>{
                if(res.data.success){
                    toast.success(res.data.message)
                    ApiServices.login(data).then(
                      (response)=>{
                        if(response.data.success){
                          sessionStorage.setItem("token" ,response.data.token)
                          sessionStorage.setItem("email" ,response.data.data.email)
                          sessionStorage.setItem("userId" ,response.data.data._id)
                          sessionStorage.setItem("userData",JSON.stringify(response.data.data))
                          toast.success(response.data.message)
                            sessionStorage.setItem("customerId",response.data.data.customerId)
                            setTimeout(()=>{nav("/")},1000)
                        }
                        else{
                            toast.error(response.data.maessage)
                            setTimeout(()=>{setLoad(false)},1000)
                        }
                      }
                    )
                    .catch(
                      (error)=>{
                      toast.error("Something went wrong try again later")
                      setTimeout(()=>{setLoad(false)},1000)
                      })
                }
                else{
                    toast.error(res.data.message)
                    console.log(res.data);
                    setTimeout(()=>{setLoad(false)},1000)
                }
            }).catch((err)=>{
              toast.error("Something went wrong try again later")
              setTimeout(()=>{setLoad(false)},1000)
            })
    }

  return (
    <>
    <div className="container-fluid bg-primary py-5 mb-5 hero-header" style={{height:"60vh"}}>
          <div className="container py-5">
            <div className="row justify-content-center py-5">
              <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-3 text-white animated slideInDown">
                  User Register
                </h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <Link to="/admin">Home</Link>
                    </li>
                
                    <li
                      className="breadcrumb-item text-white active"
                      aria-current="page"
                    >
                      Register
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <HashLoader loading={load} cssOverride={styleObj} size={50} color={"green"}/>
      <div className={load?"d-none":""}>
     <div className=" container p-5 ">
        <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
        <form onSubmit={handleForm}>
        
              <div className="mb-3">
               <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
               <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e) => setName(e.target.value)}/>
             </div>
             <div className="mb-3">
               <label htmlFor="exampleInputEmail2" className="form-label">Email address</label>
               <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)}/>
             </div>
             <div className="mb-3">
               <label htmlFor="exampleInputPassword4" className="form-label">Password</label>
               <input type="password" className="form-control" id="exampleInputPassword4" value={password} onChange={(e) => setPassword(e.target.value)}/>
             </div>

             <div className="mb-3">
               <label htmlFor="exampleInputPassword4" className="form-label">Contact</label>
               <input type="number" min={0} className="form-control" id="exampleInputPassword4" value={contact} onChange={(e) => setContact(e.target.value)}/>
             </div>


              <button type="submit" className="btn btn-primary sub">Submit</button>
           </form>
        </div>
        <div className="col-2"></div>
        </div>
        </div>
        </div>
    </>
  )
}

