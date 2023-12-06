import axios from "axios";
import { useState } from "react";
import { addUser } from "../../hooks/userSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function CreateUser() {
  const [url, setUrl] = useState();
  const [email, setEmail] = useState();
  const [price, setPrice] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url && price) {
      axios
        .post("http://localhost:3002/api/create", { url, email, price })
        .then((res) => {
          dispatch(addUser(res.data));
          toast.success("record added successfully");
          navigate("/user");
        })
        .catch((err) => console.log(err));
    } else {
      toast.error("all fields are mendatory");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <form onSubmit={handleSubmit}>
            <h2>Add User</h2>
            <div className="mb-2">
              <label htmlFor="">Image URL</label>
              <input
                type="text"
                placeholder="paste image url"
                className="form-control"
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Price</label>
              <input
                type="text"
                placeholder="Enter price"
                className="form-control"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <button className="btn btn-success">Submit</button>
            <Link to={"/user"}>
              <button className="btn btn-outline-secondary">
                Back to List
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateUser;
