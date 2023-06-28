import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {url} from '../../Utils/Config'
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
            url: url+'/add-department',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                "Department": deparment,
                "Designation": Designation
            }
        })
            .then(function (response) {
                console.log("response",response);
                if (response.data.msg == 'Success') {

                    notify()
                }
            })


    }

    useEffect(() => {
    }, [refresh])


    return (
        <>

            <Card style={{ "width": "950px", "marginLeft": "40px" }}>

                <Card.Header>Create Deparment</Card.Header>
                <Card.Body>
                    <Card.Text>
                        
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Add Department</Form.Label>
                                <Form.Control type="text" placeholder="Add Department Name" onChange={(e) => setdeparment(e.target.value)} />
                                
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Add Designation</Form.Label>
                                <Form.Control type="text" placeholder="Enter Department Designation..." onChange={(e) => setDesignation(e.target.value)} />
                            </Form.Group>

                            <div className='row'>
                                <div className="col-1">
                                <Button variant="light" type="cancel" value="Cancel" >
                                    Cancel
                                </Button>
                                </div>
                                <div className="col-1">
                                <Button variant="primary" type="reset" value="reset" >
                                    Reset
                                </Button>

                                </div>
                                <div className="col-1">
                                <Button variant="success" type="submit" value="submit" onClick={() => AddDepartment()}>
                                    Submit
                                </Button>

                                </div>

                            </div>

                        </Form>
                    </Card.Text>
                    <ToastContainer />
                </Card.Body>
            </Card>








        </>
    )
}

export default AddDepartment