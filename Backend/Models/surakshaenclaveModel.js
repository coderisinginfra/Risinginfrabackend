const mongoose = require('mongoose')

const surakshaenclaveSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

const surakshaenclaveModel = mongoose.model("surakshaenclaveModel",surakshaenclaveSchema)
module.exports = surakshaenclaveModel