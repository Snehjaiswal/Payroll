"use strict"

const { Schema, model } = require('mongoose');


// Employee Financial Information Collection
const HolidaySchema = Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    Discription: {
        type: String,
        required: true,
        trim: true
    },
    allDay: {
        type: Boolean,
        required: true,
        trim: true
    },
    start: {
        type: String,
        required: true,
        trim: true
    },
    end: {
        type: String,
        trim: true
    },
   

},
    {
        timestamps: true
    },

)
const HolidaysModel = model('HOLIDAY', HolidaySchema, "Holidays");



module.exports = {HolidaysModel };

