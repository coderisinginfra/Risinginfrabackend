const mongoose = require('mongoose')

const Delhi6Schema = mongoose.Schema({
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

const Delhi6Model = mongoose.model("Delhi6Model",Delhi6Schema)
module.exports = Delhi6Model