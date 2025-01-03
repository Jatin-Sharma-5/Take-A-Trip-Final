import axios from "axios"
import * as qs from "qs"
export const BASE_URL="http://localhost:8000/"
export const styleObj={
    display:"block",
    margin:"10vh auto"
}
class ApiServices{
    getToken(){
        return {
            Authorization:sessionStorage.getItem("token")
        }
    }
    login(data){
        return axios.post(BASE_URL+"admin/login", data)
    }
    register(data){
        return axios.post(BASE_URL+"customer/register", data)
    }
    dashboard(data){
        return axios.post(BASE_URL+"admin/dashboard",data,{headers:this.getToken()})
    }
    hotelDashboard(data){
        return axios.post(BASE_URL+"hotel/dashboard",data,{headers:this.getToken()})
    }
    addDestination(data){
        return axios.post(BASE_URL+"admin/destination/add",data,{headers:this.getToken()})
    }
    allDestination(data){
        return axios.post(BASE_URL+"admin/destination/all",data,{headers:this.getToken()})
    }
   deleteDestination(data){
        return axios.post(BASE_URL+"admin/destination/delete",data,{headers:this.getToken()})
    }
   updateDestination(data){
        return axios.post(BASE_URL+"admin/destination/update",data,{headers:this.getToken()})
    }
   singleDestination(data){
        return axios.post(BASE_URL+"admin/destination/single",data,{headers:this.getToken()})
    }
    addHotel(data){
        return axios.post(BASE_URL+"admin/hotel/register",data,{headers:this.getToken()})
    }
    allHotel(data){
        return axios.post(BASE_URL+"admin/hotel/all",data,{headers:this.getToken()})
    }
  
   updateHotel(data){
        return axios.post(BASE_URL+"admin/hotel/update",data,{headers:this.getToken()})
    }
   singleHotel(data){
        return axios.post(BASE_URL+"admin/hotel/single",data,{headers:this.getToken()})
    }
    addRoom(data){
        return axios.post(BASE_URL+"hotel/room/add",data,{headers:this.getToken()})
    }
 
  
   updateRoom(data){
        return axios.post(BASE_URL+"hotel/room/update",data,{headers:this.getToken()})
    }

    addPackage(data){
        return axios.post(BASE_URL+"admin/package/add",data,{headers:this.getToken()})
    }
    allPackage(data){
        return axios.post(BASE_URL+"admin/package/all",data,{headers:this.getToken()})
    }
  
   updatePackage(data){
        return axios.post(BASE_URL+"admin/package/update",data,{headers:this.getToken()})
    }
   singlePackage(data){
        return axios.post(BASE_URL+"admin/package/single",data,{headers:this.getToken()})
    }
   deletePackage(data){
        return axios.post(BASE_URL+"admin/package/delete",data,{headers:this.getToken()})
    }
    
    allRoom(data){
        return axios.post(BASE_URL+"admin/room/all",data,{headers:this.getToken()})
    }
  
   
   singleRoom(data){
        return axios.post(BASE_URL+"admin/room/single",data,{headers:this.getToken()})
    }
   deleteRoom(data){
        return axios.post(BASE_URL+"hotel/room/delete",data,{headers:this.getToken()})
    }
   changePassword(data){
    return axios.post(BASE_URL+"hotel/changePassword",data,{headers:this.getToken()})
   }
   addBooking(data){
    return axios.post(BASE_URL+"customer/booking/add",data,{headers:this.getToken()})
   }
   allBooking(data){
    return axios.post(BASE_URL+"admin/booking/all",data,{headers:this.getToken()})
   }
   singleBooking(data){
    return axios.post(BASE_URL+"admin/booking/single",data,{headers:this.getToken()})
   }
   updateBooking(data){
    return axios.post(BASE_URL+"admin/booking/update",data,{headers:this.getToken()})
   }
   singleCustomer(data){
    return axios.post(BASE_URL+"admin/customer/single",data,{headers:this.getToken()})
   }
   addRating(data){
    return axios.post(BASE_URL+"customer/review/add",data,{headers:this.getToken()})
   }
   allRating(data){
    return axios.post(BASE_URL+"admin/review/all",data,{headers:this.getToken()})
   }
   allCustomer(data){
    return axios.post(BASE_URL+"admin/customer/all",data,{headers:this.getToken()})
   }

   
}
export default new ApiServices