const mongoose = require('mongoose')
const ApplynowSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        email:{
            type:String,
            required:true
        },
        phoneNumber:{
            type:Number,
            required: true
        },
        categoriesd:{
            type:String,
            required: true
        },
        files:{
            type: String,
            required: true
        },
        date:{
            type: Date,
            default: Date.now()
        }
    })

const ApplyNowModel = mongoose.model("ApplyNowModel",ApplynowSchema) 
module.exports = ApplyNowModel
