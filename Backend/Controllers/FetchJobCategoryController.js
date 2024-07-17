const express = require('express')
const Careers = require('../Models/Careers')

const FetchJobCategoryConroller = async(req,res) =>{
    try {
        const categories = await Careers.aggregate([
            {
                $group: {
                    _id: '$categoriesd',
                    count: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    categoriesd: '$_id',
                    count: 1
                }
            }
        ]);
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({message:"Invalid Credientials"})
    }
}

module.exports = FetchJobCategoryConroller