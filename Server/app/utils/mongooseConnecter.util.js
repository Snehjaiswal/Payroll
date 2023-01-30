"use strict";

const { connect, connection } = require("mongoose");
require('dotenv').config();
const url ='mongodb+srv://sneh123:sneh123@payroll.w3xjbux.mongodb.net/?retryWrites=true&w=majority'
connect(url, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  connection.useDb('Payroll');
  console.log("Connected to MongoDB");
});
