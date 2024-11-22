const mongoose = require('mongoose')

const farmhouseschema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phoneNumber:{
        type:Number,
        require: true
    },
    email:{
        type:String,
        require: true
    },
    message:{
        type:String,
        require: true
    },
    submitdate:{
        type: Date,
        default: Date.now()
    }
})

const FarmhouseModel = mongoose.model('FarmhouseModel',farmhouseschema)
module.exports = FarmhouseModel