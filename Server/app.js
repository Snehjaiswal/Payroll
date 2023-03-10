"use strict";
require('./app/utils/mongooseConnecter.util')
const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors({ origin: 'http://localhost:3000' }));
require('dotenv').config();
const PORT = 5500
const http = require("http");




// const io = require('socket.io')(PORT);

// io.on('connection', (socket) => {
//   console.log('A user connected');

//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//   });

//   socket.on('message', (data) => {
//     console.log('Received message:', data);
//     io.emit('message', data);
//   });
// });




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


// Shut Down Your Pc

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


// Server start
app.listen(PORT, () =>
  console.log(`Server is running on http://0.0.0.0:${PORT}`)
);
