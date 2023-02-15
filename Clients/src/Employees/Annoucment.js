import React,{useState,useEffect} from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import Card from 'react-bootstrap/Card';

function Annoucment() {
  const navigate = useNavigate();
  const [EmployeeData,setEmplyeeData] = useState([])

  const columns = [
    {
      name: 'SNo',
      width: '80px !important',
      selector: (row,id) => id+1,
    },
    {
      name: 'Title',
      width: '150px !important',
      selector: row => row.title ,
    },
    {
      name: 'From Date',
      width: '150px !important',
      selector: row => row.from_date,
    },
    {
      name: 'End Date',
      width: '160px !important',
      selector: row => row.end_date,
    },
    
    {
      name: 'MSG',
      selector: row => row.msg,
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
      url: 'http://localhost:5500/employee/getall',
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      setEmplyeeData(response.data.msg)
      console.log(response.data.msg);
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

      <Card>
        
        <Card.Body>
          <Card.Text>
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
          </Card.Text>

        </Card.Body>
      </Card>

    </>
  )
}
export default Annoucment