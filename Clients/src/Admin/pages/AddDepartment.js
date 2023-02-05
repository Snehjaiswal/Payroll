import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import Card from 'react-bootstrap/Card';


function AddDepartment() {
    const notify = () => toast("Add Success!");
    const EmptyFeild = () => toast("Please Fill...!");


    const [refresh, setrefresh] = useState(true)
    const [deparment, setdeparment] = useState("")
    const [Designation, setDesignation] = useState("")


    const inputRef = useRef(null);

    const onButtonClick = () => {
        setrefresh(!refresh)
        inputRef.current.value = ""
    };

    const AddDepartment = () => {

        if (deparment == '') {
            EmptyFeild()
            return
        } else if (Designation == '') {
            EmptyFeild()
            return
        }

        axios({
            method: 'post',
            url: 'http://localhost:5500/add-department',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                "Department": deparment,
                "Designation": Designation
            }
        })
            .then(function (response) {
                if (response.data.msg == 'Success') {

                    notify()
                }
            })


    }





    useEffect(() => {
    }, [refresh])


    return (
        <>

            <Card>

                <Card.Header>Create Deparment</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <div className='AddDepartmentbox'>
                            <table>
                                <tr>
                                    <td>Department*</td>
                                    <td><input type="text" ref={inputRef} onChange={(e) => setdeparment(e.target.value)} /></td>
                                </tr>

                                <tr>
                                    <td>Designation*</td>
                                    <td><input type="text" ref={inputRef} onChange={(e) => setDesignation(e.target.value)} />
                                        {/* <button >+</button> */}
                                    </td>
                                </tr>
                            </table>

                            {/* <hr /> */}
                            <div id="flexbox" style={{ "textAlign": "center", "gap": "5px" }}>
                                <div>
                                    <button style={{ "flex": "1 1 auto" }} type="button" className="btn btn-light">Cancel</button>
                                </div>
                                <div>
                                    <button style={{ "flex": "1 1 auto" }} type="button" className="btn btn-primary" onClick={() => onButtonClick()} >Reset</button>
                                </div>
                                <div>
                                    <button style={{ "flex": "1 1 auto" }} type="button" className="btn btn-success" onClick={() => AddDepartment()}>Submit</button>
                                </div>
                            </div>
                            {/* <hr /> */}


                        </div>


                    </Card.Text>
                    <ToastContainer />
                </Card.Body>
            </Card>








        </>
    )
}

export default AddDepartment