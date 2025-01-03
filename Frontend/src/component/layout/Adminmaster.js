import { Outlet,Navigate } from "react-router-dom";
import Adminfooter from "./Adminfooter";
import Adminheader from "./Adminheader";
import {toast} from "react-toastify"
export default function Adminmaster(){
    const token=sessionStorage.getItem("token")
    if(!token){
        toast.error("Please Login")
        return <Navigate to="/login"/>
    }
    return(

        <>
        <Adminheader/>
        <Outlet/>
        <Adminfooter/>
        </>

    )
}