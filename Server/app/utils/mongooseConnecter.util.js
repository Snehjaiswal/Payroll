"use strict";

const { connect, connection } = require("mongoose");
const { dbUri, dbName } = require("../utils/index");

connect(dbUri, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  connection.useDb(dbName);
  console.log("Connected to MongoDB "+dbName);
});
