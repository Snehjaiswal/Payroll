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
      <input type="email" name="email" className="form-control" placeholder="Email Address" />
    </div>
  </div>
</div>

<div className="row">
  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div className="form-group" style={{ "display": "flex" }}>
      <div>
        <label className="profile_details_text">HRA</label>
        <input type="email" name="email" className="form-control" placeholder="Dduction :" />
      </div>
      <div>
        <label className="profile_details_text">Amount:</label>
        <input type="email" name="email" className="form-control" placeholder="Email Address" />

      </div>

    </div>
  </div>
</div>
<div className="row">
  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div className="form-group" style={{ "display": "flex" }}>
      <div>
        <label className="profile_details_text">HRA</label>
        <input type="email" name="email" className="form-control" placeholder="Dduction :" />
      </div>
      <div>
        <label className="profile_details_text">Amount:</label>
        <input type="email" name="email" className="form-control" placeholder="Email Address" />

      </div>

    </div>
  </div>
</div>
<div className="row">
  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div className="form-group">
      <label className="profile_details_text">Total Salary:</label>
      <input type="email" name="email" className="form-control" placeholder="Email Address" />
    </div>
  </div>
</div>
<br />

</div>
    </>
  );
};

export default Step4;
