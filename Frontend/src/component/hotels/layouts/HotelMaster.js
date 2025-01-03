import { Outlet,Navigate } from "react-router-dom";
import Footer from "../../layout/Footer";
import HotelHeader from "./HotelHeader";
import {toast} from "react-toastify"
export default function HotelMaster(){
    const token=sessionStorage.getItem("token")
    if(!token){
        toast.error("Please Login")
        return <Navigate to="/login"/>
    }
    return(

        <>
        <HotelHeader/>
        <Outlet/>
        <Footer/>
        </>

    )
}