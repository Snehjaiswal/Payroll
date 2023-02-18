
import React, { useState, useMemo, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MaterialReactTable from "material-react-table";
import { createTheme, ThemeProvider } from '@mui/material';
import Modal from 'react-bootstrap/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import axios from "axios";


function Announcements() {
  const [show, setShow] = useState(false);
  const [getData, setData] = useState([]);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //should be memoized or stable
  const columns = useMemo(
    () => [

      {
        accessorKey: 'title', //access nested data with dot notation
        header: 'Title',
      },
      {
        accessorKey:'from_date  ',
        header: 'From Date',
      },
      {
        accessorKey: 'end_date',
        header: 'End Date',
      },
      {
        accessorKey: 'msg',
        header: 'MSG',
      },
    ],
    [],)


  const [value, setValue] = React.useState(dayjs());

  const handleChange = (newValue) => {
    setValue(newValue);
  };


  const AddAnnouncements = () => {






    
    axios({
      method: 'post',
      url: 'http://localhost:5500/add/announcements',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        "title": "Holiday",
        "from_date": new Date(),
        "end_date": new Date(),
        "msg": "Today is holiday"

      }
    })
      .then(function (response) {
        console.log("ppp", response);
        if (response.data.msg == 'Success') {
          handleClose()
        }
      })

  }


  const GetAnnouncements = () => {
    axios({
      method: 'get',
      url: 'http://localhost:5500/get/announcements',
      headers: {
        'Content-Type': 'application/json'
      },

    })
      .then(function (response) {
        console.log("ppp", response.data.Announcements);
        setData( response.data.Announcements)
        if (response.data.msg == 'Success') {

        }
      })
  }


  useEffect(() => {
    GetAnnouncements()
  }, [])




  return (
    <>

      <Card>
        <Card.Body>
          <div className="d-flex">
            <div>
              <h3 >Announcements <i class="fa-sharp fa-solid fa-megaphone"></i> </h3>


            </div>

            <div class="tab-title clearfix no-border ms-auto">
              <button className="btn btn-light" onClick={handleShow}> <i class="fa fa-plus-circle"></i> Add Message</button>
            </div>

            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Announcements</Modal.Title>
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
                      id="outlined-textarea"
                      label="Title"
                      // placeholder="Placeholder"
                      multiline
                    />

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
                      label="Discription"
                      multiline
                      rows={4}
                    // defaultValue="Default Value"
                    />
                  </div>

                </Box>


              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  <i class="fa-solid fa-xmark"></i> Close
                </Button>
                <Button variant="primary" onClick={() => AddAnnouncements()}>
                  <span class="fa fa-check-circle"></span>   Save
                </Button>
              </Modal.Footer>
            </Modal>


          </div>

          <div className="pt-3">
            <MaterialReactTable
              columns={columns}
              data={getData}
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

export default Announcements


