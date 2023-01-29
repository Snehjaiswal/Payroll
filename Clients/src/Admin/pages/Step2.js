import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const Step2 = props => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <>
  <div className="Account-details">

<h3 className="text-left">Account Details</h3>    <hr />

<div className="row">
  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div className="form-group">
      <label className="profile_details_text">Email:</label>
      <input type="email" name="email" className="form-control" placeholder="Email Address" />
    </div>
  </div>
</div>

<div className="row">
  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div className="form-group">
      <label className="profile_details_text">Password:</label>
      <input type="email" name="email" className="form-control" placeholder="Email Address" />
    </div>
  </div>
</div>
<div className="row">
  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div className="form-group">
      <label className="profile_details_text">Confirm Password:</label>
      <input type="text" name="monthly_income" className="form-control" placeholder="First Name" />
    </div>
  </div>
</div>
<br />

</div>
    </>
  );
};

export default Step2;
