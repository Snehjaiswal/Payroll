"use strict"

const { Schema, model } = require('mongoose');

const Department = Schema({

    Department: {
        type: String,
        required: true,
        trim: true
    },
    Designation: {
        type: String,
        required: true,
        trim: true
    }
},
    {
        timestamps: true
    },

)
const DepartmentModal = model('DEPARTMENT', Department, "department Information");




module.exports = { DepartmentModal };

