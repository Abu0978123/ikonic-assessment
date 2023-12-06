import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CreateUser from "./pages/AddNewUser/CreateUser";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "./hooks/userSlice";
import UpdateUser from "./pages/Update/UpdateUser";
import User from "./pages/User/User";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/UserLogin/Login";
import Register from "./pages/UserRegister/Register";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import AdminRegister from "./pages/AdminRegister/AdminRegister";

function App() {
  const [user, setLoginUser] = useState({});
  const [admin, setAdmin] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3002/api/");
        dispatch(getUser(response.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* conditional Routes of user login logout  */}
        {user && user._id ? (
          <Route path="/user" 
          element={<User setLoginUser={setLoginUser} />} />
        ) : (
          <Route
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />
        )}

        {/* conditional Routes of Admin login logout */}
        {admin && admin._id ? (
          <Route path="/admin" 
          element={<Admin setAdmin={setAdmin} />} />
        ) : (
          <Route
            path="/admin/login"
            element={<AdminLogin setAdmin={setAdmin} />}
          />
        )}


        <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
        {/* <Route path='/user' element={<User />}/> */}
        <Route path="/register" element={<Register />} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister/>} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/edit/:id" element={<UpdateUser />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
