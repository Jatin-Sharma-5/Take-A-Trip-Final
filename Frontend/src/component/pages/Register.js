import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Register(){

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [st, setSt] = useState('')
    const [quali, setQuali] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [phone, setPhone] = useState('')
    const nav = useNavigate()

    const handleForm = (e) => {
            e.preventDefault();

            let data = {
                name: name,
                email: email,
                password: password,
                state: st,
                qualification: quali,
                address: address,
                city: city,
                phone: phone
            }

            axios.post("https://testapi.o7services.com/api/register",data).then((res)=>{
                if(res.data.success){
                    toast.success(res.data.message)
                    console.log(res.data);
                    nav("/Login")
                }
                else{
                    toast.error(res.data.message)
                    console.log(res.data);
                }
            }).catch((err)=>{
                console.log(err);
            })
    }

  return (
    <>
     <div className="bg p-5 ">
        <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
        <form onSubmit={handleForm}>
        <h1>Registration Form</h1>
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
               <label htmlFor="exampleInputPassword5" className="form-label">state</label>
               <input type="text" className="form-control" id="exampleInputPassword5" value={st} onChange={(e) => setSt(e.target.value)}/>
             </div>

             <div className="mb-3">
               <label htmlFor="exampleInputPassword6" className="form-label">Qualification</label>
               <input type="text" className="form-control" id="exampleInputPassword6" value={quali} onChange={(e) => setQuali(e.target.value)}/>
             </div>

             <div className="mb-3">
               <label htmlFor="exampleInputPassword7" className="form-label">Address</label>
               <input type="text" className="form-control" id="exampleInputPassword7" value={address} onChange={(e) => setAddress(e.target.value)}/>
             </div>

             <div className="mb-3">
               <label htmlFor="exampleInputPassword8" className="form-label">City</label>
               <input type="text" className="form-control" id="exampleInputPassword8" value={city} onChange={(e) => setCity(e.target.value)}/>
             </div>

             <div className="mb-3">
               <label htmlFor="exampleInputPassword12" className="form-label">Phone</label>
               <input type="text" className="form-control" id="exampleInputPassword12" value={phone} onChange={(e) => setPhone(e.target.value)}/>
             </div>

              <button type="submit" className="btn btn-primary sub">Submit</button>
           </form>
        </div>
        <div className="col-4"></div>
        </div>
        </div>
    </>
  )
}

