const express = require('express')
const Careers = require('../Models/Careers')

const FetchJobsController = async(req,res) =>{
    try {
        const result = await Careers.find()
        res.status(200).json(result)
    } catch (error) {
        req.status(500).json({message:"Invalid Credentials"})
    }
}

module.exports = FetchJobsController