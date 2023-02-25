
import React, { useState, useMemo } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MaterialReactTable from "material-react-table";
import { createTheme, ThemeProvider } from '@mui/material';
import Modal from 'react-bootstrap/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import DataTable from 'react-data-table-component';

import DataTableExtensions from "react-data-table-component-extensions";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import {url} from '../Utils/Config'




function Leave() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
      name: 'S No.',
      width: '80px !important',
      selector: (row, index) => index + 1,
    },
    {
      name: 'Leave Type',
      width: '140px !important',
      selector: row => "Casual Leave",
    },
    {
      name: 'From Date',
      width: '150px !important',
      selector: row => "20-11-2023",
    }, {
      name: 'End Date',
      width: '150px !important',
      selector: row => "20-11-2023",
    },

    {
      name: 'Sattus',
      width: '150px !important',
      selector: row => "Approved",
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



  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>

      <Card className="ms-1" style={{"width":"70%"}}>
        <Card.Body>
          <div className="d-flex">
            <div>
              <h3  >My Leave</h3>


            </div>

            <div className="tab-title clearfix no-border ms-auto">
              <button className="btn btn-light" onClick={handleShow}> <i className="fa fa-plus-circle"></i> Apply Leave</button>
            </div>

            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Apply Leave</Modal.Title>
              </Modal.Header>
              <Modal.Body>

                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>

                    {/* <TextField
                      id="outlined-select-currency"
                      select
                      label="leave Type"
                      // defaultValue="EUR"
                      helperText="Please select your Leave Type"
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField> */}


                   
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Stack spacing={3}>
                        <DesktopDatePicker
                          label="Start Date"
                          inputFormat="MM/DD/YYYY"
                          value={value}
                          onChange={handleChange}
                          renderInput={(params) => <TextField {...params} />}
                        />
                           <DesktopDatePicker
                          label="End Date"
                          inputFormat="MM/DD/YYYY"
                          value={value}
                          onChange={handleChange}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </Stack>
                    </LocalizationProvider>



                    <TextField
                      id="outlined-multiline-static"
                      label="Reason"
                      multiline
                      rows={3}
                    // defaultValue="Default Value"
                    />
                  </div>

                </Box>


              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  <i className="fa-solid fa-xmark"></i> Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  <span className="fa fa-check-circle"></span>   Save
                </Button>
              </Modal.Footer>
            </Modal>


          </div>

          <div className="pt-3">
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
                pagination
                customStyles={customStyles}
                highlightOnHover
                paginationRowsPerPageOptions={[5, 50, 100]}
                paginationComponentOptions={{ selectAllRowsItem: true, selectAllRowsItemText: 'All' }}
              />
            </DataTableExtensions>

          </div>

        </Card.Body>
      </Card></>
  )
}





export default Leave