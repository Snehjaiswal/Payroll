"use strict";
require('./app/utils/mongooseConnecter.util')
const express = require("express");
const app = express();
const cors = require('cors');

const bodyparser = require('body-parser')

app.use(cors({ origin: 'https://649c25a39ba4b3008b87e174--cheery-cassata-0e78ce.netlify.app/' }));

require('dotenv').config();
const PORT = 3001
const http = require("http");
const https = require("https");

const socketIo = require("socket.io");



const corsOpts = {
  cors: {
    origin: "*",
    credentials: true
}
};
app.use(cors(corsOpts));


app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());


const server = https.createServer(app);




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







const io = socketIo(server, {
    cors: {
        origin: "*",
        credentials: true
    }
});


io.on("connection",(socket)=>{
 
  console.log("user connected",socket.id);

  socket.on("join_room", (data) => {
      socket.join(data);
      console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });
  
    socket.on("send_message", (data) => {
      socket.to(data.room).emit("receive_message", data);
    });

  socket.on("disconnect",()=>{
      console.log("user disconnected",socket.id);
  })

})

// Server start
server.listen(PORT, () =>
  console.log(`Server is running on http://0.0.0.0:${PORT}`)
);
