const express = require('express')
const BlogReviewSubmit = require('../Models/BlogReviewSubmit')
const FetchBlogReviewController = async(req,res)=>{
    try {
        const result = await BlogReviewSubmit.find()
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({message:"Invalid Credentials"})
    }
}
module.exports = FetchBlogReviewController;