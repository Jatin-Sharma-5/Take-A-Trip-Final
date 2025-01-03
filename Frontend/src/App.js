import About from './component/pages/About';
import Services from './component/pages/Services';
import Index from './component/pages/Index';
import Contact from './component/pages/Contact';
import Designation from './component/pages/Destination';
import Booking from './component/pages/Booking';
import Testimonial from './component/pages/Testimonial';
import Travelguide from './component/pages/Travelguide';
import Package from './component/pages/Package';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Master from './component/layout/Master';
import Error from './component/pages/Error';
import Dashboard from './component/admin/Dashboard';
import Vieworder from './component/admin/adminviews/Vieworder';
import Viewenquiry from './component/admin/adminviews/Viewenquiry';
import Addpackages from './component/admin/packages/Addpackages';
import Managepackage from './component/admin/packages/Managepackage';
import Updatapackage from './component/admin/packages/Updatapackage';
import Adddestination from './component/admin/destination/Adddestination';
import Managedestination from './component/admin/destination/Managedestination';
import Editdestination from './component/admin/destination/Editdestination';
import Addhotel from './component/admin/hotels/Addhotel';
import Edithotel from './component/admin/hotels/Edithotel';
import Managehotel from './component/admin/hotels/Managehotel';
import Viewuser from './component/admin/adminviews/Viewuser';
import Adminmaster from './component/layout/Adminmaster';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import Login from './component/auth/Login';
import HotelMaster from './component/hotels/layouts/HotelMaster';
import HotelDashboard from './component/hotels/HotelDashboard';
import AddRooms from './component/hotels/rooms/AddRooms';
import ManageRooms from './component/hotels/rooms/ManageRooms';
import EditRooms from './component/hotels/rooms/EditRooms';
import ViewProfile from './component/hotels/accounts/ViewProfile';
import Register from './component/auth/Registration';
import Hotel from './component/pages/Hotel';
import Room from './component/pages/Room';
import AddBooking from './component/user/booking/AddBooking';
import ViewBookingUser from './component/user/booking/ViewBookingUser';
import ViewProfileUser from './component/pages/ViewProfile';
import AddRating from './component/user/ratings/AddRating';
import ViewRatings from './component/user/ratings/ViewRatings';
import ViewRatinsAdmin from './component/admin/adminviews/ViewRatingsAdmin';
import CheckRatings from './component/user/ratings/CheckRatings';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Master/>}>
          <Route path="/" element={<Index/>}/>
          <Route path="/About" element={<About/>}/> 
          <Route path="/Services" element={<Services/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Destination" element={<Designation/>}/>
          <Route path="/Booking" element={<Booking/>}/>
          <Route path="/Testimonial" element={<Testimonial/>}/>
          <Route path="/Travelguide" element={<Travelguide/>}/>
          <Route path="/Package" element={<Package/>}/>
          <Route path="/Package/:id" element={<Package/>}/>
          <Route path='/userhotel/:id' element={<Hotel/>}/>
          <Route path='/userhotel' element={<Hotel/>}/>
          <Route path='/rooms/:id' element={<Room/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/*" element={<Error/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/book/:id' element={<AddBooking/>}/>
          <Route path='/view-booking' element={<ViewBookingUser/>}/>
          <Route path='/view-profile' element={<ViewProfileUser/>}/>
          <Route path='/add-rating/:id' element={<AddRating/>} />
          <Route path='/view-rating' element={<ViewRatings/>}/>
          <Route path='/review/:id' element={<CheckRatings/>}/>
        </Route>
        <Route path='/Admin' element={<Adminmaster/>}>
          <Route path="/Admin" element={<Dashboard/>}/>
          <Route path="/Admin/Adddestination" element={<Adddestination/>}/>
          <Route path="/Admin/Managedestination" element={<Managedestination/>}/>
          <Route path="/Admin/Editdestination/:id" element={<Editdestination/>}/>
          <Route path="/Admin/Addhotel" element={<Addhotel/>}/>
          <Route path="/Admin/Managehotel" element={<Managehotel/>}/>
          <Route path="/Admin/Edithotel/:id" element={<Edithotel/>}/>
          <Route path="/Admin/Addpackages" element={<Addpackages/>}/>
          <Route path="/Admin/Managepackage" element={<Managepackage/>}/>
          <Route path="/Admin/editpackages/:id" element={<Updatapackage/>}/>
          <Route path="/Admin/Viewuser" element={<Viewuser/>}/>
          <Route path="/Admin/Vieworder" element={<Vieworder/>}/>
          <Route path="/Admin/Viewenquiry" element={<Viewenquiry/>}/>
          <Route path='/Admin/view-rating' element={<ViewRatinsAdmin/>}/>
        </Route>
        <Route path='/hotel' element={<HotelMaster/>}>
          <Route path='/hotel' element={<HotelDashboard/>}/>
          <Route path='/hotel/addrooms' element={<AddRooms/>}/>
          <Route path='/hotel/managerooms' element={<ManageRooms/>}/>
          <Route path='/hotel/editrooms/:id' element={<EditRooms/>}/>
          <Route path='/hotel/viewprofile' element={<ViewProfile/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  );
}

export default App;
