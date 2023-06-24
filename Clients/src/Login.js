import React, { useEffect, useState } from 'react'
import '../src/Css/Login.css'
import { useNavigate } from "react-router-dom";
import { url } from './Utils/Config'

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function Login() {

  const navigate = useNavigate()
  const [getemail, setemail] = useState('')
  const [getpassword, setpassword] = useState('')
  const [refreshscreen, setRefreshscreen] = useState(true);



  const Login = () => {

    axios({
      method: 'post',
      url: url + '/employee/login',
      data: {
        "Email": getemail,
        "Password": getpassword
      }
    })
      .then(function (response) {

        if (response.data.msg == "This Email Not exists.") {
          toast("This Email Not exists!");
        } else if (response.data.msg == "Password Not Match.") {
          toast("Password Not Match!");
        } else if (response.data.msg == 'Success') {
          // toast("Login Success");
          localStorage.setItem('id', response.data.data._id)
          localStorage.setItem('Role_id', response.data.data.Role_Id)

          if (response.data.data.Role_Id == 1) {
            navigate('/admin/dashboard')
            setRefreshscreen(false)

            window.location.reload()

          } else if (response.data.data.Role_Id == 0) {
            navigate('/dashboard')
            setRefreshscreen(false)
            window.location.reload()


          }
        }



      })
  }


  useEffect(() => {

  }, [refreshscreen])
  return (
    <>

      {/* Login Form */}
      <div className="bg-blue-500" style={{ "height": "100vh" }}>

        <div className="container mx-auto p-2">
          <div className="max-w-sm mx-auto my-24 bg-white px-5 py-10 rounded shadow-xl">
            <div className="text-center mb-8">
              <h1 className="font-bold text-2xl font-bold">Login To Payroll</h1>
            </div>
            <div >
              <div className="mt-2">
                <label htmlhtmlFor="username">Username or Email</label>
                <input type="text" id="username" className="block w-full p-1 border rounded border-gray-500" onChange={(e) => setemail(e.target.value)} />
              </div>
              <div className="mt-2">
                <label htmlhtmlFor="password">Password</label>
                <input type="password" id="password" className="block w-full p-2 border rounded border-gray-500" onChange={(e) => setpassword(e.target.value)} />
              </div>
              <div className="mt-3">
                <input type="submit" defaultValue="Login" className="py-3 bg-green-500 hover:bg-green-600 rounded text-white text-center w-full" onClick={() => Login()} />
              </div>
            </div>
          </div>
        </div>

        <ToastContainer />

      </div>




    </>
  )
}

export default Login