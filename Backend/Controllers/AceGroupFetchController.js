const express = require('express')
const AddProject = require('../Models/AddProject')
const AceGroupFetchController = async(req,res)=>{
    try {
        const result = await AddProject.find({
            "developer": "ACE Group"
        })
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json("Invalid Credentials")
    }
}
module.exports = AceGroupFetchController