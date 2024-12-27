const mongoose = require('mongoose')

const PearlSchema = mongoose.Schema({
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

const PearlModel = mongoose.model("PearlModel",PearlSchema)
module.exports = PearlModel