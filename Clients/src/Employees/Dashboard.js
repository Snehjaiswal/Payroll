import React from 'react'
import { Button } from 'reactstrap'

function Dashboard() {
  return (
    <>

      <div>


        <div className="container pt-1">
          <div className="row align-items-stretch">


            <div className="c-dashboardInfo col-lg-3 col-md-6">
              <div className="wrap">
                <h6 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title"> started at : 09:03 AM </h6>
                {/* <h6 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title"> End at : 09:03 AM </h6> */}

                <span className="hind-font caption-12 c-dashboardInfo__count">
                  <i class="fa-light fa-clock-three"></i>
                  <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                    <label class="btn btn-outline-light" for="btnradio1"><i class="fa fa-sign-out"></i> Clock Out</label> </div>
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