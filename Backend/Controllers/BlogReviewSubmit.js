const express = require('express')
const BlogReviewModel = require('../Models/BlogReviewSubmit')
const BlogReviewSubmit = async(req,res) =>{
    const {blogsubmittername,contactnumber,blogmessage} =req.body
    try {
        const response = await BlogReviewModel.create({
            blogsubmittername:blogsubmittername,
            contactnumber:contactnumber,
            blogmessage:blogmessage
        })
        const result = await response.save()
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({message:"Invalid Credentiaal"})
    }
}
module.exports = BlogReviewSubmit