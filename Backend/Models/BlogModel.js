const mongoose = require('mongoose')

const blogschema = mongoose.Schema({
    postTitle:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    keywords:{
        type:String,
        required:true
    },
    postcontent:{
        type:String,
        required:true
    },
    coverimage:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        default: new Date()
    }
})

const BlogModel = mongoose.model("BlogModel",blogschema)
module.exports =BlogModel