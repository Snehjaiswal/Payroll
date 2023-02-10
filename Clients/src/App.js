
import "../src/Css/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useLocation } from "react-router-dom";

import SideBar from "../src/Admin/components/Sidebar/SideBar";
import Navbar from "../src/Admin/components/Sidebar/Navbar";
import Login from "./Login";


import MasterForm from "./Admin/pages/MasterForm";
import Dashboard from "./Admin/pages/Dashboard";
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
import CalendarPage from "./Admin/Calender/ReactBigCalendar";


import ClientDashboard from '../src/Employees/Dashboard'

function App() {

  const location = useLocation()
  console.log("location", location);
  return (
    <>

    
      { location.pathname == '/' ? <Login /> :location.pathname != '/login' ?


        <SideBar>
          <Navbar />
          <Routes>
            {/* Admin */}
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/employee/add" element={<><MasterForm /></>} />
            <Route path="/admin/employee/manage" element={<ManageEmployees />} />
            <Route path="/admin/employee/view" element={<View />} />
            <Route path="/admin/department/add" element={<AddDepartment />} />
            <Route path="/admin/department/manage" element={<ManageDepartment />} />
            <Route path="/admin/attendence/daily" element={<DailyAtendence />} />
            <Route path="/admin/attendence/report" element={<AttendenceReport />} />
            <Route path="/admin/leave/add" element={<AddLeave />} />
            <Route path="/admin/leave/manage" element={<ManageLeave />} />
            <Route path="/admin/holiday" element={<CalendarPage />} />
            <Route path="/admin/payslip/add" element={<AddPayslip />} />
            <Route path="/admin/payslip/list" element={<PayslipList />} />


            {/* Employee  */}
            <Route path="/dashboard" element={<ClientDashboard />} />
            <Route path="/holiday" element={<CalendarPage />} />

            



           
          </Routes>
        </SideBar>
        :

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="" element={<Login />} />
          <Route path="*" element={<>not found</>} />
        </Routes>

      }




    </>
  )
}

export default App;
