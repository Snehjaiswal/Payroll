import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";

const Step3 = props => {
  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <>
       <div className="Company-details">

<h3 className="text-left">Company Details</h3>    <hr />

<div className="row">
  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div className="form-group">
      <label className="profile_details_text">Employee Id:</label>
      <input type="email" name="email" className="form-control" placeholder="Email Address" />
    </div>
  </div>
</div>

<div className="row">
  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div className="form-group">
      <label className="profile_details_text">Department:</label>
      <input type="email" name="email" className="form-control" placeholder="Email Address" />
    </div>
  </div>
</div>
<div className="row">
  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div className="form-group">
      <label className="profile_details_text">Designation:</label>
      <input type="text" name="monthly_income" className="form-control" placeholder="First Name" />
    </div>
  </div>
</div>
<div className="row">
  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div className="form-group">
      <label className="profile_details_text">Date Of Joining:</label>
      <input type="text" name="monthly_income" className="form-control" placeholder="First Name" />
    </div>
  </div>
</div>   <div className="row">
  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div className="form-group">
      <label className="profile_details_text">Status:</label>
      <input type="text" name="monthly_income" className="form-control" placeholder="First Name" />
    </div>
  </div>
</div>
<br />

</div>
    </>
  );
};

export default Step3;
