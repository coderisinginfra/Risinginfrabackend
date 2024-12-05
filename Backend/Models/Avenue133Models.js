const express = require('express')
const mongoose =  require('mongoose')

const Avenue133Schema  = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    email:{
        type:String,
        required:true
    }
})

const Avenue133Model = mongoose.model("Avenue133model",Avenue133Schema)
module.exports = Avenue133Model