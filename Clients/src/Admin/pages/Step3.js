import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";

const Step3 = props => {
  if (props.currentStep !== 3) {
    return null;
  }

  const AccountType = ["Select Account Type", "Building Society Roll Number", "Checking", "Current Account", "Giro Account", "Salary Account", "Savings"]

const BankName = ["Bank of Baroda", "Bank of India", "Bank of Maharashtra", "Canara Bank" ,"Central Bank of India", "Indian Bank", "Indian Overseas Bank", "Punjab & Sind Bank", "Punjab National Bank", "State Bank of India", "UCO Bank", "Union Bank of India","Axis Bank","HDFC Bank","ICICI Bank","Induslnd Bank","IDFC First Bank","Kotak Mahindra Bank"]



  return (
    <>



      <div className="Account-details">

        <h3 className="text-left">Account Details</h3>    <hr />

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="form-group">
            <select name="gender" className="form-control" value required>
            <option >Bank Name</option>
              {BankName.map((val) => {
                  return <option defaultValue={val}>{val}</option>

                })}
                   </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="form-group">
              <label className="profile_details_text">Branch Name:</label>
              <input type="email" name="email" className="form-control" placeholder="Enter Your Branch Name" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="form-group">
              <label className="profile_details_text">Account type:</label>

              <select name="gender" className="form-control" value required>
                {AccountType.map((val) => {
                  return <option defaultValue={val}>{val}</option>

                })}
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="form-group">
              <label className="profile_details_text">Account Number:</label>
              <input type="number" name="monthly_income" className="form-control" placeholder="Enter Your Account Number" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="form-group">
              <label className="profile_details_text">IFSC Code:</label>
              <input type="number" name="monthly_income" className="form-control" placeholder="Enter Your IFSC Code" />
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Step3;
