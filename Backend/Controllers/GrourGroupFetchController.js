const express = require('express')
const AddProject = require('../Models/AddProject')
const GrourFetchController = async(req,res)=>{
    try {
        const result = await AddProject.find({
            "developer": "Gaur Group"
        })
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json("Invalid Credentials")
    }
}
module.exports = GrourFetchController