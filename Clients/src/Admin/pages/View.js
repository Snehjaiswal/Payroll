import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import { useNavigate, useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function View() {
  const [modal, setModal] = useState(1)
  const [EmpInfo, setEmpInfo] = useState([])

  const { id } = useParams()

  const columns = [
    {
      name: 'Serial',
      selector: row => row.id,
    },
    {
      name: 'Name',
      width: '150px !important',
      selector: row => row.title,
    },
    {
      name: 'Email',
      width: '150px !important',
      selector: row => row.email,
    },
    {
      name: 'Department',
      width: '160px !important',
      selector: row => row.title,
    },
    {
      name: 'Department',
      width: '160px !important',
      selector: row => row.title,
    },
    {
      name: 'Designation',
      selector: row => row.year,
    },

  ];

  const data = [
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
      email: "Sneh@gamial.com"
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
      email: "Sneh@gamial.com"

    },
    {
      id: 3,
      title: 'Ghostbusters',
      year: '1984',
      email: "Sneh@gamial.com"

    }, {
      id: 4,
      title: 'Ghostbusters',
      year: '1984',
      email: "Sneh@gamial.com"

    }, {
      id: 5,
      title: 'Ghostbusters',
      year: '1984',
      email: "Sneh@gamial.com"

    },
  ]

  const EmployeData = () => {
    var config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `http://localhost:5500/employee/emp/${id}`,
      headers: {}
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.msg[0]);
        setEmpInfo(response.data.msg[0])
      })
      .catch(function (error) {
        console.log(error);
      });

  }



  useEffect(() => {
    EmployeData()
  }, [])



  return (
    <>
      <Tabs
        defaultActiveKey="Personal Details"
        transition={false}
        id="uncontrolled-tab-example"
      className="mb-3"
      >
        <Tab eventKey="Personal Details" title="Personal Details">
          <div>

            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="profile" width={"150px"} />


            <table style={{ "display": "flex" ,"font":"bold"}}>
              <div style={{ "marginLeft": "10px" }}>
                <tr>
                  <td>Nane</td>
                  <td>{EmpInfo.FirstName + " " + EmpInfo.LastName}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{EmpInfo.Email}</td>
                </tr>
                <tr>
                  <td>Father Name</td>
                  <td>{EmpInfo.FatherName}</td>
                </tr>
                <tr>
                  <td>Date of Birth</td>
                  <td>{EmpInfo.Date_Of_Birth}</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>{EmpInfo.Gender}</td>
                </tr>
                <tr>
                  <td>Phone 1</td>
                  <td>{EmpInfo.PhoneNumber}</td>
                </tr>
                <tr>
                  <td>Phone 2</td>
                  <td>{EmpInfo.PhoneNumber2 != "" ? EmpInfo.PhoneNumber2 : "-"}</td>
                </tr>

              </div>

              <div style={{ "marginLeft": "400px" }}>
                <tr>
                  <td>Local Address</td>
                  <td>{EmpInfo.Local_Address}</td>
                </tr>
                <tr>
                  <td>Parmanent Address</td>
                  <td>{EmpInfo.Parmanent_Address != "" ? EmpInfo.Parmanent_Address : "NULL"}</td>

                </tr>
                <tr>
                  <td>Natiionality</td>
                  <td>{EmpInfo.Nationality}</td>
                </tr>

                <tr>
                  <td>Martial Status</td>
                  <td>{EmpInfo.Martial_Status}</td>
                </tr>

              </div>

            </table>
          </div>
        </Tab>
        <Tab eventKey="Company Details" title="Company Details">
        <table>
                <tr>
                  <td>Employee Id</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td>Deparment</td>
                  <td>IT Feilds</td>
                </tr>
                <tr>
                  <td>Date Of Joining</td>
                  <td>01-01-2021</td>
                </tr>
                <tr>
                  <td>Date Of Leaving</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>Active</td>
                </tr>

              </table>

        </Tab>
        <Tab eventKey="Financial Details" title="Financial Details">
        <table>
                <tr>
                  <td>Basic Salary</td>
                  <td>8000</td>
                </tr>
                <tr>
                  <td>HRA</td>
                  <td>300.5</td>
                </tr>
                <tr>
                  <td>Monthly Tax Deduction</td>
                  <td>Shiv kumar</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>8300</td>
                </tr>

              </table>

        </Tab>
        <Tab eventKey="Account Details" title="Account Details" >
        <table>
                <tr>
                  <td>Acount Holder Name</td>
                  <td>Sneh Jaiswal</td>
                </tr>
                <tr>
                  <td>Acount Number</td>
                  <td>494556164</td>
                </tr>
                <tr>
                  <td>Bank Name</td>
                  <td>HDFC Bank</td>
                </tr>
                <tr>
                  <td>Branch</td>
                  <td>Indore</td>
                </tr>
              </table>

        </Tab>
        <Tab eventKey="Documents" title="Documents" >
       <h5>Work in Progress...</h5>

        </Tab>
      </Tabs>

     

    </>
  )
}

export default View