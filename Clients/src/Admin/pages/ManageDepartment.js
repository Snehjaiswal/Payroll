import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import { useNavigate } from "react-router-dom"
import { Form } from "react-bootstrap";
import {url} from '../../Utils/Config'
import axios from 'axios';

import Card from 'react-bootstrap/Card';

function ManageDepartment() {
  const navigate = useNavigate();

  const [Deparments, setDeparments] = useState([])
  const [refresh, setrefresh] = useState(true)



  const columns = [
    {
      name: 'Serial',
      width: '100px !important',
      selector: (row, index) => index + 1,
    },

    {
      name: 'Department',
      width: '160px !important',
      selector: row => row.Department,
    },

    {
      name: 'Designation',
      width: '160px !important',
      selector: row => row.Designation,
    },
    {
      name: 'Total Employee',
      width: '160px !important',
      selector: row => "10",
    },
    {
      name: 'Create At',
      width: '160px !important',
      selector: row => row.createdAt.split('T')[0],
    },
    {
      name: 'Status',
      width: '80px !important',
      selector: (row) => (
        <>
          <Form.Check
            type="switch"
            id="custom-switch"
            defaultChecked={row.Status == true ? true : false}
            onChange={(e) => { UpdateDeparmentStatus(e, row) }}
          />
        </>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },

    {
      name: <h6>Actions</h6>,
      width: '120px !important',
      cell: (row) => (

        <>

          <h6><i className="fa-solid fa-pen-to-square" style={{ "marginLeft": "10px" }}></i></h6>
          <h6> <i className="fa-solid fa-trash" style={{ "marginLeft": "10px" }} onClick={() => deleteDepartment(row)}></i></h6>

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


        justifyContent: 'left !important',
        overflow: 'visible !important',
      },
    },
    rows: {
      style: {
        justifyContent: 'left !important',
      },
    },
    cells: {
      style: {
        overflow: 'visible !important',
        justifyContent: 'left !important',
        textAlign: "left"
      },
    },
  };

  const DeparmentsData = () => {

    var config = {
      method: 'get',
      url: url+'/get-department',
      headers: {}
    };

    axios(config)
      .then(function (response) {
        // console.log(response.data.DeparmentData);
        setDeparments(response.data.DeparmentData)

      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const UpdateDeparmentStatus = (e, row) => {

    var config = {
      method: 'post',
      url: url+'/update-status',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        "id": row._id,
        "status": e.target.checked
      }
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });


  }

  const deleteDepartment = (row) => {
  

    var config = {
      method: 'post',
      url: url+'/delete-deparment',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : {
        "_id":row._id
      }
    };
    
    axios(config)
    .then(function (response) {
      setrefresh(!refresh)
      console.log(response.data);
    })
   
    

  }


  useEffect(() => {
    DeparmentsData()

  }, [refresh]);

  return (
    <>

      <Card>
        <Card.Body>
          <Card.Text>
            <DataTableExtensions
              columns={columns}
              data={Deparments}
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
          </Card.Text>

        </Card.Body>
      </Card>
    </>
  )
}

export default ManageDepartment