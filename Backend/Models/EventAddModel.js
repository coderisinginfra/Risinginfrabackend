const mongoose = require('mongoose')

const EventAddSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    eventDate:{
        type:String,
        required:true
    },
    eventLocation:{
        type:String,
        required:true
    },
    eventsdescription:{
        type:String,
        required:true
    },
    eventLinks:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

const EventAddModel = mongoose.model("EventAddModel",EventAddSchema)
module.exports = EventAddModel