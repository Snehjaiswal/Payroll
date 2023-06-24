import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import '../../Css/dashboard.css'

import {url} from '../../Utils/Config'


const Dashboard = () => {
const [DeparmentCount,setDeparmentCount] = useState('')
const [EmployeeCount,setEmployeeCount] = useState('')


  const Role_id = localStorage.getItem('Role_id')
  const navigate = useNavigate()

  let dashboardData =()=>{
    axios({
      method: 'get',
      url: url+'/dashboard',
     
    })
    .then(function (response) {
      // console.log(response.data)
      setDeparmentCount(response.data.msg.DeparmentData)
      setEmployeeCount(response.data.msg.EmployeeData)

    })
    .catch(function (error) {
      console.log(error);
    })

  }

  useEffect(() => {

    dashboardData()
  }, []);

  return (
    <>



      <div id="root">
        <div className="container pt-5">
          <div className="row align-items-stretch">


            <div className="c-dashboardInfo col-lg-3 col-md-6">
              <div className="wrap">
                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Deparments
                </h4><span className="hind-font caption-12 c-dashboardInfo__count">{DeparmentCount}<i className="fa-regular fa-building-user" style={{"marginLeft":"15px"}}></i></span>
              </div>
            </div>
            <div className="c-dashboardInfo col-lg-3 col-md-6">
              <div className="wrap">
                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Employees
                </h4><span className="hind-font caption-12 c-dashboardInfo__count">{EmployeeCount} <i className="fa-solid fa-users" style={{"marginLeft":"15px"}}></i></span>
              </div>
            </div>
            <div className="c-dashboardInfo col-lg-3 col-md-6">
              <div className="wrap">
                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Present Today
                </h4><span className="hind-font caption-12 c-dashboardInfo__count">4 <i className="fa-solid fa-user" style={{"marginLeft":"15px"}}></i>
                </span>
              </div>
            </div>
            <div className="c-dashboardInfo col-lg-3 col-md-6">
              <div className="wrap">
                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Payslip Month
                </h4><span className="hind-font caption-12 c-dashboardInfo__count">4 <i className="fa-solid fa-bookmark" style={{"marginLeft":"15px"}}></i></span>
              </div>
            </div>


          </div>
        </div>
      </div>




    </>
  )
};

export default Dashboard;
