const express = require('express')
const BlogModel = require('../Models/BlogModel')

const SellYourPropertyFindingController = async(req,res)=>{
    try {
        const response = await BlogModel.find({Category:"Sell Your Property"})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({message:"Invalid Credentials"})
    }
}

module.exports = SellYourPropertyFindingController