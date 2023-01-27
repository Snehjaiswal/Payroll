import React from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import { useNavigate } from "react-router-dom"

function DailyAtendence() {


  const columns = [
    {
      name: 'Serial',
      width: '100px !important',
      selector: (row, index) => index + 1,
    },
    {
      name: 'Employee Name',
      width: '160px !important',
      selector: row => row.title,
    },
    {
      name: 'Attendence Type',
      width: '160px !important',
      selector: row => row.title,
    }, {
      name: 'Manual Name',
      width: '160px !important',
      selector: row => row.title,
    },

    {
      name: 'Date',
      width: '100px !important',
      selector: row => "25-01-2023",
    },
    {
      name: 'Status',
      width: '160px !important',
      selector: row => (
        <>
          <select id="cars" name="cars">
            <option value="volvo">Absent</option>
            <option value="saab">Present</option>
            <option value="fiat">On Leave</option>

          </select>
        </>
      )
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

    },]



  const customStyles = {

    headCells: {
      style: {

        width: '100px',
        fontWeight: '700',
        marginTop: "10px",
        backgroundColor: 'rgb(240, 180, 14);',
        color: '#fff',
        justifyContent: 'center !important',
        overflow: 'visible !important',
      },
    },
    rows: {
      style: {
        justifyContent: 'start !important',
      },
    },
    cells: {
      style: {
        overflow: 'visible !important',
        justifyContent: 'center !important',
        textAlign: "left"
      },
    },
  };



  return (
    <>


      <div className='atendenceHeader' >
        <h4> Daily Atendence</h4><hr />
        <div style={{ "display": "flex" }}>
          <div className="empDep">
            <label htmlFor="cars"> Employee By Department:</label><br />
            <select id="cars" name="cars">
              <option value="volvo">All Employees</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="datepicker" style={{ "marginLeft": "50px" }}>
            <label htmlFor="cars">Date :</label><br />
            <input type="date" />
          </div>
          <div className="SubmitBtn" style={{ "marginLeft": "50px", "marginTop": "20px" }}>
            <button type="button" class="btn btn-success" style={{ "width": "180px" }}  >Submit</button>
          </div>
        </div>

      </div>

      <div className='atendenceHeader' >

        <DataTableExtensions
          columns={columns}
          data={data}
          export={false}
          print={false}
        >
          <DataTable
            fixedHeader
            fixedHeaderScrollHeight="700px"
            noHeader
            defaultSortField="id"
            defaultSortAsc={false}
            // pagination
            customStyles={customStyles}
            highlightOnHover
            // paginationRowsPerPageOptions={[5, 50, 100]}
            paginationComponentOptions={{ selectAllRowsItem: true, selectAllRowsItemText: 'All' }}
          />
        </DataTableExtensions>
      </div>
      <div className="SubmitBtn1" style={{ "textlign": "center", "marginTop": "10px" }}>
        <button type="button" class="btn btn-success" style={{ "textlign": "center","width": "180px" }}  >Save changes</button>
      </div>
    </>
  )
}

export default DailyAtendence