import React, { useState } from 'react'
import profile from "../../../Assets/fotor_2023-1-29_23_12_31.png"
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from "react-router-dom";


function Navbar() {
    const navigate = useNavigate()
    const [getDrop, setDrop] = useState(false)

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
                                    <a className="nav-link" aria-current="page" href="#" >  <i className="fa-regular fa-bell"></i></a>
                                </li>
                                <li className="nav-item" style={{ "width": "40px" }}>
                                    <a className="nav-link" aria-current="page" href="#"> <i className="fa-light fa-envelope"></i></a>
                                </li>


                                <li>

                                    <div className="dropdown">
                                        <button className="btn  toggle d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => setDrop(!getDrop)}>
                                            <img src={profile} className="rounded" alt="Cinque Terre" width={"35px"} />
                                        </button>
                                        <ul className={getDrop == false ? "dropdown-menu" : "dropdown-menu show"} aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="#">Profile</a></li><hr />
                                            <li><a className="dropdown-item" href="#">Setting</a></li>
                                            <li><a className="dropdown-item" href="#">Logout</a></li>

                                        </ul>
                                    </div>
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