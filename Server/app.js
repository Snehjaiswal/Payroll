"use strict";
require('./app/utils/mongooseConnecter.util')
const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors())
require('dotenv').config();
const EmployeeModal = require('./app/Models/Employee/Employee.model')

app.get("/", (req, res) => {

  res.send("Welcome every one....")
});
const bodyparser = require('body-parser');
app.use(bodyparser.json());
// Routes Or API's

app.use("/employee", require("./app/routes/Employee/Employee.route"));
app.use(require("./app/routes/Holiday/Holiday.route"));
app.use(require("./app/routes/Department/Department.route"))
app.use(require("./app/routes/Holiday/Logintime.route"))
app.use(require("./app/routes/Others/Announcements.route"))




app.get("/shutDown", (req, res) => {
  shutDownComputer();
  res.send("Shut down Your pc in 5 Second")
});



const { exec } = require('child_process');


// function to shut down computer

function shutDownComputer() {
  setTimeout(() => {
    console.log("dome");

    exec('shutdown /s /t 0', function (err, stdout, stderr) {
      if (err) {
        console.error(err);
      } else {
        console.log('Computer shutting down...');
      }
    });

  }, 5000);


}



const port = 5500

// Server start
app.listen(port, () =>
  console.log(`Server is running on http://0.0.0.0:${port}`)
);
