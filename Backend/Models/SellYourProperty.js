const mongoose  = require('mongoose')
const SellYourPropertyschema = mongoose.Schema({
    propertyTitle:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    projectType:{
        type:String,
        required:true
    },
    developer:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required: true
    },
    location:{
        type:String,
        required: true
    },
    sitelocation:{
        type:String,
        required: true
    },
    size:{
        type:String,
        required: true
    },
    price:{
        type:String,
        required: true
    },
    amenties:{
        type:[String],
        required: true
    },
    images:{
        type: String,
        required: true
    },
    floorplan1:{
        type: String,
        required: true
    },
    floorplan2:{
        type: String,
        required: true
    },
    floorplan3:{
        type: String,
        required: true
    },
    galleryimage1:{
        type: String,
        required: true
    },
    galleryimage2:{
        type: String,
        required: true
    },
    galleryimage3:{
        type: String,
        required: true
    },
    content:{
        type:String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now()
    }
})

const SellYourPropertyProject = mongoose.model('SellYourPropertyProject',SellYourPropertyschema)
module.exports = SellYourPropertyProject