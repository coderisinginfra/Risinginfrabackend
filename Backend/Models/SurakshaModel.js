const mongoose = require('mongoose')

const SurakshaSchema = mongoose.Schema({
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

const SurakshaModel = mongoose.model("SurakshaModel",SurakshaSchema)
module.exports = SurakshaModel