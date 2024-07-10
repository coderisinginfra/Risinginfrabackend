const express = require('express')
const BlogModel = require('../Models/BlogModel')
const FetchBlogByIdController  = async(req,res) =>{
    const {postTitle} = req.params
    try {
        const response = await BlogModel.find({postTitle:postTitle})
        if(response){
            res.status(200).json(response)
        }else{
            res.status(404).json({message:"Blog not found" })
        }
    } catch (error) {
        res.status(500).json({message: `Invalid Credential ${error}`})
    }
}
module.exports = FetchBlogByIdController