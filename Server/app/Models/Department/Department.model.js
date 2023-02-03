"use strict"

const { Schema, model } = require('mongoose');

// Employee Information Collection
const EmployeeInformation = Schema({

    FirstName: {
        type: String,
        required: true,
        trim: true
    },
    LastName: {
        type: String,
        required: true,
        trim: true
    },
    PhoneNumber: {
        type: Number,
        required: true,
        trim: true
    },


},
    {
        timestamps: true
    },

)
const EmployeeModal = model('DEPARTMENT', EmployeeInformation, "Employee Information");




module.exports = { EmployeeModal};

