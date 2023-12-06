import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../../hooks/userSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple, 
} from "mdb-react-ui-kit";

function Admin({setAdmin}) {

    const users = useSelector(state => state.users.users)
    const dispatch = useDispatch()
    const handleDelete = (id) => {
      axios.delete('http://localhost:3002/api/deleteuser/'+id)
      .then(res => {
          dispatch(deleteUser({id}))
      }).catch(err => console.log(err))
  }

  const notify = () => alert('logout success');

  return (
   <>
    <ToastContainer/>
    <MDBContainer  className="my-5 text-center">
      <h4 className="mt-4 mb-2">
        <strong>Admin Dashboard</strong>
      </h4>
      <Link to={'/'}>
      <button className="btn btn-info mb-2" onClick={() => setAdmin({})} >Log out</button>
      </Link>
      <MDBRow>
        {users.map((user) => {
          return (
            <MDBCol md="12" lg="4" className="mb-4" key={user.id}>
              <MDBRipple
                rippleColor="dark"
                rippleTag="div"
                className="bg-image rounded hover-zoom shadow-1-strong"
              >
                <img
                  src={user.url}
                  fluid="true"
                  className="w-100"
                />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  <div className="d-flex justify-content-between align-items-start h-100">
                    <h5>
                      <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                        ${user.price}
                      </span>
                    </h5>
                    <Link to={`/edit/${user.id}`} className="btn btn-sm btn-success m-3 ">Update</Link>
                    <button onClick={() => handleDelete(user.id)} className="btn btn-sm btn-danger m-3">Delete</button>      
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </MDBRipple>
            </MDBCol>
          );
        })}
      </MDBRow>
    </MDBContainer>
    </>
  );
}

export default Admin;
 