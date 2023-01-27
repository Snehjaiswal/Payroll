import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "./components/Sidebar/SideBar";
import Navbar from "./components/Sidebar/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";

import AddEmployee from "./pages/AddEmployee";
import ManageEmployees from "./pages/ManageEmployee";
import View from "./pages/View";

import AddDepartment from "./pages/AddDepartment"; 
import ManageDepartment from "./pages/ManageDepartment";

import DailyAtendence from "./pages/DailyAtendence";
import AttendenceReport from "./pages/AttendenceReport";

import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";

function App() {
  return (
    <>

      <Router>
        <SideBar>
      <Navbar/>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employee/add" element={<AddEmployee />} />
            <Route path="/employee/manage" element={<ManageEmployees />} />
            <Route path="/employee/view" element={<View />} />

            <Route path="/department/add" element={<AddDepartment />} />
            <Route path="/department/manage" element={<ManageDepartment />} />

            <Route path="/attendence/daily" element={<DailyAtendence />} />
            <Route path="/attendence/report" element={<AttendenceReport />} />







            <Route path="/messages" element={<Messages />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/file-manager" element={<FileManager />} />
            <Route path="/order" element={<Order />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/settings" element={<Setting />} />

            <Route path="*" element={<> not found</>} />
          </Routes>
        </SideBar>
      </Router>
    </>

  );
}

export default App;
