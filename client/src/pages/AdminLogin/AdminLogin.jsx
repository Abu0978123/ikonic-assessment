import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const AdminLogin = ({ setAdmin}) => {

    const Navigate = useNavigate()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:3002/api/admin/login", user)
        .then(res => {
            if(user){
                if(res.data.message === "Login Successfull" ) {
                    alert(res.data.message)
                    setAdmin(res.data.user)
                    Navigate("/admin")
                } else {
                    alert('email and password not matched')
                }
            } else {
                alert("User not registered")
            }
           
        })
    }

    return (
        <div className="App">
            <ToastContainer/>
        <div className="login">
            <h1>Admin Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => Navigate("/admin/register")}>Register</div>
        </div>
        </div>
    )
}

export default AdminLogin