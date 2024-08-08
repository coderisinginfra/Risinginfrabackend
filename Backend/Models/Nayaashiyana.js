const mongoose = require('mongoose')

const NayaashiyanaSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    phoneNumber:{
        type:String,
        require:true
    },
    date:{
        type: Date,
        default: Date.now()
    }
})

const Nayaashiyana = mongoose.model("Nayaashiyana",NayaashiyanaSchema)
module.exports = Nayaashiyana