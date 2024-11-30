const mongoose = require('mongoose')

const Godrejsector44Schema = mongoose.Schema({
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
    date:{
        type:Date,
        default:Date.now()
    }
})

const Godrejsector44Model = mongoose.model("Godrejsector44Model",Godrejsector44Schema)
module.exports = Godrejsector44Model