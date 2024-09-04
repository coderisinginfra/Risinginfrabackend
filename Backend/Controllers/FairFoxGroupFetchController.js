const express = require('express')
const AddProject = require('../Models/AddProject')
const FairFoxGroupFetchController = async(req,res)=>{
    try {
        const result = await AddProject.find({
            "developer": "FAIRFOX"
        })
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json("Invalid Credentials")
    }
}
module.exports = FairFoxGroupFetchController