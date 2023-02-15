"use strict";
require('./app/utils/mongooseConnecter.util')
const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors())
require('dotenv').config();
const EmployeeModal = require('./app/Models/Employee/Employee.model')

app.get("/", (req, res) => {
  shutDownComputer();
  res.send("Welcome every one....")
}
);
const bodyparser = require('body-parser');
app.use(bodyparser.json());
// Routes Or API's

app.use("/employee", require("./app/routes/Employee/Employee.route"));
app.use(require("./app/routes/Holiday/Holiday.route"));
app.use(require("./app/routes/Department/Department.route"))
app.use(require("./app/routes/Holiday/Logintime.route"))







const { exec } = require('child_process');


// function to shut down computer

function shutDownComputer() {

  exec('shutdown /s /t 0', function (err, stdout, stderr) {

    if (err) {

      console.error(err);

    } else {

      console.log('Computer shutting down...');

    }

  });

}


// Call the function to shut down the computer









const port = 5500

// Server start
app.listen(port, () =>
  console.log(`Server is running on http://0.0.0.0:${port}`)
);
