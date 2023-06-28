import React,{useState,useEffect} from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import {url} from '../../Utils/Config'

function ManageEmployee() {
  const navigate = useNavigate();
  const [EmployeeData,setEmplyeeData] = useState([])


  const data = [
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
      email: "Sneh@gamial.com",
      status: 1
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
      email: "Sneh@gamial.com",
      status: 2

    },
    {
      id: 3,
      title: 'Ghostbusters',
      year: '1984',
      email: "Sneh@gamial.com",
      status: 2


    }, {
      id: 4,
      title: 'Ghostbusters',
      year: '1984',
      email: "Sneh@gamial.com",
      status: 1

    }, {
      id: 5,
      title: 'Ghostbusters',
      year: '1984',
      email: "Sneh@gamial.com",
      status: 1

    },
    {
      id: 5,
      title: 'Ghostbusters',
      year: '1984',
      email: "Sneh@gamial.com"

    },
  ]

  const columns = [
    {
      name: 'Serial',
      width: '80px !important',
      selector: (row,id) => id+1,
    },
    {
      name: 'Name',
      width: '150px !important',
      selector: row => row.FirstName+" " +row.LastName ,
    },
    {
      name: 'Email',
      width: '150px !important',
      selector: row => row.Email,
    },
    {
      name: 'Department',
      width: '160px !important',
      selector: row => row.result[0].Deparment,
    },
    
    {
      name: 'Designation',
      selector: row => row.result[0].Designation,
    },
    {
      name: 'Status',
      width: '120px !important',
      selector: row => (
        <>
          {/* <button className="" type="button" style={{ "width": "80px", "backgroundColor": "#3CD923", "borderRadius": "4px" }}  >
            <i className="fa-solid fa-pen-to-square"></i> ACTION
          </button> */}
           {/* <label className="profile_details_text">Increment :</label> */}
              <select name="Status" value required>
                <option >Status</option>
                <option value="Active">Active</option>
                <option value="DeActive">DeActive</option>
    
              </select>
        </>
      ),
    },
    {
      name: <h6>Actions</h6>,
      width: '120px !important',
      cell: (row) => (

        <>

          <h6><i className="fa-solid fa-eye" onClick={() => navigate("/admin/employee/view/"+row._id)}></i> </h6>
          <h6><i className="fa-solid fa-pen-to-square" style={{ "marginLeft": "10px" }}></i></h6>
          <h6> <i className="fa-solid fa-trash" style={{ "marginLeft": "10px" }}></i></h6>

        </>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

 

  const customStyles = {

    headCells: {
      style: {
        fontWeight: '700',
        marginTop: "10px",
        // marginLeft:"2px" ,

        backgroundColor: 'rgb(94, 109, 216);',
        color: '#fff',


        justifyContent: 'center !important',
        overflow: 'visible !important',
      },
    },
    rows: {
      style: {
        justifyContent: 'center !important',
      },
    },
    cells: {
      style: {
        overflow: 'visible !important',
        justifyContent: 'center !important',
        textAlign: "right"
      },
    },
  };


  const GetAllEmployee = ()=>{

    var config = {
      method: 'get',
      url: url+'/employee/getall',
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      setEmplyeeData(response.data.msg)
      // console.log(response.data.msg);
    })
    .catch(function (error) {
      console.log(error);
    });
    

  }


  useEffect(() => {
    GetAllEmployee()
  }, []);

  return (
    <>

      {/* <Card> */}
        {/* <Card.Body>
          <Card.Text> */}
            <DataTableExtensions
              columns={columns}
              data={EmployeeData}
              export={false}
              print={false}
            >
              <DataTable
                fixedHeader
                fixedHeaderScrollHeight="700px"
                noHeader
                defaultSortField="id"
                defaultSortAsc={false}
                pagination
                customStyles={customStyles}
                highlightOnHover
                paginationRowsPerPageOptions={[5, 50, 100]}
                paginationComponentOptions={{ selectAllRowsItem: true, selectAllRowsItemText: 'All' }}
              />
            </DataTableExtensions>
          {/* </Card.Text>

        </Card.Body> */}
      {/* </Card> */}

    </>
  )
}

export default ManageEmployee