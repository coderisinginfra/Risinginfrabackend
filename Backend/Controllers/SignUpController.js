const express = require('express')
const User = require('../Models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const SignUpController = async(req, res) => {
    const { name, email, password, confirmationCode } = req.body
    const salt = await bcrypt.genSalt(10) // Await added here
    const hashedPassword = await bcrypt.hash(password, salt)
    try {
        const response = await User.findOne({ email: email }) // Changed to use the email directly
        if(response){
            res.status(404).json({ message: "User Found" })
        } else {
            const user = await User.create({
                name: name,
                email: email,
                password: hashedPassword,
                confirmationCode: confirmationCode
            })
            const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: "1d" }) // Corrected to _id
            res.status(200).json({ token })
        }
    } catch (error) {
        res.status(500).json({ message: "Invalid Credentials" })
    }
}

module.exports = SignUpController
