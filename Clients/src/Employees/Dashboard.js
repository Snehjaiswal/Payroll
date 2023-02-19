import React, { useState, useEffect } from 'react'
import { Button } from 'reactstrap'
import axios from 'axios';

function Dashboard() {
  const [CheckStatus, setCheckStatus] = useState("")
  const [statusData, setstatusData] = useState([])
  const [refresh, setrefresh] = useState(false)

  console.log("statusData",CheckStatus);
  const EmployeeId = localStorage.getItem('id')

  const CheckIn = () => {

    var date = new Date();
    var TodatyDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`

    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
    if (h == 0) {
      h = 12;
    }
    if (h > 12) {
      h = h - 12;
      session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var CheckIn = h + ":" + m + ":" + s + ""
    // console.log(TodatyDate)
    // console.log(CheckIn)
    // console.log(EmployeeId)


    axios({
      method: 'post',
      url: 'http://localhost:5500/add/checkin',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        "td_date": TodatyDate,
        "checkIn": CheckIn,
        "checkOut": "00:00:00",
        "userid": EmployeeId
      }
    })
      .then(function (response) {

        if (response.data.msg == "Success") {
          setrefresh(!refresh)
        }
      })


  }


  const CheckOut = () => {

    var date = new Date();
    var TodatyDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`

    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
    if (h == 0) {
      h = 12;
    }
    if (h > 12) {
      h = h - 12;
      session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var CheckIn = h + ":" + m + ":" + s + ""
    // console.log(TodatyDate)
    // console.log(CheckIn)
    // console.log(EmployeeId)


    axios({
      method: 'post',
      url: 'http://localhost:5500/add/checkOut',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        "td_date": TodatyDate,
        // "checkIn": CheckIn,
        "checkOut": CheckIn,
        "userid": EmployeeId
      }
    })
      .then(function (response) {
        if (response.data.msg == "Success") {
          setrefresh(!refresh)
        }
      })


  }

  const FindCheckStatus = () => {

    axios({
      method: 'post',
      url: 'http://localhost:5500/find/check',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        "Empid": EmployeeId
      }
    })
      .then(function (response) {
        setstatusData(response.data.data)
        if (response.data.data != null) {

          if (response.data.data.status == "0") {
            setCheckStatus(response.data.data.status)
          } else if (response.data.data.status == "1") {
            setCheckStatus(response.data.data.status)
          }
        } else {
          setCheckStatus('1')
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }



  useEffect(() => {
    FindCheckStatus()
  }, [refresh]);

  return (
    <>

      <div>


        <div className="container pt-1">
          <div className="row align-items-stretch">


            <div className="c-dashboardInfo col-lg-3 col-md-6">
              <div className="wrap">
                {CheckStatus && CheckStatus == 0 ?
                  <h6 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title"> End at : </h6>
                  :
                  <h6 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title"> started at :  </h6>

                }

                <span className="hind-font caption-12 c-dashboardInfo__count">
                  <i class="fa-light fa-clock-three"></i>
                  <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                    {CheckStatus && CheckStatus == 1 || CheckStatus && CheckStatus == "" ?
                      <label class="btn btn-outline-light" for="btnradio1" onClick={() => { CheckIn() }}><i class="fa fa-sign-in"></i> Clock In</label>
                      :

                      <label class="btn btn-outline-light" for="btnradio1" onClick={() => { CheckOut() }}><i class="fa fa-sign-out"></i> Clock Out</label>
                    }
                  </div>
                </span>
              </div>
            </div>
            <div className="c-dashboardInfo col-lg-3 col-md-6">
              <div className="wrap">
                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Open Task
                </h4><span className="hind-font caption-12 c-dashboardInfo__count">{10} <i className="fa-solid fa-users" style={{ "marginLeft": "15px" }}></i></span>
              </div>
            </div>
            <div className="c-dashboardInfo col-lg-3 col-md-6">
              <div className="wrap">
                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Events Today
                </h4><span className="hind-font caption-12 c-dashboardInfo__count">4
                  <i class="fa-solid fa-calendar-days" style={{ "marginLeft": "15px" }}></i>
                </span>
              </div>
            </div>
            <div className="c-dashboardInfo col-lg-3 col-md-6">
              <div className="wrap">
                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Salary
                </h4><span className="hind-font caption-12 c-dashboardInfo__count">40000
                  <i class="fa-regular fa-money-check-dollar" style={{ "marginLeft": "15px" }}></i>

                </span>
              </div>
            </div>


          </div>
        </div>





      </div>




    </>
  )
}

export default Dashboard