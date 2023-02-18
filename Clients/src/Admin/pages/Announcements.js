
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
// import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
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
  const [AnnouncementsData, setAnnouncementsData] = useState([])


  const customStyles = {
      {
    accessorKey: 'title', //access nested data with dot notation
      header: 'Title',
      },
  {
    accessorKey: (from_date.spite("T")[0]),
      header: 'From Date',
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


const [messages, setMessages] = useState("HI SNEH>>>");

useEffect(() => {
  const socket = new WebSocket('ws://localhost:5600');

  socket.addEventListener('open', (event) => {
    console.log('Connected to WebSocket server');
  });

  socket.addEventListener('message', (event) => {
    const newMessage = JSON.parse(event.data);
    setMessages([...messages, newMessage]);
  });

  return () => {
    socket.close();
  };
}, []);

const handleMessageSubmit = (message) => {
  const socket = new WebSocket('ws://localhost:5600');
  socket.send(JSON.stringify({ message }));
};












const [value, setValue] = useState(dayjs());

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
      // console.log("ppp", response.data.Announcements);
      setAnnouncementsData(response.data.Announcements)
      if (response.data.msg == 'Success') {

      }
    })
}


useEffect(() => {
  GetAnnouncements()
}, [])




return (
  <>

    <Card className="ms-5" style={{ "width": "900px" }}>
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
          <DataTableExtensions
            columns={columns}
            data={AnnouncementsData}
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

export default Announcements


