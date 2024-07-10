const express = require('express')
const TeamManagement = require('../Models/TeamManagement')
const FetchTeamMember = async(req,res) =>{
    try {
        const response = await TeamManagement.find()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({message:"Invalid Credentials"})
    }
}
module.exports = FetchTeamMember