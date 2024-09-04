const express = require('express')
const AddProject = require('../Models/AddProject')
const GyGyGroupFetchController = async(req,res)=>{
    try {
        const result = await AddProject.find({
            "developer": "GYGY"
        })
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json("Invalid Credentials")
    }
}
module.exports = GyGyGroupFetchController 