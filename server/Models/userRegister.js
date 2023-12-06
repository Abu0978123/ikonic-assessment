const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const UserRegister = mongoose.model("UserRegister", userSchema)

module.exports = UserRegister;