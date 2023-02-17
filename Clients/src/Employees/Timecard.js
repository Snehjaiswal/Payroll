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

    const TimeDuration = (row) => {
        console.warn('runiiii');
        // Define the start and end times as strings
        const startTime = row.checkIn;
        const endTime = row.checkOut;

        // Convert the start and end times to Date objects
        const startDate = new Date(`2000-01-01T${startTime}`);
        const endDate = new Date(`2000-01-01T${endTime}`);

        // Calculate the difference in milliseconds between the start and end times
        const timeDiff = endDate.getTime() - startDate.getTime();

        // Convert the time difference to hours, minutes, and seconds
        const hours = Math.floor(timeDiff / (1000  *60  *60));
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);

        // format the time difference as a string
        const timeDiffString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        return timeDiffString

    }

    const columns = [

        {
            name: 'S No',
            width: '60px !important',
            selector: (row, index) => index + 1,
        },
        {
            name: 'In Date',
            width: '160px !important',
            selector: (row, index) => row.td_date,
        },

        {
            name: 'In Time',
            width: '170px !important',
            selector: row => row.checkIn,
        },
        {
            name: 'Out Date',
            width: '170px !important',
            selector: (row, index) => row.checkOut == '00:00:00' ? "-" : row.td_date,
        },

        {
            name: 'Out Time',
            width: '170px !important',
            selector: row => row.checkOut == '00:00:00' ? "-" : row.checkOut

        },

        {
            name: 'Time Duration',
            width: '170px !important',
            selector: row => TimeDuration(row),

        },
        {
            name: 'MSG',
            width: '60px !important',
            selector: row => (<i className="fa-solid fa-comment"></i>),
        }

    ];





    const customStyles = {

        headCells: {
            style: {

                // width: '100vh',
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



            <Card style={{ "marginLeft": "50px", "width": "1000px" }}>
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

export default Timecard