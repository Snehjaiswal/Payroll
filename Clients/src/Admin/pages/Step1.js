import React, { useState } from 'react';
import { FormGroup, Label, Input } from "reactstrap";
// import DatePicker from 'react-datepicker';

const Step1 = props => {
  const [startDate, setStartDate] = useState( new Date().toISOString().split("T")[0]);
  // console.log("startDate", startDate);

  const [txt, setTxt] = useState('');
  if (props.currentStep !== 1) {
    return null;
  }


  const onInputChange = e => {
    const { value } = e.target;
    // console.log('Input value: ', value);

    const re = /^[A-Za-z]+$/;
    if (value === "" || re.test(value)) {
      setTxt(value);
    }
  }

  return (
    <>

      <div style={{ "display": "flex" }}>
        <div className="col-sm-5 edit_information" >
          <div className="Account-details">

            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="form-group">
                  <label className="profile_details_text">First Name:</label>
                  <input type="text" name="first_name" className="form-control" style={{ "textTransform": "capitalize" }} defaultValue={txt} onChange={onInputChange} placeholder="First Name" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="form-group">
                  <label className="profile_details_text">Last Name: </label>
                  <input type="text" name="last_name" className="form-control" placeholder="Last Name" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="form-group">
                  <label className="profile_details_text">Mobile Number:</label>
                  <input type="tel" name="phone" className="form-control" placeholder="Mobile Number" pattern="[0-9]{10}" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="form-group">
                  <label className="profile_details_text">Email :</label>
                  <input type="tel" name="phone" className="form-control" placeholder="Enter Your Email" pattern="[0-9]{10}" />
                </div>
              </div>
            </div>


            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="form-group">
                  <label className="profile_details_text">Father Name:</label>
                  <input type="tel" name="phone" className="form-control" placeholder="Father Name" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="form-group">
                  <label className="profile_details_text">Gender:</label>
                  <select name="gender" className="form-control" value required>
                    <option defaultValue="Male">Male</option>
                    <option defaultValue="Female">Female</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="form-group">
                  <label className="profile_details_text">Date Of Birth:</label>
                  <input type="date" name="bday" max={startDate} className="form-control"  />
                </div>
              </div>
            </div>


          </div>

        </div>

        <div className="col-sm-6 ms-auto edit_information"  >


          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="form-group">
                <label htmlhtmlFor="formFileMultiple" className="form-label">Multiple files input example</label>
                <input className="form-control" type="file" id="formFileMultiple" multiple />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="form-group">
                <label className="profile_details_text">Phone Number:</label>
                <input type="tel" name="phone" className="form-control" placeholder="Enter Your Phone Number" pattern="[0-9]{10}" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="form-group">
                <label className="profile_details_text">Refrence Phone Numer:</label>
                <input type="text" name="nationality" className="form-control" placeholder="Enter Your Phone Number" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="form-group">
                <label className="profile_details_text">Martial Status:</label>
                <select name="gender" className="form-control" value required>
                  <option defaultValue="Male">Married</option>
                  <option defaultValue="Female">Un-married</option>
                </select>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="form-group">
                <label className="profile_details_text">Local Address:</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </div>
          </div>

          {/* <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="form-group">
                <label className="profile_details_text">Parmanent Address:</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>


              </div>
            </div>
          </div> */}
        </div>

      </div>
    </>
  );
};

export default Step1;
