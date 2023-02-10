import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";


import SideBar1 from "../Admin/components/Sidebar/SideBar1";
import Navbar from "../Admin/components/Sidebar/Navbar";
import Login from "../Login";

import CalendarPage from "../Admin/Calender/ReactBigCalendar";
import ClientDashboard from '../Employees/Dashboard'

function Clientrout() {
    return (
        <>



            <SideBar1>
                <Navbar />
                <Routes>

                    {/* Employee  */}
                    <Route path="/dashboard" element={<ClientDashboard />} />
                    <Route path="/holiday" element={<CalendarPage />} />

                </Routes>
            </SideBar1>

        </>
    )
}

export default Clientrout