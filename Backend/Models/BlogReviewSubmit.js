const mongoose = require('mongoose')
const BlogReviewSchema = mongoose.Schema({
    contactnumber:{
        type:Number,
        required: true
    },
    blogsubmittername:{
        type:String,
        required:true
    },
    blogmessage:{
        type:String,
        required: true
    },
    submitdate:{
        type:Date,
        default: Date.now()
    }
})
const BlogReviewModel = mongoose.model("BlogReviewModel",BlogReviewSchema)
module.exports = BlogReviewModel