const mongoose =require('mongoose')

const careersschema = mongoose.Schema({
      title:{
            type: String,
            required:true
        },
        description:{
            type: String,
            required:true
        },
        category:{
            type: String,
            required:true
        },
        numberofOpenings:{
            type: String,
            required:true
        },
        qualifications:{
            type: String,
            required:true
        },
        experience:{
            type: String,
            required:true
        },
        salary:{
            type: String,
            required:true
        },
        date:{
            type: Date,
            default: Date.now()
        }})

const Careers = mongoose.model("Careers",careersschema)
module.exports = Careers