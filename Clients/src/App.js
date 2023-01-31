
import "../src/Css/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useLocation } from "react-router-dom";

import SideBar from "../src/Admin/components/Sidebar/SideBar";
import Navbar from "../src/Admin/components/Sidebar/Navbar";
import Login from "./Login";


import MasterForm from "./Admin/pages/MasterForm";

import Dashboard from "./Admin/pages/Dashboard";

// import AddEmployee from "./Admin/pages/AddEmployee";
import ManageEmployees from "./Admin/pages/ManageEmployee";
import View from "./Admin/pages/View";

import AddDepartment from "./Admin/pages/AddDepartment";
import ManageDepartment from "./Admin/pages/ManageDepartment";

import DailyAtendence from "./Admin/pages/DailyAtendence";
import AttendenceReport from "./Admin/pages/AttendenceReport";

import AddLeave from "./Admin/pages/AddLeave";
import ManageLeave from "./Admin/pages/ManageLeave";

import AddPayslip from "./Admin/pages/AddPayslip";
import PayslipList from "./Admin/pages/PayslipList";

function App() {

  const location = useLocation()
  console.log("location", location);
  return (
    <>



      <SideBar>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Dashboard />} />
          <Route path="/employee/add" element={<><MasterForm /></>} />
          <Route path="/employee/manage" element={<ManageEmployees />} />
          <Route path="/employee/view" element={<View />} />

          <Route path="/department/add" element={<AddDepartment />} />
          <Route path="/department/manage" element={<ManageDepartment />} />

          <Route path="/attendence/daily" element={<DailyAtendence />} />
          <Route path="/attendence/report" element={<AttendenceReport />} />

          <Route path="/leave/add" element={<AddLeave />} />
          <Route path="/leave/manage" element={<ManageLeave />} />

          <Route path="/payslip/add" element={<AddPayslip />} />
          <Route path="payslip/list" element={<PayslipList />} />




          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>




    </>
  )
}

export default App;
