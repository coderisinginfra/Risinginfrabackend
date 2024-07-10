const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../Models/User')

const LoginController = async(req, res) => {
    const { email, password, confirmationCode } = req.body
    try {
        const user = await User.findOne({ email: email })

        if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.password)
            const isCodeValid = user.confirmationCode === confirmationCode

            if (isPasswordValid && isCodeValid) {
                const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: "1d" })
                res.status(200).json({ token })
            } else {
                res.status(400).json({ message: "Invalid email, password, or confirmation code" })
            }
        } else {
            res.status(400).json({ message: "User not found" })
        }

    } catch (error) {
        res.status(500).json({ message: "Invalid Credentials" })
    }
}

module.exports = LoginController
