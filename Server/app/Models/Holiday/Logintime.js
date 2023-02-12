"use strict"

const { Schema, model } = require('mongoose');


// Employee Financial Information Collection
const LoginTimeSchema = Schema({

    td_date: {
        type: String,
        trim: true
    },
    checkIn: {
        type: String,
        trim: true
    },
    checkOut: {
        type: String,
        trim: true
    },
    status: {
        type: Number,
        Enum:[0,1],
        trim: true
    },
    msg: {
        type: String,
        trim: true
    },
    userid: {
        type: String,
        trim: true
    },

},
    {
        timestamps: true
    },

)
const LoginTimeModel = model('LOGIN-TIME', LoginTimeSchema, "Login-Time");



module.exports = { LoginTimeModel };

