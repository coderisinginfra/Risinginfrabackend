const mongoose = require('mongoose')

const BhutaniSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

const BhutaniModel = mongoose.model("BhutaniModel",BhutaniSchema)
module.exports = BhutaniModel