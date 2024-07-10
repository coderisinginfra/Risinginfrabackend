const express = require('express')
const AddProject = require('../Models/AddProject')

const FetchNoidaPropertyController = async(req,res) =>{
    try{
        const data = await AddProject.find({
            "city": "Noida"
        })
        res.status(200).json(data)
    }
    catch{
        res.status(500).json({message:"Internal Server Error"})
    }

}

module.exports = FetchNoidaPropertyController