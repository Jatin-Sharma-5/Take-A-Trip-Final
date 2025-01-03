import { useState } from "react"
import {useParams} from "react-router-dom"
import {toast} from "react-toastify"
import {BarLoader} from "react-spinners"
import ApiServices from "../../services/ApiServices"
export default function ChangePassword({closeModal,userId}){
    const [oldPassword,setOldPassword]=useState("")
    const [newPassword,setNewPassword]=useState("")
    const [load,setLoad]=useState(false)
    const styleLoad={
        width:"100%"
    }
    const handleForm=(e)=>{
        e.preventDefault()
        setLoad(true)
        let data={
            _id:userId,
            currentPassword:oldPassword,
            newPassword:newPassword,
        }
        ApiServices.changePassword(data).then((res)=>{
            if(res.data.success){
                toast.success(res.data.message)
                
                setTimeout(()=>{
                    setLoad(false)
                   closeModal()
                
                },1000)
            }
            else{
                toast.error(res.data.message)
                setTimeout(()=>{
                    setLoad(false)
                
                },1000)
            }
        }).catch((err)=>{
            toast.error("Something went Wrong. Try again Later!")
            setTimeout(()=>{
                setLoad(false)
            
            },1000)
        })
    }
    return(
        <>
        <BarLoader loading={load} color="green" cssOverride={styleLoad}/>
              <div className={load?"disable-screen container my-3":"container"}>
                <div className="d-flex justify-content-end px-3">
                    <button className="btn btn-outline-danger" onClick={closeModal}>X</button>
                </div>
                <div className="row justify-content-center">
                <form method="post" onSubmit={handleForm}>
                    <div className="col-md-8 offset-md-2">
                        <div className="row">
                            <div className="col-md-12 form-group">
                            <label htmlFor="username">Old Password</label>
                            <input required
                                type="password"
                                id="username"
                                className="form-control form-control-lg"
                                value={oldPassword}
                                onChange={(e)=>{setOldPassword(e.target.value)}}
                            />
                            </div>
                            <div className="col-md-12 form-group">
                            <label htmlFor="pword">New Password</label>
                            <input required
                                type="password"
                                id="pword"
                                className="form-control form-control-lg"
                                value={newPassword}
                                onChange={(e)=>{setNewPassword(e.target.value)}}
                            />
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-6 offset-md-3">
                            <input required
                                type="submit"
                                defaultValue="Log In"
                                className="btn btn-primary btn-lg px-5"
                            />
                            </div>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </>
    )
}