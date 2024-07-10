const express = require('express')
const Careers = require('../Models/Careers')

const addJobsController = async(req,res)=>{
    const {title,description,numberofOpenings, qualifications,experience,salary} = req.body
    try{
        const response = await Careers.create({
            title:title,
            description:description,
            numberofOpenings:numberofOpenings,
            qualifications:qualifications,
            experience:experience,
            salary:salary
        })
        const result = await response.save()
        res.status(201).json({message:"The Data has been successfully saved"})
    }
    catch(err){
        res.status(500).json({message:"Internal Server Error"})
    }
}

module.exports = addJobsController
