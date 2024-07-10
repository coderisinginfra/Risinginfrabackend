const mongoose = require('mongoose')

const contactschema = mongoose.Schema({
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
    message:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

const ContactModel = mongoose.model("ContactModel",contactschema)
module.exports = ContactModel