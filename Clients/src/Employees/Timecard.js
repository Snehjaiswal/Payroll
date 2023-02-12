import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import Card from 'react-bootstrap/Card';


function Timecard() {
    const navigate = useNavigate();

    const EmployeeId = localStorage.getItem('id')
    const [EmployeeData, setEmplyeeData] = useState([])

    console.log(EmployeeData && EmployeeData)

    const columns = [

        {
            name: 'S No',
            width: '100px !important',
            selector: (row, index) => index + 1,
        },
        {
            name: 'Date',
            width: '100px !important',
            selector: (row, index) => row.td_date,
        },

        {
            name: 'Check In',
            width: '160px !important',
            selector: row => row.checkIn,
        },

        {
            name: 'Check Out',
            width: '120px !important',
            selector: row => row.checkOut
            ,
        },

        {
            name: 'Total Time',
            width: '160px !important',
            selector: row => "10:10:03",
        }

    ];





    const customStyles = {

        headCells: {
            style: {

                width: '100px',
                fontWeight: '700',
                marginTop: "10px",
                backgroundColor: 'rgb(94, 109, 216);',
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


    const FindAllCheckStatus = () => {

        axios({
            method: 'post',
            url: 'http://localhost:5500/find/all_check',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                "Empid": EmployeeId
            }
        })
            .then(function (response) {
                setEmplyeeData(response.data.data)


            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        FindAllCheckStatus()
    }, []);

    return (
        <>



            <Card>
                <Card.Body>
                    <Card.Title> <div className='atendenceHeader' >



                    </div></Card.Title>
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
                        {/* <Button variant="primary">Save changes</Button> */}

                    </Card.Text>
                </Card.Body>
            </Card>


        </>
    )
}

export default Timecard