import React, { useState } from 'react'
import '../src/Css/Login.css'
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import axios from 'axios'

function Login() {

  const navigate = useNavigate()

  const [getemail, setemail] = useState('')
  const [getpassword, setpassword] = useState('')



  const Login = () => {

    var data = JSON.stringify({
      "Email": getemail,
      "Password": getpassword
    });

    var config = {
      method: 'post',
      url: 'http://localhost:5500/employee/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.data));

        localStorage.setItem('id', response.data.data._id)
        localStorage.setItem('Role_id', response.data.data.Role_Id)


        if (response.data.data.Role_Id == 1) {
          navigate('/admin/dashboard')
        } else if (response.data.data.Role_Id == 0) {
          alert("Employee Work is PAndding")

        }


      })
      .catch(function (error) {
        console.log(error);
      });


  }


  return (
    <>


      <div className='123'>

        <Card className='LoginBody' >
          <Card.Body >
            <Card.Title>Login</Card.Title>



            <div>
              <div className="mb-6" controlId="formBasicEmail">
                <div>Email address</div>

                <input type="email" placeholder="Enter email" onChange={(e) => setemail(e.target.value)} />

              </div>

              <div className="mb-3" controlId="formBasicPassword">
                <div>Password</div>
                <input type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
              </div>

              <Button variant="primary" type="submit" onClick={() => Login()}>
                Submit
              </Button>
            </div>


          </Card.Body>
        </Card>
      </div>






    </>
  )
}

export default Login