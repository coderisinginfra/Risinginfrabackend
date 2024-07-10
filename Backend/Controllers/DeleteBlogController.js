const express = require('express')
const BlogModel = require('../Models/BlogModel')
const DeleteBlogController = async(req,res) =>{
    const {id} = req.params
    try{
        const response = await BlogModel.findOneAndDelete({_id:id})
        if(response){
            res.status(200).json({message:`Blog Deleted Successsfully ${response}`})
        }else{
            res.status(404).json({message:"Blog Not Found"})
        }
    }
    catch(err){
        res.status(500).json({message:`Invalid Credential ${err}`})
    }
}
module.exports = DeleteBlogController