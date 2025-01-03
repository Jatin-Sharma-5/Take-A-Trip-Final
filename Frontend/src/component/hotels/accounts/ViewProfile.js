import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiServices, { BASE_URL, styleObj } from "../../services/ApiServices";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";
import Modal from 'react-modal';
import ChangePassword from "./ChangePassword";
export default function ViewProfile(){
    const [load,setLoad]=useState(true)
    const [data,setData]=useState({})
    const [isModalOpen,setIsModalOpen]=useState(false)
    const [userId,setUserId]=useState("")
    useEffect(()=>{
        let data={
            _id:sessionStorage.getItem("hotelId")
        }
        ApiServices.singleHotel(data).then((res)=>{
            setData(res.data.data)
            setUserId(res.data.data.userId)
            setTimeout(()=>{setLoad(false)},1000)
        }).catch((err)=>{
            toast.error("Something went Wrong. Try again Later!")
            setTimeout(()=>{setLoad(false)},1000)
        })
    },[])
   
    const customStyles = {
    content: {
        top: '60%',
        backgroundColor:"white",
        boxShadow:"0px 0px 10px gray",
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    };
    function closeModal() {
        setIsModalOpen(false);
    }
    return(
        <>
        
        <div className="container-fluid bg-primary py-5 mb-5 hero-header" style={{height:"60vh"}}>
          <div className="container py-5">
            <div className="row justify-content-center py-5">
              <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-3 text-white animated slideInDown">
                  Profile
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
                      Profile
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
            <HashLoader loading={load} cssOverride={styleObj} size={50} color={"green"}/>
        <div className={load ? "d-none" :""}>
            <div className="site-section ">
                <div className="container">
                <div className="d-flex justify-content-end">
                    <button className="btn btn-danger" onClick={()=>{setIsModalOpen(true)}}>Change Password</button>
                </div>
                    <div className="row justify-content-center">
                        <div className="col-md-5  card p-4 text-center text-capitalize">
                            <img src={BASE_URL+data?.image } style={{height:"300px",width:"100%"}}/>
                            <h2>{data?.name}</h2>
                            <h5><i className="fa fa-envelope"></i> {data?.email}</h5>
                            <h5><i className="fa fa-phone pe-2"></i>{data?.contact}</h5>
                            <h5><i class="fa-solid fa-location-crosshairs ps-2"></i>{data?.address}</h5>
                            <h5>{data?.destinationId?.name}</h5>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      
       <ChangePassword closeModal={closeModal} userId={userId}/>
      </Modal>
        </>
    )
}