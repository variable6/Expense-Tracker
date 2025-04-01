
const express = require('express')
const UserModel = require('../models/user.model')
const bcrypt = require('bcrypt')

const apiRouter = express.Router()

apiRouter.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters long' })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await UserModel.create({ name, email, password: hashedPassword })

    res.json({ message: 'User registered', data: user })
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error: error.message })
    console.error(error)
  }
})

module.exports = apiRouter