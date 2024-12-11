const mongoose = require('mongoose')

const culturalbites = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now()
    }
})

const culturalbitesmodal = mongoose.modal("culturalbitesmodal",culturalbites)
module.exports = culturalbitesmodal