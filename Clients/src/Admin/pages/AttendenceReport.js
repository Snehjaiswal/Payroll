import { useState, useEffect } from 'react';


import Card from 'react-bootstrap/Card';
import DataTable from 'react-data-table-component';



function AttendenceReport() {
    const [getDay, setDays] = useState()

    const Filter = () => {
        setDays(new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate())
        var currentMontDay = new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate()
    }
    const month = ["Month", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]



    const columns = [
        {
            name: 'S.No',
            width: '60px !important',
            selector: (row, index) => index + 1,
        },
        {
            name: 'Employee Name',
            width: '160px !important',
            selector: row => row.title,
        },

    ];

    for (let i = 1; i <= getDay; i++) {
        columns.push({
            name: <>{i}</>,
            width: '80px !important',
            selector: row => i,
        },)

    }



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



    useEffect(() => {
        Filter()
    }, [])

    return (

        <>


            <Card style={{ "marginLeft": "10px" }}>
                <Card.Body>
                    <Card.Title>Attendence Report </Card.Title> <hr />

                    <Card.Text>
                        <div style={{ "display": "flex","textAlign":"right" }}>
                        

                            <div style={{ "marginLeft": "50px" }}>
                                {/* <label htmlFor="cars">Month :</label><br /> */}
                                <div className="mr15 DTTT_container" style={{ "marginTop": "15px" }}>

                                    <select className="btn btn-light bt2" style={{ "border": " 1px solid rgb(0, 0, 0)", "marginRight": "2px", "borderRadius": "0" }}>

                                        <option defaultValue="volvo">Year</option>
                                        <option defaultValue="volvo">2023</option>
                                        <option defaultValue="volvo">2024</option>
                                        <option defaultValue="volvo">2025</option>

                                    </select>

                                    <select className="btn btn-light bt2" style={{ "border": " 1px solid rgb(0, 0, 0)", "marginRight": "2px", "borderRadius": "0" }}>

                                        {
                                            month.map((val) => {
                                                return <option defaultValue={val}>{val}</option>
                                            })
                                        }

                                    </select>

                                    <button className="btn btn-light bt2" style={{ "border": " 1px solid rgb(0, 0, 0)", "marginRight": "2px", "borderRadius": "0" }}><i className="fa fa-chevron-left"></i></button>

                                    <button className="btn btn-light bt2" style={{ "border": " 1px solid rgb(0, 0, 0)", "margin": "-1px", "marginRight": "2px", "borderRadius": "0" }}>28th Nov - 4th Dec, 2022</button>

                                    <button className="btn btn-light bt2" style={{ "border": " 1px solid rgb(0, 0, 0)", "marginRight": "2px", "borderRadius": "0" }}><i className="fa fa-chevron-right" ></i></button>

                                    <button className="btn btn-light bt2" style={{ "border": " 1px solid rgb(0, 0, 0)", "marginRight": "2px", "borderRadius": "0" }}>Print</button>

                                    <input type="search" placeholder="Search"  className="btn btn-light bt2" style={{ "border": " 1px solid rgb(0, 0, 0)", "marginRight": "1px", "borderRadius": "0" }} /> 
                                     <button className="btn btn-light bt2" style={{ "border": " 1px solid rgb(0, 0, 0)", "marginRight": "2px", "borderRadius": "0" }}><i class="fa-regular fa-magnifying-glass"></i></button>

                                </div>
                            </div>




                        </div>

                    </Card.Text>
                    <hr />
                    <Card.Text>


                        <DataTable
                            columns={columns}
                            data={data}
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

                    </Card.Text>

                </Card.Body>
            </Card>


        </>

    )
}

export default AttendenceReport