const express = require('express');
const FarmhouseModel = require('../Models/FarmhouseModel');

const FarmhouseController = async (req, res) => {
    try {
        const { name, email, phoneNumber, message } = req.body;
        const response = await FarmhouseModel.findOne({ email });

        if (!response) {
            const result = await FarmhouseModel.create({
                name: name,
                email: email,
                phoneNumber: phoneNumber,
                message: message
            });

            const data = await result.save();
            res.status(201).json(data);
        } else {
            res.status(200).json({ message: 'User Already Submitted The Form' });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = FarmhouseController;
