const express = require('express')
const AddProject = require('../Models/AddProject')

const CommercialPropertyFindingController = async(req,res)=>{
    try {
        const response = await AddProject.find({category:"commercial"})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({message:"Invalid Credentials"})
    }
}

module.exports = CommercialPropertyFindingController