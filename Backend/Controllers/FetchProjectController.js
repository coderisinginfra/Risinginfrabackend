const express = require('express')
const AddProject = require('../Models/AddProject')
const FetchProjectController = async(req,res) =>{
    try{
        const data = await AddProject.find({})
        res.status(201).json(data)
    }catch{
        res.status(500).json({message:"Invalid Credential"})
    }
}
module.exports = FetchProjectController