
import React, { useState, useMemo, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MaterialReactTable from "material-react-table";
import { createTheme, ThemeProvider } from '@mui/material';
import Modal from 'react-bootstrap/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {url} from '../../Utils/Config'
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
  const [getData, setData] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [AnnouncementsData, setAnnouncementsData] = useState([])


  const columns = [
    {
      name: 'S No.',
      width: '80px !important',
      selector: (row,id) => id+1,
    },
    {
      name: 'Title',
      width: '250px !important',
      selector: row => "Diwali Holiday" ,//row.title ,
    },
    {
      name: 'From Date',
      width: '180px !important',
      selector: row => row.from_date.split('T')[0],
    },
    {
      name: 'End  Date',
      width: '180px !important',
      selector: row => row.end_date.split('T')[0],
    },
    
    {
      name: 'Message',
      width: '120px !important',

      selector: row => (<i className="fa-solid fa-comment" onClick={handleShow1}> </i>),
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



const [value, setValue] = useState(dayjs());

const handleChange = (newValue) => {
  setValue(newValue);
};


const AddAnnouncements = () => {
  axios({
    method: 'post',
    url: url+'/add/announcements',
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
    url: url+'/get/announcements',
    headers: {
      'Content-Type': 'application/json'
    },

  })
    .then(function (response) {
      console.log("ppp", response.data.Announcements);
      // return
      setAnnouncementsData(response.data.Announcements)
    
    })
}


useEffect(() => {
  GetAnnouncements()
}, [])




return (
  <>

    <Card  style={{ "width": "850px","marginLeft":"50px" }}>
      <Card.Body>
        <div className="d-flex">
          <div>
            <h3 >Announcements <i className="fa-sharp fa-solid fa-megaphone"></i> </h3>


          </div>

          <div className="tab-title clearfix no-border ms-auto">
            <button className="btn btn-light" onClick={handleShow}> <i className="fa fa-plus-circle"></i> Add Message</button>
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
                <i className="fa-solid fa-xmark"></i> Close
              </Button>
              <Button variant="primary" onClick={() => AddAnnouncements()}>
                <span className="fa fa-check-circle"></span>   Save
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



        <Modal show={show1} onHide={handleClose1} animation={false}  size="lg-4"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
      
        </Modal.Footer>
      </Modal>

      </Card.Body>
    </Card></>
)
}

export default Announcements


