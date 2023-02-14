import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";


import SideBar1 from "../Admin/components/Sidebar/SideBar1";
import Navbar from "../Admin/components/Sidebar/Navbar";
import Login from "../Login";

import CalendarPage from "../Admin/Calender/ReactBigCalendar";
import ClientDashboard from '../Employees/Dashboard'
import Timecard from '../Employees/Timecard';
import Timeline from '../../src/Employees/Timeline'
import Events from '../Employees/Events'
import Notes from '../Employees/Notes'
import Messages from '../Employees/Messages'
import Leave from '../Employees/Leave'
import Announcement  from '../Employees/Annoucment'
import Help from '../Employees/Help'
import Settings from '../Employees/Settings'
import Hrpolicy from '../Employees/Hrpolicy'

function Clientrout() {
    return (
        <>
            <SideBar1>
                <Navbar />
                <Routes>
                    {/* Employee  */}
                    <Route path="/dashboard" element={<ClientDashboard />} />
                    <Route path="/time-cards" element={<Timecard />} />
                    <Route path="/holiday" element={<CalendarPage />} />
                    <Route path="/timeline" element={<Timeline />} />
                    <Route path="/events" element={<CalendarPage />} />
                    <Route path="/notes" element={<Notes />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/leave" element={<Leave />} />
                    <Route path="/announcements" element={<Announcement />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/hrpolicy" element={<Hrpolicy />} />
                   
                </Routes>
            </SideBar1>

        </>
    )
}

export default Clientrout