import { Link } from 'react-router-dom';
import ApiServices, { BASE_URL,styleObj} from '../../services/ApiServices';
import { useEffect, useState } from 'react';
import {toast} from "react-toastify"
import {HashLoader} from "react-spinners"
export default function ManageRooms(){
  const [data,setData]=useState([])
  const [load,setLoad]=useState(true)
  useEffect(()=>{
    let data={
        hotelId:sessionStorage.getItem("hotelId")
    }
      ApiServices.allRoom(data).then((res)=>{
          setData(res.data.data)
          setTimeout(()=>{setLoad(false)},1000)
      }).catch((err)=>{
          toast.error("Something went Wrong.Try again later!")
      })
  },[load])
  const deleteRoom=(id)=>{
      if(window.confirm("Do you really want to Delete?")){
      setLoad(true)
      let data={
          _id:id,
      }
      ApiServices.deleteRoom(data).then((res)=>{
          if(res.data.success){
              toast.success(res.data.message)
          }
          else{
              toast.error(res.data.message)
          }
          setTimeout(()=>{setLoad(false)},1000)
      }).catch((err)=>{
          toast.error("Something went Wrong.Try again later!")
          setTimeout(()=>{setLoad(false)},1000)
      })
  }
}
    return(
        <>
          <div className="container-fluid bg-primary py-5 mb-5 hero-header" style={{height:"60vh"}}>
            <div className="container py-5">
              <div className="row justify-content-center py-5">
                <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                  <h1 className="display-3 text-white animated slideInDown">
                    Manage Rooms
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
                        Rooms
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
              <table class="table table-hover table-striped">
                <thead className='table-primary'>
                  <tr>
                    <th scope="col">Sno</th>
                    <th scope="col">Image</th>
                    <th scope="col">Room Name/No.</th>
                    <th scope="col">Price</th>
                    <th scope="col" colSpan={2}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((el,index)=>(
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>
                        <img src={BASE_URL+el.image} style={{height:"100px",width:"100px"}}/>
                      </td>
                      <td>{el.name}</td>
                      <td>&#8377;{el.price}</td>
                      <td>
                        <Link to={`/hotel/editrooms/${el._id}`} className='btn btn-success'>
                          <i className='fa fa-edit'></i>
                        </Link>
                      </td>
                      <td>
                        <button onClick={()=>{deleteRoom(el._id)}} className='btn btn-danger'><i className='fa fa-trash'></i></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
    )
}