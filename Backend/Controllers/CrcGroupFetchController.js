const express = require('express')
const AddProject = require('../Models/AddProject')
const CrcGroupFetchController = async(req,res)=>{
    try {
        const result = await AddProject.find({
            "developer": "CRC Group"
        })
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json("Invalid Credentials")
    }
}
module.exports = CrcGroupFetchController 