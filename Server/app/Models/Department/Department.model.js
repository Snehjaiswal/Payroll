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
    },
    Status: {
        type: Boolean,
        default:false
    }
},
    {
        timestamps: true
    },

)
const DepartmentModal = model('DEPARTMENT', Department);




module.exports = { DepartmentModal };

