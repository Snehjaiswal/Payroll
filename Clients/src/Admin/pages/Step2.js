import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const Step2 = props => {
  if (props.currentStep !== 2) {
    return null;
  }

const DepartmentType = ["Select Department Type","HR","Technical","Sales","Marketing"]


  return (
    <>
      <div className="Company-details">

        <h3 className="text-left">Company Details</h3>    <hr />

        {/* <div className="row">
  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div className="form-group">
      <label className="profile_details_text">Employee Id:</label>
      <input type="email" name="email" className="form-control" placeholder="Email Address" />
    </div>
  </div>
</div> */}

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="form-group">
              <label className="profile_details_text">Department:</label>
              <select name="gender" className="form-control" value required>
                {DepartmentType.map((val) => {
                  return <option value={val}>{val}</option>

                })}
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="form-group">
              <label className="profile_details_text">Designation (Position):</label>
              <input type="text" name="monthly_income" className="form-control" placeholder="Enter Your Designation" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="form-group">
              <label className="profile_details_text">Date Of Joining:</label>
              <input type="text" name="monthly_income" className="form-control" placeholder="Enter Date Of Joining" />
            </div>
          </div>
        </div>   <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="form-group">
              <label className="profile_details_text">Status:</label>
              <select name="gender" className="form-control" value required>
                <option >Select Job Type</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>

              </select>
            </div>
          </div>
        </div>
        <br />

      </div>
    </>
  );
};

export default Step2;
