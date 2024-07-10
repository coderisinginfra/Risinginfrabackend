const mongoose = require('mongoose')

const mongooseSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    linkedin:{
        type: String,
        required: true
    },
    designation:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    collegename:{ 
        type: String,
        required: true
    },
    timecollege:{
        type: String,
        required: true,
    },
    degree:{ 
        type: String,
        required: true
    },
    workexpreincetime:{ 
        type: String,
        required: true
    },
    coverimage:{
        type: String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

const TeamManagement = mongoose.model("TeamManagement",mongooseSchema)
module.exports = TeamManagement