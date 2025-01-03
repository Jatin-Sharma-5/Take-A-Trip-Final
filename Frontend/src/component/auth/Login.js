import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";
import ApiServices,{styleObj} from "../services/ApiServices";
import {HashLoader} from "react-spinners"
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [load,setLoad]=useState(false)
  const nav = useNavigate()
 const handleForm = (e) => {
    e.preventDefault();
    setLoad(true)
    let data ={
      email:email,
      password:password,
    }

   ApiServices.login(data)
    .then(
      (response)=>{
        if(response.data.success){
          sessionStorage.setItem("token" ,response.data.token)
          sessionStorage.setItem("email" ,response.data.data.email)
          sessionStorage.setItem("userId" ,response.data.data._id)
          sessionStorage.setItem("userData",JSON.stringify(response.data.data))
          toast.success(response.data.message)
          if(response.data.data.userType==1){
            setTimeout(()=>{nav("/admin")},1000)
          }
          else if(response.data.data.userType=="2" || response.data.data.userType==2){
            sessionStorage.setItem("hotelId",response.data.data.hotelId)
            setTimeout(()=>{nav("/hotel")},1000)
          }
          else{
            sessionStorage.setItem("customerId",response.data.data.customerId)
            setTimeout(()=>{nav("/")},1000)
          }
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
  return (
    <>
      
      <div className="container-fluid bg-primary py-5 mb-5 hero-header" style={{height:"60vh"}}>
    <div className="container py-5">
      <div className="row justify-content-center py-5">
        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-3 text-white animated slideInDown">
            Login
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <Link to={"/"}>Home</Link>
              </li>
           
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Login
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
            <div className="col-md-8 offset-md-2">
              <form onSubmit={handleForm}>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email id"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <label>Password</label>
                <input
                  type="password" 
                  placeholder="Enter a password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
              <Link to="/register">
                  Don't have Account? Register!
              </Link>
              </div>
          </div>
          
        </div>
      </div>
     
    </>
  );
}