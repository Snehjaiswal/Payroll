
import "../src/Css/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useLocation } from "react-router-dom";

import SideBar from "../src/Admin/components/Sidebar/SideBar";
import Navbar from "../src/Admin/components/Sidebar/Navbar";
import Login from "./Login";


import AdminRoute from '../src/Routing/Adminrout'
import Clientrout from "./Routing/Clientrout";


function App() {

  var roleId = localStorage.getItem('Role_id')
  console.log("ds",localStorage.getItem('Role_id'))
  const location = useLocation()
  console.log("location", location);

  return (
    <>

    
      <div>

        <Routes>

          <Route path="/*" element={(roleId == 1) ? <AdminRoute />  : (roleId == 0) ? <Clientrout /> :<Login /> } />

          {/* <Route path="/*" element={(roleId == 0) ? <Clientrout /> : <Login />} /> */}

        </Routes>  

      </div>

    </>
  )
}

export default App;
