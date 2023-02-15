
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

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';



function Leave() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const currencies = [
    {
      value: 'Casual Leave',
      label: 'Casual Leave',
    },
    {
      value: 'Sick Leave',
      label: 'Sick Leave',
    },

  ];
  const data = [
    {
      Leave_Type: "Casual Leave",
      Start_Date: '10-02-2023',
      End_Date: '15-02-2023',
      Reason: 'My Big Brother Wedding.',
      Status:"Approved"
    },
    {
      Leave_Type: "Casual Leave",
      Start_Date: '20-02-2023',
      End_Date: '25-02-2023',
      Reason: 'My Big Brother Wedding.',
      Status:"Approved"
    },

  ];

  //should be memoized or stable
  const columns = useMemo(
    () => [

      {
        accessorKey: 'Leave_Type', 
        header: 'Leave Type',
      },
      {
        accessorKey: 'Start_Date',
        header: 'Start Date',
      },
      {
        accessorKey: 'End_Date', //normal accessorKey
        header: 'End Date',
      },
      {
        accessorKey: 'Reason',
        header: 'Reason..',
      },
      {
        accessorKey: 'Status',
        header: 'Approved',
      },
    ],
    [],)


  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>

      <Card>
        <Card.Body>
          <div className="d-flex">
            <div>
              <h3  >My Leave</h3>


            </div>

            <div class="tab-title clearfix no-border ms-auto">
              <button className="btn btn-light" onClick={handleShow}> <i class="fa fa-plus-circle"></i> Apply Leave</button>
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

                    <TextField
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
                    </TextField>


                   
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
                  <i class="fa-solid fa-xmark"></i> Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  <span class="fa fa-check-circle"></span>   Save
                </Button>
              </Modal.Footer>
            </Modal>


          </div>

          <div className="pt-3">
            <MaterialReactTable
              columns={columns}
              data={data}
              muiTableBodyProps={{
                sx: {
                  //stripe the rows, make odd rows a darker color
                  '& td:nth-of-type(odd)': {
                    backgroundColor: '#f5f5f5',
                  },
                },
              }}
              muiTableBodyCellProps={{
                sx: {
                  borderRight: '2px solid #e0e0e0',
                },
                header: {
                  backgroundColor: "red"
                }
              }}
            />

          </div>

        </Card.Body>
      </Card></>
  )
}





export default Leave