const express = require('express')
const AddProject = require('../Models/AddProject')

const BuyPlotsPropertyFindingController = async(req,res)=>{
    try {
        const response = await AddProject.find({category:"Plots"})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({message:"Invalid Credentials"})
    }
}

module.exports = BuyPlotsPropertyFindingController