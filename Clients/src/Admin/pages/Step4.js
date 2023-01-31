import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";

const Step4 = props => {
  if (props.currentStep !== 4) {
    return null;
  }

  return (
    <>
      <div className="Account-details">

        <h3 className="text-left">Financial Details</h3>    <hr />

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="form-group">
              <label className="profile_details_text">Basic Salary:</label>
              <input type="email" name="email" className="form-control" placeholder="Basic Salary" />
            </div>
          </div>
        </div>

      

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="form-group">
              <label className="profile_details_text">Increment :</label>
              <select name="gender" className="form-control" value required>
                <option >How many increments will there be in a year</option>
                <option defaultValue="1">1</option>
                <option defaultValue="2">2</option>
                <option defaultValue="3">3</option>
                <option defaultValue="4">4</option>

              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="form-group">
              <label className="profile_details_text">Increment % Salary:</label>
              <input type="email" name="email" className="form-control" placeholder="Increment % Salary" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="form-group">
              <label className="profile_details_text">Total Salary:</label>
              <input type="email" name="email" className="form-control" placeholder="Total Salary" />
            </div>
          </div>
        </div>

        <br />

      </div>
    </>
  );
};

export default Step4;
