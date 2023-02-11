import React, { useState } from 'react';
import { FormGroup, Label, Input } from "reactstrap";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Editemployee() {

    const [startDate, setStartDate] = useState(new Date().toISOString().split("T")[0]);

    const DepartmentType = ["Select Department Type", "HR", "Technical", "Sales", "Marketing"]

    const AccountType = ["Select Account Type", "Building Society Roll Number", "Checking", "Current Account", "Giro Account", "Salary Account", "Savings"]

    const BankName = ["Bank of Baroda", "Bank of India", "Bank of Maharashtra", "Canara Bank", "Central Bank of India", "Indian Bank", "Indian Overseas Bank", "Punjab & Sind Bank", "Punjab National Bank", "State Bank of India", "UCO Bank", "Union Bank of India", "Axis Bank", "HDFC Bank", "ICICI Bank", "Induslnd Bank", "IDFC First Bank", "Kotak Mahindra Bank"]



    return (
        <>


            <Form>
                <div className="Employee-details">
                    <h3 className="text-left">Employee Details</h3>    <hr />
                    <div style={{ "display": "flex" }}>

                        <div className="col-sm-5 edit_information" >
                            <div className="Account-details">

                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="form-group">
                                            <label className="profile_details_text">First Name:</label>
                                            <input type="text" name="first_name" className="form-control" style={{ "textTransform": "capitalize" }} placeholder="First Name" />
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
                                            {/* <input type="date" name="bday" max={startDate} className="form-control"  /> */}
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>

                        <div className="col-sm-6 ms-auto edit_information"  >


                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="formFileMultiple" className="form-label">Multiple files input example</label>
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

                        </div>
                    </div>

                </div>


                <div className="Company-details">

                    <h3 className="text-left">Company Details</h3>    <hr />


                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="profile_details_text">Department:</label>
                                <select name="gender" className="form-control" value required>
                                    {DepartmentType.map((val) => {
                                        return <option defaultValue={val}>{val}</option>

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
                                <input type="date" name="bday" max={startDate} className="form-control" />
                            </div>
                        </div>
                    </div>   <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="profile_details_text">Status:</label>
                                <select name="gender" className="form-control" value required>
                                    <option >Select Job Type</option>
                                    <option defaultValue="Full-Time">Full-Time</option>
                                    <option defaultValue="Part-Time">Part-Time</option>

                                </select>
                            </div>
                        </div>
                    </div>
                    <br />

                </div>

                <Container>
                    <Row>
                        <Col style={{ "width": "510px" }} >
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
                        </Col>

                        <Col style={{ "width": "510px" }}>
                            <div className="Finanial-details">

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

                            </div></Col>
                    </Row>

                </Container>

            </Form>


        </>
    )
}

export default Editemployee