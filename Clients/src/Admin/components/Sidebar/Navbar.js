import React from 'react'
import profile from "../../../Assets/fotor_2023-1-29_23_12_31.png"


function Navbar() {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                   
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                      


                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{"paddingLeft":"200px !important"}}>
                        <li className="nav-item">
                            </li> <li className="nav-item">
                            </li> <li className="nav-item">
                            </li> <li className="nav-item">
                            </li> <li className="nav-item">
                            </li> <li className="nav-item">
                            </li> <li className="nav-item">
                            </li> <li className="nav-item">
                            </li> <li className="nav-item">
                            </li> <li className="nav-item">
                            </li> <li className="nav-item">
                            </li> <li className="nav-item" style={{"display":"flex"}}>
                            <img src={profile} className="rounded" alt="Cinque Terre" height={"40px"}/>
                            <a className="nav-link" aria-current="page" href="#">Administor</a>
                            </li>
                    
                        </ul>
                    </div>
                </div>
            </nav>



        </>
    )
}

export default Navbar