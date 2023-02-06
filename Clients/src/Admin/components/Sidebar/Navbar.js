import React from 'react'
import profile from "../../../Assets/fotor_2023-1-29_23_12_31.png"
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from "react-router-dom";


function Navbar() {
    const navigate = useNavigate()

    const Logout = () => {
        localStorage.clear();
        navigate('/login')
    }


    return (
        <>


            <Card.Body style={{ "backgroundColor": "white", "padding": "0", "margin": "0" }}>
                {/* <Card.Text> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light navBar">
                    <div className="container-fluid">

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">




                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ "paddingLeft": "200px !important" }}>

                                <li className="nav-item" style={{ "width": "40px" }}>
                                    <a className="nav-link" aria-current="page" href="#">  <i className="fa-regular fa-bell"></i></a>
                                </li>
                                <li className="nav-item" style={{ "width": "40px" }}>
                                    <a className="nav-link" aria-current="page" href="#"> <i className="fa-light fa-envelope"></i></a>
                                </li>
                                {/* <li className="nav-item" style={{ "display": "flex", "width": "150px" }}>
                                    <img src={profile} className="rounded" alt="Cinque Terre" height={"20px"} />
                                    <a className="nav-link" aria-current="page" href="#">Administor</a>
                                </li> */}

                                <li className="nav-item" style={{ "display": "flex", "width": "150px" }}>
                                    <DropdownButton  id="dropdown-basic-button" title="Administor" variant="secondary">
                                        <img  className="rounded" alt="Cinque Terre" height={"40px"} /> <hr />
                                        <Dropdown.Item >Profile</Dropdown.Item>
                                        <Dropdown.Item onClick={() => Logout()}>Logout</Dropdown.Item>
                                    </DropdownButton>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
                <br />
                {/* </Card.Text> */}
            </Card.Body>
            {/* </Card> */}





        </>
    )
}

export default Navbar