const express = require('express')
const BlogModel = require('../Models/BlogModel')
const UpdateBlogController  = async(req,res) =>{
    const {id} = req.params
    const {postTitle,description,keywords,postcontent,Category} = req.body
    try {
        const response = await BlogModel.findById({_id:id})
        if(response){
            response.postTitle =  postTitle
            response.description = description
            response.keywords =    keywords
            response.postcontent = postcontent
            response.Category = Category
            response.date = new Date()
            const result = await response.save()
            res.status(201).json({mesaage:`Blog Updated Succesffully,${result}`})

        }else{
            res.status(404).json({message:"Blog not found" })
        }
    } catch (error) {
        res.status(500).json({message: `Invalid Credential ${error}`})
    }
}
module.exports = UpdateBlogController