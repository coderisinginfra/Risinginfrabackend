const mongoose = require('mongoose')

const popupschema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    contact:{
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

const PopupModel = mongoose.model("PopupModel",popupschema)
module.exports = PopupModel