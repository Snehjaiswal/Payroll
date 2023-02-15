"use strict"

const { Schema, model } = require('mongoose');


// Employee Financial Information Collection
const AnnouncementsSchema = Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    from_date: {
        type: Date,
        required: true,
        trim: true
    },
    end_date: {
        type: Date,
        trim: true
    },
    msg: {
        type: String,
        // required: true,
        trim: true
    }, 

},
    {
        timestamps: true
    },

)
const AnnouncementsModel = model('ANNOUNCEMENTS', AnnouncementsSchema, "Announcements");



module.exports = {AnnouncementsModel };

