import axios from "axios";
import { useEffect, useState } from "react";
import { addUser, updateUser } from "../../hooks/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser() {
    const {id} = useParams()
   
    const [url, setUrl] = useState()
    const [email, setEmail] = useState()
    const [price, setPrice] = useState()
    
    const users = useSelector(state => state.users.users)
    
    useEffect(()=> {
        const user = users.find(u => u.id === id)
        setUrl(user.url)
        setEmail(user.email)
        setPrice(user.price)
    }, [])

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3002/api/update/'+id, {url, email, price})
        .then(res => {
            dispatch(updateUser({id, url, email, price}))
            navigate('/user')
        })
        .catch(err => console.log(err))
    }

    return ( 
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleUpdate}>
          <h2>Update User</h2>
          <div className="mb-2">
            <label htmlFor="">Image URL</label>
            <input
              type="text"
              placeholder="paste image url"
              className="form-control"
              defaultValue={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Price</label>
            <input
              type="text"
              placeholder="Enter Price"
              className="form-control"
              defaultValue={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
     );
}

export default UpdateUser;