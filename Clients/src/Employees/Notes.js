
import React, { useState, useMemo } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MaterialReactTable from "material-react-table";
import { createTheme, ThemeProvider } from '@mui/material';
import Modal from 'react-bootstrap/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Notes() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const data = [
    {
      name: {
        firstName: 'John',
        lastName: 'Doe',
      },
      address: '261 Erdman Ford',
      city: 'East Daphne',
      state: 'Kentucky',
    },
    {
      name: {
        firstName: 'Jane',
        lastName: 'Doe',
      },
      address: '769 Dominic Grove',
      city: 'Columbus',
      state: 'Ohio',
    },
    {
      name: {
        firstName: 'Joe',
        lastName: 'Doe',
      },
      address: '566 Brakus Inlet',
      city: 'South Linda',
      state: 'West Virginia',
    },
    {
      name: {
        firstName: 'Kevin',
        lastName: 'Vandy',
      },
      address: '722 Emie Stream',
      city: 'Lincoln',
      state: 'Nebraska',
    },
    {
      name: {
        firstName: 'Joshua',
        lastName: 'Rolluffs',
      },
      address: '32188 Larkin Turnpike',
      city: 'Charleston',
      state: 'South Carolina',
    },
  ];

  //should be memoized or stable
  const columns = useMemo(
    () => [

      {
        accessorKey: 'name.firstName', //access nested data with dot notation
        header: 'First Name',
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'address', //normal accessorKey
        header: 'Address',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
    ],
    [],)




  return (
    <>

      <Card>
        <Card.Body>
          <div className="d-flex">
            <div>
              <h3  >Notes (private)</h3>


            </div>

            <div class="tab-title clearfix no-border ms-auto">
              <button className="btn btn-light" onClick={handleShow}> <i class="fa fa-plus-circle"></i> Apply Notes</button>
            </div>

            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Add Notes</Modal.Title>
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
                    <TextField
                      id="outlined-multiline-static"
                      label="Discription"
                      multiline
                      rows={8}
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

export default Notes

