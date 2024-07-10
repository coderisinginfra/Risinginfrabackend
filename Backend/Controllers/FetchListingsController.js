const express = require('express')
const AddProject = require('../Models/AddProject')
const FetchListingsController = async(req,res)=>{
    const {propertyTitle}= req.params
    try {
        const data = await AddProject.find({propertyTitle:propertyTitle}) 
        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({message:"Invalid Credentials"})
    }
}
module.exports = FetchListingsController