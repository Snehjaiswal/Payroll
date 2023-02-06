import React, { useState } from 'react'
import '../src/Css/Login.css'
import { useNavigate } from "react-router-dom";

import axios from 'axios'

function Login() {

  const navigate = useNavigate()
  const [getemail, setemail] = useState('')
  const [getpassword, setpassword] = useState('')



  const Login = () => {

    axios({
      method: 'post',
      url: 'http://localhost:5500/employee/login',
      data: {
        "Email": getemail,
        "Password": getpassword
      }
    })
      .then(function (response) {

        localStorage.setItem('id', response.data.data._id)
        localStorage.setItem('Role_id', response.data.data.Role_Id)

        if (response.data.data.Role_Id == 1) {
          navigate('/admin/dashboard')
        } else if (response.data.data.Role_Id == 0) {
          navigate('/dashboard')

        }
      })
  }


  return (
    <>

      {/* Login Form */}
      <div class="bg-blue-500">

        <div className="container mx-auto p-2">
          <div className="max-w-sm mx-auto my-24 bg-white px-5 py-10 rounded shadow-xl">
            <div className="text-center mb-8">
              <h1 className="font-bold text-2xl font-bold">Login To Payroll</h1>
            </div>
            <div >
              <div className="mt-5">
                <label htmlFor="username">Username or Email</label>
                <input type="text" id="username" className="block w-full p-1 border rounded border-gray-500" onChange={(e) => setemail(e.target.value)} />
              </div>
              <div className="mt-5">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="block w-full p-2 border rounded border-gray-500" onChange={(e) => setpassword(e.target.value)} />
              </div>
              <div className="mt-10">
                <input type="submit" defaultValue="Login" className="py-3 bg-green-500 hover:bg-green-600 rounded text-white text-center w-full" onClick={() => Login()} />
              </div>
            </div>
          </div>
        </div>



      </div>




    </>
  )
}

export default Login